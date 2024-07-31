// components/HowToPay.tsx

import { FC } from 'react';

import HowToPayMobile from './HowToPayMobile';
import HowToPayDesktop from './HowToPayDesktop';

const HowToPay: FC = () => {
  return (
    <section className="w-full bg-primaryBeige">
      <div className="w-full max-w-[80rem] mx-auto pt-24 px-4 lg:px-0">
        <h2 className="mx-auto text-center font-bold mb-14 lg:mb-[8.5rem] text-2xl lg:text-[2.5rem] leading-[2.5rem] lg:leading-[3.405rem] w-full lg:w-[62.5rem] h-14 lg:h-[3.375rem]">
          How to pay
        </h2>
        <div className="custom-lg:hidden">
          <HowToPayMobile />
        </div>
        <div className="hidden custom-lg:block">
          <HowToPayDesktop />
        </div>
      </div>
    </section>
  );
};

export default HowToPay;
