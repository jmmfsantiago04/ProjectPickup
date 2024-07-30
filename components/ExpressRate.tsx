import React from 'react';

const ExpressRate: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] h-auto top-[13.75rem] py-24 px-8 sm:px-16 md:px-32 gap-16 mx-auto">
      <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight text-left">
        Express Rate Table
      </h2>
      <p className="w-full max-w-[72rem] h-[5.5rem] text-2xl md:text-3xl font-bold leading-tight text-left mb-16">
        (UPS/Fedex/DHL/TXT – can not choose carrier)
      </p>
      <article className="w-full max-w-[76rem] h-auto px-8 gap-[3.5rem]">
        <ul className="list-disc pl-6 mt-[3.5rem]">
          <li className="text-xl md:text-2xl font-normal leading-relaxed text-left mt-4">
            The postage is applied to the higher of the actual weight and volume weight of the mail.
          </li>
          <span className="inline-block text-xl md:text-2xl font-normal leading-relaxed text-left mt-4"></span>
          <li className="text-xl md:text-2xl font-normal leading-relaxed text-left list-none ml-20">
            Volume weight (kg): Width (cm) X Length (cm) X Height (cm) / 6,000
          </li>
          <span className="inline-block text-xl md:text-2xl font-normal leading-relaxed text-left mt-4"></span>
          <li className="text-xl md:text-2xl font-normal leading-relaxed text-left mt-4">
            The delivery date will take about 3-7 days.
          </li>
          <span className="inline-block text-xl md:text-2xl font-normal leading-relaxed text-left mt-4"></span>
          <li className="text-xl md:text-2xl font-normal leading-relaxed text-left mt-4">
            Please check the ZONE containing your country first and then check the rate.
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ExpressRate;

