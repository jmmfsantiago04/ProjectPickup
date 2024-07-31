
import Image from 'next/image';
import { FC } from 'react';

const HowToPayMobile: FC = () => {
  return (
    <article className="flex flex-col gap-8 text-left mb-14 mx-auto" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
      <div className="flex flex-col items-center gap-y-12">
        <ul className="flex flex-col items-center w-full h-auto gap-4 list-none">
          <li className="text-base font-bold leading-[1.361875rem] text-center">1. Log in to Wise</li>
          <Image 
            src="/WiseLogo.png" 
            alt="Wise Logo" 
            width={46.81} 
            height={50} 
            className="mt-5 gap-0 rounded-tl-[0.625rem]"
          />
        </ul>
        <ul className="flex flex-col items-center w-full h-auto gap-4 list-none">
          <li className="text-base font-bold leading-[1.361875rem] text-center">2. Single payment Click</li>
          <Image 
            src="/Wise1.png" 
            alt="Step 2" 
            width={250} 
            height={68.4} 
            className="mt-5 relative gap-0"
          />
        </ul>
        <ul className="flex flex-col items-center w-full h-auto gap-4 list-none">
          <li className="text-base font-bold leading-[1.361875rem] text-center">3. Change currency (Recipient: KRW) and input the billing amount</li>
          <Image 
            src="/Wise2.png" 
            alt="Step 3"  
            width={250} 
            height={320.06} 
            className="mt-5 relative gap-0"
          />
        </ul>
        <ul className="flex flex-col items-center w-full h-auto gap-4 list-none">
          <li className="text-base font-bold leading-[1.361875rem] text-center">4. Select recipient e-mail to sendingforyou@yahoo.com</li>
          <Image 
            src="/Wise3.png" 
            alt="Step 4" 
            width={250} 
            height={564.52} 
            className="mt-5 relative gap-0"
          />
        </ul>
        <ul className="flex flex-col items-center w-full h-auto gap-4 list-none">
          <li className="text-base font-bold leading-[1.361875rem] text-center">5. Check the reason to transfer money</li>
          <Image 
            src="/Wise4.png" 
            alt="Step 5" 
            width={250} 
            height={276.19} 
            className="mt-5 relative gap-0"
          />
        </ul>
        <ul className="flex flex-col items-center w-full h-auto gap-4 list-none">
          <li className="text-base font-bold leading-[1.361875rem] text-center">6. Put in your ID into Reference (optional) and Send money</li>
          <Image 
            src="/Wise5.png" 
            alt="Step 6" 
            width={250} 
            height={519.14} 
            className="mt-5 relative gap-0"
          />
        </ul>
      </div>
    </article>
  );
};

export default HowToPayMobile;
