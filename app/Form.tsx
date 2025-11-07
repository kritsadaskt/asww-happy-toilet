'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Form() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [category, setCategory] = useState<string>('')
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
      // Generate contestant_id
      const contestant_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

      // Create FormData for file upload
      const formData = new FormData()
      formData.append('contestant_id', contestant_id)
      formData.append('category', category)
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

      // Append all files
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file)
      })

      // Submit to API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'เกิดข้อผิดพลาดในการส่งผลงาน')
      }

      // Success - redirect to thank you page
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#371c5d' }}>
              นำส่งผลงาน
            </h2>
            
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                <div className="flex">
                  <div className="shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Category Selector - Moved to Top */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                  ประเภทการประกวด
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="" disabled>เลือกประเภทการประกวด</option>
                  <option value="company">บริษัทผู้ออกแบบวิชาชีพ</option>
                  <option value="individual">ผู้ออกแบบอิสระ และประชาชนทั่วไป</option>
                  <option value="student">นักเรียน นิสิต นักศึกษา</option>
                </select>
              </div>

              {/* Conditional Field: Company Name */}
              {category === 'company' && (
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    ชื่อบริษัท
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="ชื่อบริษัท"
                  />
                </div>
              )}

              {/* Conditional Field: School Name */}
              {category === 'student' && (
                <div>
                  <label htmlFor="schoolName" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    ชื่อสถาบันการศึกษา
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="ชื่อสถาบันการศึกษา"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="ชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="เบอร์โทรศัพท์"
                    pattern="[0-9]*"
                  />
                </div>
                
              </div>

              <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="อีเมล"
                  />
                </div>

              <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    ที่อยู่
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="ที่อยู่"
                  />
                </div>
              
              <div>
                <label htmlFor="workTitle" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                  ชื่อผลงาน
                </label>
                <input
                  type="text"
                  id="workTitle"
                  name="workTitle"
                  value={workTitle}
                  onChange={(e) => setWorkTitle(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="ชื่อผลงาน"
                />
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                  แนบไฟล์ผลงาน (รูปภาพและ PDF เท่านั้น)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                
                {/* Display selected files */}
                {selectedFiles.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-sm font-medium" style={{ color: '#371c5d' }}>
                      ไฟล์ที่เลือก ({selectedFiles.length} ไฟล์):
                    </p>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {selectedFiles.map((file, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between p-2 bg-purple-50 rounded-lg border border-purple-200"
                        >
                          <div className="flex-1 min-w-0 mr-2">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            disabled={isSubmitting}
                            className="shrink-0 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-full p-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="ลบไฟล์"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{ backgroundColor: isSubmitting ? '#9ca3af' : '#371c5d' }}
                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#4a2575')}
                onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#371c5d')}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    กำลังส่งผลงาน...
                  </span>
                ) : (
                  'Apply Now'
                )}
              </button>
            </form>
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