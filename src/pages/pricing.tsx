import { useState } from "react";
import PricingImg from "../assets/solution.svg";
import PriceBox from "../components/pricingbox/pricebox";

function Pricing() {
  const [clicked, setClicked] = useState<"Monthly" | "Yearly">("Monthly");

  const plans = [
    {
      name: "Basic Plan",
      pricing: {
        monthly: 79.99,
        quarterly: 239.97,
        yearly: 959.88,
      },
      perks: [
        "Intelligent Data Processing for small datasets",
        "AI-Powered Chatbots with basic functionalities",
        "Limited Sentiment Analysis (up to 500 entries/month)",
        "Standard support and onboarding",
      ],
      bg: "#ffffff",
      text: "#000000",
    },
    {
      name: "VIP Plan",
      pricing: {
        monthly: 119.99,
        quarterly: 359.97,
        yearly: 1439.88,
      },
      perks: [
        "Advanced Data Processing with real-time analytics",
        "AI-Powered Chatbots with customization options",
        "Fraud Detection capabilities",
        "Sentiment Analysis for medium-scale projects (up to 2,000 entries/month)",
        "Priority email support",
      ],
      bg: "#000000",
      text: "#ffffff",
    },
    {
      name: "Premium Plan",
      pricing: {
        monthly: 169.69,
        quarterly: 509.07,
        yearly: 2036.28,
      },
      perks: [
        "Unlimited Data Processing with predictive analytics",
        "AI-Powered Chatbots with multilingual support",
        "Fraud Detection with advanced alerting",
        "Comprehensive Sentiment Analysis (unlimited entries)",
        "Image Recognition and Adaptive Learning Models",
      ],
      bg: "#ffffff",
      text: "#000000",
    },
  ];
  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="w-full flex items-center justify-between h-[236.39px]">
        <div>
          <div className="text-[50px] w-[648px] font-[700] tracking-[-6%] leading-[129%] ">
            Unlock Value Tailored Pricing Plan
          </div>
          <p className="w-[697px] text-[19px] text-[rgba(110,110,110,1)] mb-[20px] tracking-[-6%] leading-[156%] mt-[10px]">
            Get the best plan that suites your needs
          </p>
          <div className=" w-[222.86px] bg-[#9d9d9d10] h-[46.39px] ring-1 ring-[black] flex justify-between items-center px-[9.69px] py-[4.85px] mt-[10px]">
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
      <div className="mt-[40px] flex w-full justify-between items-center content-center">
        {plans?.map((plan) => (
          <PriceBox plan={plan} pricing={clicked} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
