import React from 'react';

export default function Warehouse() {
  const warehouseDetails = [
    { label: 'Korean Address ....................................................', value: 'Free' },
    { label: 'Storage (up to 30 days) ....................................................', value: 'Free' },
    { label: 'Extension Storage ....................................................', value: 'Free' },
  ];

  return (
    <section className="p-24 w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Warehouse</h1>
      <article className="mt-4 text-2xl text-left max-w-[62.5rem] mx-auto">
        <p>
          For members only, we will give you an address to ship your order.<br />
          The address can be found on <strong>MY menu</strong> after signing up.<br />
          Product can be stored for free up to 30 days from the date of confirmation after delivery.<br />
          At the end of the free storage period, if you pay an extension storage fee, you can keep it for up to 90 days and it may be discarded after that.
        </p>
      </article>
      <section className="bg-[#FDEDCE] p-16 rounded-2xl w-[51.875rem] flex flex-col justify-start mt-16 mx-auto">
        {warehouseDetails.map((item, index) => (
          <article key={index} className="flex justify-between mb-4 w-full">
            <span className="font-bold text-2xl">{item.label}</span>
            <span className="font-bold text-2xl">{item.value}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
