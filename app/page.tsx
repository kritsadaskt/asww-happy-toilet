import Gallery from "./components/Gallery";
import Image from "next/image";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <section id="kv" className="w-full bg-white">
      <Image src="TheHappyToilet_KV_desktop.jpg" alt="ASW Happy Toilet KV" className="w-full h-auto hidden md:block" width={1980} height={1080}/>
      <Image src="TheHappyToilet_KV_mob.jpg" alt="ASW Happy Toilet KV" className="w-full h-auto md:hidden" width={1040} height={1040}/>
    </section>
    <div id="winners" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
      <div className="intro-text-box text-center lg:text-xl flex flex-col gap-4">
        <p className="leading-relaxed text-primary">
        "บทสรุปแห่งความสุข… ขอขอบคุณทุกความคิดสร้างสรรค์ที่ร่วมออกแบบสุขาเพื่อสาธารณะ"
        </p>
        <p className="leading-relaxed mb-4 text-primary">
        โครงการ <strong>"สุขา สุขี : THE HAPPY TOILET"</strong> ในวาระฉลองครบรอบ 20 ปี AssetWise<br/>ได้สิ้นสุดลงแล้วอย่างงดงาม<br/>
        บริษัท แอสเซทไวส์ จำกัด (มหาชน) ขอขอบพระคุณ สถาปนิก นิสิต นักศึกษา<br/>และประชาชนทั่วไปทุกท่านที่ร่วมส่งต่อพลังแห่งการออกแบบเพื่อสังคม
        </p>
        <p className="leading-relaxed mb-4 text-primary">
        ทุกผลงานที่ส่งเข้ามาไม่เพียงแต่แสดงถึงศักยภาพด้านการออกแบบ<br/>แต่ยังสะท้อนถึงความตั้งใจที่จะยกระดับคุณภาพชีวิตและสุขอนามัยที่ดีให้กับคนไทย ตามแนวคิด
        </p>
        <p className="mb-4 text-2xl font-semibold text-primary">We Build Happiness</p>
        <p className="leading-relaxed mb-4 text-primary">
        แม้การประกวดจะสิ้นสุดลง แต่ความมุ่งมั่นในการสร้างสรรค์สังคมของ AssetWise ยังคงดำเนินต่อไป<br/>แล้วพบกันใหม่กับกิจกรรมดีๆ และพื้นที่สร้างสรรค์เพื่อสังคมจากเราในโอกาสหน้า
        </p>
      </div>
      <div className="h-7 hidden md:block"></div>
      <Image src="winner_list_desktop.jpg" alt="Winner List" className="w-full h-auto" width={1866} height={933}/>
      <div id="results" className="hidden">
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
    </div>
    <Gallery />
    <Footer />
    </>
  );
}
