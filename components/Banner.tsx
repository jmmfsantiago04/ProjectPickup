// components/Banner.tsx

import Image from 'next/image';

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-start py-12 px-4 md:px-8 max-w-7xl mx-auto gap-6 md:gap-10 justify-center">
      <div className="w-full md:w-[44.7rem] h-auto md:h-[16.3rem] flex flex-col gap-6 md:gap-12">
        <h1 className="font-bold text-[2rem] md:text-[4rem] leading-tight md:leading-[normal]">
          Shop in Korea,
          <br />
          Pick it up at your door.
        </h1>
        <p className="text-lg md:text-2xl">Korean Free address & Shopping helper.</p>
      </div>
      <div className="relative w-full md:w-[26.25rem] h-[15rem] md:h-[23.625rem]">
        <div className="relative w-full h-full">
          <Image
            src="/banner.png"
            alt="Shopping banner"
            layout="fill"
            objectFit="contain"
            className="w-full h-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
