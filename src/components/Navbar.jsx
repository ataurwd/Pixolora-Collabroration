import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm max-w-[1400px] mx-auto">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center flex-1">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
              {/* text-logo: pixel-perfect spacing */}
              <img className="w-40" src="https://i.ibb.co.com/7xjs7YjB/Expresur-02-1-removebg-preview.webp" alt="" />
            </Link>
          </div>

          {/* Center: Menu - hidden on small */}
          <nav className="hidden md:flex md:space-x-8 md:flex-1 md:justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Quotes
            </Link>
            <Link
              to="/shipments"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Shipments
            </Link>
            <Link
              to="/lockers"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Lockers
            </Link>
            <Link
              to="/tracking"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              Tracking
            </Link>
          </nav>

          {/* Right: Profile & Mobile Hamburger */}
          {/* <div className="flex items-center space-x-4">
            <div className="relative hidden md:block" ref={profileRef}>
              <button
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
                onClick={() => setProfileOpen((s) => !s)}
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-haspopup="true"
                aria-expanded={profileOpen}
              >
                <span className="sr-only">Open user menu</span>
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
                    <path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                  </svg>
                </div>
              </button>

            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div> */}
          <div className="flex gap-2">
            <Button variant="outlined" color="primary" href="/login">
              Login
            </Button>
            <Button className="m-2" variant="outlined" color="primary" href="/register">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile off-canvas */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        {/* overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
        />

        {/* panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-4 py-4 flex items-center justify-between border-b">
            <div className="text-lg font-semibold">Menu</div>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-md">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-4 py-6 space-y-4">
            <Link to="/quotes" onClick={() => setMobileOpen(false)} className="block text-gray-800 font-medium">Quotes</Link>
            <Link to="/shipments" onClick={() => setMobileOpen(false)} className="block text-gray-800 font-medium">Shipments</Link>
            <Link to="/lockers" onClick={() => setMobileOpen(false)} className="block text-gray-800 font-medium">Lockers</Link>
            <Link to="/tracking" onClick={() => setMobileOpen(false)} className="block text-gray-800 font-medium">Tracking</Link>

            <div className="pt-4 border-t">
              <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="block text-gray-700">Dashboard</Link>
              <Link to="/profile" onClick={() => setMobileOpen(false)} className="block text-gray-700">Profile</Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
