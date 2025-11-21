// Hero.jsx — 2025 PREMIUM MODERN VERSION (SIM-STYLE)
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import airBg from "../../assets/air.jpg";
import shipBg from "../../assets/ship.jpg";
import roadBg from "../../assets/ship.jpg"; // if road uses same image, keep; otherwise replace

const OPTIONS = [
  {
    id: "air",
    title: "Air Freight",
    desc: "Fast, secure air cargo solutions for time-sensitive shipments. Ideal for international deliveries and high-value goods.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "ocean",
    title: "Ocean Freight",
    desc: "Cost-effective ocean shipping for large-volume cargo with reliable scheduling and global routes.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "road",
    title: "Road Freight",
    desc: "Flexible road transport for regional and last-mile deliveries with real-time tracking options.",
    color: "from-orange-500 to-red-600"
  }
];

const backgrounds = { air: airBg, ocean: shipBg, road: roadBg };

export default function Hero() {
  const [selected, setSelected] = useState("air");
  const [mobileOpen, setMobileOpen] = useState(false); // used by mobile picker (optional)
  const current = OPTIONS.find((o) => o.id === selected);

  return (
    <section className="px-32 relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* PARALLAX + CROSSFADE BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={backgrounds[selected]} alt={current.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left space-y-8 w-full px-4 lg:px-0 max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase"
          >
            Safe Transportation & Logistics 5.0
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
          >
            Providing Consistently<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Excellent Logistics
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            In today's competitive world, efficient and cost-effective logistics solutions have never been more critical.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34,197,94,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg rounded-full shadow-2xl flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">View Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </motion.button>
          </motion.div>

          {/* SERVICE CARD */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-xl mx-auto lg:mx-0"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-lg`}>
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white">{current.title}</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">{current.desc}</p>
          </motion.div>
        </motion.div>

        {/* RIGHT PICKER (Desktop) */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="pr-0"
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-xl w-64">
              <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-4 text-center">
                Choose Service
              </p>

              <div className="space-y-3">
                {OPTIONS.map((opt) => (
                  <motion.button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-3 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                      selected === opt.id ? "text-white shadow-xl" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {selected === opt.id && (
                      <motion.div
                        layoutId="activePill"
                        className={`absolute inset-0 bg-gradient-to-r ${opt.color} rounded-xl`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center gap-3">
                      <motion.div
                        layout
                        className={`w-3 h-3 rounded-full border ${selected === opt.id ? "border-white bg-white" : "border-white/50"}`}
                      />
                      <span className="font-semibold text-base">{opt.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE PICKER — fixed full width bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="lg:hidden fixed bottom-6 left-0 right-0 z-50 px-4"
        >
          <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-4 shadow-2xl">
            <div className="grid grid-cols-3 gap-3">
              {OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`py-4 rounded-2xl text-center transition-all ${
                    selected === opt.id ? "bg-white/20 text-white font-bold shadow-lg" : "text-white/70"
                  }`}
                >
                  {/* split title into two lines (first and second word) gracefully */}
                  {opt.title.split(" ").map((t, i) => (
                    <span key={i} className={`${i === 0 ? "text-sm block" : "text-xs opacity-80 block"}`}>
                      {t}
                    </span>
                  ))}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
