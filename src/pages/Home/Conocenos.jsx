// Conocenos.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";

/* --- Custom SVG icons (kept from your earlier code) --- */
const LogisticsIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="28" fill="#10b981" opacity="0.1" />
    <circle cx="30" cy="30" r="18" fill="#10b981" />
    <path d="M25 25L30 30L35 25" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 35H40" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="30" cy="35" r="8" fill="white" />
    <circle cx="30" cy="35" r="4" fill="#10b981" />
  </svg>
);

const DeliveryIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="28" fill="#f59e0b" opacity="0.1" />
    <path d="M15 25H45L40 40H20L15 25Z" fill="#fbbf24" />
    <path d="M22 40H38" stroke="#92400e" strokeWidth="3" />
    <circle cx="25" cy="45" r="5" fill="#92400e" />
    <circle cx="35" cy="45" r="5" fill="#92400e" />
  </svg>
);

const TrackingIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="30" r="28" fill="#ef4444" opacity="0.1" />
    <circle cx="30" cy="30" r="20" fill="#ef4444" />
    <circle cx="30" cy="30" r="10" fill="white" />
    <circle cx="30" cy="30" r="5" fill="#ef4444" />
    <path d="M30 15L30 25" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export default function Conocenos() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Image + Floating Email Button */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image: using uploaded file path */}
            <div
              className="overflow-hidden rounded-xl shadow-2xl"
              style={{ clipPath: "polygon(6% 0, 100% 0, 100% 100%, 0% 100%, 0% 12%)" }}
            >
              <img
                src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/cta1.webp"
                alt="Airplane and truck logistics"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Floating Email CTA */}
            <motion.a
              href="mailto:infotech@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-10 rounded-full flex items-center gap-4 shadow-2xl transition-transform hover:scale-105 whitespace-nowrap"
            >
              <Mail className="w-6 h-6" />
              <div className="text-left leading-tight">
                <span className="block text-sm opacity-90">Envíanos un correo electrónico</span>
                <span className="block text-base md:text-lg font-bold">infotech@gmail.com</span>
              </div>
            </motion.a>
          </motion.div>

          {/* RIGHT: Text + Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p className="text-green-600 font-bold text-lg tracking-wider">Conócenos</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 leading-tight">
              Soluciones Integrales
              <br />
              de Carga y
              <br />
              Almacenamiento
            </h1>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
                  <LogisticsIcon />
                  <p className="mt-6 font-bold text-gray-800 text-lg leading-tight">
                    Complete
                    <br />
                    Logistics System
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
              >
                <DeliveryIcon />
                <p className="mt-6 font-bold text-gray-800 text-lg leading-tight">
                  Shipping All Over
                  <br />
                  the World
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
                  <TrackingIcon />
                  <p className="mt-6 font-bold text-gray-800 text-lg leading-tight">
                    Online Product
                    <br />
                    Tracking
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA under features (optional) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <button className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-150">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
