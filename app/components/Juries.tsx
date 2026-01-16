import Image from "next/image";

const asw_juries = [
  {
    'name': 'คุณกรมเชษฐ์ วิพันธ์พงษ์',
    'th-pos': 'ประธานเจ้าหน้าที่บริหาร',
  },
  {
    'name': 'คุณวีรพันธ์ วิพันธ์พงษ์',
    'th-pos': 'รองประธานเจ้าหน้าที่บริหาร สายงานพัฒนาธุรกิจ',
  },
  {
    'name': 'คุณสมสกุล แสงสุวรรณ',
    'th-pos': 'ประธานเจ้าหน้าที่สายงานพัฒนาธุรกิจและสรรหาที่ดิน',
  },
  {
    'name': 'คุณมานิต ทรัพย์เพิ่ม',
    'th-pos': ' รองประธานสายงานอาวุโส',
  },
  {
    'name': 'คุณศุภกัญญา ชุ่มจินดา',
    'th-pos': 'กรรมการผู้จัดการ กลุ่มธุรกิจใหม่ (โรงแรมและการบริการ)',
  },
]

const ext_juries = [
  {
    'name': 'ดร.บัณฑิต ประดับสุข',
    'th-pos': 'กรรมาธิการฝ่ายวิชาชีพ สมาคมสถาปนิกสยาม ในพระบรมราชูปถัมภ์',
  },
  {
    'name': 'คุณมังกร ชัยเจริญไมตรี',
    'th-pos': 'นายกสมาคมภูมิสถาปนิกประเทศไทย',
  },
  {
    'name': 'คุณพลัช ไพนุพงศ์',
    'th-pos': ' กรรมการสมาคมมัณฑนากรแห่งประเทศไทย (Founder of That’s ITH Interior)',
  },
  {
    'name': 'คุณจุฑา มีพฤกษ์',
    'th-pos': 'วิศวกรโยธาชำนาญการพิเศษ หัวหน้ากลุ่มงานควบคุมอาคาร 1 ส่วนควบคุมอาคาร 2 สำนักงานควบคุมอาคาร สำนักการโยธา',
  }
]

export default function Juries() {
  return (
    <div className="container mx-auto gap-0 md:gap-5 flex flex-col md:flex-row px-3 2xl:px-0 pt-15 pb-10">
        <div className="juries w-full md:w-2/3">
          <h4 className="font-semibold text-2xl md:text-3xl mb-2 md:mb-4">คณะกรรมการตัดสิน</h4>
          <div className="juries-listed">
            <h5 className="font-semibold text-lg mb-2 md:mb-4">กรรมการอิสระ 4 ท่าน</h5>
            <ul>              
            {ext_juries.map((item, i) => (
              <li key={i} className="mb-3">
                <div className="line1 leading-tight flex flex-col gap-1">
                  <strong className="font-semibold block">{item.name}</strong>{item['th-pos']}
                </div>
              </li>
            ))}
            </ul>
            <div className="h-7"></div>
            <h5 className="font-semibold text-lg mb-2 md:mb-4">กรรมการจากบริษัท แอสเซทไวส์ จำกัด (มหาชน) 5 ท่าน</h5>
            <ul className="">              
            {asw_juries.map((item, i) => (
              <li key={i} className="mb-3">
                <div className="line1 leading-tight flex flex-col gap-1">
                  <strong className="font-semibold block">{item.name}</strong> {item['th-pos']}
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className='mt-4 md:mt-0 w-full md:w-1/3'>
          <h4 className="font-semibold text-2xl md:text-3xl mb-4">สนับสนุนโดย</h4>
          <div className="footer-sponsors-logo flex items-center mb-5">
            <Image src="/asw-logo.png" alt="ASW Logo" width={100} height={100} />
          </div>
          <div className='h-5'></div>
        </div> 
      </div>
  )
}