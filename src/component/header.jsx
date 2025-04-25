import {  Button1, Button2 } from "./button";
import SideQuotes from "./sidequotes";

function Header() {
  return (
    <header>
      <div className="relative h-full pt-20 bg-[url('/src/assets/img/nuradli.jpg')] bg-top bg-no-repeat bg-cover lg:bg-gradient-to-t from-warna5 to-warna6">
        {/* Glassmorph */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14263066] to-[#5485B0] backdrop-blur-xs lg:hidden z-0 mix-blend-darken transition-all duration-300" />
        <div className="relative z-10 flex flex-col lg:flex-row sm:p-10 gap-10 items-center justify-center p-10 lg:gap-25 h-full w-full">
          {/* Column Kiri */}
          <div className="w-fit lg:max-w-lg">
            <div className="p-5 lg:p-5">
              <h3 className="text-warna2 text-lg lg:text-3xl font-bold text-justify">
                My name is Nuradli, i am a <span className="text-warna4">graphic designer</span> and <span className="text-warna4">front-end developer</span>
              </h3>
              <p className="text-warna3 text-xs lg:text-sm font-medium mt-2">Love to crafts a good and simple things</p>
              <div className="gap-2 lg:gap-5 flex flex-row mt-5">
                <Button2 text="About Me" href="#aboutme" />
                <Button1 />
              </div>
              <div className="flex flex-col gap-2 mt-10 lg:mt-16">
                <p className="text-warna2 text-sm lg:text-lg">
                  <span className="text-warna4">*</span>
                  <u>sidequotes</u>
                </p>
                <SideQuotes isi="You have power over your mind — not outside events. Realize this, and you will find strength." author="Marcus Aurelius" />
                <SideQuotes isi="It’s not what happens to you, but how you react to it that matters." author="Epictetus" />
                <SideQuotes isi="We suffer more often in imagination than in reality." author="Seneca" />
              </div>
            </div>

            {/* Status Mobile */}
            <div className="p-5 lg:p-5 flex flex-col gap-2 lg:hidden">
              <p className="text-warna2 text-xs">
                <span className="text-warna4">*</span>
                <u>current-status</u>
              </p>
              <h3 className="text-warna3 border border-solid border-warna4 p-5 text-center rounded-md text-xl whitespace-nowrap">
                need money for <span className="text-warna4">porsche</span>
              </h3>
            </div>
          </div>

          {/* Column Kanan */}
          <div className="w-fit lg:max-w-lg hidden lg:block">
            <div className="p-5 lg:p-5 flex flex-col gap-2">
              <p className="text-warna2 text-sm">
                <span className="text-warna4">*</span>
                <u>current-status</u>
              </p>
              <h3 className="text-warna3 border border-solid border-warna4 p-5 text-center rounded-md text-2xl">
                need money for <span className="text-warna4">porsche</span>
              </h3>
              <div className="h-fit overflow-hidden rounded-md hidden lg:block">
                <img src="/src/assets/img/nuradli.jpg" alt="Nuradli" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
