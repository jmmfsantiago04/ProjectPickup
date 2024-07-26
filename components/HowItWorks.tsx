import React from 'react';
import Image from 'next/image';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 lg:py-24 lg:px-8 flex flex-col items-center">
      <h2 className="text-center text-[64px] font-bold mb-12 text-black">How It Works</h2>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-stretch space-y-8 lg:space-y-0 lg:space-x-8 w-full">
        <div className="text-center max-w-xs bg-white p-8 mb-8 lg:mb-0 flex flex-col items-center flex-grow">
          <div className="flex justify-center items-center mb-6 h-[50px]">
            <Image src="/location.png" alt="Korean Address" width={50} height={50} />
          </div>
          <button className="bg-black text-white w-[352px] h-[116px] rounded-custom text-[32px] leading-[32.69px] font-bold flex items-center justify-center">
            <div className="text-center">
              Get your <br /> Korean address
            </div>
          </button>
          <p className="text-gray-800 mt-4 text-[24px] leading-8">
            Click the <strong>MY menu</strong> after you sign up.<br />
            You can find your address.
          </p>
        </div>
        <div className="text-center max-w-xs bg-white p-8 mb-8 lg:mb-0 flex flex-col items-center flex-grow">
          <div className="flex justify-center items-center mb-6 h-[50px]">
            <Image src="/cart.png" alt="Shop in Korea" width={50} height={50} />
          </div>
          <button className="bg-black text-white w-[352px] h-[116px] rounded-custom text-[32px] leading-[32.69px] font-bold flex items-center justify-center">
            <div className="text-center">
              Shop <br /> in Korea
            </div>
          </button>
          <p className="text-gray-800 mt-4 text-[24px] leading-8">
            You can order products by yourself
            with your free address,
            or ask us to help with buying instead.
          </p>
        </div>
        <div className="text-center max-w-xs bg-white p-8 flex flex-col items-center flex-grow">
          <div className="flex justify-center items-center mb-6 h-[50px]">
            <Image src="/package.png" alt="Pick up your Package" width={50} height={50} />
          </div>
          <button className="bg-black text-white w-[352px] h-[116px] rounded-custom text-[32px] leading-[32.69px] font-bold flex items-center justify-center">
            <div className="text-center">
              Pick up <br /> your Package
            </div>
          </button>
          <p className="text-gray-800 mt-4 text-[24px] leading-8">
            Once your items arrive, we are ready to
            deliver your package.<br />
            You can ask for free consolidation and
            packing or other optional services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
