import React from 'react';

const RateTable: React.FC = () => {
  return (
    <section className="max-w-[80rem] h-auto top-[13.75rem] p-[6rem_2rem] gap-[4rem] mx-auto">
      <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight text-left">
        EMS & K-packet Official Rate Table
      </h2>
      <article className="w-full max-w-[76rem] h-auto p-[0_2rem] gap-[3.5rem]">
        <p className="w-full max-w-[72rem] h-[5.5rem] mt-[4rem] text-2xl md:text-3xl font-bold leading-tight text-left">
          ※ The international mail fee below includes additional transportation fees and additional handling fees.
        </p>
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
            The EMS delivery limit is 30kg mostly, but we handle up to about 20KG for the safety of the delivery man.
          </li>
          <span className="inline-block text-xl md:text-2xl font-normal leading-relaxed text-left mt-4"></span>
          <li className="text-xl md:text-2xl font-normal leading-relaxed text-left mt-4">
            If you want to send small package under 2kg, you can choose K-packets. However, the delivery can take about 2-4 weeks.
          </li>
          <span className="inline-block text-xl md:text-2xl font-normal leading-relaxed text-left mt-4"></span>
          <li className="text-xl md:text-2xl font-normal leading-relaxed text-left mt-4">
            If you cant find your country in the table below, you can check the Rate by clicking the link:
          </li>
          <span className="inline-block text-xl md:text-2xl font-normal leading-relaxed text-left mt-4"></span>
        </ul>
        <span className="text-xl md:text-2xl font-normal leading-relaxed text-left inline-block ml-1">
          <a href="https://ems.epost.go.kr/front.EmsDeliveryDelivery09.postal?langtype=en" className="text-blue-500 ml-4 underline">
            https://ems.epost.go.kr/front.EmsDeliveryDelivery09.postal?langtype=en
          </a>
        </span>
      </article>
    </section>
  );
};

export default RateTable;
