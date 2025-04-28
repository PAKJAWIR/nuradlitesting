import { useState, useEffect } from "react";
import { BackToTopButton } from "./button";

function BackToTop() {
  const [buttonTop, setButtonTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scrollY lebih dari 100px maka tampilkan button
      if (window.scrollY > 100) {
        setButtonTop(true);
      } else {
        setButtonTop(false);
      }
    };

    // Tambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return <>{buttonTop && <BackToTopButton onClick={scrollToTop} />}</>;
}

export default BackToTop;
