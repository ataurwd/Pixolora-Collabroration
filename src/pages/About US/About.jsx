import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlane, FaBoxOpen } from "react-icons/fa";

const About = () => {
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);

  // Animated counters with Framer Motion (smoother & easier to control)
  useEffect(() => {
    const clientTarget = 56;
    const countryTarget = 68;
    const duration = 2000;

    const clientInterval = setInterval(() => {
      setClients((prev) => (prev >= clientTarget ? clientTarget : prev + 1));
    }, duration / clientTarget);

    const countryInterval = setInterval(() => {
      setCountries((prev) => (prev >= countryTarget ? countryTarget : prev + 1));
    }, duration / countryTarget);

    return () => {
      clearInterval(clientInterval);
      clearInterval(countryInterval);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* ======================= HERO ======================== */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://i.ibb.co.com/ks1KbJTF/bf2.webp")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-[40px] md:text-[55px] lg:text-[55px] font-black tracking-tight text-white">
            Acerca De Nosotros
          </h1>
          <p className="mt-6 text-[16px] text-gray-200 max-w-2xl mx-auto font-light">
            Soluciones logísticas innovadoras que impulsan tu negocio
          </p>
        </motion.div>
      </section>

      {/* ======================= STATS + TEXT ======================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-br from-cyan-50 via-white to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats Cards – Glassmorphism style */}
          <div className="space-y-8 lg:space-y-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                <FaPlane className="w-full h-full" />
              </div>
              <p className="text-gray-600 font-medium uppercase tracking-wider">Clientes Satisfechos</p>
              <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {clients}+
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 ml-0 lg:ml-20"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                <FaBoxOpen className="w-full h-full" />
              </div>
              <p className="text-gray-600 font-medium uppercase tracking-wider">Países Cubiertos</p>
              <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {countries}+
              </p>
            </motion.div>
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black leading-tight text-gray-900">
              Nos especializamos en ofrecer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9D23] to-orange-600">
                soluciones logísticas innovadoras
              </span>{" "}
              adaptadas a las necesidades únicas de nuestros clientes.
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              En Real Transport Inc., fundada en 1997 en Milwaukee, Wisconsin, reunimos a los mejores profesionales
              del sector para garantizar un servicio inigualable, comunicación transparente y planificación logística
              de vanguardia. Nuestra diversidad nos hace más fuertes y nos permite optimizar tu negocio como nadie.
            </p>

            <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#FF9D23] to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Conoce Nuestro Equipo
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* ======================= WHY CHOOSE US – Dual Cards ======================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Left Card – Dark Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#00355A] via-[#052D49] to-[#400028] p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="relative z-10">
              <span className="text-[#7ED957] font-bold text-lg tracking-wider">
                TRANSPORTE Y LOGÍSTICA SEGUROS
              </span>
              <h3 className="mt-6 text-[55px] font-black leading-tight">
                Garantizamos un transporte y entrega 100% seguros
              </h3>
              <p className="mt-8 text-gray-200 text-[18px] max-w-lg">
                Tecnología avanzada de rastreo en tiempo real, seguros completos y un equipo que cuida tu carga como si fuera propia.
              </p>

              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-16 bg-[#7ED957] rounded-full flex items-center justify-center text-3xl">
                  ☎
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#FFB446]">+1 718-904-4450</p>
                  <p className="text-sm text-gray-300">Llama ahora y cotiza gratis</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card – Light with Truck */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full"
          >
            <div className="relative z-10 p-6 md:p-10 lg:p-12">
              <span className="text-green-700 font-bold text-lg tracking-wider">
                ¿POR QUÉ ELEGIRNOS?
              </span>
              <h3 className="mt-4 text-[42px] md:text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF9D23] to-orange-600 leading-tight">
                Experiencia que marca la diferencia
              </h3>

              <ul className="mt-8 space-y-4 text-[16px] font-medium text-gray-800">
                {[
                  "30 Cargadores con Experiencia",
                  "45 Expertos Capacitados en Almacén",
                  "120 Conductores de Camión Expertos",
                  "345 Personal de Entrega",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-2xl text-[#7ED957]">✔</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Truck Image – Bottom Right (play once on scroll) */}
            <motion.img
              src="https://i.ibb.co.com/5XD91LD2/truck5.webp"
              alt="Camión"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, y: -6 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="hidden lg:block absolute bottom-0 right-4 w-64 md:w-80 lg:w-[420px] object-contain pointer-events-none select-none opacity-100 z-0 translate-x-6 filter drop-shadow-2xl rounded-xl"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
