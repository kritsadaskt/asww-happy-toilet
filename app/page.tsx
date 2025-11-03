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
      <main className="">
        
        {/* Title Section */}
        <section className="text-center">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
            <p className="text-sm sm:text-base mb-2" style={{ color: '#371c5d' }}>เรียนเชิญร่วมประกวดออกแบบ <br />ห้องน้ำเพื่อสาธารณะ ในโครงการ</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0 leading-snug sm:leading-relaxed" style={{ color: '#371c5d' }}>
              สุขา สุขี : THE HAPPY TOILET
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12 max-w-5xl">
          <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4" style={{ color: '#371c5d' }}>
              แอสเซทไวส์ ขอเรียนเชิญ บริษัทผู้ออกแบบวิชาชีพ, ประชาชนทั่วไป, และนักเรียน นิสิต นักศึกษา ผู้เปี่ยมด้วยความคิดสร้างสรรค์และหัวใจสาธารณะ เข้าร่วม "การประกวดออกแบบห้องน้ำเพื่อสาธารณะ" ภายใต้แนวคิด "ห้องน้ำที่สร้างความสุขให้ทุกคน"
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#371c5d' }}>
              เนื่องในโอกาสสำคัญ ครบรอบ 20 ปี แห่งการก่อตั้งบริษัทฯ เรามุ่งมั่นที่จะส่งมอบความสุขให้กับทุกคน ตามปณิธานขององค์กร "We Build Happiness" โดยเล็งเห็นว่า "ห้องน้ำสาธารณะ" เป็นหนึ่งในปัจจัยพื้นฐานสำคัญที่ส่งผลต่อคุณภาพชีวิตที่ดีของคนไทยทุกคน
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

          {/* Purpose Section */}
          <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#ff37ad' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>จุดประสงค์หลักของการประกวด</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6" style={{ color: '#371c5d' }}>
              การประกวดครั้งนี้มีจุดมุ่งหมายเพื่อสร้างสรรค์ ต้นแบบห้องน้ำสาธารณะคุณภาพสูง ที่สามารถนำไปก่อสร้างหรือติดตั้งในพื้นที่สาธารณะทั่วประเทศไทยได้อย่างหลากหลาย ไม่ว่าจะเป็น สวนสาธารณะ, วนอุทยานฯ, วัด, โรงเรียน หรือหน่วยงานต่างๆ โดยเน้นการออกแบบที่ตอบโจทย์หลัก 5 ประการ ดังนี้:
            </p>

            <div className="space-y-3 sm:space-y-4">
              <ol className="list-decimal pl-4">
                <li>มีดีไซน์ที่สวยงาม มีเอกลักษณ์ มีความพิเศษ ช่วยสร้างสรรค์ภูมิทัศน์ที่สวยงามในแต่ละพื้นที่</li>
                <li>เป็นห้องน้ำที่ถูกสุขอนามัย และใช้งานได้อย่างเหมาะสม สะดวกสบาย สำหรับทุกคน ทุกวัย ทุกข้อจำกัด รวมทั้งมีความปลอดภัย และง่ายต่อการดูแลรักษา</li>
                <li>ออกแบบอาคารที่ คำนึงถึงสิ่งแวดล้อม และสภาพแวดล้อม ของพื้นที่ติดตั้งแบบต่างๆ ในประเทศไทย</li>
                <li>มีการใช้เทคโนโลยีที่ไม่ซับซ้อนเกินไป เพื่อไม่ให้เป็นอุปสรรคต่อเทคนิคการก่อสร้างและงบประมาณในการนำไปสร้างจริง</li>
                <li>เป็นห้องน้ำที่สร้าการใช้เป็นห้องน้ำสาธารณะที่สร้างความสุขให้กับผู้พบเห็นและผู้ใช้งาน อย่างแท้จริง</li>
              </ol>
            </div>
          </section>

          {/* Qualities Section */}
          <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>คุณสมบัติของผลงานที่ต้องการ</h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
              เรามองหาการออกแบบที่ผสมผสานระหว่าง ประโยชน์ใช้สอย (Function), ความสวยงาม (Aesthetics), ความยั่งยืน (Sustainability), และความสามารถในการก่อสร้างจริง (Constructability) โดยเป็นแบบที่สามารถปรับใช้ได้กับบริบททางสังคมและสิ่งแวดล้อมที่หลากหลายในประเทศไทย
            </p>
          </section>

        </div>

        {/* Call to Action */}
        <section className="w-full mb-8 sm:mb-12 p-6 sm:p-8 text-center shadow-lg h-80 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9862bf 0%, #ff37ad 100%)' }}>
          <p className="text-base md:text-2xl text-white leading-relaxed font-medium">
            ขอเชิญชวนทุกท่านมาร่วมเป็นส่วนหนึ่งในการยกระดับมาตรฐานห้องน้ำสาธารณะ<br className="hidden sm:block" />
            และเติมเต็มความสุขเล็ก ๆ ที่ยิ่งใหญ่ให้กับคนไทยทุกคน
          </p>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">

          {/* Judges Section */}
          <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>คณะกรรมการตัดสิน</h2>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
              <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>สมาคมสถาปนิกสยาม ในพระบรมราชูปถัมภ์</strong> 1 ท่าน</p>
              <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>สมาคมมัณฑนากรแห่งประเทศไทย</strong> 1 ท่าน</p>
              <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>สมาคมภูมิสถาปนิกประเทศไทย</strong> 1 ท่าน</p>
              <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>กรุงเทพมหานคร</strong> 1 ท่าน</p>
              <p className="pl-2 sm:pl-4">- คณะกรรมการจาก <strong>แอสเซทไวส์</strong></p>
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

          {/* Submission Format Section */}
          <section className="mb-8 sm:mb-12 bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>รูปแบบของงานที่ต้องการ</h2>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>เนื้องานประกอบไปด้วย</h3>
            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base pl-2 sm:pl-4" style={{ color: '#371c5d' }}>
              <ul className="list-disc pl-6">
                <li>แนวความคิดในการออกแบบ</li>
                <li>Plans ทุกชั้น</li>
                <li>Elevations ทุกด้าน</li>
                <li>Sections อย่างน้อย 2 รูป</li>
                <li>ภาพ Perspective อย่างน้อย 2 รูป เพื่อแสดงภาพของอาคารที่จะเกิดขึ้นจริง ในสภาพแวดล้อม</li>
                <li>Clips/Animation เพื่อแสดงผลงานให้ชัดเจนขึ้น (สามารถเป็น option  20 ปี AssetWise พร้อมสร้างความสุข...ให้ทุกจังหวะของชีวิต"</li>
              </ul>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
