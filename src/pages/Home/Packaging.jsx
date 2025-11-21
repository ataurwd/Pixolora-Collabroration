// Packaging.jsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

// slick carousel CSS (make sure slick-carousel is installed)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCarousel from "./HeroCarousel";
import Marquee from "./Marquee";

/**
 * Packaging.jsx (Adjusted markers)
 * - Full width autoplay slideshow (pause on hover & focus)
 * - Left: circular logo + avatars (subtle scroll-driven rotation)
 * - Right: map background with adjusted markers for Europe (nudged left/up)
 *
 * Tweak marker left/top % values if you want micro-adjustments.
 */

const slides = [
  { id: 1, text: "List Logística", icon: "✈️" },
  { id: 2, text: "List Embalaje", icon: "📦" },
  { id: 3, text: "List Transporte", icon: "🚚" },
];

const avatars = [
  { id: 1, src: "https://i.pravatar.cc/80?img=1", angle: -110 },
  { id: 2, src: "https://i.pravatar.cc/80?img=2", angle: -35 },
  { id: 3, src: "https://i.pravatar.cc/80?img=3", angle: 40 },
  { id: 4, src: "https://i.pravatar.cc/80?img=4", angle: 120 },
];

// Updated / nudged marker positions (Europe pins moved a bit left & up)
const markers = [
  // Europe — nudged left/up compared to previous values
  { id: "denmark", label: "Denmark", left: "60%", top: "19%" },
  { id: "germany", label: "Germany", left: "5%", top: "55%" },
  { id: "france", label: "France", left: "74%", top: "60%" },
  { id: "switzerland", label: "Switzerland", left: "10%", top: "33%" },
  { id: "italy", label: "Italy", left: "81%", top: "37%" },
  { id: "spain", label: "Spain", left: "40%", top: "56%" },

//   // other global markers (slightly adjusted)
//   { id: "brazil", label: "Brazil", left: "46%", top: "64%" },
//   { id: "usa", label: "USA", left: "22%", top: "28%" },
//   { id: "india", label: "India", left: "78%", top: "54%" },
];

export default function Packaging() {
  const circleRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    function onScroll() {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // inView 0..1
      const inView = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setRotation((inView - 0.5) * 24); // subtle +/-12deg
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // slick settings (full width, autoplay, pause on hover/focus)
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
    pauseOnFocus: true,
    fade: true, // remove this for sliding effect instead of fade
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Right side map background (SVG) and left logo
  const mapBg = "https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/map.svg";
  const logoSrc =
    "https://expresur.weblnnovators.com/wp-content/uploads/2025/11/Expresur-02__1_-removebg-preview.png";

  return (
    <section className="pt-28 pb-32 w-full bg-[#eef6fb] py-8">
      <div className="max-w-7xl mx-auto px-6">       
      

    <Marquee/>

        {/* MAIN: left circle + right map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: circular logo + avatars */}
          <div className="flex justify-center md:justify-start">
            <div
              ref={circleRef}
              className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 300ms ease-out",
              }}
              aria-hidden={false}
            >
              {/* decorative rings */}
              <div style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%" }} />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "3px dashed #ff9f1a",
                  transform: "scale(1.12)",
                }}
                aria-hidden
              />

              <div
                style={{
                  position: "absolute",
                  inset: "10%",
                  borderRadius: "50%",
                  border: "2px dashed #ff9f1a",
                }}
                aria-hidden
              />

              {/* central logo */}
              <div
                style={{
                  width: "56%",
                  height: "56%",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#e8fbff,#f2fff3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={logoSrc}
                  alt="company logo"
                  style={{ width: "90%", height: "90%", objectFit: "cover", borderRadius: "50%" }}
                />
              </div>

              {/* avatars arranged around circle */}
              {avatars.map((a) => {
                const radius = 42; // % offset from center
                const rad = (a.angle * Math.PI) / 180;
                const left = 50 + radius * Math.cos(rad);
                const top = 50 + radius * Math.sin(rad);
                return (
                  <div
                    key={a.id}
                    className="absolute"
                    style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%,-50%)" }}
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img
                        src={a.src}
                        alt={`avatar ${a.id}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: map with markers */}
          <div className="relative w-full h-96 md:h-96 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${mapBg})`,
                backgroundPosition: "center right",
                backgroundSize: "cover",
                filter: "grayscale(80%) contrast(1.05) brightness(1.02)",
              }}
              role="img"
              aria-label="world map background"
            />

            <div className="absolute inset-0 bg-[rgba(255,255,255,0.03)]" />

            {markers.map((m) => (
              <div
                key={m.id}
                onMouseEnter={() => setActiveMarker(m.id)}
                onMouseLeave={() => setActiveMarker(null)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: m.left, top: m.top }}
                aria-hidden={false}
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#00a7d7] ring-2 ring-white shadow" />
                  <span
                    className="absolute w-8 h-8 rounded-full opacity-30"
                    style={{
                      border: "2px dotted rgba(0,167,215,0.08)",
                      transform: "translate(-50%,-50%)",
                      left: "50%",
                      top: "50%",
                    }}
                  />
                </div>

                {activeMarker === m.id && (
                  <div
                    className="absolute whitespace-nowrap -top-10 left-1/2 transform -translate-x-1/2"
                    style={{
                      background: "#0b6b3d",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: 13,
                      boxShadow: "0 6px 18px rgba(11,107,61,0.18)",
                    }}
                  >
                    {m.label}
                    <span
                      style={{
                        position: "absolute",
                        width: 0,
                        height: 0,
                        borderLeft: "7px solid transparent",
                        borderRight: "7px solid transparent",
                        borderTop: "7px solid #0b6b3d",
                        bottom: -7,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}

            {/* decorative route */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M25 65 C40 55, 55 60, 68 38"
                fill="none"
                stroke="#ffffff50"
                strokeWidth="0.3"
                strokeDasharray="1 2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}