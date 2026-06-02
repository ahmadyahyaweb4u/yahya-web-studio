import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Code2, Palette, Smartphone, Settings, Bug, Zap, ShoppingCart, Layout, Globe, RefreshCw,
  CheckCircle2, Rocket, Search, Wrench, Headphones, ExternalLink, Moon, Sun, Menu, X,
  Mail, MessageCircle, Send, Copy, Check, Star, ArrowRight, Quote,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import novacart from "@/assets/novacart.jpg";
import velora from "@/assets/velora.jpg";
import primenest from "@/assets/primenest.jpg";
import ember from "@/assets/ember.jpg";
import elevate from "@/assets/elevate.jpg";
import nexora from "@/assets/nexora.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Yahya — Front-End Developer & Digital Brand Growth Consultant" },
      { name: "description", content: "Ahmad Yahya crafts stunning, responsive websites that strengthen brand identity, improve UX, and turn visitors into customers." },
      { property: "og:title", content: "Ahmad Yahya — Front-End Developer" },
      { property: "og:description", content: "Premium front-end development, website management, and e-commerce solutions." },
    ],
  }),
  component: Portfolio,
});

const services = [
  { icon: Code2, title: "Front-End Development", desc: "Modern, scalable interfaces built with clean, performant code." },
  { icon: Palette, title: "Custom Website Design", desc: "Tailored designs that reflect your brand and impress visitors." },
  { icon: Smartphone, title: "Responsive Websites", desc: "Pixel-perfect on every device, from mobile to ultrawide." },
  { icon: Settings, title: "Website Management", desc: "Ongoing updates, content changes, and technical care." },
  { icon: Bug, title: "Website Bug Fixes", desc: "Diagnose and resolve issues fast — no more broken pages." },
  { icon: Zap, title: "Performance Optimization", desc: "Lightning-fast load times that boost SEO and conversions." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Online stores built to sell, scale, and delight customers." },
  { icon: Layout, title: "Landing Pages", desc: "High-converting pages designed for campaigns and launches." },
  { icon: Globe, title: "Brand Websites", desc: "Cohesive sites that elevate your brand authority online." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transform outdated sites into modern, conversion-ready assets." },
];

const projects = [
  { name: "NovaCart", tag: "E-commerce", img: novacart, desc: "A high-performance online store with seamless checkout and product discovery.", tech: ["React", "Tailwind", "Stripe", "Vite"] },
  { name: "Velora Fashion", tag: "Fashion Brand", img: velora, desc: "An elegant fashion brand experience with editorial-style storytelling.", tech: ["Next.js", "GSAP", "Shopify"] },
  { name: "PrimeNest Realty", tag: "Real Estate", img: primenest, desc: "Interactive property listings with map search and lead capture.", tech: ["React", "Mapbox", "Node.js"] },
  { name: "Ember Grill", tag: "Restaurant", img: ember, desc: "A mouth-watering restaurant site with online menu and reservations.", tech: ["HTML", "CSS", "JS"] },
  { name: "Elevate Personal Brand", tag: "Personal Branding", img: elevate, desc: "A bold personal brand site that converts visitors into clients.", tech: ["Astro", "Tailwind"] },
  { name: "Nexora Solutions", tag: "Corporate Business", img: nexora, desc: "A corporate dashboard-driven site for a B2B SaaS company.", tech: ["React", "TypeScript", "Recharts"] },
];

const benefits = [
  { icon: Smartphone, title: "Responsive Design", desc: "Every site looks flawless on phones, tablets, and desktops." },
  { icon: Rocket, title: "Fast Performance", desc: "Optimized for speed — faster sites convert more." },
  { icon: Search, title: "SEO-Friendly", desc: "Built with best practices so Google finds and ranks you." },
  { icon: Settings, title: "Website Management", desc: "Stress-free ongoing care for your digital presence." },
  { icon: Wrench, title: "Bug Fixes", desc: "Quick, reliable fixes that get your site back on track." },
  { icon: ShoppingCart, title: "E-commerce Expertise", desc: "Built stores that have driven real revenue." },
  { icon: Headphones, title: "Long-Term Support", desc: "I stay with you beyond launch — a true partner." },
];

const testimonials = [
  { name: "Sarah M.", role: "Founder, Velora Fashion", text: "Ahmad transformed our brand online. The site is gorgeous, lightning fast, and sales went up within the first month." },
  { name: "James O.", role: "CEO, Nexora Solutions", text: "Working with Ahmad was effortless. He's responsive, talented, and genuinely cares about your business outcomes." },
  { name: "Linda K.", role: "Owner, Ember Grill", text: "He took our old, broken site and turned it into something we're proud to share. Reservations have doubled." },
];

function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  const copyDiscord = () => {
    navigator.clipboard.writeText("ahmadyahyaweb");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#why", label: "Why Me" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-xl">
            Ahmad<span className="gradient-text">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg glass hover:shadow-glow transition-all"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white text-sm font-medium hover:shadow-glow transition-all">
              Hire Me <ArrowRight className="w-4 h-4" />
            </a>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden glass border-t border-border">
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-muted-foreground">{l.label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-24 overflow-hidden hero-bg">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Crafting Stunning Websites <br className="hidden md:block" />
            That Help Brands <span className="gradient-text">Stand Out</span> and Grow
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            I design responsive, high-performing websites that strengthen brand identity, improve user experience, and help businesses convert visitors into customers. Available for freelance projects and long-term collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium shadow-glow hover:scale-105 transition-transform">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:shadow-glow transition-all">
              Hire Me
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[["50+", "Projects"], ["5+", "Years"], ["100%", "Satisfaction"]].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl p-5">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{n}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Ahmad Yahya</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm a Front-End Developer who creates modern, responsive, conversion-focused websites. I help businesses grow online through custom web design, website management, bug fixing, performance optimization, and e-commerce solutions. Every project I take on is built with care — combining clean code, premium design, and a clear focus on real business results.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">What I Do</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">End-to-end web solutions tailored to your brand and growth goals.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse of recent projects across e-commerce, brands, and corporate sites.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.name} className="group glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden aspect-[4/3] bg-card">
                  <img
                    src={p.img}
                    alt={`${p.name} website mockup`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs font-medium">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Why Work With Me</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Results</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all">
                <b.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-accent mb-3">Client Love</p>
            <h2 className="text-3xl md:text-5xl font-bold">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-6 relative">
                <Quote className="w-8 h-8 text-accent/40 mb-3" />
                <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-card/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Pick the channel that works best for you — I usually reply within a few hours.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <a href="https://wa.me/2348122764012" target="_blank" rel="noopener noreferrer"
               className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group">
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold mb-1">WhatsApp</div>
              <div className="text-xs text-muted-foreground">Chat instantly</div>
            </a>
            <a href="https://t.me/AhmadYahyaWeb" target="_blank" rel="noopener noreferrer"
               className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group">
              <Send className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold mb-1">Telegram</div>
              <div className="text-xs text-muted-foreground">@AhmadYahyaWeb</div>
            </a>
            <button onClick={copyDiscord}
                    className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group text-center">
              {copied ? <Check className="w-8 h-8 text-green-400 mx-auto mb-3" /> : <Copy className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />}
              <div className="font-semibold mb-1">Discord</div>
              <div className="text-xs text-muted-foreground">{copied ? "Copied!" : "ahmadyahyaweb"}</div>
            </button>
            <a href="mailto:ahmadyahyaweb@gmail.com"
               className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-xs text-muted-foreground break-all">ahmadyahyaweb@gmail.com</div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© 2026 Ahmad Yahya. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>Crafted with care</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
