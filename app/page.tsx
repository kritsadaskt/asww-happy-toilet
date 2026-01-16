import Gallery from "./components/Gallery";
import Image from "next/image";
import Footer from "./Footer";
import Juries from "./components/Juries";
import HonorableMentions from "./components/HonorableMentions";

export default function Home() {
  return (
    <>
    <section id="kv" className="w-full bg-white">
      <Image src="TheHappyToilet_KV_desktop.jpg" alt="ASW Happy Toilet KV" className="w-full h-auto hidden md:block" width={1980} height={1080}/>
      <Image src="TheHappyToilet_KV_mob.jpg" alt="ASW Happy Toilet KV" className="w-full h-auto md:hidden" width={1040} height={1040}/>
    </section>
    <div id="winners" className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
      <div className="intro-text-box text-center lg:text-xl flex flex-col gap-4">
        <p className="leading-relaxed mb-4 text-primary">
        "บทสรุปแห่งความสุข… ขอขอบคุณทุกความคิดสร้างสรรค์ที่ร่วมออกแบบสุขาเพื่อสาธารณะ"
        </p>
        <p className="leading-relaxed mb-4 text-primary">
        โครงการ <strong>"สุขา สุขี : THE HAPPY TOILET"</strong><br/>
        ในวาระฉลองครบรอบ 20 ปี AssetWise ได้สิ้นสุดลงแล้วอย่างงดงาม
        <br/>
        <br/>
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
      <Image src="winner_list_desktop_rv1.jpg" alt="Winner List" className="w-full h-auto" width={1866} height={933}/>

      <HonorableMentions />
    </div>
    <Gallery />
    <Juries />
    <Footer />
    </>
  );
}
