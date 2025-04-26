import { Title1 } from "./title";
import { FaCode, FaPaintBrush, FaPenNib, FaFileAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function MyServices() {
  const cardClass = "border border-solid border-warna4 w-full h-full flex flex-col items-center" + 
  " p-5 rounded-md text-center bg-warna5 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4";
  const titleClass = "text-warna1 whitespace-nowrap text-md font-bold mt-2";
  const descriptionClass = "text-warna3 text-center leading-relaxed tracking-wide text-xs p-1";

  return (
    <div className="flex flex-col gap-3">
      <Title1 text="my-services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <FaCode className="text-warna4 text-lg" />
            <h3 className={titleClass}>web-building</h3>
            <p className={descriptionClass}>Creating and maintaining functional websites with a focus on front-end development and performance optimization.</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <FaPaintBrush className="text-warna4 text-lg" />
            <h3 className={titleClass}>web-design</h3>
            <p className={descriptionClass}>Custom website designs that are visually appealing and responsive, ensuring a great user experience.</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <FaPenNib className="text-warna4 text-lg" />
            <h3 className={titleClass}>graphic-design</h3>
            <p className={descriptionClass}>Creating impactful visual content such as logos, marketing materials, and social media graphics.</p>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
          <div className={cardClass}>
            <FaFileAlt className="text-warna4 text-lg" />
            <h3 className={titleClass}>article-writing</h3>
            <p className={descriptionClass}>Crafting engaging written content for blogs, websites, and other platforms with professional editing and proofreading.</p>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default MyServices;
