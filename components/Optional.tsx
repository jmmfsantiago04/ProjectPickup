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

export default function Optional() {
  const size = useWindowSize();
  const isMobile = (size.width || 0) <= 768;
  const isTablet = (size.width || 0) > 768 && (size.width || 0) <= 1024;

  const mobileOptionalDetails = [
    { label: 'Unboxing with Video ', value: '2,000KRW/Package' },
    { label: 'Unboxing with Photo ', value: '1,000KRW/Package' },
    { label: 'Inclusion Only', value: '1,500KRW/album' },
  ];

  const tabletOptionalDetails = [
    { label: 'Unboxing with Video ', value: '2,000KRW/Package' },
    { label: 'Unboxing with Photo ', value: '1,000KRW/Package' },
    { label: 'Inclusion Only ', value: '1,500KRW/album' },
  ];

  const desktopOptionalDetails = [
    { label: 'Unboxing with Video ............................', value: '2,000KRW/Package' },
    { label: 'Unboxing with Photo ............................', value: '1,000KRW/Package' },
    { label: 'Inclusion Only .......................................', value: '1,500KRW/album' },
  ];

  const optionalDetails = isMobile
    ? mobileOptionalDetails
    : isTablet
    ? tabletOptionalDetails
    : desktopOptionalDetails;

  return (
    <section className="py-12 sm:py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4">
      <h1 className="text-[1.5rem] sm:text-[2.5rem] leading-[2rem] sm:leading-[3.405rem] font-bold text-center mb-8 sm:mb-[3.4375rem]">Optional</h1>
      <article className="text-lg sm:text-2xl text-left max-w-[90%] sm:max-w-[62.5rem] mx-auto">
        <p>
          If you want to check your package inside, please use the unboxing service.<br />
          We can help you check the status and quantity.<br />
          If you only want inclusion in your albums, please use the inclusion only service.<br />
          You can save shipping costs by drastically reducing the volume and weight.
        </p>
      </article>
      <section className="bg-primaryBeige p-8 sm:p-16 rounded-3xl w-full max-w-[51.875rem] flex flex-col justify-start my-12 sm:my-24 mx-4">
        {optionalDetails.map((item, index) => (
          <article key={index} className="flex flex-col sm:flex-row justify-between mb-4 w-full">
            <span className="font-bold text-lg sm:text-2xl">{item.label}</span>
            <span className="font-bold text-lg sm:text-2xl">{item.value}</span>
          </article>
        ))}
      </section>
    </section>
  );
}
