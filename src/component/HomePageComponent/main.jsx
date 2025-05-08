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
      <div className="flex flex-col lg:flex-row  items-start justify-center p-5 sm:p-10 gap-5 lg:gap-25 w-full">
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

      <div className="flex flex-col items-center justify-center p-5 lg:p-5 gap-5 w-full" data-aos="fade-up">
        {/* Certifications */}
        <div className="border-warna4 flex flex-col items-center justify-center md:px-1 p-0 lg:p-5 gap-5 w-full overflow-hidden">
          <Certification />
        </div>
        {/* My Projects */}
        <MyProjects />
        {/* Contact Me */}
        <ContactMe />
      </div>
    </main>
  );
}

export default Main;
