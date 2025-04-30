import { useCursor } from "../context/cursorContext";
import { Title1 } from "./title";

function AboutMe() {
  const { textEnter, textLeave } = useCursor();
  const classPara = "text-warna3";
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

export default AboutMe;
