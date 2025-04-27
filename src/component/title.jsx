export function Title1({ text }) {
  return (
    <h3 className="text-warna1 text-xl font-bold relative">
      <span className="relative z-10">
        <span className="text-warna4">*</span>
        {text}
      </span>
    </h3>
  );
}

export function Title2({ text }) {
  return (
    <h3 className="text-warna1 text-sm font-bold relative">
      <span className="relative z-10">
        <span className="text-warna4">*</span>
        {text}
      </span>{" "}
      <span className="text-warna4 absolute left-0 bottom-0 w-0 h-[2px] bg-warna4 origin-left transition-all duration-1000 group-hover:w-full" />
    </h3>
  );
}

export function Title3({ text }) {
  return (
    <h3 className="text-warna1 text-md font-medium relative">
      <span className="relative z-10">
        <span className="text-warna4">*</span>
        <u>{text}</u>
      </span>
    </h3>
  );
}
