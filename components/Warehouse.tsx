import React from 'react';

export default function Warehouse() {
  return (
    <div className="p-24 w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-[50px]">Warehouse</h1>
      <div className="text-left" style={{ maxWidth: '1000px' }}>
        <p className="mt-4 text-2xl">
          For members only, we will give you an address to ship your order.<br />
          The address can be found on <strong>MY menu</strong> after signing up.<br />
          Product can be stored for free up to 30 days from the date of confirmation after delivery.<br />
          At the end of the free storage period, if you pay an extension storage fee, you can keep it for up to 90 days and it may be discarded after that.
        </p>
      </div>
      <div className="flex justify-center mt-[70px]">
        <div className="bg-[#FDEDCE] p-16 rounded-[25px_25px_25px_25px] w-[830px] h-[251px] flex flex-col justify-start">
          <div className="flex justify-between mb-4 w-full">
            <span className="font-bold text-2xl">Korean Address ...............................................................</span>
            <span className="font-bold text-2xl">Free</span>
          </div>
          <div className="flex justify-between mb-4 w-full">
            <span className="font-bold text-2xl">Storage (up to 30 days) ..................................................</span>
            <span className="font-bold text-2xl">Free</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="font-bold text-2xl">Extension Storage ...........................................................</span>
            <span className="font-bold text-2xl">Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}
