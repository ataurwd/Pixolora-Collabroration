import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * HomContactText - adjusted fonts for title & numbers
 * plain white background (no map)
 */
const HomContactText = () => {
  return (
    <section
      className="mb-0 w-full bg-white py-24 relative z-10 translate-y-6 md:translate-y-12 -mb-12 md:-mb-20"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* TOP COUNTER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <div>
            <h2 className="text-6xl font-bold text-green-800">16+</h2>
            <p className="text-gray-700 mt-1">Completed Projects</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold text-green-800">18+</h2>
            <p className="text-gray-700 mt-1">Years of Experience</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold text-green-800">10K</h2>
            <p className="text-gray-700 mt-1">Satisfied Customers</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold text-green-800">50+</h2>
            <p className="text-gray-700 mt-1">Happy Team</p>
          </div>
        </div>

        {/* TITLES: slightly reduced on large screens */}
        <h1 className="text-4xl md:text-7xl font-extrabold text-green-800 leading-none">
          CEITHERNTOCT
        </h1>
        <h1 className="text-4xl md:text-7xl font-extrabold text-green-800 leading-none mt-8">
          ORS
        </h1>
      </div>
    </section>
  );
};

/**
 * HomeContactMerged - merged component with scroll-driven upward movement
 * z-index increased for image stage and badge so they sit on top
 */
const HomeContactMerged = () => {
  const sectionRef = useRef(null);
  const crateRef = useRef(null);
  const badgeRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });

  // scroll smoothing
  const targetScrollOffset = useRef(60);
  const smoothScrollOffset = useRef(60);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const lerp = (a, b, t) => (1 - t) * a + t * b;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  useEffect(() => {
    const section = sectionRef.current;
    const crate = crateRef.current;
    const badge = badgeRef.current;

    function handleMouseMoveWindow(e) {
      setMouse({ x: e.clientX, y: e.clientY });
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    }

    function handleTouchMoveWindow(e) {
      if (!e.touches?.[0]) return;
      const t = e.touches[0];
      setMouse({ x: t.clientX, y: t.clientY });
      mousePos.current.x = t.clientX;
      mousePos.current.y = t.clientY;
    }

    function handleMouseMoveSection(e) {
      if (!section) return;
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      setMouse({ x: e.clientX, y: e.clientY });
    }

    function handleTouchMoveSection(e) {
      if (!e.touches?.[0] || !section) return;
      const t = e.touches[0];
      mousePos.current.x = t.clientX;
      mousePos.current.y = t.clientY;
      setMouse({ x: t.clientX, y: t.clientY });
    }

    function handleScroll() {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const visibleProgress = clamp(
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        0,
        1
      );
      targetScrollOffset.current = (1 - visibleProgress) * 60;
    }

    handleScroll();

    window.addEventListener("mousemove", handleMouseMoveWindow);
    window.addEventListener("touchmove", handleTouchMoveWindow, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    if (section) {
      section.addEventListener("mousemove", handleMouseMoveSection);
      section.addEventListener("touchmove", handleTouchMoveSection, { passive: true });
    }

    if (crate) {
      crate.style.willChange = "transform";
      // ensure crate has a high stacking context just in case
      crate.style.zIndex = 40;
      crate.style.position = "relative";
    }
    if (badge) {
      badge.style.willChange = "transform, left, top";
      badge.style.zIndex = 50;
      badge.style.position = "absolute";
    }

    let rafId = 0;
    function loop() {
      if (!section) {
        rafId = requestAnimationFrame(loop);
        return;
      }

      smoothPos.current.x = lerp(smoothPos.current.x, mousePos.current.x || mouse.x, 0.12);
      smoothPos.current.y = lerp(smoothPos.current.y, mousePos.current.y || mouse.y, 0.12);

      smoothScrollOffset.current = lerp(smoothScrollOffset.current, targetScrollOffset.current, 0.12);

      const rect = section.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = smoothPos.current.x - cx;
      const dy = smoothPos.current.y - cy;

      if (crate) {
        const maxTranslate = 28;
        const tx = (dx / rect.width) * maxTranslate;
        const ty = (dy / rect.height) * maxTranslate;
        const rot = (dx / rect.width) * 6;
        const scrollY = smoothScrollOffset.current;
        crate.style.transform = `translate3d(${tx}px, ${ty - scrollY}px, 0) rotate(${rot}deg)`;
      }

      if (badge) {
        const scrollY = smoothScrollOffset.current;
        badge.style.left = `calc(50% + ${dx * 0.18}px)`;
        badge.style.top = `calc(38% + ${dy * 0.16}px)`;
        const rotateBadge = -10 + dx / 30;
        const scaleBadge = 1 + Math.min(Math.abs(dx) / 900, 0.12);
        badge.style.transform = `translate(-50%,-50%) translateY(${-scrollY}px) rotate(${rotateBadge}deg) scale(${scaleBadge})`;
      }

      rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWindow);
      window.removeEventListener("touchmove", handleTouchMoveWindow);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (section) {
        section.removeEventListener("mousemove", handleMouseMoveSection);
        section.removeEventListener("touchmove", handleTouchMoveSection);
      }
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onBadgeClick() {
    if (!badgeRef.current) return;
    badgeRef.current.animate(
      [
        { transform: badgeRef.current.style.transform + " scale(1)" },
        { transform: badgeRef.current.style.transform + " scale(0.94)" },
        { transform: badgeRef.current.style.transform + " scale(1)" },
      ],
      { duration: 360, easing: "cubic-bezier(.2,.9,.27,1)" }
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-10 bg-white">
      {/* Text section (kept lower z) */}
      <HomContactText />

      {/* Contact image stage - higher z index so it overlaps */}
      <section
        ref={sectionRef}
        className="relative w-full rounded-md px-4 overflow-visible z-40"
        style={{ zIndex: 40 }}
      >
        <div className="w-full flex justify-center items-end mt-6 -mb-20 relative">
          {/* crate wrapper with higher z */}
          <div
            ref={crateRef}
            className="w-[940px] max-w-[70%] transition-transform will-change-transform z-40"
            style={{ zIndex: 40, position: "relative" }}
          >
            <img
              src="https://themexriver.com/wp/cargozen/wp-content/uploads/2025/04/countain2.webp"
              alt="container art"
              className="block w-full h-auto"
              draggable={false}
            />
          </div>

          <motion.button
            ref={badgeRef}
            onClick={onBadgeClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: -18 }}
            transition={{ duration: 0.4, ease: [0.2, 0.9, 0.27, 1] }}
            className="
              absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2
              bg-[#ff8a1a] text-white font-bold
              w-[200px] h-[200px]
              flex items-center justify-center text-center
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              uppercase tracking-wide text-lg select-none z-50
            "
            style={{
              zIndex: 50,
              clipPath:
                "polygon(55%  2%, 63% 4%, 75% 12%, 84% 25%, 88% 38%, 88% 50%, 84% 63%, 75% 75%, 63% 84%, 50% 88%, 37% 84%, 25% 75%, 16% 63%, 12% 50%, 12% 38%, 16% 25%, 25% 12%, 37% 4%)",
            }}
          >
            CONTACT US
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HomeContactMerged;
