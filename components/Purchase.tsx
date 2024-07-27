import React from 'react';

export default function Purchase() {
  const purchaseDetails = [
    { label: 'Online Purchase ........................', value: '2,000KRW/Website by order' },
    { label: 'Online Purchase (Seoul Only) ...................', value: '40,000KRW/1hour' },
    { label: '+15,000KRW/Additional hours', value: '' },
  ];

  return (
    <section className="w-full bg-gray-100">
      <section className="p-24 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Purchase</h1>
        <article className="mt-4 text-2xl text-left max-w-[62.5rem] mx-auto">
          <p>
            We can help to purchase the items you want by the Korean online or offline shop.
          </p>
        </article>
        <section className="bg-[#FDEDCE] p-16 rounded-2xl w-[51.875rem] flex flex-col justify-start mt-16 mx-auto">
          {purchaseDetails.map((item, index) => (
            <article key={index} className={`flex ${item.value ? 'justify-between' : 'justify-end'} mb-4 w-full`}>
              <span className="font-bold text-2xl">{item.label}</span>
              {item.value && <span className="font-bold text-2xl">{item.value}</span>}
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}
