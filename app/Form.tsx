'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Form() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [category, setCategory] = useState<string>('')
  const [competitorType, setCompetitorType] = useState<string>('')
  const [companyName, setCompanyName] = useState<string>('')
  const [schoolName, setSchoolName] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [telephone, setTelephone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [workTitle, setWorkTitle] = useState<string>('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [teamMemberName, setTeamMemberName] = useState<string>('')

  // Fill sample data if ?test=1 in URL
  useEffect(() => {
    if (searchParams.get('test') === '1') {
      setCategory('company')
      setCompanyName('บริษัท ออกแบบสุขา จำกัด')
      setName('สมชาย ใจดี')
      setTelephone('0812345678')
      setEmail('kritsada.s@assetwise.co.th')
      setAddress('123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110')
      setWorkTitle('ห้องน้ำแห่งความสุข')
    }
  }, [searchParams])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)
      const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB per file
      
      // Validate file sizes
      const oversizedFiles = newFiles.filter(file => file.size > MAX_FILE_SIZE)
      if (oversizedFiles.length > 0) {
        setError(`ไฟล์บางไฟล์มีขนาดเกิน 10MB: ${oversizedFiles.map(f => f.name).join(', ')}`)
        e.target.value = ''
        return
      }
      
      // Add new files to existing files array
      setSelectedFiles(prev => [...prev, ...newFiles])
      setError('') // Clear any previous errors
      // Reset input value so same file can be selected again if needed
      e.target.value = ''
    }
  }

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove))
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleCompetitorTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === 'team') {
      setCompetitorType('team')
    } else {
      setCompetitorType('individual')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    
    // Validate required fields
    if (!category || !name || !email || !workTitle) {
      setError('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน')
      return
    }

    if (category === 'company' && !companyName) {
      setError('กรุณากรอกชื่อบริษัท')
      return
    }

    if (category === 'student' && !schoolName) {
      setError('กรุณากรอกชื่อสถาบันการศึกษา')
      return
    }

    if (selectedFiles.length === 0) {
      setError('กรุณาเลือกไฟล์ผลงานอย่างน้อย 1 ไฟล์')
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const formData = new FormData()
      formData.append('category', category)
      if (competitorType) {
        formData.append('competitorType', competitorType)
      }
      formData.append('name', name)
      formData.append('telephone', telephone)
      formData.append('email', email)
      formData.append('address', address)
      formData.append('workTitle', workTitle)

      // Add conditional fields
      if (category === 'company' && companyName) {
        formData.append('companyName', companyName)
      }
      if (category === 'student' && schoolName) {
        formData.append('schoolName', schoolName)
      }

      if (competitorType === 'team' && teamMemberName) {
        formData.append('teamMemberName', teamMemberName)
      }

      // Append all files
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file)
      })

      // Submit to API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formData,
      })

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        // Response is not JSON (likely an HTML error page)
        const textResponse = await response.text()
        console.error('Non-JSON response received:', textResponse.substring(0, 200))
        throw new Error('เกิดข้อผิดพลาดในการติดต่อเซิร์ฟเวอร์ กรุณาลองใหม่อีกครั้ง หรือติดต่อผู้ดูแลระบบ')
      }

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'เกิดข้อผิดพลาดในการส่งผลงาน')
      }

      // Success - extract contestant_id from response and redirect to thank you page
      const { contestant_id } = result
      router.push(`/thank-you?id=${contestant_id}`)
    } catch (err) {
      console.error('Submission error:', err)
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการส่งผลงาน กรุณาลองใหม่อีกครั้ง')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Contest Submission Section */}
      <div id="form" className="container mx-auto px-4 sm:px-6 py-12 md:py-18 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-xl sm:text-2xl ghghh font-bold mb-6" style={{ color: '#371c5d' }}>
            ขอบคุณที่ร่วมกิจกรรม<br/>
            ติดตามผลประกาศรางวัลได้ที่นี่ เร็วๆ นี้
            </h2>
          </div>
          
          {/* Right Column - Image Area (1:1 ratio) */}
          <div className="flex items-start justify-start">
            <img src="The-Happy-Toilet-Album-10.jpg" alt="ASW Happy Toilet" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
    )
}