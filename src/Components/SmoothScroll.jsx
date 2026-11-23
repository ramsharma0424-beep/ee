import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Lerp follows the wheel instead of restarting a timed ease on every tick.
    // High enough that the page keeps up, low enough that it still eases.
    const lenis = new Lenis({
      lerp: 0.35,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });
    window.lenis = lenis;

    let frame = 0;
    const raf = (time) => {
      // Lenis measures the page once, before the homepage has painted. The root
      // element does not resize when sections appear, so the scroll limit stays
      // short and the page stops. Refresh the measurement without restarting
      // the current scroll.
      const nextHeight = document.documentElement.scrollHeight;
      if (lenis.dimensions.scrollHeight !== nextHeight) {
        lenis.dimensions.resize();
      }
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (window.lenis === lenis) window.lenis = undefined;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
