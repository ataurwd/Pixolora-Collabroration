// TransporteModerno.jsx — FINAL LUXURY EDITION (perfect spacing + beauty)
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Truck, Train, Ship, Warehouse, Globe, Play, ArrowRight, Package, CheckCircle 
} from "lucide-react";

const services = [
  { id: 1, title: "Transporte por carretera", icon: <Truck className="w-7 h-7" />, image: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" },
  { id: 2, title: "Train Transport",          icon: <Train className="w-7 h-7" />,  image: "https://images.pexels.com/photos/3867258/pexels-photo-3867258.jpeg" },
  { id: 3, title: "Cargo Ship Freight",      icon: <Ship className="w-7 h-7" />,   image: "https://images.pexels.com/photos/163785/pexels-photo-163785.jpeg" },
  { id: 4, title: "Warehousing freight",     icon: <Warehouse className="w-7 h-7" />, image: "https://images.pexels.com/photos/4483613/pexels-photo-4483613.jpeg" },
  { id: 5, title: "Intermodal Shipping",     icon: <Globe className="w-7 h-7" />,  image: "https://images.pexels.com/photos/4100378/pexels-photo-4100378.jpeg" },
];

const TransporteModerno = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <>
      {/* ==================== HERO SECTION – LUXURIOUS & AIRY ==================== */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#f8fbff] via-[#eef6ff] to-[#e0efff] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <p className="text-sm font-black tracking-widest text-emerald-600 uppercase mb-6">
              Transporte y Logística 5.0
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Soluciones Integrales de<br />Carga y Almacenamiento
              </span>
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Líderes globales en transporte multimodal con tecnología de vanguardia y compromiso absoluto con la excelencia.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-[340px,1fr,480px] gap-12 items-start">
            {/* Sidebar */}
            <div className="space-y-6">
              {services.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveService(s)}
                  whileHover={{ x: 12 }}
                  className={`w-full flex items-center gap-6 px-8 py-7 rounded-3xl text-left transition-all duration-500 shadow-lg border ${
                    activeService.id === s.id
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-2xl"
                      : "bg-white/90 backdrop-blur-md border-gray-200 hover:shadow-xl"
                  }`}
                >
                  <div className={`p-4 rounded-2xl ${activeService.id === s.id ? "bg-white/30" : "bg-orange-100"}`}>
                    {s.icon}
                  </div>
                  <span className="font-bold text-xl">{s.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Central Image */}
            <motion.div
              key={activeService.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={activeService.image} alt="" className="w-full h-[560px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-28 h-28 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
                  <Play className="w-14 h-14 text-white ml-3" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Card */}
            <div className="space-y-10">
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg shadow-xl flex items-center gap-4"
                >
                  Saber Más <ArrowRight className="w-6 h-6" />
                </motion.button>
                <div className="flex items-center gap-5">
                  <div className="flex -space-x-5">
                    {[11, 12, 13].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">Clientes globales</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-12 rounded-3xl shadow-2xl"
              >
                <p className="text-xl leading-relaxed mb-10">
                  Los consumidores de hoy dependen en gran medida de medios digitales para investigar productos antes de interactuar con una marca.
                </p>
                <ul className="space-y-6 text-lg">
                  <li className="flex items-center gap-4"><span className="text-red-500 text-3xl">•</span> We approached WiaTech with complex requirements</li>
                  <li className="flex items-center gap-4"><span className="text-red-500 text-3xl">•</span> Awards Winning Logistics Company 2024-2025</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GORGEOUS WAVE SEPARATOR ==================== */}
      <div className="relative h-48 bg-gradient-to-b from-[#e0efff] to-white">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,100 C320,200 1120,0 1440,80 L1440,200 L0,200 Z" />
        </svg>
      </div>

      {/* ==================== PROCESS SECTION – CLEAN & ELEGANT ==================== */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm font-black tracking-widest text-emerald-600 uppercase mb-6">
              Transporte y logística segura
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Soluciones de Carga<br />Eficientes En Cada Paso del Camino
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-emerald-600 to-orange-500 -z-10" />

            {[
              { num: "01", title: "Registro de Paquetes",    color: "from-orange-500 to-orange-600",   icon: <Package className="w-12 h-12" /> },
              { num: "02", title: "Paquete en tránsito",    color: "from-emerald-600 to-emerald-700", icon: <Truck className="w-14 h-14" /> },
              { num: "03", title: "Entrega de Paquetes",    color: "from-orange-500 to-orange-600",   icon: <CheckCircle className="w-12 h-12" /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -12 }}
                className={`relative bg-gradient-to-br ${step.color} text-white rounded-3xl p-10 shadow-2xl text-center`}
              >
                <div className="text-9xl font-black opacity-20 absolute top-6 left-6">{step.num}</div>
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Lubina oceánica templada, chopa marina, pez árbol, eulachon y cabezón de marea.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom dotted line */}
          <div className="flex justify-center mt-20">
            <div className="relative w-full max-w-4xl">
              <div className="h-0.5 bg-gray-300" />
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-emerald-600 rounded-full -translate-y-1/2" />
              <div className="absolute top-1/2 left-3/4 -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransporteModerno;