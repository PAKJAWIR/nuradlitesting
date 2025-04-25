import AboutMe from "./aboutme";
import { Button2 } from "./button";
import TechStack from "./techstack";

function Main() {
  return (
    <main id="aboutme" className="h-full pt-20 bg-warna5">
      <div className="flex flex-col lg:flex-row items-center justify-center p-5 sm:p-10 gap-5 lg:gap-25 h-full w-full">
        {/* Column Kiri */}
        <div className="flex flex-col gap-5 w-fit lg:max-w-lg p-5">
          <AboutMe />
          <Button2 text="Read More" to="/aboutme" />
        </div>
        {/* Column Kanan */}
          <div className="flex flex-col w-screen lg:max-w-lg p-10 overflow-hidden lg:overflow-hidden">
            <TechStack />
          </div>
      </div>
    </main>
  );
}

export default Main;
