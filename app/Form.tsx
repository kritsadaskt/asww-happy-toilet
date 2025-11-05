'use client'
import { useState } from 'react'

export default function Form() {
  const [category, setCategory] = useState<string>('')

  return (
    <>
      {/* Contest Submission Section */}
      <div id="form" className="container mx-auto px-4 sm:px-6 py-12 sm:py-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#371c5d' }}>
              นำส่งผลงาน
            </h2>
            <form className="space-y-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="ชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="อีเมล"
                  />
                </div>
              </div>

              <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                    ที่อยู่
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="ที่อยู่"
                  />
                </div>
              
              <div>
                <label htmlFor="workTitle" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                  หัวข้องาน
                </label>
                <input
                  type="text"
                  id="workTitle"
                  name="workTitle"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="หัวข้องาน"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                  คำอธิบาย
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="คำอธิบาย"
                />
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium mb-2" style={{ color: '#371c5d' }}>
                  แนบไฟล์ผลงาน
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>
              
              <button
                type="submit"
                className=" py-3 px-6 text-white font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: '#371c5d' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a2575'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#371c5d'}
              >
                Apply Now
              </button>
            </form>
          </div>
          
          {/* Right Column - Image Area (1:1 ratio) */}
          <div className="flex items-center justify-center">
            <img src="The-Happy-Toilet-Album-10.jpg" alt="ASW Happy Toilet" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
    )
}