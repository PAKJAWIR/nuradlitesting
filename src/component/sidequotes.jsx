function SideQuotes({ isi, author }) {
    return (
        <div className="border border-warna4 p-3 rounded-md mb-4 font-mono text-warna3 bg-transparent text-xs lg:text-base">
        <p className="whitespace-pre-line text-justify">"{isi}"</p>
        <p className="mt-2 text-left text-sm lg:text-base">– {author}</p>
      </div>
      
    );
  }
  
  export default SideQuotes;
  