import React from "react";

const About = () => {
  return (
    <div className="w-full">

      {/* =======================
          HERO SECTION
      ======================== */}
      <section
        className="w-[1350px] h-[667.09px] bg-cover bg-center relative mx-auto"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/ks1KbJTF/bf2.webp")'
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Acerca De Nosotros
          </h1>
        </div>
      </section>

      {/* =======================
          DETAILS SECTION
      ======================== */}
      <section className="w-full bg-[#DFF5FF] flex justify-center py-20">
        <div className="w-[1350px] flex">

          {/* LEFT SIDE — STAT CARDS */}
          <div className="w-1/2 flex flex-col gap-10 pl-4">

            {/* Card 1 */}
            <div className="w-[260px] h-[260px] bg-[#F4F4F4] shadow-sm flex flex-col justify-center px-8">
              <img
                src="/mnt/data/60ca0415-832b-4508-9233-77c3eadc82c3.png"
                className="w-12 mb-6"
                alt="plane"
              />
              <p className="text-sm font-medium text-gray-700">Client</p>
              <h1 className="text-5xl font-bold">56+</h1>
            </div>

            {/* Card 2 */}
            <div className="w-[260px] h-[260px] bg-[#F4F4F4] shadow-sm flex flex-col justify-center px-8">
              <img
                src="/mnt/data/60ca0415-832b-4508-9233-77c3eadc82c3.png"
                className="w-12 mb-6"
                alt="container"
              />
              <p className="text-sm font-medium text-gray-700">Countries</p>
              <h1 className="text-5xl font-bold">68+</h1>
            </div>

          </div>

          {/* RIGHT SIDE — TEXT */}
          <div className="w-1/2 pl-20 pr-10 flex flex-col justify-center">

            <h1 className="text-[44px] leading-tight font-semibold">
              Us we specialize in offer <br />
              solutions innovative of <br />
              <span className="text-[#FF9D23]">logistics.</span> <br />
              adapted for satisfy the needs <br />
              unique of our customers.
            </h1>

            <h2 className="mt-8 text-xl font-medium">About Us</h2>

            <p className="mt-4 text-[17px] leading-relaxed text-gray-700">
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
