import React from 'react';
import Image from 'next/image';

const ServiceTable: React.FC = () => {
  return (
    <div className='w-full bg-primaryBeige'>
      <section className="w-full max-w-[76rem] h-auto py-12 px-4 sm:py-24 sm:px-8 md:px-16 lg:px-32 gap-0 mx-auto">
        <h2 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-11">
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
