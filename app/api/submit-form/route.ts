import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb'
import nodemailer from 'nodemailer'

// Configure AWS clients using HT_ prefixed environment variables
const s3Client = new S3Client({
  region: process.env.HT_REGION || 'ap-southeast-1',
  credentials: {
    accessKeyId: process.env.HT_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.HT_SECRET_ACCESS_KEY || '',
  },
})

const dynamoDBClient = new DynamoDBClient({
  region: process.env.HT_REGION || 'ap-southeast-1',
  credentials: {
    accessKeyId: process.env.HT_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.HT_SECRET_ACCESS_KEY || '',
  },
})

const docClient = DynamoDBDocumentClient.from(dynamoDBClient)

const BUCKET_NAME = process.env.HT_S3_BUCKET_NAME || 'happytoiletproject_storage'
const TABLE_NAME = process.env.HT_DYNAMODB_TABLE || 'happytoilet_contestants'

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

// Helper function to generate HTML email template
function generateEmailHTML(contestantName: string, contestantId: string): string {
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
                  ${contestantId}
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
    // Get client IP address
    const ipAddress = getClientIP(request)
    const submittedAt = new Date().toISOString()
    
    // Parse multipart form data
    const formData = await request.formData()
    
    // Extract form fields
    const contestant_id = formData.get('contestant_id') as string
    const category = formData.get('category') as string
    const companyName = formData.get('companyName') as string | null
    const schoolName = formData.get('schoolName') as string | null
    const name = formData.get('name') as string
    const telephone = formData.get('telephone') as string
    const email = formData.get('email') as string
    const address = formData.get('address') as string
    const workTitle = formData.get('workTitle') as string

    // Validate required fields
    if (!contestant_id || !category || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Upload files to S3 and collect URLs and file info
    const fileUrls: string[] = []
    const fileInfoList: Array<{name: string, size: number, sizeFormatted: string}> = []
    
    for (const file of files) {
      try {
        const fileBuffer = Buffer.from(await file.arrayBuffer())
        const fileName = `${contestant_id}/${Date.now()}-${file.name}`

        const uploadParams = {
          Bucket: BUCKET_NAME,
          Key: fileName,
          Body: fileBuffer,
          ContentType: file.type,
        }

        await s3Client.send(new PutObjectCommand(uploadParams))

        // Construct S3 URL
        const fileUrl = `https://${BUCKET_NAME}.s3.${process.env.HT_REGION}.amazonaws.com/${fileName}`
        fileUrls.push(fileUrl)
        
        // Store file info for metadata
        fileInfoList.push({
          name: file.name,
          size: file.size,
          sizeFormatted: formatFileSize(file.size)
        })
      } catch (error) {
        console.error('Error uploading file:', error)
        return NextResponse.json(
          { error: 'Failed to upload files to S3' },
          { status: 500 }
        )
      }
    }

    // Generate metadata file content in Markdown format
    const categoryText = category === 'company' 
      ? 'บริษัทผู้ออกแบบวิชาชีพ' 
      : category === 'student' 
      ? 'นักเรียน นิสิต นักศึกษา' 
      : 'ผู้ออกแบบอิสระ และประชาชนทั่วไป'
    
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
      
      await s3Client.send(new PutObjectCommand(metadataUploadParams))
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

    // Save to DynamoDB
    try {
      await docClient.send(
        new PutCommand({
          TableName: TABLE_NAME,
          Item: contestantData,
        })
      )
    } catch (error) {
      console.error('Error saving to DynamoDB:', error)
      return NextResponse.json(
        { error: 'Failed to save contestant data' },
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
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

