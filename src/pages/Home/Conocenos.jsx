// Updated Conocenos component with all left/right padding and margins removed

"use client"

import { ChevronLeft, ChevronRight, Mail, Package, Globe, MapPinned } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const Conocenos = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      title: "Complete Logistics System",
      icon: <Package className="w-12 h-12" />,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Shipping All Over the World",
      icon: <Globe className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Online Product Tracking",
      icon: <MapPinned className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600",
    },
  ]

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % features.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-20">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Skewed Image + Floating Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image with Skew Effect */}
              <div className="overflow-hidden rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://i.ibb.co.com/KpR0BHq9/imgi-27-cta1.webp"
                  alt="Airplane and truck logistics"
                  className="w-full max-w-lg h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Email Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute -bottom-8 -left-8 md:left-auto md:-right-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl p-5 shadow-2xl flex items-center gap-4 max-w-xs"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xs opacity-90">Envíanos un correo electrónico</p>
                  <p className="font-bold text-lg">infotech@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content + Animated Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-emerald-600 font-bold text-sm tracking-widest uppercase"
              >
                Conócenos
              </motion.p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
                >
                  Soluciones Integrales
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"
                >
                  de Carga y
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="block bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent"
                >
                  Almacenamiento
                </motion.span>
              </h2>
            </div>

            {/* Interactive Carousel */}
            <div className="relative">
              <div className="flex items-center gap-6">
                {/* Prev Button */}
                <button
                  onClick={prevSlide}
                  className="hidden md:block z-10 p-4 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-7 h-7 text-amber-600" />
                </button>

                {/* Cards */}
                <div className="flex gap-8 overflow-hidden">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.6,
                        scale: activeIndex === index ? 1.05 : 0.95,
                        x: -activeIndex * 110 + "%",
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex-shrink-0 w-64"
                      onClick={() => setActiveIndex(index)}
                    >
                      <div
                        className={`h-full bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${
                          activeIndex === index ? "border-amber-500" : "border-transparent"
                        }`}
                      >
                        <div
                          className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} p-4 flex items-center justify-center text-white shadow-xl`}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 text-center leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="hidden md:block z-10 p-4 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight className="w-7 h-7 text-amber-600" />
                </button>
              </div>

              {/* Mobile Dots */}
              <div className="flex justify-center gap-3 mt-8 md:hidden">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all duration-300 ${
                      activeIndex === i
                        ? "w-10 h-3 bg-amber-500 rounded-full"
                        : "w-3 h-3 bg-gray-300 rounded-full"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Conocenos
