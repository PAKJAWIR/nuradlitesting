import { useCursor } from "../context/cursorContext";
import { Title1 } from "./title";
const classPara = "text-warna3 text-justify text-sm lg:text-lg";

function ContactMe() {
  const { textEnter, textLeave } = useCursor();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 p-5 mt-20">
      {/* Column Kiri */}
      <div  className="md:w-1/2 flex flex-col gap-1">
        <Title1 text="contact-me" />
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className={classPara}>Get in touch with me for any inquiries or collaboration opportunities. I'm here to discuss your project needs, answer your questions, and explore how we can work together to achieve your goals.</p>
        <div className="md:w-1/2 w-full h-[300px] md:h-[400px] block lg:hidden mt-5">
          <iframe
            className="w-full h-full rounded-xl shadow-md"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33537.79347538879!2d106.67357785461994!3d-6.38634538894438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5dccf01caf5%3A0x401576d14fed410!2sGunung%20Sindur%2C%20Kec.%20Gn.%20Sindur%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1745936383624!5m2!1sid!2sid"
          ></iframe>
        </div>
        <div  className="text-warna3 space-y-4 mt-6">
          <div>
            <h3 onMouseEnter={textEnter} onMouseLeave={textLeave} className="font-semibold text-lg">Address</h3>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} className={classPara}>Kabupaten Bogor, Jawa Barat 16340, Indonesia</p>
          </div>
          <div>
            <h3 onMouseEnter={textEnter} onMouseLeave={textLeave} className="font-semibold text-lg">Phone</h3>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} className={classPara}>+62 123123</p>
          </div>
          <div>
            <h3 onMouseEnter={textEnter} onMouseLeave={textLeave} className="font-semibold text-lg">Email</h3>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave} className={classPara}>exam@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Column Kanan: Google Maps */}
      <div className="md:w-1/2 w-full h-[300px] md:h-[400px] hidden lg:block">
        <iframe
          className="w-full h-full rounded-xl shadow-md"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33537.79347538879!2d106.67357785461994!3d-6.38634538894438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5dccf01caf5%3A0x401576d14fed410!2sGunung%20Sindur%2C%20Kec.%20Gn.%20Sindur%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1745936383624!5m2!1sid!2sid"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactMe;
