import React from 'react';

export default function Purchase() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-24 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-[50px]">Purchase</h1>
        <div className="text-left" style={{ maxWidth: '1000px' }}>
          <p className="mt-4 text-2xl">
            We can help to purchase the items you want by the Korean online or offline shop.
          </p>
        </div>
        <div className="flex justify-center mt-[70px]">
          <div className="bg-[#FDEDCE] p-16 rounded-[25px_25px_25px_25px] w-[830px] h-[251px] flex flex-col justify-start">
            <div className="flex justify-between mb-4 w-full">
              <span className="font-bold text-2xl">Online Purchase ........................</span>
              <span className="font-bold text-2xl">2,000KRW/Website by order</span>
            </div>
            <div className="flex justify-between mb-4 w-full">
              <span className="font-bold text-2xl">Online Purchase (Seoul Only) ...................</span>
              <span className="font-bold text-2xl">40,000KRW/1hour</span>
            </div>
            <div className="flex justify-end w-full">
              <span className="font-bold text-2xl">+15,000KRW/Additional hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
