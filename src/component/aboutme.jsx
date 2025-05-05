import { useCursor } from "../context/cursorContext";
import { Title1 } from "./title";

const classPara = "text-warna3 text-sm lg:text-base";

export function AboutMe() {
  const { textEnter, textLeave } = useCursor();
  return (
    <div className="text-justify flex flex-col gap-3">
      <Title1 text="about-me" />
      <div className="text-justify flex flex-col gap-3" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <p className={classPara}>Sup, my name is Nuradli</p>
        <p className={classPara}>
          I'm a Front-End Developer and Graphic Designer who brings ideas to life through beautiful code and captivating visuals. I specialize in crafting responsive, user-friendly interfaces that merge design and functionality seamlessly.
        </p>
        <p className={classPara}>
          With a strong eye for aesthetics and a love for clean architecture, I aim to create digital experiences that are not only visually engaging but also intuitive to use. My goal is to turn every interaction into a moment of delight —
          where creativity meets purpose.
        </p>
      </div>
    </div>
  );
}

export function AboutMeFull() {
  const { textEnter, textLeave } = useCursor();

  return (
    <div className=" flex flex-col gap-3">
      <div className="hidden lg:block md:hidden">
        <Title1 text="about-me" />
      </div>
      <div className="text-justify flex flex-col gap-3" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <p className={classPara}>Sup, my name is Nuradli.</p>

        <p className={classPara}>I'm a Front-End Developer and Graphic Designer who blends aesthetic design with clean, efficient code. I enjoy building responsive and interactive interfaces that not only look good but feel right.</p>

        <p className={classPara}>My background in visual design fuels my love for detail — from typography and layout to animation and micro-interactions. Every element has to earn its place, serving both function and emotion.</p>

        <p className={classPara}>
          Lately, I’ve been drawn to Stoicism — finding clarity and direction through the thoughts of Marcus Aurelius and Seneca. This mindset helps me build with more purpose, patience, and resilience, both in code and in life.
        </p>

        <p className={classPara}>I see this creative journey as more than just work — it’s how I grow, reflect, and connect. Let’s build something thoughtful.</p>
        <a
          href="/files/Nuradli-CV.pdf"
          download
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="whitespace-nowrap uppercase w-fit text-sm px-5 py-2 md:px-6 lg:px-9 lg:py-2 mt-2 text-warna1 rounded-md border border-solid border-warna4 transition-all duration-300 transform hover:bg-warna4 hover:text-warna1 hover:scale-105 cursor-none"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}
