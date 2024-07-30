import React from 'react';
import Image from 'next/image';

const KPacketRateTable: React.FC = () => {
  return (
    <section className="w-full max-w-[80rem] h-auto py-24 px-8 sm:px-16 md:px-32 gap-[3.375rem] mx-auto">
      <h2 className="text-left text-4xl md:text-5xl font-bold leading-tight mb-[3.375rem]">
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
