import Image from "next/image";
export default function Jury() {
  return(
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/2">
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4" style={{ borderTopColor: '#9862bf' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#371c5d' }}>คณะกรรมการตัดสิน</h2>
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: '#371c5d' }}>
            <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>สมาคมสถาปนิกสยาม ในพระบรมราชูปถัมภ์</strong></p>
            <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>สมาคมมัณฑนากรแห่งประเทศไทย</strong></p>
            <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>สมาคมภูมิสถาปนิกประเทศไทย</strong></p>
            <p className="pl-2 sm:pl-4">- ตัวแทนจาก <strong>กรุงเทพมหานคร</strong></p>
            <p className="pl-2 sm:pl-4">- คณะกรรมการจาก <strong>แอสเซทไวส์</strong></p>
          </div>
        </section>
      </div>
    </div>
  )
}