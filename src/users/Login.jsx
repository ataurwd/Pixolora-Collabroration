import React from 'react';
import { FaGoogle, FaFacebookF, FaTruck, FaBox, FaRoute } from "react-icons/fa";
import { MdTrackChanges, MdSecurity } from "react-icons/md";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#046838] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20">
          
          {/* Left Side - Login Form */}
          <div className="p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white/95 via-white/90 to-white/80 backdrop-blur-2xl">
            <div className="max-w-md mx-auto w-full">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">

                <img className='w-1/2' src="https://i.ibb.co.com/7xjs7YjB/Expresur-02-1-removebg-preview.webp" alt="" />
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-3">Welcome Back!</h2>
              <p className="text-gray-600 mb-10">
                Log in to track shipments, manage logistics, and stay ahead.
              </p>

              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-gray-800 font-medium"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-gray-800 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign In Securely
                </button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all backdrop-blur-sm">
                    <FaGoogle className="text-xl text-red-500" />
                    <span className="font-medium text-gray-700">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all backdrop-blur-sm">
                    <FaFacebookF className="text-xl text-blue-600" />
                    <span className="font-medium text-gray-700">Facebook</span>
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-600">
                New here?{" "}
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition">
                  Create an account
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Hero Section */}
          <div className="hidden lg:flex relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-16 flex-col justify-center items-start text-white">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Real-Time Logistics,
                <br />
                <span className="text-cyan-400">Reimagined</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Track every package, optimize routes, and deliver faster than ever with AI-powered logistics intelligence.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                    <FaRoute className="text-3xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Smart Route Optimization</h3>
                    <p className="text-blue-200">Reduce delivery time by up to 37%</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                    <MdTrackChanges className="text-3xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Live Tracking Dashboard</h3>
                    <p className="text-blue-200">See every shipment in real-time</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                    <MdSecurity className="text-3xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Bank-Grade Security</h3>
                    <p className="text-blue-200">Your data is encrypted & protected</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 opacity-20">
              <FaBox className="text-9xl animate-float" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-10">
              <FaTruck className="text-8xl animate-float animation-delay-3000" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;