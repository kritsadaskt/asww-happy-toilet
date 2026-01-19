import Image from "next/image";

export default function AwardWinners() {
  return (
    <section id="award_winners" className="lg:pt-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 lg:py-8 max-w-6xl">
        <Image src="/awards-winner/awards_headline.webp" alt="ประกาศผลการประกวด การออกแบบห้องน้ำสาธารณะ" width={1920} height={1080} className="md:w-4/5 w-full -translate-x-8 md:-translate-x-12 lg:-translate-x-17"/>
        <div id="winners" className="-translate-y-4 md:-translate-y-12">
          <div id="comp_group" className="mb-10">
            <Image src="/awards-winner/comp_label.webp" alt="ระดับ บริษัทผู้ออกแบบวิชาชีพ" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              <Image src="/awards-winner/comp_01.webp" alt="รางวัลชนะเลิศระดับ บริษัทผู้ออกแบบวิชาชีพ" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
              <Image src="/awards-winner/comp_02.webp" alt="รางวัลรองชนะเลิศอันดับ 1 ระดับ บริษัทผู้ออกแบบวิชาชีพ" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
              <Image src="/awards-winner/comp_03.webp" alt="รางวัลรองชนะเลิศอันดับ 2 ระดับ บริษัทผู้ออกแบบวิชาชีพ" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
            </div>
          </div>
          <div id="ind_group" className="mb-10">
            <Image src="/awards-winner/ind_label.webp" alt="ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              <Image src="/awards-winner/ind_01.webp" alt="รางวัลชนะเลิศระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
              <Image src="/awards-winner/ind_02.webp" alt="รางวัลรองชนะเลิศอันดับ 1 ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
              <Image src="/awards-winner/ind_03.webp" alt="รางวัลรองชนะเลิศอันดับ 2 ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
            </div>
          </div>
          <div id="stu_group" className="mb-10">
            <Image src="/awards-winner/stu_label.webp" alt="ระดับ นักศึกษา" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              <Image src="/awards-winner/stu_01.webp" alt="รางวัลชนะเลิศระดับ นักศึกษา" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
              <Image src="/awards-winner/stu_02.webp" alt="รางวัลรองชนะเลิศอันดับ 1 ระดับ นักศึกษา" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
              <Image src="/awards-winner/stu_03.webp" alt="รางวัลรองชนะเลิศอันดับ 2 ระดับ นักศึกษา" width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 