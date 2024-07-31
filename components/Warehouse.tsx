"use client"
import React, { useState, useEffect } from 'react';

// Define a type for window size
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

export default function Warehouse() {
  const size = useWindowSize();
  const isMobile = (size.width || 0) <= 768;
  const isTablet = (size.width || 0) > 768 && (size.width || 0) <= 1024;

  const mobileWarehouseDetails = [
    { label: 'Korean Address ', value: 'Free' },
    { label: 'Storage (30 days ) ', value: 'Free' },
    { label: 'Ext. Storage', value: 'Free' },
  ];

  const tabletWarehouseDetails = [
    { label: 'Korean Address   .............................................', value: 'Free' },
    { label: 'Storage ( up to 30 days ) ..................................', value: 'Free' },
    { label: 'Extension Storage ..........................................', value: 'Free' },
  ];

  const desktopWarehouseDetails = [
    { label: 'Korean Address .....................................................', value: 'Free' },
    { label: 'Storage (up to 30 days) ..........................................', value: 'Free' },
    { label: 'Extension Storage ..................................................', value: 'Free' },
  ];

  const warehouseDetails = isMobile
    ? mobileWarehouseDetails
    : isTablet
    ? tabletWarehouseDetails
    : desktopWarehouseDetails;

  return (
    <section className="py-12 sm:py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4">
      <h1 className="text-[1.5rem] leading-[2rem] sm:text-[2.5rem] sm:leading-[3.405rem] font-bold text-center mb-8 sm:mb-[3.4375rem]">Warehouse</h1>
      <article className="text-lg sm:text-2xl text-left max-w-[90%] sm:max-w-[62.5rem] mx-auto">
        <p>
          For members only, we will give you an address to ship your order.<br />
          The address can be found on <strong>MY menu</strong> after signing up.<br />
          Product can be stored for free up to 30 days from the date of confirmation after delivery.<br />
          At the end of the free storage period, if you pay an extension storage fee, you can keep it for up to 90 days and it may be discarded after that.
        </p>
      </article>
      <section className="bg-primaryBeige p-4 sm:p-16 rounded-3xl w-full max-w-[51.875rem] flex flex-col justify-start my-12 sm:my-24 mx-4">
        {warehouseDetails.map((item, index) => (
          <article key={index} className="flex flex-col sm:flex-row justify-between mb-4 w-full">
            <span className="font-bold text-base sm:text-2xl">{item.label}</span>
            <span className="font-bold text-base sm:text-2xl">{item.value}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
