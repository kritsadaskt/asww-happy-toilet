import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Key Visual Section */}
      <section id="kv" className="w-full bg-white">
        <Image src="HappyToilet_Desktop_banner.jpg" alt="ASW Happy Toilet KV" className="w-full h-auto hidden md:block" width={1866} height={933}/>
          <img src="https://assetwise.co.th/happy-toilet-test/asw-happy-toilet-kv.png" alt="ASW Happy Toilet KV" className="w-full h-auto md:h-[520px] object-contain md:hidden" />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
        
        {/* Title Section */}
        <section className="mb-8 sm:mb-12 text-center">
          <p className="text-sm sm:text-base mb-2" style={{ color: '#371c5d' }}>เรียนเชิญร่วมประกวดออกแบบ <br />ห้องน้ำเพื่อสาธารณะ ในโครงการ</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug sm:leading-relaxed" style={{ color: '#371c5d' }}>
            สุขา สุขี : THE HAPPY TOILET
          </h1>
        </section>

        {/* Introduction Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4" style={{ color: '#371c5d' }}>
            บริษัท แอสเซทไวส์ จำกัด (มหาชน) (AssetWise PCL.) ขอเรียนเชิญ บริษัทผู้ออกแบบวิชาชีพ, ประชาชนทั่วไป, และนักเรียน นิสิต นักศึกษา ผู้เปี่ยมด้วยความคิดสร้างสรรค์และหัวใจสาธารณะ เข้าร่วม "การประกวดออกแบบห้องน้ำเพื่อสาธารณะ" ภายใต้แนวคิด "ห้องน้ำที่สร้างความสุขให้ทุกคน"
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#371c5d' }}>
            เนื่องในโอกาสสำคัญ ครบรอบ 20 ปี แห่งการก่อตั้งบริษัทฯ เรามุ่งมั่นที่จะส่งมอบความสุขให้กับทุกคน ตามปณิธานขององค์กร "We Build Happiness" โดยเล็งเห็นว่า "ห้องน้ำสาธารณะ" เป็นหนึ่งในปัจจัยพื้นฐานสำคัญที่ส่งผลต่อคุณภาพชีวิตที่ดีของคนไทยทุกคน
          </p>
        </section>

        {/* Purpose Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>จุดประสงค์หลักของการประกวด</h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: '#371c5d' }}>
            การประกวดครั้งนี้มีจุดมุ่งหมายเพื่อสร้างสรรค์ ต้นแบบห้องน้ำสาธารณะคุณภาพสูง ที่สามารถนำไปก่อสร้างหรือติดตั้งในพื้นที่สาธารณะทั่วประเทศไทยได้อย่างหลากหลาย ไม่ว่าจะเป็น สวนสาธารณะ, วนอุทยานฯ, วัด, โรงเรียน หรือหน่วยงานต่างๆ โดยเน้นการออกแบบที่ตอบโจทย์หลัก 5 ประการ ดังนี้:
          </p>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>จุดประสงค์หลักของการประกวด</h3>
          <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: '#371c5d' }}>
            เพื่อสร้างสรรค์ ต้นแบบห้องน้ำสาธารณะคุณภาพสูง ที่สามารถนำไปก่อสร้างหรือติดตั้งในพื้นที่สาธารณะทั่วประเทศไทยได้อย่างหลากหลาย ไม่ว่าจะเป็น สวนสาธารณะ, วนอุทยานฯ, วัด, โรงเรียน หรือหน่วยงานต่างๆ โดยเน้นการออกแบบที่ตอบโจทย์หลัก 5 ประการ ดังนี้:
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="pl-3 sm:pl-4 border-l-4" style={{ borderLeftColor: '#9862bf' }}>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
                1. มีดีไซน์ที่สวยงาม มีเอกลักษณ์ มีความพิเศษ ช่วยสร้างสรรค์ภูมิทัศน์ที่สวยงามในแต่ละพื้นที่
              </p>
            </div>
            
            <div className="pl-3 sm:pl-4 border-l-4" style={{ borderLeftColor: '#9862bf' }}>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
                2. เป็นห้องน้ำที่ถูกสุขอนามัย และใช้งานได้อย่างเหมาะสม สะดวกสบาย สำหรับทุกคน ทุกวัย ทุกข้อจำกัด รวมทั้งมีความปลอดภัย และง่ายต่อการดูแลรักษา
              </p>
            </div>
            
            <div className="pl-3 sm:pl-4 border-l-4" style={{ borderLeftColor: '#9862bf' }}>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
                3 .ออกแบบอาคารที่ คำนึงถึงสิ่งแวดล้อม และสภาพแวดล้อม ของพื้นที่ติดตั้งแบบต่างๆ ในประเทศไทย
              </p>
            </div>
            
            <div className="pl-3 sm:pl-4 border-l-4" style={{ borderLeftColor: '#9862bf' }}>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
                4. มีการใช้ เทคโนโลยีที่ไม่ซับซ้อนเกินไป เพื่อไม่ให้เป็นอุปสรรคต่อเทคนิคการก่อสร้างและงบประมาณในการนำไปสร้างจริง
              </p>
            </div>
            
            <div className="pl-3 sm:pl-4 border-l-4" style={{ borderLeftColor: '#9862bf' }}>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
                5. เป็นห้องน้ำ ที่สร้างความสุข ให้กับผู้พบเห็นและผู้ใช้งาน อย่างแท้จริง
              </p>
            </div>
          </div>
        </section>

        {/* Qualities Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>คุณสมบัติของผลงานที่ต้องการ</h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
            เรามองหาการออกแบบที่ผสมผสานระหว่าง ประโยชน์ใช้สอย (Function), ความสวยงาม (Aesthetics), ความยั่งยืน (Sustainability), และความสามารถในการก่อสร้างจริง (Constructability) โดยเป็นแบบที่สามารถปรับใช้ได้กับบริบททางสังคมและสิ่งแวดล้อมที่หลากหลายในประเทศไทย
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-8 sm:mb-12 rounded-lg p-6 sm:p-8 text-center shadow-lg" style={{ background: 'linear-gradient(135deg, #9862bf 0%, #ff37ad 100%)' }}>
          <p className="text-base sm:text-lg text-white leading-relaxed font-medium">
            ขอเชิญชวนทุกท่านมาร่วมเป็นส่วนหนึ่งในการยกระดับมาตรฐานห้องน้ำสาธารณะ<br className="hidden sm:block" />
            และเติมเต็มความสุขเล็ก ๆ ที่ยิ่งใหญ่ให้กับคนไทยทุกคน
          </p>
        </section>

        {/* Contest Details Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#371c5d' }}>รายละเอียดการประกวด</h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6" style={{ color: '#371c5d' }}>การจัดประกวดแบบแบ่งเป็น 3 ประเภท ได้แก่</p>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Category 1 */}
            <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#ff37ad' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#371c5d' }}>ระดับ บริษัทผู้ออกแบบวิชาชีพ</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
                <p className="pl-2 sm:pl-4">-รางวัลชนะเลิศ เงินรางวัล 50,000 บาท จำนวน 1 รางวัล</p>
                <p className="pl-2 sm:pl-4">-รางวัลรองชนะเลิศ อันดับ 1 เงินรางวัล 30,000 บาท จำนวน 1 รางวัล</p>
                <p className="pl-2 sm:pl-4">-รางวัลรองชนะเลิศ อันดับ 2 เงินรางวัล 20,000 บาท จำนวน 1 รางวัล</p>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#ff37ad' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#371c5d' }}>ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
                <p className="pl-2 sm:pl-4">-รางวัลชนะเลิศ เงินรางวัล 50,000 บาท จำนวน 1 รางวัล</p>
                <p className="pl-2 sm:pl-4">-รางวัลรองชนะเลิศ อันดับ 1 เงินรางวัล 30,000 บาท จำนวน 1 รางวัล</p>
                <p className="pl-2 sm:pl-4">-รางวัลรองชนะเลิศ อันดับ 2 เงินรางวัล 20,000 บาท จำนวน 1 รางวัล</p>
              </div>
            </div>
            
            {/* Category 3 */}
            <div className="border-l-4 pl-4 sm:pl-6" style={{ borderLeftColor: '#ff37ad' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: '#371c5d' }}>ระดับ นักเรียน นิสิต นักศึกษา</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
                <p className="pl-2 sm:pl-4">-รางวัลชนะเลิศ เงินรางวัล 30,000 บาท จำนวน 1 รางวัล</p>
                <p className="pl-2 sm:pl-4">-รางวัลรองชนะเลิศ อันดับ 1 เงินรางวัล 20,000 บาท จำนวน 1 รางวัล</p>
                <p className="pl-2 sm:pl-4">-รางวัลรองชนะเลิศ อันดับ 2 เงินรางวัล 10,000 บาท จำนวน 1 รางวัล</p>
              </div>
            </div>
          </div>
        </section>

        {/* Judges Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>คณะกรรมการตัดสิน</h2>
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
            <p className="pl-2 sm:pl-4">-ตัวแทนจาก สมาคมสถาปนิกสยาม ในพระบรมราชูปถัมภ์ 1 ท่าน</p>
            <p className="pl-2 sm:pl-4">-ตัวแทนจาก สมาคมมัณฑนากรแห่งประเทศไทย 1 ท่าน</p>
            <p className="pl-2 sm:pl-4">-ตัวแทนจาก สมาคมภูมิสถาปนิกประเทศไทย 1 ท่าน</p>
            <p className="pl-2 sm:pl-4">-ตัวแทนจาก กรุงเทพมหานคร 1 ท่าน</p>
            <p className="pl-2 sm:pl-4">-คณะกรรมการจาก ASW</p>
          </div>
        </section>

        {/* Project Requirements Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>รายละเอียดงานที่ต้องการ</h2>
          <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: '#371c5d' }}>
            เป็นอาคารห้องน้ำสาธารณะ stand alone สำหรับผู้ชาย ผู้หญิง และ handicap ที่สามารถสร้าง หรือติดตั้งในที่สาธารณะต่างๆ ที่ใดก็ได้ (ทั้งนี้สามารถระบุในผลงานได้ว่า จะสามารถสร้างในพื้นที่แบบใด เช่น วัด สวนสาธารณะ วนอุทยาน เป็นต้น) โดยมีรายละเอียดการใช้งาน ดังนี้
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 pl-2 sm:pl-4" style={{ color: '#371c5d' }}>-ห้องน้ำชาย</h3>
              <div className="space-y-1 text-sm sm:text-base pl-6 sm:pl-10" style={{ color: '#371c5d' }}>
                <p>-อ่างล้างหน้า 2 อ่าง</p>
                <p>-ห้องส้วม 2 ห้อง</p>
                <p>-โถปัสสาวะ 2 โถ</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 pl-2 sm:pl-4" style={{ color: '#371c5d' }}>-ห้องน้ำหญิง</h3>
              <div className="space-y-1 text-sm sm:text-base pl-6 sm:pl-10" style={{ color: '#371c5d' }}>
                <p>-อ่างล้างหน้า 2 อ่าง</p>
                <p>-ห้องส้วม 2 ห้อง</p>
                <p>-ห้องน้ำสำหรับ handicap 1 ห้อง</p>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Format Section */}
        <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>รูปแบบของงานที่ต้องการ</h2>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>เนื้องานประกอบไปด้วย</h3>
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base pl-2 sm:pl-4" style={{ color: '#371c5d' }}>
            <p>-แนวความคิดในการออกแบบ</p>
            <p>-Plans ทุกชั้น</p>
            <p>-Elevations ทุกด้าน</p>
            <p>-Sections อย่างน้อย 2 รูป</p>
            <p>-ภาพ Perspective  อย่างน้อย 2 รูป เพื่อแสดงภาพของอาคารที่จะเกิดขึ้นจริง ในสภาพแวดล้อม</p>
            <p>-Clips/Animation เพื่อแสดงผลงานให้ชัดเจนขึ้น (สามารถเป็น option  20 ปี AssetWise พร้อมสร้างความสุข...ให้ทุกจังหวะของชีวิต"</p>
          </div>
        </section>

      </main>
    </div>
  );
}
