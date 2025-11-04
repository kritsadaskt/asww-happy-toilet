import Image from "next/image";
export default function ScoringCategory() {
  return(
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="w-full">
          <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
            <h2 className="text-xl text-center sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>หมวดการให้คะแนน</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-2 md:p-7">
                <Image src="/Function.png" alt="Function" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#371c5d' }}>Function</h3>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/Aesthetic.png" alt="Aesthetics" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#371c5d' }}>Aesthetics</h3>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/SUSTAINABILITY.png" alt="Sustainability" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#371c5d' }}>Sustainability</h3>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/Creativity.png" alt="Creativity" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#371c5d' }}>Creativity</h3>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/TECHNOLOGY.png" alt="Technology" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#371c5d' }}>Technology</h3>
              </div>
              <div className="p-2 md:p-7">
                <Image src="/CONSTRUCTABILITY.png" alt="Constructability" className="w-full aspect-square mb-4" width={500} height={500} />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center" style={{ color: '#371c5d' }}>Constructability</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}