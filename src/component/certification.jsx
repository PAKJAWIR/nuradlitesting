import { useEffect, useState } from "react";
import { useCursor } from "../context/cursorContext";
import { Title1, Title2 } from "./title";
import Tilt from "react-parallax-tilt";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { div } from "motion/react-client";

export function Certification() {
  // Class configurations
  const cardClass = "border border-solid border-warna4 w-full h-full flex flex-col items-center p-1 lg:p-5 rounded-md text-center bg-warna5 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4";
  const titleClass = "text-warna1 whitespace-nowrap text-md font-bold mt-2";
  const descriptionClass = "text-warna3 text-center leading-relaxed tracking-wide text-xs p-1";
  const imageWrapperClass = "relative overflow-hidden rounded-md group cursor-none";
  const hoverOverlayClass = "absolute inset-0 bg-gradient-to-t from-warna6/90 to-warna4/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-end p-4";
  const hoverTextWrapperClass = "text-warna2 space-y-2 translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 text-left";
  const normalTextWrapperClass = "flex flex-col items-center";
  // Certification data mapping
  const certifications = [
    {
      id: 1,
      imgSrc: "/assets/DICODING-BDPW.png",
      href: "https://www.dicoding.com/certificates/NVP751VMGXR0",
      title: "Basic Web Programming Course",
      description: "from Dicoding Indonesia",
    },
    {
      id: 2,
      imgSrc: "/assets/DICODING-BDPJ.png",
      href: "https://www.dicoding.com/certificates/1RXYEOWEMZVM",
      title: "Basic Javascript Course",
      description: "from Dicoding Indonesia",
    },
    {
      id: 3,
      imgSrc: "/assets/DICODING-BDAI.png",
      href: "https://www.dicoding.com/certificates/KEXL799MYXG2",
      title: "Basic AI Course",
      description: "from Dicoding Indonesia",
    },
    {
      id: 4,
      imgSrc: "/assets/DICODING-BMFEuP.png",
      href: "https://www.dicoding.com/certificates/MEPJQ3E3WX3V",
      title: "Beginner Front-End Web Course",
      description: "from Dicoding Indonesia",
    },
  ];

  const { textEnter, textLeave } = useCursor();

  return (
    <div className="flex flex-col item-center justify-center gap-3">
      <Title1 text="certifications" />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {certifications.map((cert) => (
          <Tilt key={cert.id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
            <div className={cardClass}>
              <a href={cert.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} certificate`} className="relative block focus:outline-none">
                <div className={imageWrapperClass}>
                  <img src={cert.imgSrc} alt={`Certification-${cert.id}`} className=" w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105" />

                  {/* Hover effect overlay */}
                  <div className={hoverOverlayClass}>
                    <div className={hoverTextWrapperClass}>
                      <h3 className="text-warna1 text-md font-bold">{cert.title}</h3>
                      <p className="text-warna3 text-xs">{cert.description}</p>

                      {/* Hover link underline */}
                      <div className="relative group">
                        <span className="text-sm font-medium flex items-center gap-1">
                          <Title2 text="view-certificate" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Normal text outside hover */}
              <div className={normalTextWrapperClass}>
                <h3 className={titleClass}>{cert.title}</h3>
                <p className={descriptionClass}>{cert.description}</p>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

// Certification2
export function Certification2() {
  // Class configurations
  const cardClass = "border border-solid border-warna4 w-full h-full flex flex-col items-center p-5 rounded-md text-center bg-warna5 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4";
  const titleClass = "text-warna1 whitespace-nowrap text-md font-bold mt-2";
  const descriptionClass = "text-warna3 text-center leading-relaxed tracking-wide text-xs p-1";
  const imageWrapperClass = "relative cursor-none overflow-hidden rounded-md group";
  const hoverOverlayClass = "absolute inset-0 bg-gradient-to-t from-warna6/90 to-warna4/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-end p-4";
  const hoverTextWrapperClass = "text-warna2 space-y-2 translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 text-left";
  const normalTextWrapperClass = "flex flex-col items-center";

  // Mobile-only class configurations
  const mobileCardClass = "border border-warna4 bg-warna5 p-1 rounded-md text-center flex flex-col items-center w-full h-full";
  const mobileImageWrapperClass = "w-full h-full flex justify-center mb-3";
  const mobileImageClass = "w-full h-full object-contain rounded";
  const mobileTitleClass = "text-warna1 text-sm font-bold mt-2";
  const mobileDescriptionClass = "text-warna3 text-center text-xs p-1";

  // Certification data mapping
  const certificationsMap = [
    {
      id: 1,
      imgSrc: "/assets/DICODING-BDPW.png",
      href: "https://www.dicoding.com/certificates/NVP751VMGXR0",
      title: "Basic Web Programming Course",
      description: "from Dicoding Indonesia",
    },
    {
      id: 2,
      imgSrc: "/assets/DICODING-BDPJ.png",
      href: "https://www.dicoding.com/certificates/1RXYEOWEMZVM",
      title: "Basic Javascript Course",
      description: "from Dicoding Indonesia",
    },
    {
      id: 3,
      imgSrc: "/assets/DICODING-BDAI.png",
      href: "https://www.dicoding.com/certificates/KEXL799MYXG2",
      title: "Basic AI Course",
      description: "from Dicoding Indonesia",
    },
    {
      id: 4,
      imgSrc: "/assets/DICODING-BMFEuP.png",
      href: "https://www.dicoding.com/certificates/MEPJQ3E3WX3V",
      title: "Beginner Front-End Web Course",
      description: "from Dicoding Indonesia",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const { textEnter, textLeave } = useCursor();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    handleChange(mediaQuery); // Initial check
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col justify-center max-w-5xl w-full mx-auto gap-3 px-5">
          <Title1 text="certifications" />
          <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-full">
            {certificationsMap.map((certM) => (
              <SwiperSlide key={certM.id}>
                <a href={certM.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${certM.title} certificate`} className={mobileCardClass}>
                  <div className={mobileImageWrapperClass}>
                    <img src={certM.imgSrc} alt={`Certification-${certM.id}`} className={mobileImageClass} />
                  </div>
                  <h3 className={mobileTitleClass}>{certM.title}</h3>
                  <p className={mobileDescriptionClass}>{certM.description}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex flex-col item-center justify-center gap-3 max-w-6xl">
          <Title1 text="certifications" />
          <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {certificationsMap.map((certM) => (
              <Tilt key={certM.id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                <div className={cardClass}>
                  <a href={certM.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${certM.title} certificate`} className="relative block focus:outline-none group">
                    <div className={imageWrapperClass}>
                      <img src={certM.imgSrc} alt={`Certification-${certM.id}`} className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105" />
                      <div className={hoverOverlayClass}>
                        <div className={hoverTextWrapperClass}>
                          <h3 className="text-warna1 text-md font-bold">{certM.title}</h3>
                          <p className="text-warna3 text-xs">{certM.description}</p>
                          <div className="relative group">
                            <span className="text-sm font-medium flex items-center gap-1">
                              <Title2 text="view-certificate" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className={normalTextWrapperClass}>
                    <h3 className={titleClass}>{certM.title}</h3>
                    <p className={descriptionClass}>{certM.description}</p>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
