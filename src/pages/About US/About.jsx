import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlane, FaBoxOpen } from "react-icons/fa";

const About = () => {
  const [clients, setClients] = useState(0);
  const [countries, setCountries] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const youtubeURL = "https://www.youtube.com/embed/VIDEO_ID_HERE";

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

     {/* ======================= PRICING SECTION ======================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-b from-cyan-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">
            <p className="text-teal-700 font-semibold text-lg mb-4">Planes de Precios</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-orange-500 max-w-4xl mx-auto leading-tight">
              Precios flexibles y transparentes diseñados para adaptarse a tus necesidades logísticas.
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Transporte Básico</h3>
                <p className="text-sm mt-2 opacity-90">
                  Servicio esencial para envíos pequeños y locales
                </p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <span className="text-orange-500 text-2xl font-bold">$</span>
                  <span className="text-orange-500 text-6xl font-black">39</span>
                  <span className="text-orange-500 text-2xl font-bold">.99</span>
                  <p className="text-gray-600 font-semibold mt-2">Mensual</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    Rastreo básico de envíos
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    Entregas locales programadas
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    Soporte por correo electrónico
                  </li>
                </ul>

                <button className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full">
                  Click Here
                </button>
                <p className="text-center text-gray-400 text-sm mt-4">Este es un elemento de texto</p>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all relative"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold rotate-12">
                Popular
              </div>

              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Transporte Premium</h3>
                <p className="text-sm mt-2 opacity-90">
                  Solución equilibrada para negocios con envíos frecuentes
                </p>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <span className="text-orange-500 text-2xl font-bold">$</span>
                  <span className="text-orange-500 text-6xl font-black">39</span>
                  <span className="text-orange-500 text-2xl font-bold">.99</span>
                  <p className="text-gray-600 font-semibold mt-2">Monthly</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span> List Item #1
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span> List Item #2
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span> List Item #3
                  </li>
                </ul>

                <button className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full">
                  Click Here
                </button>

                <p className="text-center text-gray-400 text-sm mt-4">Este es un elemento de texto</p>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Transporte Estándar</h3>
                <p className="text-sm mt-2 opacity-90">
                  Solución equilibrada para negocios con envíos frecuentes
                </p>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <span className="text-orange-500 text-2xl font-bold">$</span>
                  <span className="text-orange-500 text-6xl font-black">39</span>
                  <span className="text-orange-500 text-2xl font-bold">.99</span>
                  <p className="text-gray-600 font-semibold mt-2">Mensual</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    Rastreo avanzado en tiempo real
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    Gestión de inventario
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-600 text-xl">✓</span>
                    Atención al cliente 24/7
                  </li>
                </ul>

                <button className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full">
                  Click Here
                </button>

                <p className="text-center text-gray-400 text-sm mt-4">Este es un elemento de texto</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

          





<motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="bg-[#D4EAF2] relative overflow-hidden"
      >
        <div className="mt-8 max-w-7xl mx-auto text-center px-6 relative">
          <p className="text-green-900 font-semibold tracking-wide text-sm md:text-base">
            Transporte y Logística Seguros
          </p>

          <h2 className="text-[34px] md:text-[48px] font-extrabold text-orange-500 leading-tight mt-4">
            Soluciones de Carga Eficientes <br /> en Cada Paso del Camino
          </h2>

          <div className="relative mt-24 flex justify-center gap-24 md:gap-40 opacity-30 pointer-events-none select-none">
            <span className="text-[150px] md:text-[220px] font-black text-[#AFC8D2] leading-none">01</span>
            <span className="text-[150px] md:text-[220px] font-black text-[#AFC8D2] leading-none">02</span>
            <span className="text-[150px] md:text-[220px] font-black text-[#AFC8D2] leading-none">03</span>
          </div>

          <div className="relative -mt-12 w-full flex items-center justify-center">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#C7D9DF]"></div>

            <div className="flex items-center justify-center gap-14 md:gap-24 relative">
              <p className="text-green-900 font-semibold text-lg  px-2">
                Percel Register
              </p>

              <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L17 7M22 12L17 17" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              <p className="text-green-900 font-semibold text-lg  px-2">
                Percel In- Transit
              </p>

              <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12H22M22 12L17 7M22 12L17 17" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

              <p className="text-green-900 font-semibold text-lg  px-2">
                Percel Delivery
              </p>
            </div>
          </div>
        </div>

        {/* CSS for marquee */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .marquee-content { display: inline-flex; align-items: center; }
        `}</style>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="py-32 bg-[#D4EAF2] relative overflow-hidden"
        >
          <div className="overflow-hidden w-full">
            <div className="marquee-content flex items-center gap-16 md:gap-32 animate-marquee whitespace-nowrap">

              {/* LAND EXPRESS */}
              <h1 className="text-[170px] md:text-[150px] font-extrabold text-green-900 leading-none shrink-0">
                LAND EXPRESS
              </h1>

              {/* Play Button #1 */}
              <div className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-xl flex items-center justify-center">
                <img src="/mnt/data/62e3cf93-6a34-4ffc-8374-75c762b17721.png" className="absolute inset-0 w-full h-full object-cover" />

                <div
                  onClick={() => setShowVideo(true)}
                  className="relative z-20 w-10 h-10 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <svg width="28" height="28" fill="#0B6E3F">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="absolute inset-0 bg-black/10 z-10"></div>
              </div>

              {/* OCEAN FREIGHT */}
              <h1 className="text-[170px] md:text-[150px] font-extrabold text-transparent leading-none shrink-0"
                style={{ WebkitTextStroke: "2px #AFC8D2" }}
              >
                OCEAN FREIGHT
              </h1>

              {/* Play Button #2 */}
              <div className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-xl flex items-center justify-center">
                <img src="/mnt/data/62e3cf93-6a34-4ffc-8374-75c762b17721.png" className="absolute inset-0 w-full h-full object-cover" />

                <div
                  onClick={() => setShowVideo(true)}
                  className="relative z-20 w-10 h-10 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <svg width="28" height="28" fill="#0B6E3F">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="absolute inset-0 bg-black/10 z-10"></div>
              </div>

            </div>
          </div>
        </motion.section>
      </motion.section>

      {/* ------------------------------------------------------- */}
      {/*                    YOUTUBE POPUP MODAL                  */}
      {/* ------------------------------------------------------- */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative bg-black rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full px-3 hover:bg-black"
            >
              ×
            </button>

            {/* YouTube video */}
            <iframe
              className="w-full h-[400px] md:h-[500px]"
              src={youtubeURL}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>


    


  );
};

export default About;
