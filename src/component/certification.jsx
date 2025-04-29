import { Title1, Title2 } from "./title";
import Tilt from "react-parallax-tilt";

function Certification() {
  // Class configurations
  const cardClass = "border border-solid border-warna4 w-full h-full flex flex-col items-center p-1 lg:p-5 rounded-md text-center bg-warna5 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4";
  const titleClass = "text-warna1 whitespace-nowrap text-md font-bold mt-2";
  const descriptionClass = "text-warna3 text-center leading-relaxed tracking-wide text-xs p-1";
  const imageWrapperClass = "relative overflow-hidden rounded-md group";
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

  return (
    <div className="flex flex-col gap-3">
      <Title1 text="certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {certifications.map((cert) => (
          <Tilt key={cert.id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
            <div className={cardClass}>
              <a href={cert.href} target="_blank" rel="noopener noreferrer" className="relative block focus:outline-none">
                <div className={imageWrapperClass}>
                  <img src={cert.imgSrc} alt={`Certification-${cert.id}`} className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105" />

                  {/* Hover effect overlay */}
                  <div className={hoverOverlayClass}>
                    <div className={hoverTextWrapperClass}>
                      <h3 className="text-warna1 text-md font-bold">{cert.title}</h3>
                      <p className="text-warna3 text-xs">{cert.description}</p>

                      {/* Hover link underline */}
                      <div className="relative group">
                        <span className="text-sm font-medium flex items-center gap-1 cursor-pointer">
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

export default Certification;
