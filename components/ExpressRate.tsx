import React from 'react';

const ExpressRate: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] h-auto py-12 px-4 sm:py-24 sm:px-8 md:px-16 lg:px-32 gap-8 mx-auto">
      <h2 className="font-sans text-3xl sm:text-4xl md:text-4xl lg:text-[40px] font-bold leading-tight text-left">
        Express Rate Table
      </h2>
      <p className="w-full text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight text-left mb-8 sm:mb-16">
        (UPS/Fedex/DHL/TXT – cannot choose carrier)
      </p>
      <article className="w-full h-auto px-4 sm:px-8 gap-8 sm:gap-[3.5rem]">
        <ul className="list-disc pl-4 mt-4 sm:pl-6 sm:mt-[3.5rem]">
          <li className="text-base leading-relaxed text-left mt-4 sm:text-lg md:text-xl lg:text-2xl">
            The postage is applied to the higher of the actual weight and volume weight of the mail.
          </li>
          <li className="list-none text-base leading-relaxed text-left mt-4 ml-4 sm:text-lg sm:ml-8 md:text-xl lg:text-2xl">
            Volume weight (kg): Width (cm) X Length (cm) X Height (cm) / 6,000
          </li>
          <li className="text-base leading-relaxed text-left mt-4 sm:text-lg md:text-xl lg:text-2xl">
            The delivery date will take about 3-7 days.
          </li>
          <li className="text-base leading-relaxed text-left mt-4 sm:text-lg md:text-xl lg:text-2xl">
            Please check the ZONE containing your country first and then check the rate.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ExpressRate;
