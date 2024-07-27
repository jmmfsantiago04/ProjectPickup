import React from 'react';

export default function Optional() {
  const optionalDetails = [
    { label: 'Unboxing with Video ............................', value: '2,000KRW/Package' },
    { label: 'Unboxing with Photo ............................', value: '1,000KRW/Package' },
    { label: 'Inclusion Only .......................................', value: '1,500KRW/album' },
  ];

  return (
    <section className="p-24 w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Optional</h1>
      <article className="mt-4 text-2xl text-left max-w-[62.5rem] mx-auto">
        <p>
          If you want to check your package inside, please use the unboxing service.<br />
          We can help you check the status and quantity.<br />
          If you only want inclusion in your albums, please use the inclusion only service.<br />
          You can save shipping costs by drastically reducing the volume and weight.
        </p>
      </article>
      <section className="bg-[#FDEDCE] p-16 rounded-2xl w-[51.875rem] flex flex-col justify-start mt-16 mx-auto">
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
