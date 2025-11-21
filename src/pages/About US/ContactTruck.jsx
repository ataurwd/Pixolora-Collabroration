import React from 'react';

const ContactTruck = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#dff7fb] overflow-hidden">
      {/* Full-width grayscale truck background */}
      <img
        src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/truck-hero.jpg"
        alt="Truck on highway"
        className="absolute inset-0 w-full h-full object-cover object-left-top grayscale"
      />

      {/* Light blue top overlay */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-[#dff7fb]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side - Text */}
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-emerald-700 tracking-widest uppercase mb-4">
              StoFand TrtonspeitherrttotYoeithern & LeitheryostYos
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ff9b28] leading-none">
              Let’s Create Something
              <br />
              Amazing Together!
            </h1>
          </div>

          {/* Right Side - Contact Card */}
          <div className="flex justify-end">
            <div className="w-full max-w-md">

              {/* Orange Speech Bubble Header */}
              <div className="relative bg-[#ff9b28] text-white text-center py-5 rounded-t-lg">
                <h2 className="text-lg md:text-xl font-bold px-8">
                  Let’s Create Something Amazing Together!
                </h2>
                {/* Downward Triangle */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                  <svg width="44" height="28" viewBox="0 0 44 28" className="drop-shadow-md">
                    <path d="M22 28L0 0H44L22 28Z" fill="#ff9b28" />
                  </svg>
                </div>
              </div>

              {/* Green Card Body */}
              <div className="bg-[#0f6a40] text-white pt-10 pb-8 px-8 rounded-b-lg shadow-xl">
                
                {/* Phone */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                    Phone
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Call for Inquiry</p>
                    <p className="text-xl font-bold">+236 (456) 896 22</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                    Email
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Send us an email</p>
                    <p className="text-xl font-bold">infotech@gmail.com</p>
                  </div>
                </div>

                {/* Map with Switzerland Pin */}
                <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-white/30">
                  <img
                    src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/map-bg.webp"
                    alt="World Map"
                    className="w-full h-56 object-cover opacity-40"
                  />
                  {/* Switzerland Pin & Label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg whitespace-nowrap">
                        Switzerland
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-4 h-4 bg-red-600 rotate-45"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTruck;