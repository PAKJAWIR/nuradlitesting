import AboutMe from "./aboutme";
import { Button2 } from "./button";
import Certification from "./certification";
import MyServices from "./myservices";
import TechStack from "./techstack";

function Main() {
  return (
    <main id="aboutme" className="w-full pt-20 bg-warna6">
      {/* AboutMe Column */}
      <div className=" flex flex-col lg:flex-row items-start justify-center p-5 sm:p-10 gap-5 lg:gap-25 w-full">
        {/* Column Kiri */}
        <div className=" flex flex-col mt-20 gap-5 w-full lg:w-fit lg:max-w-lg p-5">
          <AboutMe />
          <Button2 text="Read More" to="/aboutme" />
        </div>
        {/* Column Kanan */}
        <div className="flex flex-col gap-15 mt-20 w-full lg:w-fit lg:max-w-lg p-5">
          <TechStack />
          <MyServices />
        </div>
      </div>
      {/* Certifications */}
      <div className=" border-warna4 flex flex-col lg:flex-row items-start justify-center p-5 sm:p-10 gap-5 lg:gap-25 w-full">
        <div className=" flex flex-col lg:flex-row items-start justify-center p-5 sm:p-10 gap-5 lg:gap-25 w-full">
          <Certification />
        </div>
      </div>
    </main>
  );
}

export default Main;
