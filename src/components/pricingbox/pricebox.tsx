function PriceBox({
  plan,
  pricing,
}: {
  plan: {
    name: string;
    pricing: { monthly: number; quarterly: number; yearly: number };
    perks: string[];
    bg: string;
    text: string;
  };
  pricing: "Monthly" | "Yearly";
}) {
  return (
    <>
      <div>
        <div
          className={`h-[547px] w-[387px] bg-[${plan?.bg}] ring-1 ring-[#000000] pt-[20px]`}
        >
          <div className="w-[339px] mx-auto">
            <p
              className={`text-[20px] leading-[117%] font-[700] mb-[10px] text-[${plan?.text}]`}
            >
              {plan?.name}
            </p>
            <p
              className={`text-[48px] leading-[117%] font-[700] mb-[25px] text-[${plan?.text}]`}
            >
              $
              {pricing === "Monthly"
                ? plan?.pricing?.monthly
                : plan?.pricing?.yearly}
            </p>
            <button className="bg-[rgba(240,240,240,1)] w-[339px] h-[58px] rounded-[1px] text-[18.18px] leading-[150%] font-[700] ring-1 ring-[#000000]">
              Subscribe
            </button>
          </div>
          <div className="w-[339px] mx-auto mt-[50px]">
            <ul className="list-disc pl-5">
              {plan?.perks?.map((perk) => (
                <li
                  className={`mb-[10px] text-[18.18px] font-[700] ${
                    plan?.bg === "#000000"
                      ? `text-[${plan?.text}]`
                      : "text-[rgba(110,110,110,1)]"
                  }`}
                >
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceBox;
