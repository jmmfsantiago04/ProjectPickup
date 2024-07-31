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

export default function Forwarding() {
  const size = useWindowSize();
  const isMobile = (size.width || 0) <= 768;
  const isTablet = (size.width || 0) > 768 && (size.width || 0) <= 1024;

  const mobileForwardingDetails = [
    { label: 'Consolidation ', value: 'Free' },
    { label: 'Forwarding ', value: 'Free*' },
    { label: 'Pick up ', value: '3,000KRW/Package' },
    { label: '* please refer to the shipping rate as shipping charge', value: '' },
  ];

  const tabletForwardingDetails = [
    { label: 'Consolidation ', value: 'Free' },
    { label: 'Forwarding ', value: 'Free*' },
    { label: 'Pick up ', value: '3,000KRW/Package' },
    { label: '* please refer to the shipping rate as shipping charge', value: '' },
  ];

  const desktopForwardingDetails = [
    { label: 'Consolidation ..........................................................', value: 'Free' },
    { label: 'Forwarding .............................................................', value: 'Free*' },
    { label: 'Pick up ................................................', value: '3,000KRW/Package' },
    { label: '* please refer to the shipping rate as shipping charge', value: '' },
  ];

  const forwardingDetails = isMobile
    ? mobileForwardingDetails
    : isTablet
    ? tabletForwardingDetails
    : desktopForwardingDetails;

  return (
    <section className="w-full bg-primaryGray">
      <section className="py-12 sm:py-24 w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4">
        <h1 className="text-[1.5rem] sm:text-[2.5rem] leading-[2rem] sm:leading-[3.405rem] font-bold text-center mb-8 sm:mb-24">Forwarding & Pickup</h1>
        <article className="text-lg sm:text-2xl text-left w-full max-w-[90%] sm:max-w-[62.5rem] mx-auto">
          <p>
            If you would like to receive your packages, please use forwarding service. <br />
            We could combine multiple packages into one box (consolidation) and ship via EMS, K-packet, and other express carriers.<br />
            If you have a plan to visit Korea within the storage period, you can also pick up the delivered items in person from Pickup Korea office with advance notice 7 days prior to the visit date.
          </p>
        </article>
        <section className="bg-primaryBeige py-8 sm:py-16 px-4 sm:px-8 rounded-3xl w-full max-w-[51.875rem] flex flex-col justify-start mt-8 sm:mt-24 mb-12 sm:mb-24">
          {forwardingDetails.map((item, index) => (
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
