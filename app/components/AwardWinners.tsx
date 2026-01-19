import Image from "next/image";

const winnersData = [
  {
    id: "comp_group",
    label: "ระดับ บริษัทผู้ออกแบบวิชาชีพ",
    winners: [
      {
        id: "comp_01",
        image: "/awards-winner/comp_01.webp",
        works_link: "",
      },
      {
        id: "comp_02",
        image: "/awards-winner/comp_02.webp",
        works_link: "",
      },
      {
        id: "comp_03",
        image: "/awards-winner/comp_03.webp",
        works_link: "",
      },
    ]
  },
  {
    id: "ind_group",
    label: "ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป",
    winners: [
      {
        id: "ind_01",
        image: "/awards-winner/ind_01.webp",
        works_link: "",
      },
      {
        id: "ind_02",
        image: "/awards-winner/ind_02.webp",
        works_link: "",
      },
      {
        id: "ind_03",
        image: "/awards-winner/ind_03.webp",
        works_link: "",
      },
    ]
  },
  {
    id: "stu_group",
    label: "ระดับ นักศึกษา",
    winners: [
      {
        id: "stu_01",
        image: "/awards-winner/stu_01.webp",
        works_link: "",
      },
      {
        id: "stu_02",
        image: "/awards-winner/stu_02.webp",
        works_link: "",
      },
      {
        id: "stu_03",
        image: "/awards-winner/stu_03.webp",
        works_link: "",
      },
    ]
  }
]

export default function AwardWinners() {
  const WinnerImage = ({ id, image, works_link }: { id: string, image: string, works_link: string }) => {
    return (
      <a href={works_link} target="_blank" rel="noopener noreferrer" className="lg:hover:scale-105 transition-transform duration-300">
        <Image src={image} alt={id} width={500} height={550} className="w-4/5 mx-auto md:w-auto" />
      </a>
    )
  }
  return (
    <section id="award_winners" className="lg:pt-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 lg:py-8 max-w-6xl">
        <Image src="/awards-winner/awards_headline.webp" alt="ประกาศผลการประกวด การออกแบบห้องน้ำสาธารณะ" width={1920} height={1080} className="md:w-4/5 w-full -translate-x-8 md:-translate-x-12 lg:-translate-x-17"/>
        <div id="winners" className="-translate-y-4 md:-translate-y-12">
          <div id="comp_group" className="mb-10">
            <Image src="/awards-winner/comp_label.webp" alt="ระดับ บริษัทผู้ออกแบบวิชาชีพ" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              {winnersData.find(winner => winner.id === "comp_group")?.winners.map((winner) => (
                <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} />
              ))}
            </div>
          </div>
          <div id="ind_group" className="mb-10">
            <Image src="/awards-winner/ind_label.webp" alt="ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              {winnersData.find(winner => winner.id === "ind_group")?.winners.map((winner) => (
                <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} />
              ))}
            </div>
          </div>
          <div id="stu_group" className="mb-10">
            <Image src="/awards-winner/stu_label.webp" alt="ระดับ นักศึกษา" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              {winnersData.find(winner => winner.id === "stu_group")?.winners.map((winner) => (
                <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 