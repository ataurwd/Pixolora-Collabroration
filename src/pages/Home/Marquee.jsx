import React from "react";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden mb-16">
      <div
        className="flex items-center gap-16 whitespace-nowrap animate-scroll"
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        <span className="flex items-center gap-4 text-[64px] font-semibold text-[#006c4f]">
          Logística{" "}
          <img
            src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/ic12.svg"
            className="w-[60px]"
            alt=""
          />
        </span>

        <span className="flex items-center gap-4 text-[64px] font-semibold text-[#006c4f]">
          Embalaje{" "}
          <img
            src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/ic12.svg"
            className="w-[60px]"
            alt=""
          />
        </span>

        <span className="flex items-center gap-4 text-[64px] font-semibold text-[#006c4f]">
          Transporte{" "}
          <img
            src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/ic13.svg"
            className="w-[60px]"
            alt=""
          />
        </span>

        {/* Duplicate for infinite loop */}
        <span className="flex items-center gap-4 text-[64px] font-semibold text-[#006c4f]">
          Logística{" "}
          <img
            src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/ic12.svg"
            className="w-[60px]"
            alt=""
          />
        </span>

        <span className="flex items-center gap-4 text-[64px] font-semibold text-[#006c4f]">
          Embalaje{" "}
          <img
            src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/ic12.svg"
            className="w-[60px]"
            alt=""
          />
        </span>

        <span className="flex items-center gap-4 text-[64px] font-semibold text-[#006c4f]">
          Transporte{" "}
          <img
            src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/ic13.svg"
            className="w-[60px]"
            alt=""
          />
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 16s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
