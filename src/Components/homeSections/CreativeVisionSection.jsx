import React from "react";
import { motion } from "framer-motion";

const CreativeVisionSection = () => {
  return (
    <section className="relative z-[1] w-full bg-black py-10 md:py-20 overflow-hidden font-lato">
      <div className="w-full mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center mb-16 px-6"
        >
          <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed tracking-wide lowercase">
            Every project is conceived, executed, and crafted in-house, ensuring continuity, refinement, and a signature sense of timeless character.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeVisionSection;
