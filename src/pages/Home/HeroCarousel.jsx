import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Put your uploaded image path here (or use a public URL)
const backgroundImage = "/mnt/data/19dd864b-1111-47f3-8070-d4b0b39a2e91.png";
// If you uploaded it somewhere else, replace with:
// const backgroundImage = "https://your-domain.com/path/to/image.png";

const slides = [
  {
    id: 1,
    text: "Logística",
    icons: ["📦", "✈️"], // you can replace with your own SVG/icons later
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
    pauseOnHover: true,
    fade: false,
    cssEase: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  };

  return (
    <section className="w-full bg-[#eef6fb] py-12 ">
      {/* Full-width wrapper (bleeds to the edges) */}
      <div className="relative  w-[100%] ">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="relative flex min-h-40 items-center justify-center py-8 md:min-h-56 md:py-12">
                {/* Very subtle background image */}
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-5 grayscale"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                  }}
                  aria-hidden="true"
                />

                {/* Main text + icons */}
                <h2 className="relative z-10 flex flex-wrap items-center justify-center gap-6 text-center text-5xl font-extrabold tracking-tighter text-[#0b6b3d] md:gap-10 md:text-7xl lg:text-8xl">
                  {/* Left part (always visible) */}
                  <span className="whitespace-nowrap">Logística</span>

                  {/* Flying icons */}
                  <span className="flex items-center gap-4 md:gap-8">
                    {slide.icons.map((icon, i) => (
                      <span
                        key={i}
                        className="text-5xl md:text-7xl lg:text-8xl"
                        style={{ animation: `float 4s ease-in-out ${i * 0.3}s infinite` }}
                      >
                        {icon}
                      </span>
                    ))}
                  </span>

                  {/* Changing word */}
                  <span className="whitespace-nowrap">{slide.text}</span>
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Optional tiny floating animation for the icons */}
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