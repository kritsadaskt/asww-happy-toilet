import Gallery from "./components/Gallery";
import Image from "next/image";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <section id="kv" className="w-full bg-white">
      <Image src="happy_toilet_desktop_banner.png" alt="ASW Happy Toilet KV" className="w-full h-auto hidden md:block" width={1866} height={933}/>
      <Image src="happy_toilet_mobile_banner.png" alt="ASW Happy Toilet KV" className="w-full h-auto md:hidden" width={1866} height={933}/>
    </section>
    <div id="announcement" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
      <p className="text-center text-lg leading-relaxed text-primary">
        ขอบคุณทุกไอเดียที่ร่วมกันสร้าง
      </p>
      <p className="text-center text-2xl md:text-3xl leading-relaxed text-primary my-3">
        <strong>“สุขา สุขี : THE HAPPY TOILET”</strong>
      </p>
      <p className="text-center md:text-lg leading-relaxed mb-4 text-primary">
        ผลงานทุกชิ้นได้รับการพิจารณาอย่างรอบคอบ<br/>
        โดยคณะกรรมการจาก AssetWise<br/>
        ร่วมกับผู้ทรงคุณวุฒิและกรรมการอิสระจากหลากหลายหน่วยงาน ได้แก่
      </p>
      <ul className="w-fit mx-auto mb-4 text-primary list-disc list-inside">
        <li>สมาคมสถาปนิกสยาม ในพระบรมราชูปถัมภ์</li>
        <li>สมาคมภูมิสถาปนิกประเทศไทย</li>
        <li>สมาคมมัณฑนากรแห่งประเทศไทย</li>
        <li>ตัวแทนจากกรุงเทพมหานคร</li>
      </ul>
      <p className="text-center md:text-lg leading-relaxed mb-4 text-primary">
        เพื่อคัดเลือกแนวคิดที่สามารถยกระดับคุณภาพชีวิตและสร้างความสุขให้ทุกคนอย่างแท้จริง
      </p>
      <div className="h-7"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-primary flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#371c5d' }}>กลุ่มบริษัทผู้ออกแบบวิชาชีพ</h2>
          <div className="winner flex w-full gap-4">
            <div className="name">
              <span>รางวัลชนะเลิศ</span>
              <p className="text-3xl font-medium">นายสมชาย ใจดี</p>
            </div>
            <div className="award flex items-end justify-center">
              <img src="/winner.png" alt="winner" width={50} height={50} />
            </div>
          </div>
          <div className="1st_runner_up w-full">
            <span>รองชนะเลิศอันดับ 1</span>
            <p className="text-2xl font-medium">นายสมชาย ใจดี</p>
          </div>
          <div className="2nd_runner_up w-full">
            <span>รองชนะเลิศอันดับ 2</span>
            <p className="text-2xl font-medium">นายสมชาย ใจดี</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-primary flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#371c5d' }}>กลุ่มผู้ออกแบบอิสระ และประชาชนทั่วไป</h2>
          <div className="winner flex w-full gap-4">
            <div className="name">
              <span>รางวัลชนะเลิศ</span>
              <p className="text-3xl font-medium">นายสมชาย ใจดี</p>
            </div>
            <div className="award flex items-end justify-center">
              <img src="/winner.png" alt="winner" width={50} height={50} />
            </div>
          </div>
          <div className="1st_runner_up w-full">
            <span>รองชนะเลิศอันดับ 1</span>
            <p className="text-2xl font-medium">นายสมชาย ใจดี</p>
          </div>
          <div className="2nd_runner_up w-full">
            <span>รองชนะเลิศอันดับ 2</span>
            <p className="text-2xl font-medium">นายสมชาย ใจดี</p>
          </div>
        </div>
      </div>

      <div className="h-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-primary flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#371c5d' }}>กลุ่มนักเรียน/นิสิต/นักศึกษา</h2>
          <div className="winner flex w-full gap-4">
            <div className="name">
              <span>รางวัลชนะเลิศ</span>
              <p className="text-3xl font-medium">นายสมชาย ใจดี</p>
            </div>
            <div className="award flex items-end justify-center">
              <img src="/winner.png" alt="winner" width={50} height={50} />
            </div>
          </div>
          <div className="1st_runner_up w-full">
            <span>รองชนะเลิศอันดับ 1</span>
            <p className="text-2xl font-medium">นายสมชาย ใจดี</p>
          </div>
          <div className="2nd_runner_up w-full">
            <span>รองชนะเลิศอันดับ 2</span>
            <p className="text-2xl font-medium">นายสมชาย ใจดี</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-primary flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#371c5d' }}>รางวัลชมเชย กลุ่มนักเรียน/นิสิต/นักศึกษา</h2>
          <div className="name-listed text-xl flex flex-col gap-2">
            <p>นายสมชาย ใจดี</p>
            <p>นายสมชาย ใจดี</p>
            <p>นายสมชาย ใจดี, นางสาวสมหญิง ใจดี, นายปิติ มงคลสุข</p>
            <p>นายสมชาย ใจดี</p>
            <p>นายสมชาย ใจดี</p>
          </div>
        </div>
      </div>
    </div>
    <Gallery />
    <Footer />
    </>
  );
}
