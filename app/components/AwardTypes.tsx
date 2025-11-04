import Image from "next/image";
export default function AwardTypes() {
  return(
    <div className="flex flex-col md:flex-row gap-4 mb-10">
      <div className="w-full">
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#371c5d' }}>ประเภทรางวัล</h2>
        <p className="text-sm sm:text-base mb-4 sm:mb-6" style={{ color: '#371c5d' }}>การจัดประกวดแบบแบ่งเป็น 3 ประเภท ได้แก่</p>


        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm bg-white">
          <thead>
            <tr style={{ background: 'linear-gradient(90deg,#ff37ad 0%,#9862bf 100%)' }}>
              <th className="px-4 py-3 text-left text-white font-semibold">ประเภท</th>
              <th className="px-4 py-3 text-center text-white font-semibold">ชนะเลิศ</th>
              <th className="px-4 py-3 text-center text-white font-semibold">รองชนะเลิศอันดับ 1</th>
              <th className="px-4 py-3 text-center text-white font-semibold">รองชนะเลิศอันดับ 2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-purple-50">
              <td className="px-4 py-3 text-left text-[#371c5d]">ระดับ บริษัทผู้ออกแบบวิชาชีพ</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">50,000</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">30,000</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">20,000</td>
            </tr>
            <tr className="even:bg-purple-50">
              <td className="px-4 py-3 text-left text-[#371c5d]">ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">50,000</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">30,000</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">20,000</td>
            </tr>
            <tr className="even:bg-purple-50">
              <td className="px-4 py-3 text-left text-[#371c5d]">ระดับ นักเรียน นิสิต นักศึกษา</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">30,000</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">20,000</td>
              <td className="px-4 py-3 text-center text-[#371c5d] font-bold">10,000</td>
            </tr>
          </tbody>
        </table>
        </section>
      </div>
    </div>
  )
}