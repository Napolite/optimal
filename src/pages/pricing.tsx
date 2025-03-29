import { useState } from "react";
import PricingImg from "../assets/solution.svg";

function Pricing() {
  const [clicked, setClicked] = useState<"Monthly" | "Yearly">("Monthly");
  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="w-full flex items-center justify-between h-[236.39px] ">
        <div>
          <div className="text-[50px] w-[648px] font-[700] tracking-[-6%] leading-[129%] ">
            Unlock Value Tailored Pricing Plan
          </div>
          <p className="w-[697px] text-[19px] text-[rgba(110,110,110,1)] mb-[20px] tracking-[-6%] leading-[156%] mt-[30px]">
            Get the best plan that suites your needs
          </p>
          <div className=" w-[222.86px] bg-[#9d9d9d10] h-[46.39px] ring-1 ring-[black] flex justify-between items-center px-[9.69px] py-[4.85px] mt-[30px]">
            <button
              onClick={() => setClicked("Monthly")}
              className={`w-[116.4px] h-[36.69px] ${
                clicked === "Monthly"
                  ? "bg-[#000000] text-[#ffffff]"
                  : "bg-none text-[#000000]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setClicked("Yearly")}
              className={`w-[116.4px] h-[36.69px] ${
                clicked === "Yearly"
                  ? "bg-[#000000] text-[#ffffff]"
                  : "bg-none text-[#000000]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div>
          <img src={PricingImg} className="h-full w-[291.29px]" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Pricing;
