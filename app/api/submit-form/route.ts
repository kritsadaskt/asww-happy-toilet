import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand, GetCommand } from '@aws-sdk/lib-dynamodb'
import nodemailer from 'nodemailer'
import { randomUUID } from 'crypto'

// Required environment variables list
const requiredEnvVars = [
  'HT_REGION',
  'HT_ACCESS_KEY_ID',
  'HT_SECRET_ACCESS_KEY',
  'HT_S3_BUCKET_NAME',
  'HT_DYNAMODB_TABLE',
  'HT_EMAIL_ADDR',
  'HT_EMAIL_PWD'
]

// Validate environment variables and return missing ones
function validateEnvironmentVariables(): { valid: boolean; missing: string[] } {
  const missing: string[] = []
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar)
    }
  }
  return { valid: missing.length === 0, missing }
}

// Lazy initialization of AWS clients
let s3Client: S3Client | null = null
let docClient: DynamoDBDocumentClient | null = null

function initializeAWSClients(): { success: boolean; error?: string } {
  try {
    if (!s3Client) {
      s3Client = new S3Client({
        region: process.env.HT_REGION!,
        credentials: {
          accessKeyId: process.env.HT_ACCESS_KEY_ID!,
          secretAccessKey: process.env.HT_SECRET_ACCESS_KEY!,
        },
      })
    }

    if (!docClient) {
      const dynamoDBClient = new DynamoDBClient({
        region: process.env.HT_REGION!,
        credentials: {
          accessKeyId: process.env.HT_ACCESS_KEY_ID!,
          secretAccessKey: process.env.HT_SECRET_ACCESS_KEY!,
        },
      })
      docClient = DynamoDBDocumentClient.from(dynamoDBClient)
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to initialize AWS clients:', error)
    return { success: false, error: 'Failed to initialize AWS services' }
  }
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 3
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// File validation constants
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const MAX_FILES_COUNT = 10
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']
const ALLOWED_PDF_TYPE = 'application/pdf'
const ALLOWED_MIME_TYPES = [...ALLOWED_IMAGE_TYPES, ALLOWED_PDF_TYPE]

// Input validation constraints
const MAX_STRING_LENGTH = 500
const MAX_TEXT_LENGTH = 2000
const MAX_WORK_TITLE_LENGTH = 200
const MAX_EMAIL_LENGTH = 100
const MAX_PHONE_LENGTH = 20

// Helper function to get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  return 'Unknown'
}

// Rate limiting function
function checkRateLimit(ipAddress: string): boolean {
  const now = Date.now()
  const clientData = rateLimitMap.get(ipAddress)

  // Clean up old entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [ip, data] of rateLimitMap.entries()) {
      if (data.resetTime < now) {
        rateLimitMap.delete(ip)
      }
    }
  }

  if (!clientData || clientData.resetTime < now) {
    // First request or window expired
    rateLimitMap.set(ipAddress, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    })
    return true
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return false // Rate limit exceeded
  }

  // Increment count
  clientData.count++
  return true
}

// Escape HTML entities to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input: string, maxLength: number): string {
  if (!input) return ''
  
  // Remove null bytes and other control characters
  let sanitized = input.replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '')
  
  // Trim whitespace
  sanitized = sanitized.trim()
  
  // Enforce max length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  
  return sanitized
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= MAX_EMAIL_LENGTH
}

// Validate phone number (Thai format)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{9,10}$/
  return phoneRegex.test(phone.replace(/[-\s]/g, ''))
}

// Detect file type from magic numbers (file signature)
function detectFileType(buffer: Buffer): string | null {
  // Check magic numbers for common file types
  if (buffer.length < 4) return null
  
  // JPEG (FF D8 FF)
  if (buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF) {
    return 'image/jpeg'
  }
  
  // PNG (89 50 4E 47)
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    return 'image/png'
  }
  
  // PDF (25 50 44 46)
  if (buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46) {
    return 'application/pdf'
  }
  
  return null
}

