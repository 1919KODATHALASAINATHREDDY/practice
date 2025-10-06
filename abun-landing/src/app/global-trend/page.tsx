import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Trend — Where Creativity Meets Opportunity",
  description:
    "A bold, modern concept for Global Trend’s homepage focused on clarity, motion, and decisive calls to action.",
};

function GTHeader() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-[1200px] px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary" />
          <span className="text-xl font-semibold tracking-tight">Global Trend</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="inline-flex h-9 px-4 rounded-md bg-primary text-white hover:opacity-90">
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}

function GradientBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
           style={{background:
             "radial-gradient(closest-side, var(--color-accent), transparent 70%)"}} />
      <div className="absolute -bottom-40 -right-20 h-[560px] w-[560px] rounded-full blur-3xl opacity-25"
           style={{background:
             "radial-gradient(closest-side, var(--color-primary), transparent 70%)"}} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-surface" />
    </div>
  );
}

function GTHero() {
  return (
    <section className="relative py-20 md:py-28">
      <GradientBackdrop />
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
            Creative UI/UX for ambitious brands
          </div>
          <h1 className="mt-5 text-5xl md:text-6xl font-bold tracking-tight">
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Creativity</span> meets Opportunity
          </h1>
          <p className="mt-5 text-lg text-muted max-w-[60ch]">
            We craft intuitive, conversion‑first experiences across web and mobile. This homepage
            concept reimagines Global Trend with a confident, editorial aesthetic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="h-12 px-6 rounded-md bg-primary text-white hover:opacity-90 inline-flex items-center justify-center">
              Book a free consult
            </a>
            <a href="#work" className="h-12 px-6 rounded-md border border-white/10 hover:bg-white/5 inline-flex items-center justify-center">
              Explore our work
            </a>
          </div>
          <div className="mt-6 text-sm text-muted">
            <span className="font-medium text-foreground">Impact‑driven</span> • Fast iterations • Accessible by default
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_8px_24px_rgba(2,6,23,0.35)]">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-surface/70 border border-white/10 p-4">
                <div className="text-sm text-muted">Avg. conversion lift</div>
                <div className="mt-1 text-3xl font-semibold">+31%</div>
              </div>
              <div className="rounded-lg bg-surface/70 border border-white/10 p-4">
                <div className="text-sm text-muted">Time to first design</div>
                <div className="mt-1 text-3xl font-semibold">48h</div>
              </div>
              <div className="rounded-lg bg-surface/70 border border-white/10 p-4">
                <div className="text-sm text-muted">Accessibility score</div>
                <div className="mt-1 text-3xl font-semibold">98</div>
              </div>
              <div className="rounded-lg bg-surface/70 border border-white/10 p-4">
                <div className="text-sm text-muted">Client NPS</div>
                <div className="mt-1 text-3xl font-semibold">74</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-[800px] text-center px-6">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted">{subtitle}</p> : null}
    </div>
  );
}

function GTServices() {
  const items = [
    {
      title: "Product UX",
      desc: "Flows, IA, wireframes, and usability that compound over time.",
    },
    {
      title: "Brand Websites",
      desc: "Headless, fast, and SEO‑sound sites that convert attention into action.",
    },
    {
      title: "Design Systems",
      desc: "Accessible components, tokens, and documentation for scale.",
    },
    {
      title: "Growth Design",
      desc: "Experimentation, A/B testing, and narrative alignment across touchpoints.",
    },
  ];
  return (
    <section id="services" className="py-20 bg-surface">
      <SectionTitle
        title="What we do"
        subtitle="A tight, senior team tackling your highest‑leverage problems first."
      />
      <div className="mx-auto max-w-[1200px] px-6 mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-white/10 bg-background p-6">
            <div className="h-10 w-10 rounded-md border border-accent/30 bg-accent/10 mb-4" />
            <div className="text-lg font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-muted">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GTWork() {
  const projects = [
    {
      name: "Fintech Platform",
      line: "Reduced onboarding friction by 42% with progressive profiling.",
    },
    {
      name: "Healthcare App",
      line: "Improved adherence with empathetic prompts and clearer choices.",
    },
    {
      name: "B2B SaaS",
      line: "Refocused narrative from features to outcomes, increasing demo requests 2.1×.",
    },
  ];
  return (
    <section id="work" className="py-20 bg-background">
      <SectionTitle title="Selected work" subtitle="A glimpse of outcomes from recent engagements." />
      <div className="mx-auto max-w-[1200px] px-6 mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="h-36 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10" />
            <div className="mt-4 text-lg font-semibold">{p.name}</div>
            <p className="mt-2 text-sm text-muted">{p.line}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GTAbout() {
  const points = [
    "Senior‑only design team",
    "Weekly demo cadence",
    "Inclusive, accessible defaults",
    "Documentation that scales",
  ];
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">A partner, not a vendor</h3>
          <p className="mt-3 text-muted">
            We collaborate closely with founders and product teams to align user outcomes with
            business goals. Expect clear prioritization, rapid feedback cycles, and craftsmanship.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-muted">
            {points.map((pt) => (
              <li key={pt} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-white/10 bg-background p-6">
            <div className="text-sm text-muted">Our approach</div>
            <ol className="mt-3 space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-accent font-medium">01</span> Define the sharpest problem worth solving</li>
              <li className="flex gap-2"><span className="text-accent font-medium">02</span> Prototype the riskiest assumptions first</li>
              <li className="flex gap-2"><span className="text-accent font-medium">03</span> Validate quickly, iterate with evidence</li>
              <li className="flex gap-2"><span className="text-accent font-medium">04</span> Systematize wins into reusable components</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function GTCTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 via-background to-accent/10 p-10 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ready to move fast with clarity?
          </h3>
          <p className="mt-3 text-muted">
            Tell us about your goals. We’ll share a plan in 48 hours.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="h-12 px-6 rounded-md bg-primary text-white inline-flex items-center justify-center">
              Start consultation
            </a>
            <a href="#services" className="h-12 px-6 rounded-md border border-white/10 inline-flex items-center justify-center">
              See services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GTFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-primary" />
          <span className="text-sm text-muted">© {new Date().getFullYear()} Global Trend</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Accessibility</a>
        </nav>
      </div>
    </footer>
  );
}

export default function GlobalTrendPage() {
  return (
    <div className="gt-theme min-h-screen">
      <GTHeader />
      <main>
        <GTHero />
        <GTServices />
        <GTWork />
        <GTAbout />
        <GTCTA />
      </main>
      <GTFooter />
    </div>
  );
}
