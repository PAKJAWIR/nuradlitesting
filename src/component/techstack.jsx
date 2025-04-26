import Marquee from "react-fast-marquee";
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaNodeJs, FaSass, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiSvelte } from "react-icons/si";
import { Title1 } from "./title";

function TechStack() {
  const tech = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiSvelte />, name: "Svelte" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ];

  return (
    <div className="text-justify flex flex-col gap-5">
      <Title1 text="tech-stack" />
      <Marquee speed={25} direction="left" pauseOnHover>
        <div className="flex flex-row text-3xl mr-5 ml-5 gap-10 text-warna4 overflow-hidden lg:overflow-hidden">
          {tech.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center hover:text-warna1 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              {item.icon}
              <span className="text-sm text-warna2">{item.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default TechStack;
