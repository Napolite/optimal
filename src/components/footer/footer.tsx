import React from "react";

function Footer() {
  return (
    <div className="flex justify-between  w-[1200px] mb-[30px]">
      <div className="w-[119px]">
        <div className="text-[19px] font-[700] leading-[100%] mb-[10px]">
          Company
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          About
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          News
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Our Charter
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Security
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Blog
        </div>
      </div>
      <div className="w-[134px]">
        <div className="text-[19px] font-[700] leading-[100%] mb-[10px]">
          Socials
        </div>
        <div></div>
      </div>
      <div className="w-[163px]">
        <div className="text-[19px] font-[700] leading-[100%] mb-[10px]">
          Terms and policy
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Terms of use
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Privacy Policy
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Brand guideline
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Other policies
        </div>
      </div>
      <div className="w-[137px]">
        <div className="text-[19px] font-[700] leading-[100%] mb-[10px]">
          Our Reasearch
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Overview
        </div>
        <div className="text-[18px] leading-[30px] text-[rgba(35,35,35,1)] font-[500] mb-[16px]">
          Index
        </div>
      </div>
      <div className="w-[405px]">
        <div className="text-[30.46px] font-[700] leading-[150%] tracking-[0] mb-[10px]">
          Stay in loop with Rainbow AI
        </div>
        <div className="text-[18px] leading-[150%] text-[rgba(35,35,35,1)] font-[500] mb-[16px] w-[394px]">
          By subscribing you’ll be the first to get the latest news, update and
          offers Rainbow AI is bringing to the market.
        </div>
        <div className="flex border-2 border-black-500 focus-within:border-blue-700 w-[405px] max-w-md h-[64px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-2 text-lg outline-none"
          />
          <button className="bg-black text-white font-bold px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
