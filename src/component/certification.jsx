import { Title1 } from "./title";
import Tilt from "react-parallax-tilt";

function Certification() {
  const cardClass = "border border-solid border-warna4 w-full h-full flex flex-col items-center p-1 lg:p-5 rounded-md text-center bg-warna5 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4";
  const titleClass = "text-warna1 whitespace-nowrap text-md font-bold mt-2";
  const descriptionClass = "text-warna3 text-center leading-relaxed tracking-wide text-xs p-1";

  return (
    <div className="flex flex-col gap-3">
      <Title1 text="certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <a href="https://www.dicoding.com/certificates/NVP751VMGXR0" target="_blank" rel="noopener noreferrer">
              <img src="/assets/DICODING-BDPW.png" alt="Dicoding-BDPW" className="rounded-md" />
            </a>
            <h3 className={titleClass}>Basic Web Programming Course</h3>
            <p className={descriptionClass}>from Dicoding Indonesia</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <a href="https://www.dicoding.com/certificates/1RXYEOWEMZVM" target="_blank" rel="noopener noreferrer">
              <img src="/assets/DICODING-BDPJ.png" alt="Dicoding-BDPJ" className="rounded-md" />
            </a>
            <h3 className={titleClass}>Basic Javascript Course</h3>
            <p className={descriptionClass}>from Dicoding Indonesia</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <a href="https://www.dicoding.com/certificates/KEXL799MYXG2" target="_blank" rel="noopener noreferrer">
              <img src="/assets/DICODING-BDAI.png" alt="Dicoding-BDAI" className="rounded-md" />
            </a>
            <h3 className={titleClass}>Basic AI Course</h3>
            <p className={descriptionClass}>from Dicoding Indonesia</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <a href="https://www.dicoding.com/certificates/MEPJQ3E3WX3V" target="_blank" rel="noopener noreferrer">
              <img src="/assets/DICODING-BMFEuP.png" alt="Dicoding-BMFEiP" className="rounded-md" />
            </a>
            <h3 className={titleClass}>Beginner Front-End Web Course</h3>
            <p className={descriptionClass}>from Dicoding Indonesia</p>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Certification;
