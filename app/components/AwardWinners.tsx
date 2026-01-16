import Image from "next/image";

export default function AwardWinners() {
  return (
    <section id="award_winners" className="pt-10">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
        <Image src="/winner-mockup-desktop-transparent.webp" alt="Award Winners" width={1920} height={1080} />
      </div>
    </section>
  )
} 