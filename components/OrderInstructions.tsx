// components/OrderInstructions.tsx

import React from 'react';

const OrderInstructions: React.FC = () => {
  return (
    <>
      <section className="w-full pt-24 mx-auto px-4 lg:px-0">
        <article className="w-full max-w-[62.5rem] mx-auto mt-24 mb-14 px-4 lg:px-0">
          <h2 className="w-full h-14 text-center text-2xl sm:text-xl lg:text-[2.5rem] font-bold leading-[2.5rem] sm:leading-[2rem] lg:leading-[3.405rem] mb-14">
            ※ Be sure to check the below before order!
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-lg sm:text-base">
            <li className="text-lg sm:text-base lg:text-[1.5rem] font-[400] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
              After receiving the order form, proxy purchasing begins when payment is completed.
            </li>
            <li className="text-lg sm:text-base lg:text-[1.5rem] font-[400] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
              If additional domestic shipping costs are incurred depending on the shopping mall, it will be added to the Forwarding Invoice.
            </li>
            <li className="text-lg sm:text-base lg:text-[1.5rem] font-[400] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
              Depending on the shopping mall’s policy, returns may not be possible.
            </li>
            <li className="text-lg sm:text-base lg:text-[1.5rem] font-[400] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
              Some items (candles, perfume, etc.) cannot be shipped overseas, so please inquire in advance.
            </li>
            <li className="text-lg sm:text-base lg:text-[1.5rem] font-[400] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
              When applying for overseas shipping, items purchased on behalf of an PK helpers are reported at the full price including domestic shipping costs and our service fee.
            </li>
            <li className="text-lg sm:text-base lg:text-[1.5rem] font-[400] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
              After submission, please send ‘Proxy Purchase’ via kakaoTalk.
            </li>
          </ol>
        </article>
      </section>
      <section className="w-full mx-auto mb-24 px-4 lg:px-0">
        <article className="w-full max-w-[70.0625rem] bg-gray-200 py-14 px-8 lg:py-[4.4375rem] lg:px-[3.3125rem] mt-24 mb-24 mx-auto flex flex-col justify-center rounded-[2.5rem]">
          <p className="text-lg sm:text-base lg:text-[1.5rem] font-[700] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left">
            ※ For offline proxy purchases, please send ‘Offline Proxy Purchase’ via KakaoTalk instead of filling out an order sheet.
          </p>
          <p className="text-lg sm:text-base lg:text-[1.5rem] font-[700] leading-6 sm:leading-5 lg:leading-[2.043125rem] text-left mt-8 lg:mt-[1.875rem]">
            ※ If you have an ID and PW of shopping mall, so you just want to check out after you put items into your cart, please enter the ID and PW in the memo.
          </p>
        </article>
      </section>
    </>
  );
};

export default OrderInstructions;
