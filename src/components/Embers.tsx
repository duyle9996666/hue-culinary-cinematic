import { useMemo } from "react";

export function Embers({ count = 22 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 6,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 12,
        opacity: 0.4 + Math.random() * 0.6,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${p.left}%`,
            bottom: `-${p.size * 4}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
