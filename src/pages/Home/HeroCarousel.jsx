import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const backgroundImage =
  "/mnt/data/19dd864b-1111-47f3-8070-d4b0b39a2e91.png";

const slides = [
  {
    id: 1,
    text: "Logística",
    icons: ["📦", "✈️"],
  },
  {
    id: 2,
    text: "Embalaje",
    icons: ["✈️"],
  },
  {
    id: 3,
    text: "Transporte",
    icons: ["✈️"],
  },
  {
    id: 4,
    text: "Logística",
    icons: ["📦", "🚚"],
  },
];

export default function HeroCarousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2600,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    fade: false,
    cssEase: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  };

  return (
    <section className="w-full bg-[#eef6fb] py-12">
      {/* FULL WIDTH (edge to edge) */}
      <div className="relative w-full max-w-[100%] overflow-hidden">

        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="relative flex min-h-52 items-center justify-center py-8 md:min-h-72 lg:min-h-96">

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 grayscale"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                  }}
                />

                {/* Full content side-by-side */}
                <div className="relative z-10 flex items-center justify-center gap-6 text-center">
                  {/* Left Text */}
                  <span className="text-5xl font-extrabold tracking-tight text-[#0b6b3d] md:text-7xl lg:text-8xl">
                    Logística
                  </span>

                  {/* Icons */}
                  <div className="flex items-center gap-4 md:gap-6">
                    {slide.icons.map((icon, i) => (
                      <span
                        key={i}
                        className="text-5xl md:text-7xl lg:text-8xl"
                        style={{ animation: `float 4s ease-in-out ${i * 0.3}s infinite` }}
                      >
                        {icon}
                      </span>
                    ))}
                  </div>

                  {/* Right changing text */}
                  <span className="text-5xl font-extrabold tracking-tight text-[#0b6b3d] md:text-7xl lg:text-8xl">
                    {slide.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
