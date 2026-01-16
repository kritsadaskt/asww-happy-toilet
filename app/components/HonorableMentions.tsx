const honorableMentions = [
  {
    name: 'คุณกิตติภพ กิตติวิรุฬห์วัฒน',
    work_name: 'หยาดฝนเดือนแปด AUGUST RAIN',
    university: 'โรงเรียนชลราษฎรอำรุง',
  },
  {
    name: 'คุณสุนันทิชา สมบูรณ์ชัย',
    work_name: 'SUK SOD(สุขสุด)',
    university: 'มหาวิทยาลัยเชียงใหม่',
  },
  {
    name: 'คุณรวิภา เชิดธรรมธร, คุณนันทรัตน์ จิญกาญจน์, คุณเปมิกา อวยจินดา, คุณรวิภา เชิดธรรมธร',
    work_name: 'CLOUD 9',
    university: 'มหาวิทยาลัยเกษตรศาสตร์',
  },
  {
    name: 'คุณพัชรา วงชมพู',
    work_name: 'เว็จวิไล',
    university: 'มหาวิทยาลัยราชภัฏสวนสุนันทา',
  },
  {
    name: 'คุณชานน ศรีจันทร์',
    work_name: 'The Blend',
    university: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
  },
  {
    name: 'คุณญาณาธิป บัวเจริญ, คุณพชรพล โชติเธียรชัย, คุณพิมญดา ก้องวิทยาคม, คุณจิดาพร เลิศวิริยะวงศ์',
    work_name: 'ตะเกียบ',
    university: 'เทพศิรินทร์, สตรีวิทยา 2, ศึกษานารี',
  },
  {
    name: 'คุณเจษวิทย์ คำพันธ์',
    work_name: 'Breathing Brick',
    university: 'มหาวิทยาลัยมหาสารคาม',
  },
  {
    name: 'คุณกวิศรา ภัทรชีวกุล, คุณเสฏฐพงศ์ สัญจร , คุณพิภิชพนธ์ ธาดาพิทักษ์พร',
    work_name: 'ธาคู',
    university: 'บดินทรเดชา(สิงห์ สิงหเสนี), เทพศิรินทร์',
  },
  {
    name: 'คุณภาณุพงศ์ ห่านฟ้างาม, คุณยุทธภรณ์ หาญยูรพงษ์',
    work_name: 'พนาธาร',
    university: 'มหาวิทยาลัยเชียงใหม่',
  },
  {
    name: 'คุณสุทธิพงค์ คามทิตย์, คุณพสธร กีฬา',
    work_name: 'TWIST',
    university: 'มหาวิทยาลัยขอนเเก่น',
  },
];

export default function HonorableMentions() {
  return (
    <section id="honorable-mentions" className="">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-t-4 border-primary flex flex-col gap-4">
            <h2 className="text-2xl font-semibold mb-3" style={{ color: '#371c5d' }}>รางวัลชมเชย 10 รางวัล</h2>
            <div className="table-responsive overflow-x-auto border border-gray-200 md:border-none mb-5">
              <table className="w-[800px] md:w-full border-collapse md:rounded-lg overflow-x-auto shadow-sm bg-white">
                <thead>
                  <tr style={{ background: 'linear-gradient(90deg,#ff37ad 0%,#9862bf 100%)' }}>
                    <th className="px-4 py-3 text-left text-white lg:text-lg font-medium">ชื่อผู้ส่งผลงาน</th>
                    <th className="px-4 py-3 text-center text-white lg:text-lg font-medium">ชื่อผลงาน</th>
                    <th className="px-4 py-3 text-center text-white lg:text-lg font-medium">สถานศึกษา</th>
                  </tr>
                  </thead>
                <tbody>
                  {honorableMentions.map((mention, index) => (
                    <tr key={index} className="even:bg-purple-50">
                      {/* <td className="text-center text-primary text-lg font-medium px-4 py-3">{index + 1}.</td> */}
                      <td className="px-4 py-3 text-left text-primary lg:text-lg font-medium">{mention.name}</td>
                      <td className="px-4 py-3 text-center text-primary lg:text-lg">{mention.work_name}</td>
                      <td className="px-4 py-3 text-center text-primary lg:text-lg">{mention.university}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </section>
  )
}