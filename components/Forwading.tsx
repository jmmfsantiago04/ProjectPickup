import React from 'react';

export default function Forwarding() {
  const forwardingDetails = [
    { label: 'Consolidation ..........................................................', value: 'Free' },
    { label: 'Forwarding .............................................................', value: 'Free*' },
    { label: 'Pick up ................................................', value: '3,000KRW/Package' },
    { label: '* please refer to the shipping rate as shipping charge', value: '' },
  ];

  return (
    <section className="w-full bg-primaryGray">
    <section className="py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center">
    <h1 className="text-[2.5rem] leading-[3.405rem] font-bold text-center mb-24">Forwarding & Pickup</h1>
        <article className="text-2xl text-left max-w-[62.5rem] mx-auto">
          <p>
            If you would like to receive your packages, please use forwarding service <br />
            We could combine multiple packages into one box (consolidation) and ship via EMS, K-packet and other express carriers.<br />
            If you have a plan to visit Korea within the storage period, you can also pick up the delivered items in person from Pickup Korea office with advance notice 7 days prior to the visit date.
          </p>
        </article>
        <section className="bg-primaryBeige py-16 px-[3.8375rem] rounded-3xl w-[51.875rem]  flex-col justify-start my-24 mx-[5.3125rem]">
        {forwardingDetails.map((item, index) => (
            <article key={index} className="flex justify-between mb-4 w-full">
              <span className="font-bold text-2xl">{item.label}</span>
              {item.value && <span className="font-bold text-2xl">{item.value}</span>}
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}
