import React from 'react';
import slack from '../assets/Foxmont.svg';
import amazon from '../assets/Founders.svg';
import woocommerce from '../assets/Startup.svg';
import meundies from '../assets/Protege.svg';
import sitepoint from '../assets/Stanford.png';

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="w-full bg-gradient-to-r from-[#76a39a] to-[#9ac3bc]">
      <div className="container mx-auto py-20 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start">
        <div className="w-[300px] shrink-0 px-8 text-white border-l-4 border-white bg-white/10 py-2 z-10 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0 backdrop-blur-sm rounded-md">
          Wavemakers Summit is  <br /> Co-Presented by
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
