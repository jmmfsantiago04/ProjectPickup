// components/ShopBanner.tsx
import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray py-24 px-8 md:py-24 md:px-8" style={{ padding: '6rem 2rem' }}>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="m-0" title="Shop in Korea, Pick it up at your door." style={{ fontSize: '64px', color: 'black' }}>
          Shop in Korea, Pick it up at your door.
        </h1>
        <p style={{ fontSize: '32px', color: 'black' }}>
          Korean Free address & Shopping helper.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/banner.png" 
          alt="Shopping banner"
          width={500} 
          height={300}
          layout="intrinsic" 
        />
      </div>
    </div>
  );
};

export default Banner;
