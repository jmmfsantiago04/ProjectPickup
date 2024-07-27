import React from 'react';

export default function Purchase() {
  const purchaseDetails = [
    { label: 'Online Purchase .............................', value: '2,000KRW/Website by order' },
    { label: 'Online Purchase (Seoul Only) ........................', value: '40,000KRW/1hour' },
    { label: '+15,000KRW/Additional hours', value: '' },
  ];

  return (
    <section className="w-full bg-primaryGray">
    <section className="py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-[2.5rem] leading-[3.405rem] font-bold text-center mb-[5.5625rem]">Purchase</h1>
        <article className="text-2xl text-left max-w-[62.5rem] mx-auto">
          <p>
            We can help to purchase the items you want by the Korean online or offline shop.
          </p>
        </article>
        <section className="bg-primaryBeige py-16 px-8 rounded-3xl w-[51.875rem]  flex-col justify-start mt-[5.5625rem] mb-24 mx-[5.3125rem]">
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
