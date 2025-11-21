import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlane, FaBoxOpen } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ContactTruck from "./ContactTruck";

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

const [openIndex, setOpenIndex] = useState(null);

const items = [
{
title: "Warehouse",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, odio sed mattis placerat, est magnalaoreet mauris, nec malesuada magna risus quis arcu."
},
{
title: "Stock Management",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper nunc in velit porta, vitae mattis justovestibulum."
},
{
title: "Operational Cost",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod justo eget eros commodo, sed euismodmassa pulvinar."
},
{
title: "Air Freight",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nunc luctus eros sed sapienfeugiat, a fermentum elit ultrices."
},
{
title: "Warehouse",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, magna non euismod vestibulum."
}
];

const [index, setIndex] = useState(0);


const testimonials = [
{
img: "https://i.ibb.co.com/KcgWmXR3/tst5.webp",
text:
"Climb the mountain not to plant your flag but to embrace the ways challenge, enjoy the air, and behold the. Climb itsee the world, not so the world can see you. This is due to their excellent service competitive pricing.",
name: "Robert J. Hare",
role: "Graphics Designer",
rating: 4,
},
{
img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
text:
"Their logistics support changed our workflow. Fast, efficient, and reliable service with excellent communication.",
name: "Maria L. Watson",
role: "Product Manager",
rating: 5,
},
{
img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
text:
"Working with them was a breeze. The pricing is competitive and the service quality is outstanding.",
name: "James K. River",
role: "Business Consultant",
rating: 5,
},
];
const nextSlide = () => setIndex((index + 1) % testimonials.length);
const prevSlide = () =>
setIndex((index - 1 + testimonials.length) % testimonials.length);


const t = testimonials[index];

const reviews = [
    {
      title: "Safety Logistics",
      text: `Sasstech contrata a grandes profesionales de una amplia
             variedad de orígenes, lo que simplemente hace que nuestro
             equipo sea más fuerte, y no podríamos estar más orgullosos
             de ello. Impulsando y optimizando el crecimiento de tu negocio.`,
      author: "Robert J. Hare/",
      role: "Graphics Designer",
    },
    {
      title: "Safety Logistics",
      text: `Sasstech contrata a grandes profesionales de una amplia
             variedad de orígenes, lo que simplemente hace que nuestro
             equipo sea más fuerte, y no podríamos estar más orgullosos
             de ello. Impulsando y optimizando el crecimiento de tu negocio.`,
      author: "Robert J. Hare/",
      role: "Graphics Designer",
    },
    {
      title: "Safety Logistics",
      text: `Sasstech contrata a grandes profesionales de una amplia
             variedad de orígenes, lo que simplemente hace que nuestro
             equipo sea más fuerte, y no podríamos estar más orgullosos
             de ello. Impulsando y optimizando el crecimiento de tu negocio.`,
      author: "Robert J. Hare/",
      role: "Graphics Designer",
    },
  ];


