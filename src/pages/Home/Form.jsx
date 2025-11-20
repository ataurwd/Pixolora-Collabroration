import React from 'react';

const Form = () => {
    return (
        <section
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://i.ibb.co.com/pvjTPqSM/imgi-26-qt-bg.webp')`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

            {/* Left Content */}
            <div className="relative z-10 max-w-2xl text-white text-center lg:text-left">
                <p className="text-green-400 text-lg font-semibold mb-4 inline-flex items-center gap-3">
                    <span className="text-3xl">Airplane Ship</span> Transporte y Logística Seguros
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    En el competitivo mundo empresarial de hoy, la demanda de soluciones de TI eficientes y rentables nunca ha sido más crítica.
                </h1>

                <div className="mt-10 flex flex-col items-center lg:items-start">
                    <p className="text-3xl font-bold text-green-400 flex items-center gap-3">
                        <span className="text-4xl">Phone</span> +1 718-904-4450
                    </p>
                    <p className="mt-2 text-lg opacity-90">
                        Consult With It Advisor? Click Now
                    </p>
                </div>
            </div>

            {/* Quote Form */}
            <div className="relative z-10 mt-12 lg:mt-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Request a Quote Form
                </h2>

                <form className="space-y-6">
                    {/* Personal Information */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-3">
                            Personal Information
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                            required
                        />
                        <div className="grid grid-cols-2 gap-4 mt-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Delivery City */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                            Delivery City
                        </label>
                        <input
                            type="text"
                            placeholder="Delivery City"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                    </div>

                    {/* Freight Type & Incoterms */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">
                                Freight Type
                            </label>
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option>Freight Type</option>
                                <option>Air Freight</option>
                                <option>Sea Freight</option>
                                <option>Land Freight</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-600 mb-2">
                                Incoterms
                            </label>
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option>Incoterms</option>
                                <option>EXW</option>
                                <option>FOB</option>
                                <option>CIF</option>
                                <option>DAP</option>
                            </select>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
                            <span className="text-gray-700 font-medium">Fragile</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
                            <span className="text-gray-700 font-medium">Express Delivery</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500" />
                            <span className="text-gray-700 font-medium">Insurance</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl py-4 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
                    >
                        Get A Quote
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Form;