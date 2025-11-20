import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaGoogle,
  FaFacebookF,
  FaTruck,
  FaCheckCircle,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { UserContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth } from "../firebase/Firebase"; // ensure path is correct

const db = getFirestore(); // uses default app initialized in your firebase config

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [submitting, setSubmitting] = useState(false);

  // Create Firestore user doc (merge false — full create)
  const createUserDocIfNotExists = async (user, extras = {}) => {
    if (!user?.uid) return;
    try {
      const userRef = doc(db, "users", user.uid);
      const snapshot = await getDoc(userRef);
      if (!snapshot.exists()) {
        // Compose document
        const docData = {
          uid: user.uid,
          email: user.email || "",
          name: extras.name || user.displayName || "",
          provider: extras.provider || user.providerId || "password",
          photoURL: user.photoURL || "",
          createdAt: serverTimestamp(),
          ...extras, // allow additional fields
        };
        await setDoc(userRef, docData);
      } else {
        // Optionally update lastLogin or other meta if needed.
        // await setDoc(userRef, { lastSeen: serverTimestamp() }, { merge: true });
      }
    } catch (err) {
      console.error("Error creating user doc:", err);
      // don't throw — user auth succeeded; firestore failure non-critical but show message
    }
  };

  // Email registration handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const firstName = e.target.firstName.value.trim();
      const lastName = e.target.lastName.value.trim();
      const email = e.target.email.value.trim();
      const password = e.target.password.value;
      const termsChecked = e.target.terms.checked;

      if (!termsChecked) {
        Swal.fire({
          title: "Please accept terms",
          icon: "warning",
        });
        setSubmitting(false);
        return;
      }

      if (password.length < 6) {
        Swal.fire({
          title: "Password should be at least 6 characters",
          icon: "error",
        });
        setSubmitting(false);
        return;
      }

      // create auth user
      const res = await createUser(email, password); // comes from AuthContext
      const createdUser = res.user;
      setUser(createdUser);

      // save to firestore
      await createUserDocIfNotExists(createdUser, {
        name: `${firstName} ${lastName}`.trim(),
        firstName,
        lastName,
        email,
        provider: "password",
      });

      Swal.fire({
        title: "Account created successfully!",
        icon: "success",
      });

      navigate(location?.state?.from || "/");
    } catch (error) {
      console.error("Register Error:", error);
      Swal.fire({
        title: error?.message || "Failed to create account",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Google login handler
  const HandelGoogleLogin = async () => {
    setSubmitting(true);
    try {
      const res = await googleLogin();
      const gUser = res.user;
      setUser(gUser);

      // Ensure firestore user doc exists
      await createUserDocIfNotExists(gUser, {
        provider: "google",
        name: gUser.displayName || "",
        email: gUser.email || "",
        photoURL: gUser.photoURL || "",
      });

      Swal.fire({
        title: "Login success",
        icon: "success",
      });

      navigate(location?.state?.from || "/");
    } catch (error) {
      console.error("Google Login Error", error);
      Swal.fire({
        title: error?.message || "Failed to login",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <Helmet>
        <title>Register | Logistics Dashboard</title>
        <meta
          name="description"
          content="Create account to manage shipments and track logistics"
        />
      </Helmet>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#046838]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FA921D]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Left Side - Sign Up Form */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-10">
                {/* replace src with your real logo */}
                <img
                  className="w-1/2"
                  src="https://i.ibb.co/7xjs7YjB/Expresur-02-1-removebg-preview.webp"
                  alt="logo"
                />
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-gray-600 mb-8">
                Create your account and get full access to real-time tracking &
                logistics management.
              </p>

              <form onSubmit={handleRegister} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className="px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                  />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Business Email"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                />

                <input
                  name="password"
                  type="password"
                  placeholder="Create Password"
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#046838] focus:border-[#046838] transition"
                />

                <div className="flex items-start gap-3">
                  <input
                    name="terms"
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded text-[#046838]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#046838] font-medium hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#046838] font-medium hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-[#046838] hover:bg-[#035230] text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 ${
                    submitting ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  <FaCheckCircle />
                  {submitting ? "Creating Account..." : "Create Free Account"}
                </button>
              </form>

              <div className="mt-6">
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={HandelGoogleLogin}
                    disabled={submitting}
                    className={`flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition ${
                      submitting ? "opacity-60 pointer-events-none" : ""
                    }`}
                  >
                    <FaGoogle className="text-red-500" />
                    <span className="font-medium">Google</span>
                  </button>
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "Facebook sign-in not configured",
                        icon: "info",
                      })
                    }
                    className="flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                  >
                    <FaFacebookF className="text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-bold text-[#046838] hover:text-[#FA921D] transition"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Hero */}
          <div className="hidden lg:block relative bg-gradient-to-br from-[#046838] to-[#035230] p-16 text-white">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Join Thousands of <span className="text-[#FA921D]">Smart Businesses</span>
              </h1>
              <p className="text-xl text-green-100 mb-10">
                Deliver faster, save costs, and scale your logistics with the
                most trusted platform in Bangladesh.
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
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-[#046838] bg-gray-300"
                    />
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
      </div> {/* end wrapper */}
    </div>
  );
};

export default Register;
