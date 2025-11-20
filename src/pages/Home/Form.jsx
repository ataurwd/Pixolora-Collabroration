import React from "react";

const Form = () => {
  return (
    <section
      className="relative flex items-center py-20 lg:py-24 px-6 min-h-[65vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/pvjTPqSM/imgi-26-qt-bg.webp')`,
        backgroundAttachment: "fixed", // subtle parallax feel
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />

      {/* Soft Glow Accents */}
      <div className="pointer-events-none absolute -left-32 top-10 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[minmax(0,1.15fr),minmax(0,1fr)] gap-12 items-center">
        {/* Left Content */}
        <div className="text-white text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-sm font-medium tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase text-[11px] tracking-[0.25em] text-emerald-300">
              Transporte y logística seguros
            </span>
          </div>

          <div>
            <p className="text-emerald-300 font-medium text-base mb-2">
              Airplane Truck · Soluciones corporativas
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-300">
              En el competitivo mundo empresarial de hoy,
              <br />
              <span className="text-emerald-400">
                la eficiencia nunca fue tan crítica.
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-gray-200/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Optimiza tus operaciones logísticas con visibilidad en tiempo real,
              soporte dedicado y tiempos de respuesta diseñados para empresas que
              no se pueden permitir retrasos.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <a
              href="tel:+17189044450"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-emerald-400 hover:text-emerald-300 transition-all duration-300"
            >
              <span className="text-3xl">Phone</span> +1 718-904-4450
            </a>
            <p className="text-sm md:text-base text-gray-200/85 font-light">
              Habla con un asesor ahora mismo —{" "}
              <span className="font-medium text-emerald-300">
                respuesta en menos de 5 minutos.
              </span>
            </p>
          </div>
        </div>

        {/* Modern Glass Form */}
        <div className="w-full max-w-md lg:max-w-lg mx-auto">
          <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] p-7 md:p-9 text-white overflow-hidden">
            {/* Subtle top gradient border */}
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400" />

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">
                Request a Quote
              </h2>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 uppercase tracking-[0.2em]">
                24/7
              </span>
            </div>

            <p className="text-sm text-gray-200/80 mb-6">
              Déjanos tus datos y un especialista en logística se pondrá en
              contacto contigo con una solución a medida.
            </p>

            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/25 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-200 text-sm md:text-base"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3.5 bg-white/10 border border-white/25 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-200 text-sm md:text-base"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="px-4 py-3.5 bg-white/10 border border-white/25 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-200 text-sm md:text-base"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Delivery City"
                className="w-full px-4 py-3.5 bg-white/10 border border-white/25 rounded-xl placeholder-gray-300/80 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-200 text-sm md:text-base"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="px-4 py-3.5 bg-white/10 border border-white/25 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-200 text-sm md:text-base">
                  <option className="text-gray-800">Freight Type</option>
                  <option className="text-gray-800">Air</option>
                  <option className="text-gray-800">Sea</option>
                  <option className="text-gray-800">Land</option>
                </select>
                <select className="px-4 py-3.5 bg-white/10 border border-white/25 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition-all duration-200 text-sm md:text-base">
                  <option className="text-gray-800">Incoterms</option>
                  <option className="text-gray-800">FOB</option>
                  <option className="text-gray-800">CIF</option>
                  <option className="text-gray-800">EXW</option>
                </select>
              </div>

              <div className="space-y-3 pt-3">
                {["Fragile", "Express Delivery", "Insurance"].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-white/40 bg-white/10 text-emerald-400 focus:ring-emerald-400 focus:ring-2 transition"
                    />
                    <span className="text-gray-200/90 group-hover:text-white transition-colors text-sm md:text-base">
                      {label}
                    </span>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold text-base md:text-lg py-3.5 md:py-4 rounded-2xl shadow-xl shadow-emerald-900/40 transform hover:translate-y-0.5 hover:shadow-2xl transition-all duration-300"
              >
                Get A Quote Now
              </button>

              <p className="mt-3 text-[11px] md:text-xs text-gray-200/70 text-center">
                Tus datos serán tratados de forma segura y únicamente para fines
                de contacto comercial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
