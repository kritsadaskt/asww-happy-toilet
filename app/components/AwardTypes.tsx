export default function AwardTypes() {
  return(
    <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#371c5d' }}>ประเภทรางวัล</h2>
    <p className="text-sm sm:text-base mb-4 sm:mb-6" style={{ color: '#371c5d' }}>การจัดประกวดแบบแบ่งเป็น 3 ประเภท ได้แก่</p>
    
    <div className="space-y-6 sm:space-y-8">
      {/* Category 1 */}
      <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#ff37ad' }}>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#371c5d' }}>ระดับ บริษัทผู้ออกแบบวิชาชีพ</h3>
        <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
          <ul className="list-disc pl-6">
            <li>รางวัลชนะเลิศ เงินรางวัล 50,000 บาท จำนวน 1 รางวัล</li>
            <li>รางวัลรองชนะเลิศ อันดับ 1 เงินรางวัล 30,000 บาท จำนวน 1 รางวัล</li>
            <li>รางวัลรองชนะเลิศ อันดับ 2 เงินรางวัล 20,000 บาท จำนวน 1 รางวัล</li>
          </ul>
        </div>
      </div>
      
      {/* Category 2 */}
      <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#ff37ad' }}>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#371c5d' }}>ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป</h3>
        <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
          <ul className="list-disc pl-6">
            <li>รางวัลชนะเลิศ เงินรางวัล 50,000 บาท จำนวน 1 รางวัล</li>
            <li>รางวัลรองชนะเลิศ อันดับ 1 เงินรางวัล 30,000 บาท จำนวน 1 รางวัล</li>
            <li>รางวัลรองชนะเลิศ อันดับ 2 เงินรางวัล 20,000 บาท จำนวน 1 รางวัล</li>
          </ul>
        </div>
      </div>
      
      {/* Category 3 */}
      <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#ff37ad' }}>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#371c5d' }}>ระดับ นักเรียน นิสิต นักศึกษา</h3>
        <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
          <ul className="list-disc pl-6">
            <li>รางวัลชนะเลิศ เงินรางวัล 30,000 บาท จำนวน 1 รางวัล</li>
            <li>รางวัลรองชนะเลิศ อันดับ 1 เงินรางวัล 20,000 บาท จำนวน 1 รางวัล</li>
            <li>รางวัลรองชนะเลิศ อันดับ 2 เงินรางวัล 10,000 บาท จำนวน 1 รางวัล</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}