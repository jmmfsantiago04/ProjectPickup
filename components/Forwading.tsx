import React from 'react';

export default function Forwarding() {
  const forwardingDetails = [
    { label: 'Consolidation ...............................................................', value: 'Free' },
    { label: 'Forwarding ...................................................................', value: 'Free*' },
    { label: 'Pick up ......................................................', value: '3,000KRW/Package' },
    { label: '* please refer to the shipping rate as shipping charge', value: '' },
  ];

  return (
    <section className="w-full bg-gray-100">
      <section className="p-24 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Forwarding & Pickup</h1>
        <article className="mt-4 text-2xl text-left max-w-[62.5rem] mx-auto">
          <p>
            If you would like to receive your packages, please use forwarding service <br />
            We could combine multiple packages into one box (consolidation) and ship via EMS, K-packet and other express carriers.<br />
            If you have a plan to visit Korea within the storage period, you can also pick up the delivered items in person from Pickup Korea office with advance notice 7 days prior to the visit date.
          </p>
        </article>
        <section className="bg-[#FDEDCE] p-16 rounded-2xl w-[51.875rem] flex flex-col justify-between mt-16 mx-auto">
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
