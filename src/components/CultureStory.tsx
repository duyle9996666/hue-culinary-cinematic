import culture from "@/assets/culture-hue.jpg";

export function CultureStory() {
  return (
    <section id="story" className="relative overflow-hidden py-32 px-6">
      {/* parallax background layers */}
      <div
        className="parallax-layer pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full opacity-40 blur-3xl"
        data-speed="-0.08"
        style={{ background: "radial-gradient(circle, var(--crimson), transparent 70%)" }}
      />
      <div
        className="parallax-layer pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        data-speed="0.12"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="reveal lg:col-span-6">
          <div className="parallax-layer perspective-1000" data-speed="-0.04">
            <div className="floating-slow relative overflow-hidden rounded-3xl border border-white/10 shadow-[var(--shadow-elegant)]">
              <img
                src={culture}
                alt="Royal Hue cuisine served in traditional ao dai"
                loading="lazy"
                className="h-[640px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Imperial Heritage</p>
                <p className="mt-2 font-display text-lg italic">
                  "Ăn bằng mắt trước khi ăn bằng miệng."
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  — One eats first with the eyes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <p className="reveal mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Chapter II — The Soul
          </p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05]">
            Where the <span className="italic text-gradient-gold">Nguyễn</span> dynasty
            <br />
            still sets the table.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="reveal reveal-delay-2">
              In Huế, dining was never sustenance — it was theatre. For 143 years the imperial city
              orchestrated cuisine as ceremony, with thirty-six dishes for a single royal banquet
              and chefs bound to silence by oath.
            </p>
            <p className="reveal reveal-delay-3">
              Today, that same precision lives in roadside stalls and family kitchens. The palace
              fell, but the recipes endured — passed mother to daughter, plated on heirloom blue
              porcelain, tasted as if the emperor still watched.
            </p>
          </div>

          <div className="reveal reveal-delay-4 mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { n: "1,700+", l: "Documented Dishes" },
              { n: "143", l: "Years of Empire" },
              { n: "36", l: "Royal Course Banquet" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-gradient-gold">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
