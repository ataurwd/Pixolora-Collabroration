import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Warehouse, Ship, Truck, Plane } from "lucide-react";
import Tilt from "react-parallax-tilt";

/**
 * CompleteFreightModern.jsx
 * Modernized full component: cinematic heading, polished CTAs, and improved image layout
 *
 * Dependencies:
 *   - framer-motion
 *   - lucide-react
 *   - react-parallax-tilt
 *   - TailwindCSS for styling
 */

const services = [
  { icon: Warehouse, title: "Almacenaje Estratégico", desc: "Espacios inteligentes con IoT y seguridad biométrica 24/7" },
  { icon: Ship, title: "Transporte Marítimo", desc: "Rutas globales optimizadas con tracking en tiempo real" },
  { icon: Truck, title: "Carga Terrestre", desc: "Flota eléctrica y autónoma para entregas sostenibles" },
  { icon: Plane, title: "Carga Aérea Express", desc: "Next-day global con prioridad en aerolíneas premium" }
];

const headingVariant = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 14 } }
};

const paraVariant = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6 } })
};

export default function CompleteFreightModern() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  // subtle parallax for decorative blobs (respects prefers-reduced-motion)
  const blobYFast = useTransform(scrollYProgress, [0, 1], ["0%", "36%"]);
  const blobYSlow = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const blobStyle = reduceMotion ? { y: "0%" } : { y: blobYFast };
  const blobStyleSlow = reduceMotion ? { y: "0%" } : { y: blobYSlow };

  return (
    <section className="relative min-h-screen py-28 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
      {/* Background decorative layers */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-500/6 to-cyan-600/8" />

        <motion.div
          style={blobStyle}
          className="absolute -top-44 -left-28 w-[28rem] h-[28rem] bg-emerald-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-28"
          aria-hidden
        />
        <motion.div
          style={blobStyleSlow}
          className="absolute -bottom-40 -right-20 w-[26rem] h-[26rem] bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-22"
          aria-hidden
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.06)_0%,_transparent_30%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Heading & CTAs */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="space-y-8">
            <motion.h2 variants={headingVariant} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Complete Freight &nbsp;
              <span className="block lg:inline bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400">
                Warehouse Solutions
              </span>
            </motion.h2>

            <motion.p custom={0} variants={paraVariant} className="text-lg md:text-xl text-gray-300 max-w-xl">
              Líderes en logística inteligente. Movemos el mundo con precisión, velocidad y sostenibilidad — soluciones escalables para cadenas globales.
            </motion.p>

            <motion.div custom={1} variants={paraVariant} className="flex flex-wrap gap-4 items-center">
              <button
                aria-label="Descubre más"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-full overflow-hidden shadow-2xl hover:shadow-emerald-500/40 transition-all duration-400"
              >
                <span className="relative z-10">Descubre Más</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                <span className="absolute inset-0 bg-white/6 opacity-0 group-hover:opacity-16 transition-opacity duration-400" />
              </button>

              <button
                aria-label="Ver demo"
                className="px-6 md:px-10 py-3 md:py-4 border border-emerald-400/30 text-emerald-300 rounded-full font-semibold hover:bg-emerald-400/6 backdrop-blur-sm transition"
              >
                Ver Demo
              </button>
            </motion.div>

            <motion.div custom={2} variants={paraVariant} className="flex items-center gap-4 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2 bg-white/6 px-3 py-1 rounded-full border border-white/8">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Atención 24/7
              </span>
              <span>Soporte global · Soluciones a medida · Tiempos optimizados</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Modernized image grid (16:9 hero + 4:5 cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid grid-cols-2 gap-6 items-start"
          >
            {/* HERO (16:9) */}
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={2500} scale={1.02} glareEnable={false}>
              <div className="col-span-2 relative overflow-hidden rounded-3xl shadow-2xl ring-2 ring-emerald-500/20">
                <div className="aspect-[16/9] w-full">
                  <img
                    loading="lazy"
                    src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/pro1.webp"
                    alt="Global logistics hub aerial view"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs uppercase tracking-wider opacity-80">Global Network</p>
                  <p className="text-2xl font-bold">250+ Countries</p>
                </div>
              </div>
            </Tilt>

            {/* Card 1 (4:5) */}
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} transitionSpeed={2000} scale={1.03}>
              <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-cyan-500/20">
                <div className="aspect-[4/5] w-full">
                  <img
                    loading="lazy"
                    src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/pro2.webp"
                    alt="Ocean freight containers"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </Tilt>

            {/* Card 2 (4:5) */}
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} transitionSpeed={2000} scale={1.03}>
              <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-teal-500/20">
                <div className="aspect-[4/5] w-full">
                  <img
                    loading="lazy"
                    src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/pro3.webp"
                    alt="Air and land logistics"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Service cards */}
        <motion.div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ y: 60, opacity: 0, scale: 0.98 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.7, type: "spring", stiffness: 90 }}
                whileHover={!reduceMotion ? { y: -10, scale: 1.02 } : {}}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-400 opacity-0 group-hover:opacity-80 blur-xl transition-opacity duration-500 pointer-events-none" />
                <div className="relative bg-white/4 backdrop-blur-xl border border-white/8 rounded-3xl p-6 text-center hover:border-emerald-400/50 transition-all duration-400">
                  <span className="inline-flex p-4 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-9 h-9 text-emerald-300" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Local styles */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-blob { animation: none !important; }
        }
        .mix-blend-soft-light { mix-blend-mode: soft-light; }
      `}</style>
    </section>
  );
}
