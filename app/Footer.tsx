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
  {
    'name': 'คุณอาระตี เบญจาธิกูล',
    'th-pos': 'รองประธานสายงานอาวุโส ฝ่ายสื่อสารองค์กร, บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
  },
  {
    'name': 'คุณมรุพงษ์ กิจกสิกร',
    'th-pos': 'รองประธานสายงาน ฝ่ายลูกค้าสัมพันธ์, บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
  },
  {
    'name': 'คุณเปรมฤดี เอี่ยมศรีใส',
    'th-pos': 'ผู้จัดการฝ่ายสื่อสารองค์กร, บริษัท แอสเซทไวส์ จำกัด (มหาชน)',
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

function footer () {
  return(
    <footer className='pt-10'>
      <div className="container mx-auto gap-0 md:gap-5 flex flex-col md:flex-row px-3 2xl:px-0">
        <div className="juries w-full md:w-2/3">
          <h4 className="font-semibold text-2xl md:text-3xl mb-2 md:mb-4">คณะกรรมการตัดสิน</h4>
          <div className="juries-listed">
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
            <div className="h-7"></div>
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
          </div>
        </div>
        <div className='mt-4 md:mt-0 w-full md:w-1/3'>
          <h4 className="font-semibold text-2xl md:text-3xl mb-4">สนับสนุนโดย</h4>
          <div className="footer-sponsors-logo flex items-center mb-5">
            
          </div>
          <div className='h-5'></div>
        </div> 
      </div>
      <div className="copyright pt-2 pb-2 mt-4 px-3 2xl:px-0 bg-primary">
        <div className="container mx-auto">
          <div className="copyright-txt text-sm text-center text-white">© Copyright The Happy Toilet Project 2025. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default footer;