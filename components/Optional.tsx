import React from 'react';

export default function Optional() {
  const optionalDetails = [
    { label: 'Unboxing with Video ............................', value: '2,000KRW/Package' },
    { label: 'Unboxing with Photo ............................', value: '1,000KRW/Package' },
    { label: 'Inclusion Only .......................................', value: '1,500KRW/album' },
  ];

  return (
    <section className="py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center">
      <h1 className="text-[2.5rem] leading-[3.405rem] font-bold text-center mb-24">Optional</h1>
      <article className="text-2xl text-left max-w-[62.5rem] mx-auto">
        <p>
          If you want to check your package inside, please use the unboxing service.<br />
          We can help you check the status and quantity.<br />
          If you only want inclusion in your albums, please use the inclusion only service.<br />
          You can save shipping costs by drastically reducing the volume and weight.
        </p>
      </article>
      <section className="bg-primaryBeige py-[5.15625rem] px-[1.8125rem] rounded-3xl w-[51.875rem]  flex-col justify-start my-24 mx-[5.3125rem]">
        {optionalDetails.map((item, index) => (
          <article key={index} className="flex justify-between mb-4 w-full">
            <span className="font-bold text-2xl">{item.label}</span>
            <span className="font-bold text-2xl">{item.value}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
