import { Button1, Button2 } from "./button";
import HoverDecryptText from "./decrypttext";

import RunningText from "./runningtext";
import SideQuotes from "./sidequotes";
import { Title3 } from "./title";

function Header() {
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
        <div className="relative z-10 flex flex-col md:flex-row md:p-10 gap-10 items-center justify-center p-10 md:gap-25 h-full w-full">
          {/* Column Kiri */}
          <div className="w-fit md:max-w-lg">
            <div className="p-5 md:p-5">
              {/* H1 utama */}
              <h1 className="text-warna2 text-lg md:text-3xl font-bold text-justify">
                My name is Nuradli, I am a <span className="text-warna4">Graphic Designer</span> and <span className="text-warna4">Front-End Developer</span>
              </h1>

              {/* Deskripsi */}
              <p className="text-warna3 text-xs md:text-sm font-medium mt-2">Love to craft good and simple things</p>

              {/* Button */}
              <div className="gap-2 md:gap-5 flex flex-row mt-5">
                <Button2 text="About Me" href="#aboutme" />
                <Button1 />
              </div>

              {/* Sidequotes Section */}
              <div className="flex flex-col gap-2 mt-10 md:mt-16">
                <Title3 text="sidequotes" />

                {/* Sidequotes */}
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
              <h3 className="text-warna3 border border-solid border-warna4 p-5 text-center rounded-md text-2xl md:text-xl hover:bg-warna5/10 transition-colors">
                <HoverDecryptText text="Need-money-for-Porsche" characters="0123456789$€¥£¢%&*" />
              </h3>
              {/* Foto */}
              <div className="h-fit overflow-hidden rounded-md hidden md:block">
                <img src="/img/Nuradli.jpg" alt="Nuradli facing camera" loading="lazy" className="w-full h-full md:w-full md:h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Running Text */}
      <RunningText />

      {/* Section Akhir Header */}
      <div id="last-header-section" className="w-full bg-transparent"></div>
    </header>
  );
}

export default Header;
