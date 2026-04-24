import { useEffect, useState } from "react";
import { Embers } from "./Embers";
import hero from "@/assets/hero-hue.jpg";

export function Hero() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
      {/* parallax background image (acts as cinematic still / video poster) */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${scrolled * 0.35}px, 0) scale(${1 + scrolled * 0.0004})`,
        }}
      >
        <img
          src={hero}
          alt="Imperial city of Hue at twilight with red lanterns"
          className="h-full w-full object-cover"
        />
        {/* Replace with <video> when a clip is provided. Keep image as poster. */}
      </div>

      {/* layered gradients for cinematic readability */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* extra dark vignette for heading contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.06 0 0 / 0.55) 0%, oklch(0.06 0 0 / 0.75) 60%, oklch(0.06 0 0 / 0.9) 100%)",
        }}
      />
      <div
        className="absolute inset-0 animate-gradient opacity-40 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.42 0.19 25 / 0.45) 0%, transparent 40%, oklch(0.86 0.09 82 / 0.25) 100%)",
        }}
      />

      {/* embers / particles */}
      <Embers count={26} />

      {/* floating ornaments */}
      <div
        className="floating pointer-events-none absolute left-[8%] top-[28%] h-32 w-32 rounded-full opacity-50 blur-2xl"
        style={{ background: "radial-gradient(circle, var(--crimson-glow), transparent 70%)" }}
      />
      <div
        className="floating-slow pointer-events-none absolute right-[10%] top-[60%] h-40 w-40 rounded-full opacity-40 blur-2xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />

      {/* content */}
      <div
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center"
        style={{ transform: `translate3d(0, ${scrolled * -0.15}px, 0)` }}
      >
        <p
          className="animate-fade-up mb-6 inline-flex items-center gap-3 rounded-full glass px-5 py-2 text-[11px] font-medium uppercase tracking-[0.35em] text-gold"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_var(--gold)]" />
          Hue · Vietnam · A Culinary Journey
        </p>

        <h1
          className="animate-fade-up mx-auto max-w-[14ch] font-display font-semibold leading-[1.08] tracking-[-0.015em] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6rem] [text-shadow:0_4px_30px_rgba(0,0,0,0.65)]"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="block">Discover the Taste</span>
          <span className="mt-3 block">
            of <span className="italic text-gradient-gold">Huế</span>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-10 max-w-lg text-sm leading-[1.8] text-foreground/75 md:text-base [text-wrap:balance]"
          style={{ animationDelay: "0.45s" }}
        >
          A cinematic journey through the imperial kitchens, lantern-lit alleys and family tables
          of Vietnam's most poetic city.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#cuisine"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.42_0.19_25)] to-[oklch(0.55_0.22_25)] px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-glow-red)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_-8px_oklch(0.55_0.22_25)]"
          >
            <span className="absolute inset-0 animate-shimmer opacity-50" />
            <span className="relative">Begin the journey</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#story"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium tracking-wide text-foreground/80 transition-all duration-500 hover:border-gold/60 hover:text-gold"
          >
            Read the story
            <span className="transition-transform duration-300 group-hover:translate-x-1">↓</span>
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-gold/70">
          Scroll
          <span className="h-12 w-px overflow-hidden bg-white/10">
            <span className="block h-1/2 w-full animate-[shimmer_2s_ease-in-out_infinite] bg-gold" />
          </span>
        </div>
      </div>
    </section>
  );
}
