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
    <div className="w-[83.3%] mx-auto mt-[50px] ">
      <div className="w-full h-[571px] flex justify-between">
        <div className="h-[437px] my-auto">
          <div className="text-[53px] font-[700] w-[697px] leading-[-6px] mb-[50px]">
            Streamline work flow <br />
            With AI powered solution
          </div>
          <div className="w-[697px] text-[20px] mt-[18px]">
            Transform your processes with an intelligent AI platform that
            optimizes efficiency, enhances decision-making, and adapts to your
            unique needs.
          </div>
          <div>
            <button>Try for free</button>
            <button>Watch Demo</button>
          </div>
          <div>
            <p>Companies who trust us</p>
            <div></div>
          </div>
        </div>

        <img src={LandingImg} className="h-full w-[410px]" />
      </div>

      {/* Key Feature*/}

      <div>
        <div>
          <p>Key Feature</p>
          <p>Simplify your workflow with next gen features</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
