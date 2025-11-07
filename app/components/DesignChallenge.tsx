import Image from "next/image";
export default function DesignChallenge() {
  return (
    <div className="container mx-auto px-4 sm:px-6 pt-6 pb-12 max-w-5xl">
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-secondary">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">โจทย์การออกแบบ</h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-primary">
          เป็นอาคารห้องน้ำสาธารณะ stand alone สำหรับผู้ชาย ผู้หญิง และ handicap ที่สามารถสร้าง หรือติดตั้งในที่สาธารณะต่างๆ ที่ใดก็ได้ (ทั้งนี้สามารถระบุในผลงานได้ว่า จะสามารถสร้างในพื้นที่แบบใด เช่น วัด สวนสาธารณะ วนอุทยาน เป็นต้น) โดยมีรายละเอียดการใช้งาน ดังนี้
        </p>

        <div className="table-responsive overflow-x-auto border border-gray-200 md:border-none">
          <table className="w-[600px] md:w-full border-collapse md:rounded-lg overflow-x-auto shadow-sm bg-white">
            <thead>
              <tr style={{ background: 'linear-gradient(90deg,#ff37ad 0%,#9862bf 100%)' }}>
                <th className="px-4 py-3 text-left text-white font-semibold">ประเภทห้องน้ำ</th>
                <th className="px-4 py-3 text-center text-white font-semibold">อ่างล้างหน้า</th>
                <th className="px-4 py-3 text-center text-white font-semibold">ห้องส้วม</th>
                <th className="px-4 py-3 text-center text-white font-semibold">โถปัสสาวะ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-purple-50">
                <td className="px-4 py-3 text-primary">ห้องน้ำชาย</td>
                <td className="px-4 py-3 text-center text-primary">2</td>
                <td className="px-4 py-3 text-center text-primary">2</td>
                <td className="px-4 py-3 text-center text-primary">2</td>
              </tr>
              <tr className="even:bg-purple-50">
                <td className="px-4 py-3 text-primary">ห้องน้ำหญิง</td>
                <td className="px-4 py-3 text-center text-primary">2</td>
                <td className="px-4 py-3 text-center text-primary">2</td>
                <td className="px-4 py-3 text-center text-primary">-</td>
              </tr>
              <tr className="even:bg-purple-50">
                <td className="px-4 py-3 text-primary">ห้องน้ำสำหรับ handicap</td>
                <td className="px-4 py-3 text-center text-primary">1</td>
                <td className="px-4 py-3 text-center text-primary">1</td>
                <td className="px-4 py-3 text-center text-primary">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <small className="text-[14px] text-gray-500 text-center block pt-2 md:hidden">เลื่อนตารางซ้ายขวาเพื่อดูข้อมูล</small>
      </section>
      <div className="h-12"></div>
      <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-primary">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">รายละเอียดการนำเสนอ</h2>
        <div className="space-y-1 sm:space-y-2 text-sm sm:text-base pl-2 sm:pl-4 text-primary">
          <ul className="list-disc pl-6">
            <li>แนวความคิดในการออกแบบ</li>
            <li>Plans ทุกชั้น</li>
            <li>Elevations ทุกด้าน</li>
            <li>Sections อย่างน้อย 2 รูป</li>
            <li>ภาพ Perspective อย่างน้อย 2 รูป เพื่อแสดงภาพของอาคารที่จะเกิดขึ้นจริง ในสภาพแวดล้อม</li>
            <li>Clips/Animation เพื่อแสดงผลงานให้ชัดเจนขึ้น (ถ้ามี)</li>
          </ul>
        </div>
      </section>
    </div>
  )
}