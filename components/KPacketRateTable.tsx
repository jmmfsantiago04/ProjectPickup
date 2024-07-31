import React from 'react';
import Image from 'next/image';

const KPacketRateTable: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] h-auto py-12 px-4 sm:py-24 sm:px-8 md:px-16 lg:px-32 gap-8 mx-auto">
    <h2 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-11">
        K-packet Rate Table (Unit: KRW)
      </h2>
      <article className="relative">
        <Image 
          src="/kpacket-rate-table.png"
          alt="K-packet Rate Table"
          layout="responsive"
          width={1280}
          height={900}
          className="block mx-auto"
        />
      </article>
    </section>
  );
};

export default KPacketRateTable;
