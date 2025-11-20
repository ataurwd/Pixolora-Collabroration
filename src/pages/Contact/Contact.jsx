import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      {/* Contact Cards Section */}
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Email */}
          <div className="group w-full h-[259px] rounded-xl bg-[#EDFFFB] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co.com/Vp5TBqjp/blg1.webp')",
              }}
            ></div>
            <div className="absolute inset-0 bg-[#003B44]/70 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 h-full p-10 text-[#6B7280] group-hover:text-white transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#F7931E] flex justify-center items-center transition-all duration-300 group-hover:bg-white">
                  <MdEmail size={30} className="text-white group-hover:text-[#F7931E] transition-all duration-300" />
                </div>
                <h2 className="text-2xl font-semibold font-[Satoshi]">Email Address</h2>
              </div>
              <p className="mt-4 text-[16px] font-[Satoshi] leading-relaxed">
                info@themeriver.com <br />
                support@themeriver.com
              </p>
            </div>
          </div>

          {/* Card 2 - Phone */}
          <div className="group w-full h-[259px] rounded-xl bg-[#EDFFFB] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co.com/Vp5TBqjp/blg1.webp')",
              }}
            ></div>
            <div className="absolute inset-0 bg-[#003B44]/70 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 h-full p-10 text-[#6B7280] group-hover:text-white transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#F7931E] flex justify-center items-center transition-all duration-300 group-hover:bg-white">
                  <MdPhone size={30} className="text-white group-hover:text-[#F7931E] transition-all duration-300" />
                </div>
                <h2 className="text-2xl font-semibold font-[Satoshi]">Phone Number</h2>
              </div>
              <p className="mt-4 text-[16px] font-[Satoshi]">
                +12 48875 6365 699 <br />
                +24 58796 5456 0076
              </p>
            </div>
          </div>

          {/* Card 3 - Location */}
          <div className="group w-full h-[259px] rounded-xl bg-[#EDFFFB] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500"
              style={{
                backgroundImage: "url('https://i.ibb.co.com/Vp5TBqjp/blg1.webp')",
              }}
            ></div>
            <div className="absolute inset-0 bg-[#003B44]/70 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10 h-full p-10 text-[#6B7280] group-hover:text-white transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#F7931E] flex justify-center items-center transition-all duration-300 group-hover:bg-white">
                  <MdLocationOn size={30} className="text-white group-hover:text-[#F7931E] transition-all duration-300" />
                </div>
                <h2 className="text-2xl font-semibold font-[Satoshi]">Location / Address</h2>
              </div>
              <p className="mt-4 text-[16px] font-[Satoshi] leading-relaxed">
                The Queen's Walk, Bishop's, <br />
                London SE1 7PB, <br />
                United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form with Map Section */}
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Map */}
          <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9016929777386!2d90.3776!3d23.7515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzA1LjQiTiA5MMKwMjInMzkuNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full bg-white rounded-2xl shadow-lg p-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#F7931E] mb-3">Contact Me</h2>
              <p className="text-gray-600 text-sm">
                In nec libero luctus, aliquet turpis at, vehicula nisl. Cras eget mauris in nisl tempus lobortis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Fast name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7931E] focus:border-transparent transition-all"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7931E] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7931E] focus:border-transparent transition-all"
                  required
                />
                <input
                  type="text"
                  name="serviceType"
                  placeholder="Write Service Type"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7931E] focus:border-transparent transition-all"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7931E] focus:border-transparent transition-all resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-[#F7931E] text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;