import React from 'react';
import Image from 'next/image';

const EMSRateTable: React.FC = () => {
  return (
    <div className='w-full bg-primaryBeige'>
      <section className="w-full max-w-[76rem] h-auto py-24 px-8 sm:px-16 md:px-32 mx-auto">
        <h2 className="text-left text-4xl md:text-5xl font-bold leading-tight mb-11">EMS Rate Table (Unit: KRW)</h2>
        <article className="relative">
          <Image 
            src="/ems-rate-table.png"
            alt="EMS Rate Table"
            layout="responsive"
            width={1216}
            height={1175}
            className="block mx-auto"
          />
        </article>
      </section>
    </div>
  );
};

export default EMSRateTable;
