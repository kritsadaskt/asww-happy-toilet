"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Winner {
  id: string;
  image: string;
  works_link: string;
  contestant_id: string;
}

const winnersData = [
  {
    id: "comp_group",
    label: "ระดับ บริษัทผู้ออกแบบวิชาชีพ",
    winners: [
      {
        id: "comp_01",
        image: "/awards-winner/comp_01.webp",
        works_link: "",
        contestant_id: "COMP00515",
      },
      {
        id: "comp_02",
        image: "/awards-winner/comp_02.webp",
        works_link: "",
        contestant_id: "COMP00127",
      },
      {
        id: "comp_03",
        image: "/awards-winner/comp_03.webp",
        works_link: "",
        contestant_id: "COMP00165",
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
        contestant_id: "IND00086",
      },
      {
        id: "ind_02",
        image: "/awards-winner/ind_02.webp",
        works_link: "",
        contestant_id: "IND00574",
      },
      {
        id: "ind_03",
        image: "/awards-winner/ind_03.webp",
        works_link: "",
        contestant_id: "IND00644",
      }
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
        contestant_id: "STU00686",
      },
      {
        id: "stu_02",
        image: "/awards-winner/stu_02.webp",
        works_link: "",
        contestant_id: "STU00366",
      }
    ]
  },
  {
    id: "stu_03_group",
    label: "",
    winners: [
      {
        id: "stu_03_1",
        image: "/awards-winner/stu_03_01.png",
        works_link: "",
        contestant_id: "STU00183",
      },
      {
        id: "stu_03_2",
        image: "/awards-winner/stu_03_02.png",
        works_link: "",
        contestant_id: "STU00406",
      },
      {
        id: "stu_03_3",
        image: "/awards-winner/stu_03_03.png",
        works_link: "",
        contestant_id: "STU00619",
      }
    ]
  }
]

export default function AwardWinners() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPdf(null);
      }
    };

    if (selectedPdf) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedPdf]);

  const openPdfModal = (contestantId: string) => {
    setSelectedPdf(contestantId);
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  const WinnerImage = ({ id, image, works_link, contestant_id }: { id: string, image: string, works_link: string, contestant_id: string }) => {
    return (
      <div className="flex flex-col gap-2">
        <Image src={image} alt={id} width={500} height={550} className="w-4/5 mx-auto md:w-auto rounded-xl" />
        <button 
          onClick={() => openPdfModal(contestant_id)}
          data-contestant-id={contestant_id} 
          className="w-full cursor-pointer"
        >
          <Image src={`/awards-winner/${contestant_id}/${contestant_id}.jpg`} alt="view more" width={100} height={100} className="w-full rounded-lg" />
        </button>
      </div>
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
                <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} contestant_id={winner.contestant_id || ""} />
              ))}
            </div>
          </div>
          <div id="ind_group" className="mb-10">
            <Image src="/awards-winner/ind_label.webp" alt="ระดับ ผู้ออกแบบอิสระ และประชาชนทั่วไป" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4">
              {winnersData.find(winner => winner.id === "ind_group")?.winners.map((winner) => (
                <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} contestant_id={winner.contestant_id || ""} />
              ))}
            </div>
          </div>
          <div id="stu_group" className="mb-10">
            <Image src="/awards-winner/stu_label.webp" alt="ระดับ นักศึกษา" className="w-full md:w-3/5 mb-4" width={1920} height={1080} />
            <div className="grid md:grid-cols-3 gap-4 align-top">
              {winnersData.find(winner => winner.id === "stu_group")?.winners.map((winner) => (
                <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} contestant_id={winner.contestant_id || ""} />
              ))}
              <div className="stu-03-group flex flex-col gap-2">
                {winnersData.find(winner => winner.id === "stu_03_group")?.winners.map((winner) => (
                  <WinnerImage key={winner.id} id={winner.id} image={winner.image} works_link={winner.works_link} contestant_id={winner.contestant_id || ""} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-sm md:-mt-20">*ทั้งนี้ การพิจารณาตัดสินของคณะกรรมการถือเป็นเด็ดขาด<br/>
        และเป็นที่สิ้นสุดในทุกกรณี โดยไม่สามารถโต้แย้งหรือเปลี่ยนแปลงใดๆ ในภายหลัง</p>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closePdfModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
            onClick={closePdfModal}
            aria-label="Close PDF modal"
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-full w-full h-full" onClick={(e) => e.stopPropagation()}>
            <embed
              src={`/awards-winner/${selectedPdf}/${selectedPdf}.pdf`}
              type="application/pdf"
              className="w-full h-full min-h-[90vh] rounded-lg"
              title={`PDF for ${selectedPdf}`}
            />
          </div>
        </div>
      )}
    </section>
  )
} 