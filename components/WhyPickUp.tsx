import Image from 'next/image';

const QuickResponse = () => {
  return (
    <div className="w-full h-auto bg-grey relative p-4">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center mb-9">Why Pickup Korea?</h1>
      <div className="w-full h-auto bg-grey relative space-y-16">
        <div className="relative w-full h-auto bg-[#F8B62D] flex items-center py-8 md:py-16 px-4 md:px-16">
          <div className="flex items-center space-x-8 max-w-5xl mx-auto">
            <div className="relative w-[335px] h-[330px] flex-shrink-0">
              <Image src="/clock.png" alt="Clock" layout="fill" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Quick response</h2>
              <p className="text-xl md:text-2xl leading-tight">
                We work from 9 to 5 p.m. in Korean time during weekdays, but the KakaoTalk chat is always open to respond to your urgent request.
                Please understand that it may be difficult to respond immediately.
              </p>
              <div className="flex items-center space-x-4">
                <div className="relative w-[110px] h-[110px]">
                  <Image src="/talk.png" alt="KakaoTalk" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-[110px] h-[110px]">
                  <Image src="/qrcode.png" alt="QR Code" layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-auto bg-white flex items-center py-8 md:py-16 px-4 md:px-16">
          <div className="flex items-center space-x-8 max-w-5xl mx-auto">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Free services & Cheap delivery</h2>
              <p className="text-xl md:text-2xl leading-tight">
                Free address! Even package consolidation and re-packing are offered at no extra cost.
                You can choose the better shipper between EMS and Express carrier like FEDEX, UPS, and DHL.
              </p>
            </div>
            <div className="relative w-[335px] h-[330px] flex-shrink-0">
              <Image src="/plane.png" alt="Airplane" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        <div className="relative w-full h-auto bg-[#F8B62D] flex items-center py-8 md:py-16 px-4 md:px-16">
          <div className="flex items-center space-x-8 max-w-5xl mx-auto">
            <div className="relative w-[335px] h-[330px] flex-shrink-0">
              <Image src="/hand.png" alt="Hand" layout="fill" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Friendly helper</h2>
              <p className="text-xl md:text-2xl leading-tight">
                Friendly customer service is ready to meet your various needs. Whatever ask if you need any help about shopping in Korea.
              </p>
            </div>
          </div>
        </div>
          <div className="flex items-center space-x-16 max-w-[1280px] mx-auto">
            <div className="relative w-[1152px] h-[799px] p-[99.5px_288.5px] bg-[#FDEDCE] rounded-[25px_25px_25px_25px] flex flex-col items-center justify-center gap-16">
              <h2 style={{ fontSize: '64px', fontWeight: '700', lineHeight: '87.17px', textAlign: 'left' }}>CHECK TRACKING</h2>
              <div className="text-2xl space-y-4">
                <p style={{ fontSize: '40px', fontWeight: '700', lineHeight: '54.48px', textAlign: 'left' }}>
                  <strong>EMS</strong><br />
                  <a href="https://ems.epost.go.kr/front.Tracking01Eng.postal" target="_blank" rel="noopener noreferrer">https://ems.epost.go.kr/front.Tracking01Eng.postal</a>
                </p>
                <p style={{ fontSize: '40px', fontWeight: '700', lineHeight: '54.48px', textAlign: 'left' }}>
                  <strong>FEDEX</strong><br />
                  <a href="https://www.fedex.com/en-kr/home.html" target="_blank" rel="noopener noreferrer">https://www.fedex.com/en-kr/home.html</a>
                </p>
                <p style={{ fontSize: '40px', fontWeight: '700', lineHeight: '54.48px', textAlign: 'left' }}>
                  <strong>UPS</strong><br />
                  <a href="https://www.ups.com/us/en/Home.page" target="_blank" rel="noopener noreferrer">https://www.ups.com/us/en/Home.page</a>
                </p>
                <p style={{ fontSize: '40px', fontWeight: '700', lineHeight: '54.48px', textAlign: 'left' }}>
                  <strong>DHL</strong><br />
                  <a href="https://www.dhl.com/kr-en/home/tracking.html" target="_blank" rel="noopener noreferrer">https://www.dhl.com/kr-en/home/tracking.html</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default QuickResponse;
