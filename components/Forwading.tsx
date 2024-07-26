import React from 'react';

export default function Forwarding() {
  return (
    <div className="w-full bg-gray-100">
      <div className="p-24 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-[50px]">Forwarding & Pickup</h1>
        <div className="text-left" style={{ maxWidth: '1000px' }}>
          <p className="mt-4 text-2xl">
            If you would like to receive your packages, please use forwarding service <br />
            We could combine multiple packages into one box (consolidation) and ship via EMS, K-packet and other express carriers.<br />
            If you have a plan to visit Korea within the storage period, you can also pick up the delivered items in person from Pickup Korea office with advance notice 7 days prior to the visit date.
          </p>
        </div>
        <div className="flex justify-center mt-[70px]">
          <div className="bg-[#FDEDCE] p-16 rounded-[25px] w-[830px] h-[251px] flex flex-col justify-between">
            <div className="flex justify-between w-full">
              <span className="font-bold text-2xl">Consolidation ...............................................................</span>
              <span className="font-bold text-2xl">Free</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-bold text-2xl">Forwarding  ...................................................................</span>
              <span className="font-bold text-2xl">Free*</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-bold text-2xl">Pick up  ......................................................</span>
              <span className="font-bold text-2xl">3,000KRW/Package</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-bold text-2xl">* please refer to the shipping rate as shipping charge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
