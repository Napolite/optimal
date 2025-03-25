import LandingImg from "../../assets/landing1.svg";

import { MdBarChart, MdErrorOutline } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

function Landing() {
  const features = [
    {
      title: "Visual Data Analysis",
      description:
        "Converts complex data into interactive, easy-to-understand visuals.",
      img: MdBarChart,
    },
    {
      title: "Intelligent Chatbot",
      description:
        "Engages with users and answers queries for round-the-clock assistance.",
      img: RiRobot2Line,
    },
    {
      title: "Automated Reporting",
      description:
        "Generates detailed performance insights without manual effort.",
      img: AiOutlineFileText,
    },
    {
      title: "Error Detection",
      description:
        "Identifies and resolves anomalies in real time to prevent issues.",
      img: MdErrorOutline,
    },
    {
      title: "Dynamic Personalization",
      description: "Adapts to user behavior to deliver customized experiences.",
      img: FaUserCog,
    },
    {
      title: "Seamless Integration",
      description:
        "Easily connects with existing tools and platforms to maximize productivity.",
      img: BiLinkAlt,
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-[50px] ">
      <div className="w-full h-[571px] flex justify-between">
        <div className="h-[437px] my-auto">
          <div className="text-[53px] font-[700] w-[697px] leading-[129%] mb-[20px] tracking-[-6%]">
            Streamline Work Flow <br />
            With AI Powered Solution
          </div>
          <div className="w-[697px] text-[19px] text-[rgba(110,110,110,1)] mb-[20px] tracking-[-6%] leading-[156%]">
            Transform your processes with an intelligent AI platform that
            optimizes efficiency, enhances decision-making, and adapts to your
            unique needs.
          </div>
          <div className="flex w-[374px] justify-between mt-[20px] mb-[70px]">
            <button className="w-[168px] h-[58px] bg-[#000000] text-[#ffffff]">
              Try for free
            </button>
            <button className="w-[168px] h-[58px] ring ring-1-[#000000]">
              Watch Demo
            </button>
          </div>
          <div>
            <p>Companies who trust us</p>
            <div></div>
          </div>
        </div>

        <img src={LandingImg} className="h-full w-[410px]" />
      </div>

      {/* Key Feature*/}

      <div className="mt-[100px]">
        <div>
          <p className="text-[50px] font-[700] tracking-[-6%] leading-[129%]">
            Key Feature
          </p>
          <p>Simplify your workflow with next gen features</p>
        </div>
        <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
          {features.map((feature) => (
            <div>
              <div>
                <feature.img size={24} />
              </div>
              <div>{feature.title}</div>
              <div>{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
