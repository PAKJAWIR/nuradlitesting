import AOS from 'aos';
import "aos/dist/aos.css";
import { MyServices2 } from "../myservices";
import { Certification2 } from "../certification";
import { useEffect } from 'react';

function MainAboutMe() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
  return (
    <>
      {/* Myservices */}
      <div className="flex  md:px-1 flex-col items-center justify-center gap-15 h-full pt-10" data-aos="fade-up">
        <MyServices2 />
      </div>
      <div className="flex md:px-1 flex-col items-center justify-center gap-15 h-full lg:p-10 p-6 overflow-hidden" data-aos="fade-up">
        <Certification2 />
      </div>
    </>
  );
}

export default MainAboutMe;
