import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-white text-4xl font-bold">
        <span>N</span>
        <span className="relative animate-spin-slow triangle-animation">A</span>
        <span>URADLI</span>
      </div>
      <style jsx>{`
        .triangle-animation {
          display: inline-block;
          animation: spinAndTransform 2s infinite linear;
        }

        @keyframes spinAndTransform {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .triangle-animation::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 20px solid white;
          transform: translate(-50%, -50%) scale(0);
          animation: showTriangle 2s infinite ease-in-out;
        }

        @keyframes showTriangle {
          0% {
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
          }
        }

        .animate-spin-slow {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;