return (
<div className="w-full overflow-x-hidden ">
    {/* ======================= HERO ======================== */}
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: 'url("https://i.ibb.co.com/ks1KbJTF/bf2.webp")' , }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1,
            ease: "easeOut" }} className="relative z-10 text-center px-6">
            <h1 className="text-[40px] md:text-[55px] lg:text-[55px] font-black tracking-tight text-white">
                Acerca De Nosotros
            </h1>
            <p className="mt-6 text-[16px] text-gray-200 max-w-2xl mx-auto font-light">
                Soluciones logísticas innovadoras que impulsan tu negocio
            </p>
        </motion.div>
    </section>

    {/* ======================= STATS + TEXT ======================== */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }} className="py-24 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats Cards – Glassmorphism style */}
            <div className="space-y-8 lg:space-y-12 flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true
                    }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500">
                    <div
                        className="w-20 h-20 mb-6 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                        <FaPlane className="w-full h-full" />
                    </div>
                    <p className="text-gray-600 font-medium uppercase tracking-wider">Clientes Satisfechos</p>
                    <p
                        className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                        {clients}+
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true
                    }} transition={{ duration: 0.8, delay: 0.4 }}
                    className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-500 ml-0 lg:ml-20">
                    <div
                        className="w-20 h-20 mb-6 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                        <FaBoxOpen className="w-full h-full" />
                    </div>
                    <p className="text-gray-600 font-medium uppercase tracking-wider">Países Cubiertos</p>
                    <p
                        className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                        {countries}+
                    </p>
                </motion.div>
            </div>

            {/* About Text */}
            <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }} className="space-y-8">
                <h2 className="text-3xl md:text-[44px] lg:text-[48px] font-black leading-tight text-gray-900">
                    Nos especializamos en ofrecer{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9D23] to-orange-600">
                        soluciones logísticas innovadoras
                    </span>{" "}
                    adaptadas a las necesidades únicas de nuestros clientes.
                </h2>

                <p className="text-xl text-gray-700 leading-relaxed">
                    En Real Transport Inc., fundada en 1997 en Milwaukee, Wisconsin, reunimos a los mejores
                    profesionales
                    del sector para garantizar un servicio inigualable, comunicación transparente y planificación
                    logística
                    de vanguardia. Nuestra diversidad nos hace más fuertes y nos permite optimizar tu negocio como
                    nadie.
                </p>

                <button
                    className="mt-8 px-10 py-4 bg-gradient-to-r from-[#FF9D23] to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Conoce Nuestro Equipo
                </button>
            </motion.div>
        </div>
    </motion.section>

    {/* ======================= WHY CHOOSE US – Dual Cards ======================== */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9 }} className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            {/* Left Card – Dark Gradient */}
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#00355A] via-[#052D49] to-[#400028] p-8 md:p-12 text-white shadow-2xl">
                <div className="relative z-10">
                    <span className="text-[#7ED957] font-bold text-lg tracking-wider">
                        TRANSPORTE Y LOGÍSTICA SEGUROS
                    </span>
                    <h3 className="mt-6 text-[55px] font-black leading-tight">
                        Garantizamos un transporte y entrega 100% seguros
                    </h3>
                    <p className="mt-8 text-gray-200 text-[18px] max-w-lg">
                        Tecnología avanzada de rastreo en tiempo real, seguros completos y un equipo que cuida tu carga
                        como si fuera propia.
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
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full">
                <div className="relative z-10 p-6 md:p-10 lg:p-12">
                    <span className="text-green-700 font-bold text-lg tracking-wider">
                        ¿POR QUÉ ELEGIRNOS?
                    </span>
                    <h3
                        className="mt-4 text-[42px] md:text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF9D23] to-orange-600 leading-tight">
                        Experiencia que marca la diferencia
                    </h3>

                    <ul className="mt-8 space-y-4 text-[16px] font-medium text-gray-800">
                        {[
                        "30 Cargadores con Experiencia",
                        "45 Expertos Capacitados en Almacén",
                        "120 Conductores de Camión Expertos",
                        "345 Personal de Entrega",
                        ].map((item, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.12 }} className="flex items-center gap-4">
                            <span className="text-2xl text-[#7ED957]">✔</span>
                            {item}
                        </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Truck Image – Bottom Right (play once on scroll) */}
                <motion.img src="https://i.ibb.co.com/5XD91LD2/truck5.webp" alt="Camión" initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: -6 }} viewport={{ once: true, amount: 0.6 }} transition={{
                    duration: 0.9, delay: 0.2, ease: "easeOut" }} whileHover={{ scale: 1.02 }}
                    className="hidden lg:block absolute bottom-0 right-4 w-64 md:w-80 lg:w-[420px] object-contain pointer-events-none select-none opacity-100 z-0 translate-x-6 filter drop-shadow-2xl rounded-xl" />
            </motion.div>
        </div>
    </motion.section>

    {/* ======================= PRICING SECTION ======================== */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }} className="py-24 bg-gradient-to-br from-[#D4EAF2] via-[#E0F0F6] to-[#D4EAF2] from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-16">
                <p className="text-teal-700 font-semibold text-lg mb-4">Planes de Precios</p>
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-orange-500 max-w-4xl mx-auto leading-tight">
                    Precios flexibles y transparentes diseñados para adaptarse a tus necesidades logísticas.
                </h2>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8">

                {/* Basic Plan */}
                <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
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

                        <button
                            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full">
                            Click Here
                        </button>
                        <p className="text-center text-gray-400 text-sm mt-4">Este es un elemento de texto</p>
                    </div>
                </motion.div>

                {/* Premium Plan */}
                <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all relative">
                    <div
                        className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold rotate-12">
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

                        <button
                            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full">
                            Click Here
                        </button>

                        <p className="text-center text-gray-400 text-sm mt-4">Este es un elemento de texto</p>
                    </div>
                </motion.div>

                {/* Standard Plan */}
                <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
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

                        <button
                            className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full">
                            Click Here
                        </button>

                        <p className="text-center text-gray-400 text-sm mt-4">Este es un elemento de texto</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
    {/* ======================= PROCESS SECTION ======================== */}

    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9 }} className="bg-gradient-to-br from-[#D4EAF2] via-[#E0F0F6] to-[#D4EAF2] relative overflow-hidden">
        <div className="mt-8 max-w-7xl mx-auto text-center relative mb-10">
            <p className="text-green-900 font-semibold tracking-wide text-sm md:text-base">
                Transporte y Logística Seguros
            </p>

            <h2 className="text-[34px] md:text-[48px] font-extrabold text-orange-500 leading-tight mt-4">
                Soluciones de Carga Eficientes <br /> en Cada Paso del Camino
            </h2>

            <div
                className="relative mt-24 flex justify-center gap-24 md:gap-40 opacity-30 pointer-events-none select-none">
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

                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        duration: 0.6 }} viewport={{ once: true }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M2 12H22M22 12L17 7M22 12L17 17" stroke="#FF0000" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>

                    <p className="text-green-900 font-semibold text-lg  px-2">
                        Percel In- Transit
                    </p>

                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{
                        duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M2 12H22M22 12L17 7M22 12L17 17" stroke="#FF0000" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>

                    <p className="text-green-900 font-semibold text-lg  px-2">
                        Percel Delivery
                    </p>
                </div>
            </div>
        </div>



        {/* CSS for marquee */}
        <style>
            {
                ` @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 18s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }

                .marquee-content {
                    display: inline-flex;
                    align-items: center;
                }

                `
            }
        </style>
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.9 }} className="  relative overflow-hidden">
            <div className="overflow-hidden w-full py-5">
                <div className="marquee-content flex items-center gap-16 md:gap-32 animate-marquee whitespace-nowrap">

                    {/* LAND EXPRESS */}
                    <h1 className="text-[170px] md:text-[150px] font-extrabold text-green-900 leading-none shrink-0">
                        LAND EXPRESS
                    </h1>

                    {/* Play Button #1 */}
                    <div
                        className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-xl flex items-center justify-center">
                        <img src="https://i.ibb.co.com/TzvvqKF/abc.webp"
                            className="absolute inset-0 w-full h-full object-cover" />

                        <div onClick={()=> setShowVideo(true)}
                            className="relative z-20 w-10 h-10 md:w-14 md:h-14 bg-white/80 rounded-full flex
                            items-center justify-center shadow-lg cursor-pointer"
                            >
                            <svg width="28" height="28" fill="#0B6E3F">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>

                        <div className="absolute inset-0 bg-black/10 z-10"></div>
                    </div>

                    {/* OCEAN FREIGHT */}
                    <h1 className="text-[170px] md:text-[150px] font-extrabold text-transparent leading-none shrink-0"
                        style={{ WebkitTextStroke: "2px #AFC8D2" }}>
                        OCEAN FREIGHT
                    </h1>

                    {/* Play Button #2 */}
                    <div
                        className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-xl flex items-center justify-center">
                        <img src="https://i.ibb.co.com/TzvvqKF/abc.webp"
                            className="absolute inset-0 w-full h-full object-cover" />

                        <div onClick={()=> setShowVideo(true)}
                            className="relative z-20 w-10 h-10 md:w-14 md:h-14 bg-white/80 rounded-full flex
                            items-center justify-center shadow-lg cursor-pointer"
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


    {showVideo && (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]" onClick={()=>
        setShowVideo(false)}
        >
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-3xl" onClick={(e)=>
            e.stopPropagation()}
            >
            {/* Close Button */}
            <button onClick={()=> setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full px-3
                hover:bg-black"
                >
                ×
            </button>

            {/* YouTube video */}
            <iframe className="w-full h-[400px] md:h-[500px]" src={youtubeURL} title="YouTube video" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    </div>
    )}


    {/* ======================= TEAM FAQ SECTION ======================== */}
    <motion.section
        className="relative w-full bg-gradient-to-br from-[#D4EAF2] via-[#E0F0F6] to-[#D4EAF2] py-24 overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B5136]/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* ---------------- LEFT SIDE ---------------- */}
            <div>
                <div className="inline-block">
                    <p
                        className="text-sm font-bold text-[#0B5136] tracking-wider uppercase bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                        Transporte y Logística Seguros
                    </p>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight mt-6">
                    Conoce a nuestro <br />
                    equipo de expertos <br />
                    que impulsa el éxito de <br />
                    tu logística.
                </h2>

                <p className="text-gray-700 mt-4 max-w-md">
                    En el competitivo mundo empresarial de hoy, la demanda de soluciones
                    de TI eficientes y rentables nunca ha sido más crítica.
                </p>

                {/* FAQ STYLE LIST */}
                <div className="mt-10 space-y-4">
                    {items.map((item, index) => (
                    <div key={index}
                        className="rounded-xl border border-orange-200 bg-white/70 backdrop-blur-sm p-5 shadow-sm transition-all hover:shadow-md">
                        {/* Title Row */}
                        <button onClick={()=> setOpenIndex(openIndex === index ? null : index)}
                            className="flex items-center justify-between w-full text-left text-[#0B5136] font-semibold
                            text-lg group"
                            >
                            <span className="group-hover:text-orange-500 transition-colors">
                                {item.title}
                            </span>


                            <span className={`text-2xl font-bold transition-transform duration-300 text-orange-500 ${
                                openIndex===index ? "rotate-45" : "" }`}>
                                +
                            </span>
                        </button>


                        {/* Dropdown Content */}
                        {openIndex === index && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.35 }}
                            className="text-gray-700 mt-3 pl-1 border-l-4 border-orange-300/60">
                            <p className="pl-3 py-2">{item.text}</p>
                        </motion.div>
                        )}
                    </div>
                    ))}
                </div>
            </div>

            {/* ---------------- RIGHT SIDE TEAM GRID ---------------- */}
            <div className="grid grid-cols-2 gap-10">
                {[
                {
                name: "Stifinhok Hower",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
                },
                {
                name: "Karbala Saha",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
                },
                {
                name: "Stifin Khalish",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
                },
                {
                name: "Rilisa Jara",
                role: "Creative Director",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
                },
                ].map((person, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{
                    once: true }} transition={{ duration: 0.5 }} className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden 
                         hover:-translate-y-2 transition-all duration-500">
                    <div className="relative overflow-hidden">
                        <img src={person.img} alt={person.name}
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-[#0B5136]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                    </div>

                    <div className="p-4 text-center bg-gradient-to-br from-white to-gray-50">
                        <h3 className="text-lg font-bold text-[#0B5136] group-hover:text-orange-500 transition-colors">
                            {person.name}
                        </h3>
                        <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                </motion.div>
                ))}
            </div>

        </div>

        <section className="w-full  py-20 mt-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">


                    {/* Avatar column */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start">
                        <div className="relative">
                            <motion.div key={t.img} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1
                                }} transition={{ duration: 0.5 }}
                                className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-8 border-white">
                                <img src={t.img} alt="avatar" className="w-full h-full object-cover" />
                            </motion.div>


                            {/* Quote bubble */}
                            <div
                                className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                                <span className="text-2xl text-emerald-600 font-bold">“</span>
                            </div>
                        </div>


                        {/* Rating pill */}
                        <div className="mt-6">
                            <div
                                className="inline-flex items-center gap-2 bg-white/90 border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                                {"⭐⭐⭐⭐⭐".slice(0, t.rating + 1)}
                            </div>
                        </div>
                    </div>


                    {/* Content */}
                    <div className="md:col-span-8">
                        <motion.blockquote key={t.text} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl leading-relaxed text-emerald-700 font-medium">
                            {t.text}
                        </motion.blockquote>


                        <div className="mt-8 border-t border-gray-200 pt-6 flex items-center justify-between">
                            <div>
                                <div className="text-orange-500 font-bold">{t.name}</div>
                                <div className="text-sm text-gray-400">{t.role}</div>
                            </div>


                            {/* Arrows */}
                            <div className="flex items-center gap-4">
                                <button onClick={prevSlide}
                                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 hover:bg-gray-50">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                        <path d="M15 6l-6 6 6 6" stroke="#0B5136" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>


                                <button onClick={nextSlide}
                                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 hover:bg-gray-50">
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" stroke="#0B5136" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    </motion.section>

    <motion.section className="relative w-full py-24  bg-gradient-to-br from-[#00355A] via-[#052D49] to-[#400028] text-white overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-sm text-green-400 tracking-wide uppercase">
          transporte y logística seguros
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
          Satisfacción de los Clientes <br />
          sobre Nuestro Servicio de <br />
          Transporte
        </h2>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 
                              shadow-[0_0_20px_rgba(0,0,0,0.3)] 
                              hover:bg-white/10 hover:-translate-y-2 
                              transition-all duration-500">

                {/* TITLE */}
                <p className="text-lg font-semibold mb-4 text-white/80">
                  “{item.title}”
                </p>

                {/* TEXT */}
                <p className="text-white/70 leading-relaxed mb-10">
                  {item.text}
                </p>

                {/* AUTHOR */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-green-400 text-3xl">“</span>
                  </div>

                  <div>
                    <p className="text-white font-semibold">{item.author}</p>
                    <p className="text-white/50 text-sm">{item.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </motion.section>
   
    {/* ======================= CONTACT SECTION ======================== */}
   {/* <ContactTruck/> */}

   



</div>
);
};

export default About;