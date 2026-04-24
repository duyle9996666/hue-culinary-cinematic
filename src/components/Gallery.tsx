import bunbo from "@/assets/bunbo.jpg";
import banhbeo from "@/assets/banhbeo.jpg";
import bunhen from "@/assets/bunhen.jpg";
import bunmannem from "@/assets/bunmannem.jpeg";
import bunnghe from "@/assets/bunnghe.jpg";
import che from "@/assets/che.jpg";
import banhep from "@/assets/banhep.webp";
import culture from "@/assets/culture-hue.jpg";

const tiles = [
  { src: bunbo, span: "md:col-span-2 md:row-span-2", caption: "Morning broth, Đông Ba Market" },
  { src: banhep, span: "", caption: "Hidden alley, twilight" },
  { src: che, span: "", caption: "Thirty-six sweets" },
  { src: banhbeo, span: "md:row-span-2", caption: "Porcelain ceremony" },
  { src: bunnghe, span: "", caption: "Turmeric & smoke" },
  { src: bunhen, span: "", caption: "River clams at dawn" },
  { src: culture, span: "md:col-span-2", caption: "Imperial table setting" },
  { src: bunmannem, span: "", caption: "Family kitchen" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative" style={{ padding: "100px 8%" }}>
      <div className="mx-auto max-w-7xl">
        <div
          className="mb-16 grid items-center gap-[60px]"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div className="reveal" style={{ maxWidth: "500px" }}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">
              Chapter III — The Journey
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.05]">
              A city <span className="italic text-gradient-gold">felt</span>,
              <br />
              not just visited.
            </h2>
          </div>
          <p
            className="reveal reveal-delay-1 text-sm leading-relaxed text-muted-foreground"
            style={{ maxWidth: "400px" }}
          >
            Eight frames from a journey through alleys, palaces and family tables along the Perfume
            River.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`reveal reveal-delay-${(i % 5) + 1} group relative overflow-hidden rounded-2xl border border-white/5 ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, oklch(0.55 0.22 25 / 0.25), transparent 60%)",
                }}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Frame 0{i + 1}</p>
                <p className="mt-1 font-display text-base">{t.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
