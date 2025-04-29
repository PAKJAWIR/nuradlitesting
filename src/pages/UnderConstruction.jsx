import { Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-warna5">
      <div className="text-center space-y-4">
        <img
          src="/assets/undraw_under-construction_c2y1.svg"
          alt="Under Construction"
          className="w-64 mx-auto"
        />
        <p className="text-2xl text-warna1 font-semibold">
          This page is under construction.
        </p>
        <p className="text-warna1 text-md">
          Stay tuned — something amazing is coming!
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-warna1 text-warna6 rounded-lg hover:bg-warna4 hover:text-warna1 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;
