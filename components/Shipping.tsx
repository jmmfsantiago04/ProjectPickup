import React from 'react';

const Shipping: React.FC = () => {
  return (
    <section className="max-w-[80rem] h-auto top-[13.75rem] p-4 sm:p-24 gap-8 mx-auto">
      <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight text-left">
        EMS & K-packet Official Rate Table
      </h2>
      <article className="w-full max-w-[76rem] h-auto p-2 sm:p-8 gap-14">
        <p className="w-full max-w-[72rem] mt-4 text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight text-left">
          ※ The international mail fee below includes additional transportation fees and additional handling fees.
        </p>
        <ul className="list-disc pl-4 sm:pl-6 mt-4 sm:mt-14">
          <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left mt-4">
            The postage is applied to the higher of the actual weight and volume weight of the mail.
          </li>
          <li className="list-none text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left mt-4 ml-4 sm:ml-8">
            Volume weight (kg): Width (cm) X Length (cm) X Height (cm) / 6,000
          </li>
          <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left mt-4">
            The delivery date will take about 3-7 days.
          </li>
          <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left mt-4">
            The EMS delivery limit is 30kg mostly, but we handle up to about 20KG for the safety of the delivery man.
          </li>
          <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left mt-4">
            If you want to send small package under 2kg, you can choose K-packets. However, the delivery can take about 2-4 weeks.
          </li>
          <li className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left mt-4">
            If you cant find your country in the table below, you can check the Rate by clicking the link:
          </li>
        </ul>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-left inline-block mt-4 ml-1">
          <a href="https://ems.epost.go.kr/front.EmsDeliveryDelivery09.postal?langtype=en" className="text-blue-500 underline">
            https://ems.epost.go.kr/front.EmsDeliveryDelivery09.postal?langtype=en
          </a>
        </span>
      </article>
    </section>
  );
};

export default Shipping;
