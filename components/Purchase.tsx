"use client"
import React, { useState, useEffect } from 'react';

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default function Purchase() {
  const size = useWindowSize();
  const isMobile = (size.width || 0) <= 768;
  const isTablet = (size.width || 0) > 768 && (size.width || 0) <= 1024;

  const mobilePurchaseDetails = [
    { label: 'Online Purchase .....................', value: '2,000KRW/Website' },
    { label: 'Online Purchase (Seoul) ..............', value: '40,000KRW/1hr' },
    { label: '+15,000KRW/Extra hour', value: '' },
  ];

  const tabletPurchaseDetails = [
    { label: 'Online Purchase ............................', value: '2,000KRW/Website by order' },
    { label: 'Online Purchase (Seoul Only) .......................', value: '40,000KRW/1hour' },
    { label: '+15,000KRW/Additional hours', value: '' },
  ];

  const desktopPurchaseDetails = [
    { label: 'Online Purchase .............................', value: '2,000KRW/Website by order' },
    { label: 'Online Purchase (Seoul Only) ........................', value: '40,000KRW/1hour' },
    { label: '+15,000KRW/Additional hours', value: '' },
  ];

  const purchaseDetails = isMobile
    ? mobilePurchaseDetails
    : isTablet
    ? tabletPurchaseDetails
    : desktopPurchaseDetails;

  return (
    <section className="w-full bg-primaryGray">
      <section className="py-12 sm:py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4">
        <h1 className="text-[1.5rem] sm:text-[2.5rem] leading-[2rem] sm:leading-[3.405rem] font-bold text-center mb-8 sm:mb-[5.5625rem]">Purchase</h1>
        <article className="text-lg sm:text-2xl text-left max-w-[90%] sm:max-w-[62.5rem] mx-auto">
          <p>
            We can help to purchase the items you want by the Korean online or offline shop.
          </p>
        </article>
        <section className="bg-primaryBeige py-8 sm:py-16 px-4 sm:px-8 rounded-3xl w-full max-w-[51.875rem] flex flex-col justify-start mt-8 sm:mt-[5.5625rem] mb-12 sm:mb-24 mx-4 sm:mx-[5.3125rem]">
          {purchaseDetails.map((item, index) => (
            <article key={index} className={`flex flex-col sm:flex-row ${item.value ? 'justify-between' : 'justify-end'} mb-4 w-full`}>
              <span className="font-bold text-lg sm:text-2xl">{item.label}</span>
              {item.value && <span className="font-bold text-lg sm:text-2xl">{item.value}</span>}
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}
