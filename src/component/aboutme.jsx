import { Title1 } from "./title";

function AboutMe() {
  return (
    <div className="text-justify flex flex-col gap-3">
      <Title1 text="about-me" />
      <p className="text-warna3">Sup, my name is Nuradli</p>
      <p className="text-warna3">
        I'm a Front-End Developer and Graphic Designer who brings ideas to life through beautiful code and captivating visuals. I specialize in crafting responsive, user-friendly interfaces that merge design and functionality seamlessly.
      </p>
      <p className="text-warna3">
        With a strong eye for aesthetics and a love for clean architecture, I aim to create digital experiences that are not only visually engaging but also intuitive to use. My goal is to turn every interaction into a moment of delight —
        where creativity meets purpose.
      </p>
    </div>
  );
}

export default AboutMe;
