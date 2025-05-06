import { Button2 } from "../button";
import { Certification } from "../certification";
import ContactMe from "../contactme";
import MyProjects from "../myprojects";
import TechStack from "../techstack";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutMe } from "../aboutme";
import { MyServices } from "../myservices";

function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <main id="aboutme" className="w-full bg-warna6">
      {/* AboutMe Column */}
      <div className="flex flex-col lg:flex-row items-start justify-center p-5 sm:p-10 gap-5 lg:gap-25 w-full">
        {/* Column Kiri */}
        <div className="flex flex-col mt-10 gap-5 w-full lg:w-fit lg:max-w-lg p-5" data-aos="fade-up">
          <AboutMe />
          <Button2 text="Read More" to="/aboutme/#" />
        </div>

        {/* Column Kanan */}
        <div className="flex flex-col gap-15 mt-10 w-full lg:w-fit lg:max-w-lg p-5">
          <div data-aos="fade-up">
            <TechStack />
          </div>
          <div data-aos="fade-up">
            <MyServices />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10 lg:p-5 gap-5 w-full">
        {/* Certifications */}
        <div className="border-warna4 flex flex-col items-center justify-center md:px-1 p-10 lg:p-5 gap-5 w-full overflow-hidden" data-aos="fade-up">
          <Certification />
        </div>

        {/* My Projects */}
        <div className="flex flex-col items-start justify-center p-1 lg:p-0 gap-5 md:px-0 mt-5 w-full h-full" data-aos="fade-up">
          <MyProjects />
        </div>

        {/* Contact Me */}
        <div className="flex flex-col items-start justify-center p-1 lg:p-0 md:p-0 gap-5 md:px-0  mt-5 h-full" data-aos="fade-up">
          <ContactMe />
        </div>
      </div>
    </main>
  );
}

export default Main;
