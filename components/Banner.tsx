import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex items-start py-24 px-8 max-w-7xl mx-auto gap-10 justify-center">
      <div className="w-[44.7rem] h-[16.3rem] flex flex-col gap-12">
        <h1 className="font-bold text-[4rem] leading-[normal]">
          Shop in Korea,
          <br />
          Pick it up at your door.
        </h1>
        <p className="text-2xl">Korean Free address & Shopping helper.</p>
      </div>
      <div className="relative w-[26.25rem] h-[23.625rem]">
        <img
          src="/banner.png"
          alt="Shopping banner"
          height={378}
          width={420}
          className="object-cover absolute top-0 right-0 w-full"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Banner;
