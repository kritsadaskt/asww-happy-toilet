import Image from "next/image";
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
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white">
      {/* Key Visual Section */}
      <section id="kv" className="w-full bg-white">
        <Image src="HappyToilet_Desktop_banner.jpg" alt="ASW Happy Toilet KV" className="w-full h-auto hidden md:block" width={1866} height={933}/>
          <img src="https://assetwise.co.th/happy-toilet-test/asw-happy-toilet-kv.png" alt="ASW Happy Toilet KV" className="w-full h-auto md:h-[520px] object-contain md:hidden" />
      </section>

      {/* Main Content */}
      <main className="">
        
        <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12 max-w-5xl">

          <Introduction/>
          <MainObjective/>
          <AwardTypes/>
          <DesignChallenge/>
          <ScoringCategory/>
          <EntryDetails/>
          <Jury/>
          
        </div>

        {/* Call to Action */}
        <section className="w-full mb-8 sm:mb-12 p-6 sm:p-8 text-center shadow-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #9862bf 0%, #ff37ad 100%)' }}>
          <div className="container mx-auto px-0 py-8 max-w-5xl text-white text-xl md:text-3xl flex flex-col gap-2">
            <p><strong>กำหนดส่งผลงาน :</strong> 15 พย. - 17 ธค. 2568</p>
            <p><strong>ประกาศผล :</strong> 25 ธค.2568</p>
          </div>
        </section>

      </main>
      <Form/>
      <Footer />
    </div>
  );
}
