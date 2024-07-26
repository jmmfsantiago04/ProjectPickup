import React from 'react';

export default function Optional() {
  return (
    <div className="p-24 w-full max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center mb-[50px]">Optional</h1>
      <div className="text-left" style={{ maxWidth: '1000px' }}>
        <p className="mt-4 text-2xl">
        If you want to check your package inside, please use the unboxing service.<br />We can help you check the status and quantity.<br />If you only want inclusion in your albums, please use the inclusion only service.<br />You can save shipping costs by drastically reducing the volume and weight.
        </p>
      </div>
      <div className="flex justify-center mt-[70px]">
        <div className="bg-[#FDEDCE] p-16 rounded-[25px_25px_25px_25px] w-[830px] h-[251px] flex flex-col justify-start">
          <div className="flex justify-between mb-4 w-full">
            <span className="font-bold text-2xl">Unboxing with Video ............................</span>
            <span className="font-bold text-2xl">2,000KRW/Package</span>
          </div>
          <div className="flex justify-between mb-4 w-full">
            <span className="font-bold text-2xl"> Unboxing with Photo ............................    </span>
            <span className="font-bold text-2xl">1,000KRW/Package</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="font-bold text-2xl">Inclusion Only .......................................</span>
            <span className="font-bold text-2xl">1,500KRW/album</span>
          </div>
        </div>
      </div>
    </div>
  );
}
