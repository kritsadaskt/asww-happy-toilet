'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const contestantId = searchParams.get('id')

  const contactLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/assetwise.designcontest', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Line', url: 'https://page.line.me/assetwise', icon: 'M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314' },
    { name: 'Tel', url: 'tel:021680000', icon: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-purple-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#371c5d' }}>
            ส่งผลงานสำเร็จ!
          </h1>
          
          <p className="text-lg text-gray-700 mb-6">
            ขอบคุณที่ส่งผลงานเข้าร่วมการประกวด The Happy Toilet Project
          </p>

          {/* Contestant ID Display */}
          {contestantId && (
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">รหัสผู้เข้าประกวดของคุณ:</p>
              <p className="text-2xl font-mono font-bold" style={{ color: '#371c5d' }}>
                {contestantId}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                กรุณาเก็บรหัสนี้ไว้เพื่อใช้ในการติดตามผลการประกวด
              </p>
            </div>
          )}

          {/* Additional Information */}
          <div className="mb-8 text-gray-600 space-y-2">
            <p>เราได้รับผลงานของคุณเรียบร้อยแล้ว</p>
            <p>กรุณารอการติดตามข่าวสารการประกวดจากทีมงาน</p>
            <div className="social-listed flex w-full gap-3 justify-center pt-2">
              {contactLinks.map((contact) => (
                <a key={contact.name} href={contact.url} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400 hover:text-gray-700 transition-colors">
                    <path d={contact.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="py-3 px-8 text-white font-semibold rounded-lg transition-colors"
              style={{ backgroundColor: '#371c5d' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a2575'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#371c5d'}
            >
              กลับหน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-linear-to-b from-white via-purple-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">กำลังโหลด...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}

