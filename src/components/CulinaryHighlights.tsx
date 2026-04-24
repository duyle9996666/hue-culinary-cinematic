import { TiltCard } from "./TiltCard";
import bunbo from "@/assets/bunbo.jpg";
import banhbeo from "@/assets/banhbeo.jpg";
import bunhen from "@/assets/bunhen.jpg";
import bunmannem from "@/assets/bunmannem.jpeg";
import bunnghe from "@/assets/bunnghe.jpg";
import che from "@/assets/che.jpg";

const dishes = [
  {
    img: bunbo,
    name: "Bún Bò Huế",
    en: "Royal Spiced Beef Noodle",
    desc: "Lemongrass-scented broth simmered for hours with bone marrow, finished with a whisper of fermented shrimp paste — a dish once served to emperors.",
  },
  {
    img: banhbeo,
    name: "Bánh Bèo",
    en: "Water Fern Cakes",
    desc: "Delicate rice cakes crowned with crimson dried shrimp and crisped pork fat, plated like jewels on porcelain.",
  },
  {
    img: bunhen,
    name: "Cơm Hến",
    en: "Baby Clam Rice",
    desc: "A symphony of textures from the Perfume River — tiny clams, crisp pork rinds, peanuts and herbs over warm rice.",
  },
  {
    img: bunmannem,
    name: "Bún Thịt Nướng",
    en: "Grilled Pork Vermicelli",
    desc: "Charcoal-grilled pork belly over silken rice noodles, brightened with pickled vegetables and a luminous nuoc cham.",
  },
  {
    img: bunnghe,
    name: "Bún Nghệ",
    en: "Turmeric Offal Noodles",
    desc: "A street-side ritual — golden turmeric noodles tossed with tender pork offal and the perfume of Vietnamese basil.",
  },
  {
    img: che,
    name: "Chè Huế",
    en: "Imperial Sweet Soups",
    desc: "Thirty-six varieties of jewel-toned sweets, each a tribute to the queens of the Nguyễn dynasty.",
  },
];

export function CulinaryHighlights() {
  return (
    <section id="cuisine" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center reveal">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Chapter I — The Table
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.05]">
            Six dishes,
            <br />
            <span className="italic text-gradient-gold">one cinematic feast.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Curated from the streets and royal kitchens of Huế — each plate a verse in Vietnam's
            most poetic cuisine.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {dishes.map((d, i) => (
            <div key={d.name} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <TiltCard className="group h-full">
                <article
                  className="tilt-inner relative h-full overflow-hidden rounded-2xl border border-white/5 bg-card transition-shadow duration-500 group-hover:shadow-[var(--shadow-glow-red)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at var(--mx,50%) var(--my,50%), oklch(0.86 0.09 82 / 0.25), transparent 45%)",
                      }}
                    />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative space-y-3 p-7">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{d.en}</p>
                    <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                </article>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
