// OceanFreight.jsx – COMPACT MODERN MASTERPIECE (UPDATED: equal card heights)
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Warehouse, DollarSign, Ship, CheckCircle2, Truck, ArrowRight } from "lucide-react";

const FadeUp = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const OceanFreight = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className="relative bg-gradient-to-b from-[#EAF3FF] to-white py-20 lg:py-28 overflow-hidden">
      {/* Subtle parallax blobs */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#00A45A]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#FFB02C]/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Mini Card – Super compact & modern */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="hidden lg:block absolute top-12 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.06, rotate: 3 }}
          className="bg-gradient-to-br from-[#00733C] to-[#004d26] p-1 rounded-2xl shadow-2xl"
        >
          <div className="bg-[#00733C]/95 backdrop-blur-xl rounded-2xl px-6 py-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#FFB02C] flex-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-[10px] font-bold tracking-widest">FAST DELIVERY</span>
            </div>
            <ul className="space-y-2 text-xs text-white/90">
              {["Fast Delivery", "Safety", "Good Package", "Privacy"].map((t, i) => (
                <motion.li key={i} initial={{ x: -20 }} whileInView={{ x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00E29A]" />
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* TIGHT & PERFECT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <div className="space-y-14">
            <FadeUp>
              <div className="flex items-center gap-4">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-4 h-4 rounded-full bg-[#00A45A] shadow-lg" />
                <motion.h1
                  initial={{ x: -80 }}
                  whileInView={{ x: 0 }}
                  className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-[#02224D]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: "4px 4px 0 #000" }}
                >
                  OCEAN FREIGHT
                </motion.h1>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="space-y-8">
                <Feature Icon={Warehouse} title="Almacén Facility included" />
                <hr className="border-gray-300/60" />
                <Feature Icon={DollarSign} title="Cost Effective Pricing" />
                <hr className="border-gray-300/60" />
                <Feature Icon={Ship} title="Global Container Network" />
              </div>
            </FadeUp>
          </div>

          {/* RIGHT */}
          <div className="space-y-12">
            <FadeUp delay={0.4}>
              <p className="text-xs font-bold text-[#00A45A] tracking-widest uppercase">Transporte y Logística</p>
              <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5901F] to-[#FF8A00] leading-tight">
                Somos un proveedor líder<br />de servicios logísticos<br />integrales.
              </h2>
            </FadeUp>

            <FadeUp delay={0.6}>
              <ul className="space-y-4 text-gray-700">
                {["Nos acercamos a WiaTech con un proyecto complejo para entregar.", "Empresa de soluciones de TI galardonada"].map((t, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.15 }} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#00A45A] mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.9}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-[#F9A825] text-white font-bold px-8 py-4 rounded-full shadow-xl text-sm"
                >
                  Saber Más <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.15, rotate: 360 }} className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src="https://i.pravatar.cc/150?img=47" alt="CEO" className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-[#02224D]" style={{ fontFamily: "'Pacifico', cursive" }}>themexriver</p>
                    <p className="text-xs text-gray-600">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

       {/* BOTTOM 3 CARDS */}
<div className="mt-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Card 1 – Ship */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative h-72 rounded-3xl overflow-hidden bg-white"
    >
      <img
        src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/pro2.webp"
        className="w-full h-full object-cover"
        alt=""
      />

      {/* Info Box */}
      <div className="absolute bottom-5 left-5 bg-white rounded-xl p-4 shadow-md">
        <p className="font-bold text-[#02224D] text-sm">Headquarters -</p>
        <p className="text-xs text-gray-600">
          4517 Washington Ave.<br />
          Manchester, Kentucky 39495
        </p>
      </div>
    </motion.div>

    {/* Card 2 – Green Counter */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="h-72 rounded-3xl bg-[#046639] text-white p-10 flex flex-col justify-center"
      style={{
        clipPath: "polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%)"
      }}
    >
      <h1 className="text-5xl font-black">40K+</h1>
      <p className="mt-4 text-white/90 text-sm">Customer worldwide</p>
    </motion.div>

    {/* Card 3 – Text + Truck */}

  {/* Truck image — styled to match screenshot */}
<motion.div
  whileHover={{ scale: 1.01 }}
  className="relative h-72 rounded-3xl bg-white p-8 overflow-hidden"
  style={{
    clipPath: "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)"
  }}
>

  <h3 className="text-xl md:text-2xl font-bold text-[#f88d1f] leading-tight z-20 relative">
    Faster and more reliable <br />
    Transportation services
  </h3>

  {/* Orange Circle Behind (LEFT side now) */}
  <div
    className="absolute left-10 bottom-10 w-28 h-28 rounded-full bg-[#FFB02C] z-10"
  />

  {/* Truck Image on LEFT */}
  <motion.img
    src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/truck1.webp"
    alt="truck"
    initial={{ x: -20, y: 10, opacity: 0 }}
    whileInView={{ x: 0, y: -4, opacity: 1 }}
    whileHover={{ x: -6, y: -10, scale: 1.02, rotate: -2 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="absolute bottom-0 left-0 w-48 md:w-64 object-contain pointer-events-none z-30 drop-shadow-2xl"
    style={{
      transformOrigin: "center left",
      translate: "-10px 0px"
    }}
  />

</motion.div>



  </div>
</div>

      </div>
    </section>
  );
};

const Feature = ({ Icon, title }) => (
  <div className="flex items-center gap-5">
    <div className="w-14 h-14 rounded-3xl bg-white shadow-lg flex-center border border-gray-200">
      <Icon className="w-8 h-8 text-[#00A45A]" />
    </div>
    <p className="text-2xl lg:text-3xl font-black text-[#02224D]">{title}</p>
  </div>
);

export default OceanFreight;