// Validate uploaded file
function validateFile(file: File, buffer: Buffer): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File ${file.name} exceeds maximum size of 10MB` }
  }
  
  // Detect actual file type from content
  const detectedType = detectFileType(buffer)
  
  if (!detectedType) {
    return { valid: false, error: `File ${file.name} has invalid or unsupported format` }
  }
  
  // Verify detected type matches allowed types
  if (!ALLOWED_MIME_TYPES.includes(detectedType)) {
    return { valid: false, error: `File ${file.name} type not allowed. Only JPEG, PNG, and PDF files are accepted` }
  }
  
  return { valid: true }
}

// Helper function to format file size
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// Helper function to create email transporter
function createEmailTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.HT_EMAIL_ADDR || '',
      pass: process.env.HT_EMAIL_PWD || '',
    },
  })
}

// Helper function to generate HTML email template (with XSS protection)
function generateEmailHTML(contestantName: string, contestantId: string): string {
  // Escape user-provided data to prevent XSS
  const safeName = escapeHtml(contestantName)
  const safeId = escapeHtml(contestantId)
  
  return `
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - The Happy Toilet Project</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header Image -->
          <tr>
            <td style="padding: 0;">
              <img src="https://assetwise.co.th/wp-content/uploads/2025/11/the-happy-toilet-project_KV01-2.webp" alt="The Happy Toilet Project" style="width: 100%; height: auto; display: block; border-radius: 8px 8px 0 0;">
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h1 style="color: #371c5d; font-size: 28px; margin: 0 0 20px 0; text-align: center;">
                เราได้รับผลงานของคุณแล้ว
              </h1>

              <!-- Contestant ID Box -->
              <div style="background-color: #44217c; border-radius: 8px; padding: 20px; margin: 0 0 30px 0; text-align: center;">
                <p style="color: #ffffff; font-size: 14px; margin: 0 0 10px 0; opacity: 0.9;">
                  รหัสผู้เข้าประกวดของคุณ
                </p>
                <p style="color: #ffffff; font-size: 24px; font-weight: bold; margin: 0; font-family: 'Courier New', monospace; letter-spacing: 2px;">
                  ${safeId}
                </p>
              </div>
              
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0 0 20px 0; text-align: center;">
                กรุณาเก็บรหัสนี้ไว้เพื่อใช้ในการติดตามผลการประกวด
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f8f8; padding: 20px 30px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #999999; font-size: 12px; margin: 0; line-height: 1.5;">
                The Happy Toilet Project<br>
                © 2025 AssetWise. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables first
    const envValidation = validateEnvironmentVariables()
    if (!envValidation.valid) {
      console.error('Missing environment variables:', envValidation.missing)
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Initialize AWS clients
    const awsInit = initializeAWSClients()
    if (!awsInit.success) {
      console.error('Failed to initialize AWS clients')
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Get client IP address
    const ipAddress = getClientIP(request)
    
    // Check rate limit
    if (!checkRateLimit(ipAddress)) {
      console.warn(`Rate limit exceeded for IP: ${ipAddress}`)
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    
    const submittedAt = new Date().toISOString()
    const BUCKET_NAME = process.env.HT_S3_BUCKET_NAME!
    const TABLE_NAME = process.env.HT_DYNAMODB_TABLE!
    
    // Parse multipart form data
    const formData = await request.formData()
    
    // Extract and sanitize form fields
    const contestant_id = formData.get('contestant_id') as string
    const category = sanitizeInput(formData.get('category') as string || '', MAX_STRING_LENGTH)
    const companyName = sanitizeInput(formData.get('companyName') as string || '', MAX_STRING_LENGTH)
    const schoolName = sanitizeInput(formData.get('schoolName') as string || '', MAX_STRING_LENGTH)
    const name = sanitizeInput(formData.get('name') as string || '', MAX_STRING_LENGTH)
    const telephone = sanitizeInput(formData.get('telephone') as string || '', MAX_PHONE_LENGTH)
    const email = sanitizeInput(formData.get('email') as string || '', MAX_EMAIL_LENGTH)
    const address = sanitizeInput(formData.get('address') as string || '', MAX_TEXT_LENGTH)
    const workTitle = sanitizeInput(formData.get('workTitle') as string || '', MAX_WORK_TITLE_LENGTH)

    // Validate required fields
    if (!contestant_id || !category || !name || !email || !workTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate category
    const validCategories = ['company', 'student', 'individual']
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Invalid category' },
        { status: 400 }
      )
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Validate phone if provided
    if (telephone && !isValidPhone(telephone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }
    
    // Validate conditional fields
    if (category === 'company' && !companyName) {
      return NextResponse.json(
        { error: 'Company name is required for company category' },
        { status: 400 }
      )
    }
    
    if (category === 'student' && !schoolName) {
      return NextResponse.json(
        { error: 'School name is required for student category' },
        { status: 400 }
      )
    }

    // Collect all files from form data
    const files: File[] = []
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        files.push(value)
      }
    }
    
    // Validate file count
    if (files.length === 0) {
      return NextResponse.json(
        { error: 'At least one file is required' },
        { status: 400 }
      )
    }
    
    if (files.length > MAX_FILES_COUNT) {
      return NextResponse.json(
        { error: `Maximum ${MAX_FILES_COUNT} files allowed` },
        { status: 400 }
      )
    }

    // Upload files to S3 and collect URLs and file info
    const fileUrls: string[] = []
    const fileInfoList: Array<{name: string, size: number, sizeFormatted: string}> = []
    
    for (const file of files) {
      try {
        const fileBuffer = Buffer.from(await file.arrayBuffer())
        
        // Validate file with magic number detection
        const validation = validateFile(file, fileBuffer)
        if (!validation.valid) {
          console.warn(`File validation failed: ${validation.error}`)
          return NextResponse.json(
            { error: validation.error || 'Invalid file' },
            { status: 400 }
          )
        }
        
        // Sanitize filename to prevent path traversal
        const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
        const fileName = `${contestant_id}/${Date.now()}-${sanitizedFileName}`

        const uploadParams = {
          Bucket: BUCKET_NAME,
          Key: fileName,
          Body: fileBuffer,
          ContentType: detectFileType(fileBuffer) || 'application/octet-stream',
        }

        await s3Client!.send(new PutObjectCommand(uploadParams))

        // Construct S3 URL
        const fileUrl = `https://${BUCKET_NAME}.s3.${process.env.HT_REGION}.amazonaws.com/${fileName}`
        fileUrls.push(fileUrl)
        
        // Store file info for metadata
        fileInfoList.push({
          name: sanitizedFileName,
          size: file.size,
          sizeFormatted: formatFileSize(file.size)
        })
      } catch (error) {
        console.error('Error uploading file:', error)
        return NextResponse.json(
          { error: 'Failed to upload files. Please try again.' },
          { status: 500 }
        )
      }
    }

    // Generate metadata file content in Markdown format (sanitized)
    const categoryText = category === 'company' 
      ? 'บริษัทผู้ออกแบบวิชาชีพ' 
      : category === 'student' 
      ? 'นักเรียน นิสิต นักศึกษา' 
      : 'ผู้ออกแบบอิสระ และประชาชนทั่วไป'
    
    // Use sanitized values for metadata (already sanitized above)
    let metadataContent = `# Contestant Information - The Happy Toilet Project

## Contestant ID
${contestant_id}

## Submission Details
- **Submitted At:** ${submittedAt}
- **IP Address:** ${ipAddress}
- **Category:** ${categoryText}

## Contact Information
- **Name:** ${name}
`
    
    // Add company or school name if applicable
    if (category === 'company' && companyName) {
      metadataContent += `- **Company:** ${companyName}\n`
    }
    if (category === 'student' && schoolName) {
      metadataContent += `- **School:** ${schoolName}\n`
    }
    
    metadataContent += `- **Email:** ${email}
- **Telephone:** ${telephone}
- **Address:** ${address}

## Project Information
- **Work Title:** ${workTitle}

## Uploaded Files (${fileInfoList.length} files)
`
    
    // Add file list
    fileInfoList.forEach((fileInfo, index) => {
      metadataContent += `${index + 1}. ${fileInfo.name} (${fileInfo.sizeFormatted})\n`
    })

    // Upload metadata file to S3
    try {
      const metadataFileName = `${contestant_id}/contestant_info.md`
      const metadataUploadParams = {
        Bucket: BUCKET_NAME,
        Key: metadataFileName,
        Body: Buffer.from(metadataContent, 'utf-8'),
        ContentType: 'text/markdown; charset=utf-8',
      }
      
      await s3Client!.send(new PutObjectCommand(metadataUploadParams))
    } catch (error) {
      console.error('Error uploading metadata file:', error)
      // Continue even if metadata upload fails - don't block the submission
    }

    // Prepare contestant data for DynamoDB
    const contestantData: any = {
      contestant_id,
      category,
      name,
      telephone,
      email,
      address,
      workTitle,
      fileUrls,
      filesCount: files.length,
      submittedAt,
      ipAddress,
    }

    // Add conditional fields
    if (category === 'company' && companyName) {
      contestantData.companyName = companyName
    }
    if (category === 'student' && schoolName) {
      contestantData.schoolName = schoolName
    }

    // Save to DynamoDB with duplicate check
    try {
      // First check if contestant_id already exists (shouldn't happen with UUID, but defensive)
      const existingItem = await docClient!.send(
        new GetCommand({
          TableName: TABLE_NAME,
          Key: { contestant_id },
        })
      )
      
      if (existingItem.Item) {
        console.error(`Duplicate contestant_id detected: ${contestant_id}`)
        return NextResponse.json(
          { error: 'Submission error. Please try again.' },
          { status: 409 }
        )
      }
      
      await docClient!.send(
        new PutCommand({
          TableName: TABLE_NAME,
          Item: contestantData,
        })
      )
    } catch (error) {
      console.error('Error saving to DynamoDB:', error)
      return NextResponse.json(
        { error: 'Unable to process submission. Please try again.' },
        { status: 500 }
      )
    }

    // Send thank you email (non-blocking - don't fail submission if email fails)
    try {
      const transporter = createEmailTransporter()
      const emailHTML = generateEmailHTML(name, contestant_id)
      
      await transporter.sendMail({
        from: `"The Happy Toilet Project" <${process.env.HT_EMAIL_ADDR}>`,
        to: email,
        subject: 'ขอบคุณสำหรับการส่งผลงานเข้าร่วม The Happy Toilet Project',
        html: emailHTML,
      })
      
      console.log(`Thank you email sent successfully to ${email}`)
    } catch (error) {
      console.error('Error sending thank you email:', error)
      // Don't fail the submission if email fails - just log the error
    }

    // Return success response
    return NextResponse.json({
      success: true,
      contestant_id,
      message: 'Form submitted successfully',
    })
  } catch (error) {
    // Log detailed error internally but return generic message to client
    console.error('Error processing form submission:', error)
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: 'An error occurred while processing your submission. Please try again.' },
      { status: 500 }
    )
  }
}

