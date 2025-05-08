import { motion } from "motion/react";
import { Button1, Button2 } from "../button";
import HoverDecryptText from "../decrypttext";
import RunningText from "../runningtext";
import SideQuotes from "../sidequotes";
import { Title3 } from "../title";
import Tilt from "react-parallax-tilt";
import { useCursor } from "../../context/cursorContext";

function Header() {
  const { textEnter, textLeave } = useCursor();
  return (
    <header>
      <div className="relative h-full pt-20">
        {/* Background Gambar (Mobile) */}
        <div className="absolute inset-0 bg-top bg-no-repeat bg-cover md:hidden" style={{ backgroundImage: "url('/img/Nuradli.jpg')" }}></div>

        {/* Background Gradient (Desktop & Medium) */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-transparent via-warna6 to-warna5"></div>

        {/* Glassmorph Overlay (Mobile) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14263066] to-[#5485B0] backdrop-blur-xs md:hidden z-0 mix-blend-darken transition-all duration-300" />

        {/* Konten */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 flex flex-col md:flex-row md:p-10 gap-10 items-center justify-center p-10 md:gap-25 h-full w-full"
        >
          {/* Column Kiri */}
          <div className="w-fit md:max-w-lg">
            <div className="p-5 md:p-5">
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-warna2 text-lg md:text-3xl font-bold text-justify">
                My name is Nuradli, I am a <span className="text-warna4">Graphic Designer</span> and <span className="text-warna4">Front-End Developer</span>
              </h1>
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-warna3 text-xs md:text-sm font-medium mt-2">
                Love to craft good and simple things
              </p>

              <div className="gap-2 md:gap-5 flex flex-row mt-5">
                <Button2 text="About Me" href="#aboutme" />
                <Button1 />
              </div>

              <div className="flex flex-col gap-2 mt-10 md:mt-16">
                <Title3 text="sidequotes" />
                <SideQuotes isi="You have power over your mind — not outside events. Realize this, and you will find strength." author="Marcus Aurelius" />
                <SideQuotes isi="It’s not what happens to you, but how you react to it that matters." author="Epictetus" />
                <SideQuotes isi="We suffer more often in imagination than in reality." author="Seneca" />
              </div>
            </div>
          </div>

          {/* Column Kanan */}
          <div className="w-fit md:max-w-lg md:h-fit hidden lg:block md:hidden">
            <div className="p-5 md:p-5 flex flex-col gap-2">
              <Title3 text="current-status" />
              <h3
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-warna3 border border-solid border-warna4 p-5 text-center rounded-md text-2xl md:text-xl hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4"
              >
                <HoverDecryptText text="Need-money-for-Porsche" characters="0123456789$€¥£¢%&*" />
              </h3>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1} transitionSpeed={400}>
                <div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="h-fit overflow-hidden rounded-xl hidden md:block transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4"
                >
                  <img src="/img/Nuradli.jpg" alt="Nuradli facing camera" className="w-full h-full md:w-full md:h-full object-cover rounded-xl" />
                </div>
              </Tilt>
            </div>
          </div>
        </motion.div>
      </div>

      <RunningText />
      <div id="last-header-section" className="w-full bg-transparent"></div>
    </header>
  );
}

export default Header;
