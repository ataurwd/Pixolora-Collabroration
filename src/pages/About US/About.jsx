import React from "react";

const About = () => {
  return (
    <div className="w-full">
      {/* ======================= HERO SECTION ======================== */}
      <section
        className="w-full h-[667px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/ks1KbJTF/bf2.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Acerca De Nosotros</h1>
        </div>
      </section>

      {/* ======================= DETAILS SECTION ======================== */}
      <section className="w-full bg-[#DFF5FF] py-20">
        <div className="max-w-[1350px] mx-auto flex flex-row items-center justify-center px-10">
          {/* LEFT SIDE — STAGGERED STAT CARDS */}
          <div className="flex flex-col gap-12">
            {/* Client Card (top one) */}
            <div className="w-[320px] h-[300px] bg-[#FFFAF5] rounded-3xl shadow-md flex flex-col items-start justify-center pl-12">
              <img
                src="https://i.ibb.co/8XjY7mP/plane-modern-orange.png" // modern plane icon
                alt="plane"
                className="w-16 mb-6"
              />
              <p className="text-sm font-semibold text-gray-600">Client</p>
              <p className="text-6xl font-bold text-gray-900">56+</p>
            </div>

            {/* Countries Card (lower one) */}
            <div className="w-[320px] h-[300px] bg-[#FFFAF5] rounded-3xl shadow-md flex flex-col items-start justify-center pl-12 ml-20">
              <img
                src="https://i.ibb.co/0j0Z3hK/container-modern-orange.png" // modern container icon
                alt="container"
                className="w-16 mb-6"
              />
              <p className="text-sm font-semibold text-gray-600">Countries</p>
              <p className="text-6xl font-bold text-gray-900">68+</p>
            </div>
          </div>

          {/* RIGHT SIDE — TEXT BLOCK */}
          <div className="ml-32 max-w-2xl">
            <h1 className="text-5xl leading-[1.15] font-bold text-gray-900">
              Us we specialize in offer <br />
              solutions innovative of <br />
              <span className="text-[#FF9D23]">logistics.</span> <br />
              adapted for satisfy the needs <br />
              unique of our customers.
            </h1>

            <h2 className="mt-10 text-2xl font-semibold text-gray-800">About Us</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Logistics employs top professionals from diverse backgrounds,
              which only makes us stronger, and we couldn't be more proud to help
              you grow and optimize your business. Real Transport Inc. was founded
              and incorporated in 1997 in Milwaukee, Wisconsin. <br /><br />
              Our experienced team provides unparalleled service, exceptional
              communication, and utilizes cutting-edge logistics planning to ensure
              your shipment is completed on time. Our diverse backgrounds further
              strengthen our team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;