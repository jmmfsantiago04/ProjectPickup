// components/HowToPay.tsx

import Image from 'next/image';
import { FC } from 'react';

const HowToPay: FC = () => {
  return (
    <section className="w-full bg-primaryBeige">
      <div className="w-full max-w-[80rem] mx-auto pt-24 px-4 lg:px-0">
        <h2 className="mx-auto text-center font-bold mb-14 lg:mb-[8.5rem] text-2xl lg:text-[2.5rem] leading-[2.5rem] lg:leading-[3.405rem] w-full lg:w-[62.5rem] h-14 lg:h-[3.375rem]">How to pay</h2>
        <article className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-[8.4375rem] text-left mb-14 lg:mb-24 mx-auto" style={{ marginLeft: '3.625rem', marginRight: '3.625rem' }}>
          <div className="flex flex-col items-center gap-y-24 lg:gap-y-[30rem]">
            <ul className="flex flex-col items-center w-full lg:w-[9.125rem] h-auto lg:h-[5.75rem] gap-4 lg:gap-0 mx-auto lg:mx-[3.46875rem] list-none">
              <li className="text-base lg:text-[1rem] font-bold leading-[1.361875rem] text-center">1. Log in to Wise</li>
              <Image 
                src="/WiseLogo.png" 
                alt="Wise Logo" 
                width={46.81} 
                height={50} 
                className="mt-5 lg:mt-[1.25rem] gap-0 rounded-tl-[0.625rem]"
              />
            </ul>
            <ul className="flex flex-col items-center w-full lg:w-[16.0625rem] h-auto lg:h-[39.2825rem] gap-4 lg:gap-0 list-none">
              <li className="text-base lg:text-[1rem] font-bold leading-[1.361875rem] text-center">4. Select recipient e-mail to sendingforyou@yahoo.com</li>
              <Image 
                src="/Wise3.png" 
                alt="Step 4" 
                width={250} 
                height={564.52} 
                className="mt-5 lg:mt-[1.25rem] relative gap-0"
              />
            </ul>
          </div>
          <div className="flex flex-col items-center gap-y-24 lg:gap-y-[28.875rem]">
            <ul className="flex flex-col items-center w-full lg:w-[15.625rem] h-auto lg:h-[6.9rem] gap-4 lg:gap-0 list-none">
              <li className="text-base lg:text-[1rem] font-bold leading-[1.361875rem] text-center">2. Single payment Click</li>
              <Image 
                src="/Wise1.png" 
                alt="Step 2" 
                width={250} 
                height={68.4} 
                className="mt-5 lg:mt-[1.25rem] relative gap-0"
              />
            </ul>
            <ul className="flex flex-col items-center w-full lg:w-[19.6875rem] h-auto lg:h-[19.886875rem] gap-4 lg:gap-0 list-none">
              <li className="text-base lg:text-[1rem] font-bold leading-[1.361875rem] text-center">5. Check the reason to transfer money</li>
              <Image 
                src="/Wise4.png" 
                alt="Step 5" 
                width={250} 
                height={276.19} 
                className="mt-5 lg:mt-[1.25rem] relative gap-0"
              />
            </ul>
          </div>
          <div className="flex flex-col items-center gap-y-12 lg:gap-y-[11.75rem]">
            <ul className="flex flex-col items-center w-full lg:w-[19.75rem] h-auto lg:h-[24.00375rem] gap-4 lg:gap-0 list-none">
              <li className="text-base lg:text-[1rem] font-bold leading-[1.361875rem] text-center">3. Change currency (Recipient: KRW) and input the billing amount</li>
              <Image 
                src="/Wise2.png" 
                alt="Step 3"  
                width={250} 
                height={320.06} 
                className="mt-5 lg:mt-[1.25rem] relative gap-0"
              />
            </ul>
            <ul className="flex flex-col items-center w-full lg:w-[16.25rem] h-auto lg:h-[36.44625rem] gap-4 lg:gap-0 list-none">
              <li className="text-base lg:text-[1rem] font-bold leading-[1.361875rem] text-center">6. Put in your ID into Reference (optional) and Send money</li>
              <Image 
                src="/Wise5.png" 
                alt="Step 6" 
                width={250} 
                height={519.14} 
                className="mt-5 lg:mt-[1.25rem] relative gap-0"
              />
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HowToPay;

