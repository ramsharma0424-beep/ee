const AboutContent = () => {
  return (
    <section className="bg-black text-white py-0 md:py-10 overflow-x-clip">
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 mb-12 md:mb-24">
          <div className="max-w-8xl">
            <p className="font-lato text-sm md:text-[19px] leading-relaxed text-gray-300 font-light lowercase">
              essentia environments is a full service design and build firm specialising in turnkey residential and commercial projects. Every aspect, from concept and design to manufacturing, execution, and installation, is delivered through a single, integrated system.<br /> <br />
              With 26 years of experience, essentia brings together design expertise, technical depth, and in house production to ensure seamless coordination, absolute precision, and complete accountability at every stage, while also supporting larger project ecosystems through detailed coordination and backend integration.<br /> <br />
              The result is a fully managed, end to end experience where every detail is considered, every element is controlled, and every space is delivered exactly as envisioned.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-clip">
          <img
            src="/AboutImgs/essentia-office.webp"
            alt="essentia architecture"
            className="w-full h-full object-cover object-top"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
