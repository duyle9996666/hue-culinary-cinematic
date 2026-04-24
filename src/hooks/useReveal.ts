import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useParallax(selector = ".parallax-layer") {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const layers = document.querySelectorAll<HTMLElement>(selector);
    let raf = 0;
    let lastY = window.scrollY;

    const update = () => {
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed ?? "0.2");
        layer.style.transform = `translate3d(0, ${lastY * speed}px, 0)`;
      });
      raf = 0;
    };

    const onScroll = () => {
      lastY = window.scrollY;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [selector]);
}
