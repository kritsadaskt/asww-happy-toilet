import Image from "next/image";
export default function ScoringCategory() {
  return(
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="w-full">
          <section className="bg-gradient-to-b from-[#440d80] to-[#c365d6] rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl text-center sm:text-3xl font-bold mb-3 sm:mb-4  text-white">หลักเกณฑ์การตัดสิน</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-2 md:p-7">
                <Image src="/Function.png" alt="Function" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-3xl font-semibold mb-2 sm:mb-3 text-center text-white">Function</h3>
                <p className="text-sm sm:text-base text-center text-white">การออกแบบที่ใช้งานได้จริง สะดวก ปลอดภัย และตอบโจทย์ผู้ใช้</p>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/Aesthetic.png" alt="Aesthetics" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-3xl font-semibold mb-2 sm:mb-3 text-center text-white">Aesthetic</h3>
                <p className="text-sm sm:text-base text-center text-white">ความสวยงาม กลมกลืน และสร้างบรรยากาศที่น่าประทับใจ</p>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/SUSTAINABILITY.png" alt="Sustainability" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-3xl font-semibold mb-2 sm:mb-3 text-center text-white">Sustainability</h3>
                <p className="text-sm sm:text-base text-center text-white">การใช้ทรัพยากรอย่างมีประสิทธิภาพและเป็นมิตรต่อสิ่งแวดล้อม</p>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/Creativity.png" alt="Creativity" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-3xl font-semibold mb-2 sm:mb-3 text-center text-white">Creativity</h3>
                <p className="text-sm sm:text-base text-center text-white">ความคิดสร้างสรรค์ที่แปลกใหม่และสื่อแนวคิดได้อย่างชัดเจน</p>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/TECHNOLOGY.png" alt="Technology" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-3xl font-semibold mb-2 sm:mb-3 text-center text-white">Technology</h3>
                <p className="text-sm sm:text-base text-center text-white">การนำเทคโนโลยีมาช่วยเพิ่มความสะดวก สุขอนามัย และประสิทธิภาพ</p>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/CONSTRUCTABILITY.png" alt="Constructability" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-3xl font-semibold mb-2 sm:mb-3 text-center text-white">Constructability</h3>
                <p className="text-sm sm:text-base text-center text-white">ความเป็นไปได้ในการก่อสร้างจริง ดูแลง่าย และควบคุมคุณภาพได้</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}