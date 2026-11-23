import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-black py-10 overflow-clip">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <p className="w-full md:w-[80%] text-white/80 text-2xl md:text-3xl font-light italic mb-10 md:mb-16 tracking-wide lowercase">
          where visionary design, master craftsmanship, and thoughtful detail
          come together to shape extraordinary environments.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-white text-3xl md:text-5xl font-light tracking-tighter lowercase">
              about us
            </h2>
          </div>

          <div className="md:col-span-10">
            <p className="text-white/70 text-base md:text-xl font-light leading-relaxed text-left max-w-5xl lowercase">
              <strong className="text-white font-medium">
                essentia environments
              </strong>{" "}
              is a multidisciplinary design ecosystem delivering residential
              and commercial spaces from concept to completion. Founded in
              1999, the firm combines design intelligence, executional depth,
              and bespoke craftsmanship within a single seamless framework.
              Built on values of craftsmanship, longevity, and attention to
              detail, Essentia creates environments that reflect both global
              perspectives and indigenous sensibilities crafted with unwavering
              precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
