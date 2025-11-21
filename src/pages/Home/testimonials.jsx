import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "La logística contrata a grandes profesionales de diversos orígenes, lo que simplemente nos hace más fuertes, y no podríamos estar más orgullosos de impulsar y optimizar tu negocio.",
    author: "William Camel",
    role: "Head Of Design At Zazoo",
    rating: 4.5,
  },
  {
    quote: "Servicio impecable, tiempos de entrega perfectos y soporte 24/7. Han transformado completamente nuestra cadena de suministro.",
    author: "María Fernández",
    role: "Directora de Operaciones",
    rating: 5,
  },
  {
    quote: "La mejor decisión que tomamos este año. Eficiencia, transparencia y resultados reales desde el día uno.",
    author: "Carlos Díaz",
    role: "CEO LogiTrans",
    rating: 5,
  },
];

const wrap = (i) => (i + testimonials.length) % testimonials.length;

export default function Testimonials2025() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => wrap(i + 1)), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-orange-50 py-20 px-4">
      {/* Floating geometric background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-orange-400/20 to-amber-500/10 blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tl from-emerald-600/10 to-cyan-500/10 blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header - Bold & Modern (smaller, responsive) */}
        <div className="text-center mb-12 md:mb-20 px-2">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs uppercase tracking-wider mb-4">
            Transporte y Logística Seguros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-orange-600 leading-tight">
            What our client’s Says
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En el competitivo mundo empresarial de hoy, la demanda de soluciones de TI eficientes y rentables nunca ha sido más crítica.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative">
          {/* Desktop: 3 cards with parallax depth */}
          <div className="hidden lg:flex items-center justify-center gap-8 perspective-1000">
            {[-1, 0, 1].map((offset) => {
              const i = wrap(index + offset);
              const t = testimonials[i];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    scale: isCenter ? 1 : 0.9,
                    y: isCenter ? 0 : 28,
                    opacity: isCenter ? 1 : 0.6,
                    z: isCenter ? 100 : -100,
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <TestimonialCard data={t} prominent={isCenter} />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: Single card */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 200, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -200, rotateY: -15 }}
                transition={{ duration: 0.55 }}
                className="flex justify-center"
              >
                <TestimonialCard data={testimonials[index]} prominent mobile />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots - Animated underline style */}
          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="group relative"
              >
                <motion.div
                  className="w-12 h-1 rounded-full bg-orange-400/30 transition-all duration-300"
                  animate={{ scaleX: i === index ? 1.4 : 1 }}
                />
                {i === index && (
                  <motion.div
                    layoutId="testimonialDot"
                    className="absolute inset-0 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40"
                    style={{ height: 6, top: -2.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Ultra Modern Glass Card (responsive + smaller text)
function TestimonialCard({ data, prominent = false, mobile = false }) {
  // responsive sizes
  const quoteSize = prominent ? (mobile ? 180 : 260) : mobile ? 120 : 180;
  const starSize = prominent ? (mobile ? 20 : 28) : mobile ? 16 : 22;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl backdrop-blur-lg border border-white/20 shadow-xl transition-transform duration-600 hover:scale-[1.01] bg-white/80"`}
      style={{ width: "100%", maxWidth: prominent ? 780 : 560 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-orange-500/8 pointer-events-none" />

      {/* Big quote mark */}
      <Quote
        size={quoteSize}
        className="absolute -top-10 -left-6 text-orange-400/10 pointer-events-none select-none"
        strokeWidth={0.8}
      />

      <div className={`relative z-10 p-6 sm:p-8 md:p-10 ${prominent ? "pt-12" : "pt-8"}`}>
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={starSize}
              className={`${
                i < Math.floor(data.rating)
                  ? "fill-orange-500 text-orange-500"
                  : i < data.rating
                  ? "fill-orange-400 text-orange-400"
                  : "text-gray-300"
              } drop-shadow-sm`} 
            />
          ))}
        </div>

        {/* Quote (smaller & responsive) */}
        <p
          className={`font-medium leading-relaxed text-gray-800 ${
            prominent
              ? "text-base sm:text-lg md:text-xl"
              : "text-sm sm:text-base md:text-lg"
          }`}
        >
          {data.quote}
        </p>

        {/* Author */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{data.author}</h4>
            <p className="text-emerald-600 font-medium text-xs sm:text-sm mt-1">{data.role}</p>
          </div>

          {/* Badge */}
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-md text-xs sm:text-sm">
            Great Experience
          </div>
        </div>
      </div>

      {/* Glass shine effect */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    </div>
  );
}
