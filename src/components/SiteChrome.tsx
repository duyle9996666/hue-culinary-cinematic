export function SiteNav() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2 shadow-[var(--shadow-elegant)]">
        <a
          href="#top"
          className="rounded-full px-4 py-2 font-display text-sm font-semibold tracking-wide text-gold"
        >
          Huế<span className="ml-1 text-xs italic opacity-70">journey</span>
        </a>
        <span className="mx-1 h-6 w-px bg-white/10" />
        {[
          { href: "#cuisine", label: "Cuisine" },
          { href: "#story", label: "Story" },
          { href: "#gallery", label: "Journey" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-300 hover:text-gold sm:inline-block"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#cuisine"
          className="ml-1 rounded-full bg-gold px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-foreground transition-transform duration-300 hover:scale-105"
        >
          Reserve
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-semibold text-gradient-gold">
            Huế Culinary Journey
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A cinematic tribute to Vietnam's imperial city and the families who keep its flavours
            alive.
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Explore</p>
          <ul className="space-y-2 text-foreground/70">
            <li>
              <a href="#cuisine" className="transition-colors hover:text-gold">
                The Cuisine
              </a>
            </li>
            <li>
              <a href="#story" className="transition-colors hover:text-gold">
                The Story
              </a>
            </li>
            <li>
              <a href="#gallery" className="transition-colors hover:text-gold">
                The Journey
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Follow</p>
          <ul className="space-y-2 text-foreground/70">
            <li>
              <a href="#" className="transition-colors hover:text-gold">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/1HhKFsfABSc?si=G2-zTZ3jGGjEb40L"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-gold">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Huế Culinary Journey · Crafted with reverence.</p>
        <p className="italic">"One eats first with the eyes."</p>
      </div>
    </footer>
  );
}
