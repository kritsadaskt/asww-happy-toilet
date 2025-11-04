import Image from "next/image";
export default function DesignChallenge() {
  return(
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="w-full md:w-1/2">
          <Image src="/The-Happy-Toilet-Album-3.png" alt="ASW Happy Toilet KV" className="w-full aspect-square" width={1000} height={1000} />
        </div>
        <div className="w-full md:w-1/2">
          <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>โจทย์การออกแบบ</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: '#371c5d' }}>
              เป็นอาคารห้องน้ำสาธารณะ stand alone สำหรับผู้ชาย ผู้หญิง และ handicap ที่สามารถสร้าง หรือติดตั้งในที่สาธารณะต่างๆ ที่ใดก็ได้ (ทั้งนี้สามารถระบุในผลงานได้ว่า จะสามารถสร้างในพื้นที่แบบใด เช่น วัด สวนสาธารณะ วนอุทยาน เป็นต้น) โดยมีรายละเอียดการใช้งาน ดังนี้
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 pl-2 sm:pl-4" style={{ color: '#371c5d' }}>ห้องน้ำชาย</h3>
                <div className="space-y-1 text-sm sm:text-base pl-6 sm:pl-10" style={{ color: '#371c5d' }}>
                  <ul className="list-disc pl-6">
                    <li>อ่างล้างหน้า 2 อ่าง</li>
                    <li>ห้องส้วม 2 ห้อง</li>
                    <li>โถปัสสาวะ 2 โถ</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 pl-2 sm:pl-4" style={{ color: '#371c5d' }}>ห้องน้ำหญิง</h3>
                <div className="space-y-1 text-sm sm:text-base pl-6 sm:pl-10" style={{ color: '#371c5d' }}>
                  <ul className="list-disc pl-6">
                    <li>อ่างล้างหน้า 2 อ่าง</li>
                    <li>ห้องส้วม 2 ห้อง</li>
                    <li>ห้องน้ำสำหรับ handicap 1 ห้อง</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="w-full md:w-1/2">
          <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>รายละเอียดผลงาน</h2>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>เนื้องานประกอบไปด้วย</h3>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base pl-2 sm:pl-4" style={{ color: '#371c5d' }}>
              <ul className="list-disc pl-6">
                <li>แนวความคิดในการออกแบบ</li>
                <li>Plans ทุกชั้น</li>
                <li>Elevations ทุกด้าน</li>
                <li>Sections อย่างน้อย 2 รูป</li>
                <li>ภาพ Perspective อย่างน้อย 2 รูป เพื่อแสดงภาพของอาคารที่จะเกิดขึ้นจริง ในสภาพแวดล้อม</li>
                <li>Clips/Animation เพื่อแสดงผลงานให้ชัดเจนขึ้น</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/The-Happy-Toilet-Album-4.png" alt="ASW Happy Toilet KV" className="w-full aspect-square" width={1000} height={1000} />
        </div>
      </div>
    </>
  )
}