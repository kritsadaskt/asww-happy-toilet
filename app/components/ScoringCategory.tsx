import Image from "next/image";
export default function ScoringCategory() {
  return(
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="w-full md:w-1/2">
          <Image src="/The-Happy-Toilet-Album-8.png" alt="ASW Happy Toilet KV" className="w-full aspect-square" width={1000} height={1000} />
        </div>
        <div className="w-full md:w-1/2">
          <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>หมวดการให้คะแนน</h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#371c5d' }}>
              เรามองหาการออกแบบที่ผสมผสานระหว่าง ประโยชน์ใช้สอย (Function), ความสวยงาม (Aesthetics), ความยั่งยืน (Sustainability), ความคิดสร้างสรรค์ (Creativity), เทคโนโลยี (Technology) และความสามารถในการก่อสร้างจริง (Constructability) โดยเป็นแบบที่สามารถปรับใช้ได้กับบริบททางสังคมและสิ่งแวดล้อมที่หลากหลายในประเทศไทย
            </p>
          </section>
        </div>
      </div>
    </>
  )
}