import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Design. Build. Furniture.",
  "Integrated by design",
  "Executed with precision",
  "Concept to Completion",
];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let inView = false;
    let resumeTimer = 0;
    const sync = () => {
      if (inView) video.play().catch(() => {});
      else video.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 }
    );
    observer.observe(video);

    // Decoding the hero video on the same frames as the scroll makes the page hitch.
    const onScroll = () => {
      if (!video.paused) video.pause();
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(sync, 180);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(resumeTimer);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] overflow-clip">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/Home.MP4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-16">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titles[current]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="font-light text-white text-[32px] md:text-[65px] leading-[1.2] md:leading-[1.1] tracking-tight lowercase max-w-[320px] md:max-w-[70%] mx-auto md:mx-0 mb-4 md:mb-6"
              >
                {titles[current]}
              </motion.h1>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center md:justify-start"
            >
              <Button
                to="/contact"
                text="request a consultation"
                size={isMobile ? "sm" : "md"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
