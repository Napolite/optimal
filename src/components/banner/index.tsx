import Solution from "../../assets/Pricing.svg";

function Banner() {
  return (
    <div className="w-[1200px] bg-[#000000] h-[356px] mx-auto px-[50px] flex justify-between items-center content-center mb-[100px]">
      <div>
        <p className="text-[50px] text-[#ffffff] font-[700] leading-[129%] tracking-[-6%] w-[648px]">
          Unlock Your Potential
          <br /> With Next Gen Solution
        </p>
        <button className="w-[159px] h-[58px] bg-[#ffffff] mt-[30px] text-[#000000] text-[18px] font-[700]">
          Start Now
        </button>
      </div>
      <img src={Solution} />
    </div>
  );
}

export default Banner;
