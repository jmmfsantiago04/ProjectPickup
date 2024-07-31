import React from "react";

const data = [
  { title: "EMS", url: "https://ems.epost.go.kr/front.Tracking01Eng.postal" },
  { title: "FEDEX", url: "https://www.fedex.com/en-kr/home.html" },
  { title: "UPS", url: "https://www.ups.com/us/en/Home.page" },
  { title: "DHL", url: "https://www.dhl.com/kr-en/home/tracking.html" },
];

const QuickResponse = () => {
  return (
    <section className="py-12 md:py-24">
      <h3 className="text-2xl md:text-[4rem] font-bold text-center mb-8 md:mb-16">
        Why Pickup Korea?
      </h3>
      <div className="space-y-12 md:space-y-[3.44rem]">
        <article className="bg-primaryOrange py-12 md:py-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center">
              <div className="relative flex-shrink-0 h-48 md:h-[19.0625rem] w-48 md:w-[20.9375rem] mx-auto">
                <img
                  src="/clock.png"
                  alt="Clock"
                  className="absolute object-cover top-0 left-0 w-full h-full"
                />
              </div>
              <dl className="flex flex-col gap-4 md:gap-8 text-center md:text-left">
                <dt className="text-xl md:text-[2.5rem] font-bold">Quick response</dt>
                <dd className="text-lg md:text-[2rem] max-w-full md:max-w-[48rem] leading-[100%]">
                  We work from 9 to 5 p.m. in Korean time during weekdays, but
                  the KakaoTalk chat is always open to respond to your urgent
                  request. <br /> Please understand that it may be difficult to
                  respond immediately.
                </dd>
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="relative size-[6.875rem]">
                    <img
                      src="/talk.png"
                      alt="KakaoTalk"
                      loading="lazy"
                      className="absolute object-cover top-0 left-0 w-full h-full"
                    />
                  </div>
                  <div className="relative size-[6.875rem]">
                    <img
                      src="/qrcode.png"
                      alt="QR Code"
                      loading="lazy"
                      className="absolute object-cover top-0 left-0 w-full h-full"
                    />
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </article>
        <article className="py-12 md:py-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 justify-center items-center">
              <div className="relative flex-shrink-0 h-48 md:h-[19.0625rem] w-48 md:w-[20.9375rem] mx-auto">
                <img
                  src="/plane.png"
                  alt="Airplane"
                  className="absolute object-cover top-0 left-0 w-full h-full"
                />
              </div>
              <dl className="flex flex-col gap-4 md:gap-8 text-center md:text-left">
                <dt className="text-xl md:text-[2.5rem] font-bold">
                  Free services & Cheap delivery.
                </dt>
                <dd className="text-lg md:text-[2rem] max-w-full md:max-w-[45rem] leading-[100%]">
                  Free address! Even package consolidation and re-packing are
                  offered by no extra cost.
                  <br />
                  You can choose the better shipper between EMS and Express
                  carrier like FEDEX, UPS and DHL.
                </dd>
              </dl>
            </div>
          </div>
        </article>
        <article className="bg-primaryOrange py-12 md:py-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center">
              <div className="relative flex-shrink-0 h-48 md:h-[19.0625rem] w-48 md:w-[20.9375rem] mx-auto">
                <img
                  src="/hand.png"
                  alt="Hand"
                  className="absolute object-cover top-0 left-0 w-full h-full"
                />
              </div>
              <dl className="flex flex-col gap-4 md:gap-8 text-center md:text-left">
                <dt className="text-xl md:text-[2.5rem] font-bold">Friendly helper</dt>
                <dd className="text-lg md:text-[2rem] max-w-full md:max-w-[45rem] leading-[100%]">
                  Friendly customer service is ready to meet your various needs.
                  Whatever ask if you need any help about shopping in Korea.
                </dd>
              </dl>
            </div>
          </div>
        </article>
        <div className="py-20 px-4 sm:px-16 flex items-center justify-center">
      <div className="relative w-full sm:w-[1152px] h-auto sm:h-[799px] p-6 sm:p-[99.5px_288.5px] bg-primaryBeige rounded-[25px] flex flex-col items-center justify-center gap-8 sm:gap-16">
        <h4 className="text-2xl sm:text-[4rem] font-bold text-center whitespace-nowrap">
          CHECK TRACKING
        </h4>
        <dl className="text-lg sm:text-2xl space-y-4 flex flex-col gap-4">
          {data.map((item) => (
            <React.Fragment key={item.title}>
              <dt className="text-xl sm:text-[2.5rem] font-bold">{item.title}</dt>
              <dd className="text-lg sm:text-2xl break-all">
                <a href={item.url} target="_blank" rel="noreferrer" className="break-all">
                  {item.url}
                </a>
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
    </div>
    </section>
  );
};

export default QuickResponse;