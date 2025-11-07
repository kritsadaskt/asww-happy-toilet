import Image from "next/image";
import { Suspense } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Jury from "./components/Jury";
import MainObjective from "./components/MainObjective";
import EntryDetails from "./components/EntryDetails";
import ScoringCategory from "./components/ScoringCategory";
import Introduction from "./components/Introduction";
import DesignChallenge from "./components/DesignChallenge";
import AwardTypes from "./components/AwardTypes";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-purple-50 to-white">
      {/* Key Visual Section */}
      <section id="kv" className="w-full bg-white">
        <Image src="happy_toilet_desktop_banner.png" alt="ASW Happy Toilet KV" className="w-full h-auto hidden md:block" width={1866} height={933}/>
        <Image src="happy_toilet_mobile_banner.png" alt="ASW Happy Toilet KV" className="w-full h-auto md:hidden" width={1866} height={933}/>
      </section>

      {/* Main Content */}
      <main className="">
        
        <Introduction/>
        <MainObjective/>
        <AwardTypes/>
        <DesignChallenge/>
        <ScoringCategory/>
        <EntryDetails/>
        <Jury/>
          
        {/* Call to Action */}
        <section className="w-full px-4 py-6 text-center shadow-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9862bf 0%, #ff37ad 100%)' }}>
          <div className="container mx-auto px-0 py-8 max-w-5xl text-white text-[18px] md:text-3xl flex flex-col gap-2">
            <p><strong>กำหนดส่งผลงาน :</strong> 17 พ.ย. - 31 ธ.ค. 2568</p>
            <p><strong>ประกาศผล :</strong> 16 ม.ค. 2569</p>
          </div>
        </section>

      </main>
      <Suspense fallback={<div className="container mx-auto px-4 py-12">Loading...</div>}>
        <Form/>
      </Suspense>
      <Footer />
    </div>
  );
}
