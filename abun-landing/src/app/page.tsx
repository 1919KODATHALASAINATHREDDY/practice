import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-black/5">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary" />
          <span className="text-xl font-semibold tracking-tight">ABUN</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#product" className="hover:text-foreground">Product</a>
          <a href="#solutions" className="hover:text-foreground">Solutions</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#resources" className="hover:text-foreground">Resources</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-md border border-black/10 hover:bg-surface">Sign in</button>
          <button className="inline-flex h-9 px-4 rounded-md bg-primary text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300">
            Start free trial
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-surface" />
      <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Write content your readers actually value.</h1>
          <p className="mt-5 text-lg text-muted max-w-[52ch]">
            Abun is an AI content writer that creates valuable, on‑brand content from your keywords.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your work email"
              className="h-12 px-4 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button className="h-12 px-6 rounded-md bg-primary text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300">
              Start free trial
            </button>
          </form>
          <div className="mt-6 text-sm text-muted">
            <span className="font-medium text-foreground">4.9/5</span> from creators and teams
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(17,24,39,0.06)] overflow-hidden">
            <div className="border-b border-black/5 px-4 py-2 text-xs text-muted">abun editor</div>
            <div className="p-6 grid gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <div className="text-sm font-medium">Outline</div>
                  <div className="text-sm text-muted-2">Intro, H2s, SEO checklist</div>
                </div>
              </div>
              <div className="rounded-lg bg-surface p-4 text-sm text-muted-2">
                “AI content strategy for startups” → draft intro and H2 suggestions
              </div>
              <div className="flex gap-2">
                <button className="h-8 px-3 rounded-md border border-black/10">Regenerate</button>
                <button className="h-8 px-3 rounded-md bg-accent text-white">Use this</button>
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
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "Keyword Research",
      desc: "Discover high‑intent keywords and related angles in seconds.",
    },
    {
      title: "Content Sample",
      desc: "Get a ready‑to‑read sample aligned to your brand.",
    },
    {
      title: "Optimization",
      desc: "Readable structure, internal links, and meta tags included.",
    },
    {
      title: "Collaboration",
      desc: "Invite your team. Comment, edit, approve—together.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <SectionTitle
        title="Everything you need to publish better content"
        subtitle="From keywords to a polished draft—with your brand voice built in."
      />
      <div className="mx-auto max-w-[1200px] px-6 mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-black/10 p-6 bg-white shadow-[0_8px_24px_rgba(17,24,39,0.06)]"
          >
            <div className="h-10 w-10 rounded-md bg-primary/10 border border-primary/20 mb-4" />
            <div className="text-lg font-semibold">{f.title}</div>
            <p className="mt-2 text-sm text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Enter keywords and audience",
      desc: "Describe your topic and who you are writing for.",
    },
    {
      title: "Review the sample",
      desc: "Refine structure, tone, and SEO suggestions.",
    },
    {
      title: "Publish or export",
      desc: "Copy to your CMS or download as Markdown/HTML.",
    },
  ];
  return (
    <section className="py-20 bg-surface">
      <SectionTitle title="How it works" />
      <div className="mx-auto max-w-[1200px] px-6 mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, idx) => (
          <div key={s.title} className="rounded-xl border border-black/10 p-6 bg-white">
            <div className="h-8 w-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-medium text-accent">
              {idx + 1}
            </div>
            <div className="mt-4 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LiveSample() {
  return (
    <section id="sample" className="py-20 bg-white">
      <SectionTitle
        title="See a content sample"
        subtitle="Try a keyword and preview a structured draft."
      />
      <div className="mx-auto max-w-[900px] px-6 mt-8">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Try: AI content strategy for startups"
            className="h-12 px-4 rounded-md border border-black/10 flex-1"
          />
          <button className="h-12 px-6 rounded-md bg-primary text-white">Generate</button>
        </div>
        <div className="mt-6 rounded-xl border border-black/10 bg-surface p-6 text-sm text-muted-2">
          Intro: Start with the reader’s goal, then outline 3–5 H2s that answer their questions...
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      items: ["20 articles/mo", "Basic editor", "Email support"],
    },
    {
      name: "Growth",
      price: "$49",
      items: ["70 articles/mo", "Keyword research", "SEO suggestions"],
    },
    {
      name: "Scale",
      price: "$99",
      items: ["200 articles/mo", "Team seats", "Priority support"],
    },
  ];
  return (
    <section id="pricing" className="py-20 bg-white">
      <SectionTitle title="Simple, affordable pricing" subtitle="Cancel anytime. 7‑day money‑back guarantee." />
      <div className="mx-auto max-w-[1200px] px-6 mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-xl border border-black/10 p-6 bg-white">
            <div className="text-lg font-semibold">{p.name}</div>
            <div className="mt-2 text-4xl font-bold">{p.price}<span className="text-base font-medium text-muted">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {p.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                  {i}
                </li>
              ))}
            </ul>
            <button className="mt-6 h-10 w-full rounded-md bg-primary text-white">Start free trial</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote:
        "Abun helps us ship high‑quality posts twice as fast, without losing our voice.",
      author: "Maya, Content Lead at Seedflow",
    },
    {
      quote: "The keyword insights are spot‑on and save us hours every week.",
      author: "Luis, SEO Manager at Float",
    },
    {
      quote: "Our writers love the structure and readability suggestions.",
      author: "Rina, Agency Owner",
    },
  ];
  return (
    <section className="py-20 bg-surface">
      <SectionTitle title="Teams like yours choose Abun" />
      <div className="mx-auto max-w-[1200px] px-6 mt-12 grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <figure key={q.author} className="rounded-xl border border-black/10 p-6 bg-white">
            <blockquote className="text-base text-foreground">“{q.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-muted">{q.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Who owns the content?",
      a: "You own everything you publish with Abun.",
    },
    {
      q: "Is the content original?",
      a: "Yes. We check for duplication and provide citations where applicable.",
    },
    {
      q: "Can I export to my CMS?",
      a: "Yes. Export as Markdown/HTML and copy meta tags.",
    },
    {
      q: "Does Abun support brand voice?",
      a: "You can set tone, style, and brand terms to guide generation.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <SectionTitle title="FAQ" />
      <div className="mx-auto max-w-[900px] px-6 mt-10 divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="p-6">
            <summary className="cursor-pointer list-none text-left text-lg font-medium">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface border-t border-black/10">
      <div className="mx-auto max-w-[1200px] px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary" />
          <span className="text-sm text-muted">© {new Date().getFullYear()} ABUN</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Security</a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LiveSample />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
