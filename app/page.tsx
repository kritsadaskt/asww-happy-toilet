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
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-4/5 text-left text-white text-xl mb-5 md:mb-0">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>กำหนดส่งผลงาน :</strong> 15 พย. - 17 ธค. 2568</p>
                </div>
                <div>
                  <p><strong>ประกาศผล :</strong> 25 ธค.2568</p>
                </div>
                <div className="md:col-span-2">
                  <p><strong>ประเภทการส่งผลงาน :</strong> Digital File or PrintOut</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/5">
              <a href="#form" className="bg-white text-purple-900 px-4 py-2 rounded-lg text-xl font-medium">Enter Contest</a>
            </div>
          </div>
        </section>

      </main>
      <Form/>
      <Footer />
    </div>
  );
}
