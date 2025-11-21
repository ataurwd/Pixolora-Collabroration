import React, { useEffect, useRef } from "react";

export default function FormWithParallax() {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    const factor = 0.14; // adjust: smaller = subtler
    const update = () => {
      const rect = el.getBoundingClientRect();
      // translate relative to viewport center (tweak if you want)
      const translateY = Math.round((rect.top - window.innerHeight / 2) * factor);
      // use translate3d for GPU accel; add slight scale for depth
      bg.style.transform = `translate3d(0, ${translateY}px, 0) scale(1.06)`;
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    // initial paint
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const ro = new ResizeObserver(onScroll);
    ro.observe(el);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center py-12 lg:py-16 px-6 min-h-[36vh] md:min-h-[44vh] overflow-hidden"
    >
      {/* background (not fixed) */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <img
          ref={bgRef}
          src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/qt-bg.webp"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ transform: "translate3d(0,0,0) scale(1.06)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/35" />
      </div>

      {/* --- your content (unchanged) --- */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.05fr,0.95fr] gap-8 items-center">
        <div className="text-white text-center lg:text-left space-y-4">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm text-xs font-medium tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase text-[10px] tracking-[0.2em] text-emerald-300">Transporte y logística seguros</span>
          </div>

          <div>
            <p className="text-emerald-300 font-medium text-sm mb-1">Airplane Truck · Soluciones corporativas</p>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
              En el competitivo mundo empresarial de hoy,
              <br />
              <span className="text-emerald-400">la eficiencia nunca fue tan crítica.</span>
            </h1>
            <p className="mt-2 text-sm md:text-sm text-gray-200/85 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Optimiza tus operaciones logísticas con visibilidad en tiempo real, soporte dedicado y tiempos de respuesta diseñados para empresas que no se pueden permitir retrasos.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-2">
            <a href="tel:+17189044450" className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300">
              <span className="text-2xl">📞</span> +1 718-904-4450
            </a>
            <p className="text-xs md:text-sm text-gray-200/80 font-light">
              Habla con un asesor ahora mismo — <span className="font-medium text-emerald-300">respuesta en menos de 5 minutos.</span>
            </p>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-lg mx-auto">
          {/* form UI unchanged */}
          <div className="relative backdrop-blur-xl bg-white/8 border border-white/14 rounded-2xl shadow-[0_14px_48px_rgba(2,6,23,0.65)] p-5 md:p-7 text-white overflow-hidden">
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400" />
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">Request a Quote</h2>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/18 border border-emerald-400/30 uppercase tracking-[0.12em]">24/7</span>
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

              <button type="submit" className="w-full mt-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold text-sm md:text-base py-2.5 rounded-xl shadow-md transform hover:translate-y-0.5 transition-all duration-200">Get A Quote Now</button>
              <p className="mt-2 text-[10px] md:text-xs text-gray-200/70 text-center">Tus datos serán tratados de forma segura y únicamente para fines de contacto comercial.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
