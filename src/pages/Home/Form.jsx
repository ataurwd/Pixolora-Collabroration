import React, { useEffect, useRef } from "react";

export default function FormWithParallaxFixed() {
  const bgRef = useRef(null);       // the fixed image element
  const sectionRef = useRef(null);  // the section we measure against
  const rafRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    // Config
    const baseScale = 1.06;
    const desktopFactor = 0.12; // subtle shift on desktop
    const mobileFactor = 0.02;  // tiny shift on mobile (or set 0 to disable)
    const ease = 0.08;          // lerp smoothness (smaller = smoother/slower)

    let currentY = 0;
    let targetY = 0;

    const isMobile = () => window.innerWidth < 768;

    const updateTarget = () => {
      const rect = el.getBoundingClientRect();
      // target relative to viewport center
      const factor = isMobile() ? mobileFactor : desktopFactor;
      targetY = (rect.top - window.innerHeight / 2) * factor;
    };

    // smooth RAF loop
    const loop = () => {
      updateTarget();
      currentY += (targetY - currentY) * ease;
      // round to avoid sub-pixel jitter on some devices
      const rounded = Math.round(currentY * 100) / 100;
      // apply transform to the fixed bg; translate on Y + slight scale for depth
      bg.style.transform = `translate3d(0, ${rounded}px, 0) scale(${baseScale})`;
      rafRef.current = requestAnimationFrame(loop);
    };

    // init
    rafRef.current = requestAnimationFrame(loop);

    // update on resize and orientation change
    const onResize = () => {
      updateTarget();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    // also observe section changes (e.g., dynamic content)
    const ro = new ResizeObserver(onResize);
    ro.observe(el);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Fixed background (covers viewport) */}
      <div
        aria-hidden="true"
        ref={bgRef}
        className="pointer-events-none fixed inset-0 -z-10 w-full h-full overflow-hidden"
        style={{
          willChange: "transform",
          transform: "translate3d(0,0,0) scale(1.06)",
        }}
      >
        <img
          src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/qt-bg.webp"
          alt=""
          className="w-full h-full object-cover"
          style={{ display: "block" }}
        />
        {/* gradient overlay sits above the image but below content */}
        <div
          style={{ position: "absolute", inset: 0 }}
          className="bg-gradient-to-r from-black/70 via-black/60 to-black/35"
        />
      </div>

      {/* Section (measured to drive the subtle translation) */}
      <section
        ref={sectionRef}
        className="relative flex items-center py-12 lg:py-16 px-6 min-h-[48vh] md:min-h-[64vh] overflow-hidden"
        style={{ minHeight: "56vh" }}
      >
        {/* --- content unchanged but ensure full-height layout --- */}
        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.05fr,0.95fr] gap-8 items-stretch h-full">
          {/* LEFT column - content vertically centered */}
          <div className="text-white text-center lg:text-left space-y-4 flex flex-col justify-center h-full">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm text-xs font-medium tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="uppercase text-[10px] tracking-[0.2em] text-emerald-300">Transporte y logística seguros</span>
            </div>

            <div>
              <p className="text-emerald-300 font-medium text-xl mb-1">Airplane Truck · Soluciones corporativas</p>
              <h1 className="text-xl md:text-2xl lg:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
                En el competitivo mundo empresarial de hoy,
                <br />
                <span className="text-emerald-400">la eficiencia nunca fue tan crítica.</span>
              </h1>
              <p className="mt-2 text-sm md:text-sm text-gray-200/85 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Optimiza tus operaciones logísticas con visibilidad en tiempo real, soporte dedicado y tiempos de respuesta diseñados para empresas que no se pueden permitir retrasos.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2 mt-4">
              <a href="tel:+17189044450" className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300">
                <span className="text-2xl">📞</span> +1 718-904-4450
              </a>
              <p className="text-xs md:text-sm text-gray-200/80 font-light">
                Habla con un asesor ahora mismo — <span className="font-medium text-emerald-300">respuesta en menos de 5 minutos.</span>
              </p>
            </div>
          </div>

          {/* RIGHT column - FORM (this will be full height of the section) */}
          <div className="w-full max-w-md lg:max-w-lg mx-auto h-full flex items-stretch">
            <div
              className="relative backdrop-blur-xl bg-white/8 border border-white/14 rounded-2xl shadow-[0_14px_48px_rgba(2,6,23,0.65)] p-5 md:p-7 text-white overflow-hidden h-full w-full"
              style={{
                // diagonal top-right cut (matches the clipped look)
                clipPath: "polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%)"
              }}
            >
              {/* decorative thin top bar */}
              <div className="" />

          
             

              {/* Form content container - make it fill and arrange content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">Request a Quote</h2>
                 
                  </div>

                  <p className="text-xs md:text-sm text-gray-200/80 mb-4">Déjanos tus datos y un especialista en logística se pondrá en contacto contigo con una solución a medida.</p>

                  <form className="space-y-3">
                    <input type="text" placeholder="Your Name" className="w-full px-3 py-2.5 bg-white/6 border border-white/16 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/12 transition-all duration-200 text-sm" required />
                    <div className="grid grid-cols-2 gap-2">
                      <input type="email" placeholder="Your Email" className="px-3 py-2.5 bg-white/6 border border-white/16 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/12 transition-all duration-200 text-sm" required />
                      <input type="tel" placeholder="Your Phone" className="px-3 py-2.5 bg-white/6 border border-white/16 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/12 transition-all duration-200 text-sm" required />
                    </div>
                    <input type="text" placeholder="Delivery City" className="w-full px-3 py-2.5 bg-white/6 border border-white/16 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/12 transition-all duration-200 text-sm" required />
                    <div className="grid grid-cols-2 gap-2">
                      <select className="px-3 py-2.5 bg-white/6 border border-white/16 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/12 transition-all duration-200 text-sm">
                        <option>Freight Type</option>
                        <option>Air</option>
                        <option>Sea</option>
                        <option>Land</option>
                      </select>
                      <select className="px-3 py-2.5 bg-white/6 border border-white/16 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/12 transition-all duration-200 text-sm">
                        <option>Incoterms</option>
                        <option>FOB</option>
                        <option>CIF</option>
                        <option>EXW</option>
                      </select>
                    </div>

                    <div className="space-y-1 pt-1">
                      {["Fragile", "Express Delivery", "Insurance"].map((label) => (
                        <label key={label} className="flex items-center gap-2 cursor-pointer group text-sm">
                          <input type="checkbox" className="w-4 h-4 rounded border-white/30 bg-white/6 text-emerald-400 focus:ring-emerald-400 focus:ring-2 transition" />
                          <span className="text-gray-200/90 group-hover:text-white">{label}</span>
                        </label>
                      ))}
                    </div>
                  </form>
                </div>

                {/* Footer area with submit button and small note — sticks to bottom so the form card looks full */}
                <div className="pt-3">
                  <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold text-sm md:text-base py-2.5 rounded-xl shadow-md transform hover:translate-y-0.5 transition-all duration-200">Get A Quote Now</button>
                  <p className="mt-2 text-[10px] md:text-xs text-gray-200/70 text-center">Tus datos serán tratados de forma segura y únicamente para fines de contacto comercial.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
