import React from 'react';
import Image from 'next/image';

const ServiceTable: React.FC = () => {
  return (
    <div className='w-full bg-primaryBeige'>
      <section className="w-full max-w-[76rem] h-auto py-24 px-8 sm:px-16 md:px-32 gap-0 mx-auto">
        <h2 className="text-left text-4xl md:text-5xl font-bold leading-tight mb-11">
          Service Country
        </h2>
        <article className="relative">
          <Image 
            src="/service-country.png"
            alt="Service Country Table"
            layout="responsive"
            width={1213}
            height={1276}
            className="block mx-auto"
          />
        </article>
      </section>
    </div>
  );
};

export default ServiceTable;
