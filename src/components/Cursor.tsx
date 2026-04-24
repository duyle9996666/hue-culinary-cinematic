import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
      }
    };

    const animate = () => {
      tx += (x - tx) * 0.12;
      ty += (y - ty) * 0.12;
      if (trail.current) {
        trail.current.style.transform = `translate3d(${tx - 140}px, ${ty - 140}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={trail}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[280px] w-[280px] rounded-full md:block"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 25 / 0.18) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={ref}
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-6 w-6 rounded-full md:block"
        style={{
          background: "var(--gold)",
          boxShadow: "0 0 24px 4px var(--gold)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
