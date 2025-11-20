import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaGoogle, FaFacebookF, FaTruck, FaCheckCircle, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";
import { UserContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from 'firebase/auth'; // <-- Added import

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, setUser, googleLogin, user } = useContext(UserContext);

  console.log(user.email)
  // Google Login
  const HandelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Login Success!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });
      })
      .catch((error) => {
        console.error("Google Login Error", error);
        Swal.fire({
          title: "Google Login Failed",
          text: error.message,
          icon: "error"
        });
      });
  };

  // Email/Password Registration
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const name = `${firstName} ${lastName}`.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      Swal.fire({
        title: "Weak Password",
        text: "Password must be at least 6 characters long",
        icon: "error"
      });
      return;
    }

    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;

    if (!hasUpperCase.test(password)) {
      Swal.fire({
        title: "Password Error",
        text: "Password must contain at least one uppercase letter",
        icon: "error"
      });
      return;
    }

    if (!hasLowerCase.test(password)) {
      Swal.fire({
        title: "Password Error",
        text: "Password must contain at least one lowercase letter",
        icon: "error"
      });
      return;
    }

    // Create user with Firebase Auth
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update profile with name (and optional photo)
        return updateProfile(user, {
          displayName: name,
          // photoURL: "https://example.com/default-avatar.jpg" // optional
        })
        .then(() => {
          // Update context/state
          setUser({
            ...user,
            displayName: name
          });

          Swal.fire({
            title: "Registration Successful!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });

          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        Swal.fire({
          title: "Registration Failed",
          text: error.message || "Something went wrong",
          icon: "error"
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <Helmet>
        <title>Register | Logistics Dashboard</title>
        <meta name="description" content="Create your account and manage logistics seamlessly" />
      </Helmet>

      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#046838]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FA921D]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Left Side - Sign Up Form */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">

              {/* Logo */}
              <div Western="flex items-center gap-3 mb-10">
                <img className='w-1/2' src="https://i.ibb.co.com/7xjs7YjB/Expresur-02-1-removebg-preview.webp" alt="Logo" />
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-gray-600 mb-8">
                Create your account and get full access to real-time tracking & logistics management.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                />

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" required className="mt-1 rounded text-[#046838]" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-[#046838] font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-[#046838] font-medium hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#046838] hover:bg-[#035230] text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <FaCheckCircle />
                  Create Free Account
                </button>
              </form>

              <div className="mt-6">
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or sign up with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={HandelGoogleLogin}
                    className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaGoogle className="text-red-500" />
                    <span className="font-medium">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaFacebookF className="text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="font-bold text-[#046838] hover:text-[#FA921D] transition">
                  Log In
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Hero Section */}
          <div className="hidden lg:block relative bg-gradient-to-br from-[#046838] to-[#035230] p-16 text-white">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Join Thousands of <span className="text-[#FA921D]">Smart Businesses</span>
              </h1>
              <p className="text-xl text-green-100 mb-10">
                Deliver faster, save costs, and scale your logistics with the most trusted platform in Bangladesh.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-[#FA921D]/20 rounded-2xl backdrop-blur-sm">
                    <FaTachometerAlt className="text-3xl text-[#FA921D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">42% Faster Delivery</h3>
                    <p className="text-green-100">AI-powered route optimization</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-[#FA921D]/20 rounded-2xl backdrop-blur-sm">
                    <FaShieldAlt className="text-3xl text-[#FA921D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">100% Secure & Reliable</h3>
                    <p className="text-green-100">Bank-level encryption</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-[#FA921D]/20 rounded-2xl backdrop-blur-sm">
                    <FaCheckCircle className="text-3xl text-[#FA921D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Free 14-Day Trial</h3>
                    <p className="text-green-100">No credit card required</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#046838] bg-gray-300"></div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-lg">5,000+ Happy Customers</p>
                  <p className="text-green-200 text-sm">From startups to enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;