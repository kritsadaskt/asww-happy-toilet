import Image from "next/image";
export default function AwardTypes() {
  return(
    <div className="container mx-auto px-4 sm:px-6 pt-12 pb-6 max-w-5xl">
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-secondary">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">ประเภทรางวัล</h2>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 text-primary">การจัดประกวดแบบแบ่งเป็น 3 ประเภท ได้แก่</p>

        <div className="table-responsive overflow-x-auto border border-gray-200 md:border-none">
          <table className="w-[600px] md:w-full border-collapse md:rounded-lg overflow-x-auto shadow-sm bg-white">
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
                <td className="px-4 py-3 text-left text-primary">ระดับ บริษัทผู้ออกแบบวิชาชีพ</td>
                <td className="px-4 py-3 text-center text-primary font-bold">50,000</td>
                <td className="px-4 py-3 text-center text-primary">30,000</td>
                <td className="px-4 py-3 text-center text-primary">20,000</td>
              </tr>
              <tr className="even:bg-purple-50">
                <td className="px-4 py-3 text-left text-primary">ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป</td>
                <td className="px-4 py-3 text-center text-primary font-bold">50,000</td>
                <td className="px-4 py-3 text-center text-primary">30,000</td>
                <td className="px-4 py-3 text-center text-primary">20,000</td>
              </tr>
              <tr className="even:bg-purple-50">
                <td className="px-4 py-3 text-left text-primary">ระดับ นักเรียน นิสิต นักศึกษา</td>
                <td className="px-4 py-3 text-center text-primary font-bold">30,000</td>
                <td className="px-4 py-3 text-center text-primary">20,000</td>
                <td className="px-4 py-3 text-center text-primary">10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <small className="text-[14px] text-gray-500 text-center block pt-2 md:hidden">เลื่อนตารางซ้ายขวาเพื่อดูข้อมูล</small>
        </section>
    </div>
  )
}