import { motion } from "framer-motion";
import { Title1 } from "../title";
import ContactMe from "../contactme";

function HeaderContact() {

  return (
    <section className="relative w-full pt-20 bg-warna6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-warna6 to-warna5 z-0" />

      {/* Konten */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 flex flex-row items-center justify-center p-5 w-full"
      >
        {/* Form atau Konten Contact */}
        <div
          className="w-full max-w-6xl"
        >
          <ContactMe />
        </div>
      </motion.div>
    </section>
  );
}

export default HeaderContact;
