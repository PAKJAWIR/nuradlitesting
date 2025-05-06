import { motion } from "motion/react";
import { useCursor } from "../../context/cursorContext";
import Tilt from "react-parallax-tilt";
import { AboutMeFull } from "../aboutme";
import { Title1 } from "../title";
import TechStack from "../techstack";

function HeaderAboutMe() {
  const { textEnter, textLeave } = useCursor();

  return (
    <section className="relative w-full pt-20 bg-warna6">
      {/* Background Gradient untuk Desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-warna6 to-warna5"></div>

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 flex flex-col lg:flex-row items-start justify-center p-5 gap-5 lg:gap-20 w-full"
      >
        {/* Kolom Kiri */}
        <div id="aboutme" className="flex flex-col gap-5 w-full lg:w-fit lg:max-w-lg p-5 flex-1">
          <div className="block lg:hidden md:block">
            <Title1 text="about-me" />
          </div>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1} transitionSpeed={400}>
            <div
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="h-fit overflow-hidden rounded-xl block lg:hidden md:block transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4"
            >
              <img src="/img/NuradliAbout.jpg" alt="Nuradli facing camera" className="w-full h-full object-cover rounded-xl" />
            </div>
          </Tilt>
          <AboutMeFull />
        </div>

        {/* Kolom Kanan */}
        <div className="flex-col gap-10 w-full lg:w-fit lg:flex lg:max-w-lg p-4 flex-1">
          <div className="hidden lg:block md:hidden">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1} transitionSpeed={400}>
              <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="h-fit overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4">
                <img src="/img/NuradliAbout.jpg" alt="Nuradli facing camera" className="w-full h-full object-cover rounded-xl" />
              </div>
            </Tilt>
          </div>
          <div className="w-full">
            <TechStack />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeaderAboutMe;
