import { useCursor } from "../context/cursorContext";

function SideQuotes({ isi, author }) {
  const { textEnter, textLeave } = useCursor();
  return (
    <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="border border-warna4 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4 p-3 rounded-md mb-4 font-mono text-warna3 bg-transparent text-xs lg:text-base hover:scale-105 transition-all duration-300 ease-in-out">
      <p className="whitespace-pre-line text-justify">"{isi}"</p>
      <p className="mt-2 text-left text-sm lg:text-base">– {author}</p>
    </div>
  );
}

export default SideQuotes;
