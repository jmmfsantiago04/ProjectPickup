import React from "react";

const data = [
  { title: "EMS", url: "https://ems.epost.go.kr/front.Tracking01Eng.postal" },
  { title: "FEDEX", url: "https://www.fedex.com/en-kr/home.html" },
  { title: "UPS", url: "https://www.ups.com/us/en/Home.page" },
  { title: "DHL", url: "https://www.dhl.com/kr-en/home/tracking.html" },
];

const QuickResponse = () => {
  return (
    <section className="py-24">
      <h3 className="text-[4rem] font-bold text-center mb-16">
        Why Pickup Korea?
      </h3>
      <div className="space-y-[3.44rem]">
        <article className="bg-primaryOrange py-24 px-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex gap-20 justify-center">
              <div className="relative flex-shrink-0 h-[19.0625rem] w-[20.9375rem]">
                <img
                  src="/clock.png"
                  alt="Clock"
                  height={330}
                  width={335}
                  className="absolute object-cover top-0 left-0 w-full h-full"
                />
              </div>
              <dl className="flex flex-col gap-8">
                <dt className="text-[2.5rem] font-bold">Quick response</dt>
                <dd className="text-[2rem] max-w-[48rem] leading-[100%]">
                  We work from 9 to 5 p.m. in Korean time during weekdays, but
                  the KakaoTalk chat is always open to respond to your urgent
                  request. <br /> Please understand that it may be difficult to
                  respond immediately.
                </dd>
                <div className="flex items-center space-x-4">
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
        <article className="py-24 px-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex gap-20 justify-center flex-row-reverse items-center">
              <div className="relative flex-shrink-0 h-[19.0625rem] w-[20.9375rem]">
                <img
                  src="/plane.png"
                  alt="Airplane"
                  height={330}
                  width={335}
                  className="absolute object-cover top-0 left-0 w-full h-full"
                />
              </div>
              <dl className="flex flex-col gap-8">
                <dt className="text-[2.5rem] font-bold">
                  Free services & Cheap delivery.
                </dt>
                <dd className="text-[2rem] max-w-[45rem] leading-[100%]">
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
        <article className="bg-primaryOrange py-24 px-16">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex gap-20 justify-center items-center">
              <div className="relative flex-shrink-0 h-[19.0625rem] w-[20.9375rem]">
                <img
                  src="/hand.png"
                  alt="Hand"
                  height={330}
                  width={335}
                  className="absolute object-cover top-0 left-0 w-full h-full"
                />
              </div>
              <dl className="flex flex-col gap-8">
                <dt className="text-[2.5rem] font-bold">Friendly helper</dt>
                <dd className="text-[2rem] max-w-[45rem] leading-[100%]">
                  Friendly customer service is ready to meet your various needs.
                  Whatever ask if you need any help about shopping in Korea.
                </dd>
              </dl>
            </div>
          </div>
        </article>
        <div className="py-20 px-16 flex items-center justify-center">
          <div className="relative w-[1152px] h-[799px] p-[99.5px_288.5px] bg-primaryBeige rounded-[25px_25px_25px_25px] flex flex-col items-center justify-center gap-16">
            <h4 className="text-[4rem] font-bold text-center">
              CHECK TRACKING
            </h4>
            <dl className="text-2xl space-y-4 flex flex-col gap-4">
              {data.map((item) => (
                <React.Fragment key={item.title}>
                  <dt className="text-[2.5rem] font-bold">{item.title}</dt>
                  <dd className="text-2xl">
                    <a href={item.url} target="_blank" rel="noreferrer">
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
