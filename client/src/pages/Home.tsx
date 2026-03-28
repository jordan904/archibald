/**
 * Home Page — Robert Archibald General Contracting LTD.
 *
 * Design: Maritime Industrial Heritage
 * - DM Serif Display headings, Work Sans body, JetBrains Mono for data
 * - Charcoal / safety-orange / sandstone palette
 * - Diagonal section cuts, dot-grid textures, construction-line dividers
 * - Weighted animations (slide-up with gravity)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  ChevronDown,
  Hammer,
  Home as HomeIcon,
  Building2,
  Tractor,
  Wrench,
  Mountain,
  HardHat,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

/* ─── Image URLs ─── */
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031449034/37H85K3jGXhaow3QVGy8KL/hero-construction-a35GNN8vDDVJ2HLS48BBhy.webp";
const EXCAVATION_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031449034/37H85K3jGXhaow3QVGy8KL/excavation-work-aiWXmWM86VL44S2aWqoJsQ.webp";
const RESIDENTIAL_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031449034/37H85K3jGXhaow3QVGy8KL/residential-build-V4Q2Br8vkCPKJ6c6Z8txcR.webp";
const BARN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031449034/37H85K3jGXhaow3QVGy8KL/barn-agricultural-CDw3AfkjYqjYb6WSrRABRa.webp";
const RENOVATION_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663031449034/37H85K3jGXhaow3QVGy8KL/renovation-interior-4s6B6CP8U8PPVnwDGrGcUo.webp";

/* ─── Animated counter hook ─── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { count, ref };
}

/* ─── Fade-up animation wrapper ─── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Services data ─── */
const services = [
  {
    icon: HomeIcon,
    title: "Residential Construction",
    desc: "Custom homes built from the ground up. From foundations to finishing, we handle every phase of your new home build with precision and care.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Reliable commercial builds that meet your business needs. We deliver projects on time and within budget, from offices to retail spaces.",
  },
  {
    icon: Tractor,
    title: "Agricultural Buildings",
    desc: "Barns, equipment shelters, and farm structures built to withstand the Maritime climate. Engineered for function and durability.",
  },
  {
    icon: Wrench,
    title: "Renovations",
    desc: "Transform your existing space. Kitchen remodels, additions, full-home renovations — we breathe new life into any structure.",
  },
  {
    icon: Mountain,
    title: "Excavation",
    desc: "Site preparation, foundation digging, grading, and land clearing. Our heavy equipment operators bring over 18 years of experience.",
  },
  {
    icon: Hammer,
    title: "Foundations",
    desc: "Concrete foundations, form work, and structural base construction. Every great build starts with a solid foundation.",
  },
];

/* ─── Gallery data ─── */
const gallery = [
  { src: RESIDENTIAL_IMG, alt: "Custom residential home build in Nova Scotia", label: "Residential" },
  { src: EXCAVATION_IMG, alt: "Foundation excavation with heavy equipment", label: "Excavation" },
  { src: BARN_IMG, alt: "Agricultural barn construction", label: "Agricultural" },
  { src: RENOVATION_IMG, alt: "Interior renovation — modern kitchen", label: "Renovation" },
];

/* ─── Reviews data ─── */
const reviews = [
  {
    name: "Leslie Chisholm",
    rating: 5,
    text: "Very good people, very helpful.",
    time: "Google Review",
  },
  {
    name: "Alexander Delorey",
    rating: 5,
    text: "Excellent work and professional service. Highly recommend Archibald Contracting for any project.",
    time: "Google Review",
  },
  {
    name: "Christina Turay",
    rating: 5,
    text: "Quality craftsmanship and a team you can trust. They delivered exactly what was promised.",
    time: "Google Review",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Our Work" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* ─── NAVIGATION ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand-orange rounded-sm flex items-center justify-center">
              <HardHat className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-[family-name:var(--font-display)] text-white text-lg tracking-tight">
                Archibald
              </span>
              <span className="hidden sm:block text-[11px] text-white/60 font-[family-name:var(--font-mono)] tracking-wider uppercase">
                General Contracting
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-brand-orange transition-colors font-medium tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:9028633935"
              className="ml-4 px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold tracking-wide uppercase hover:bg-brand-orange/90 transition-colors"
            >
              (902) 863-3935
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-brand-orange transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:9028633935"
                className="mt-2 px-5 py-3 bg-brand-orange text-white text-sm font-semibold tracking-wide uppercase text-center"
              >
                Call (902) 863-3935
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[100vh] flex items-end pb-16 lg:pb-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Aerial view of a home under construction in Nova Scotia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-[family-name:var(--font-mono)] text-sm tracking-widest uppercase">
                Antigonish, Nova Scotia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Building Nova Scotia
              <br />
              <span className="text-brand-orange">Since 2010</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-white/70 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Specializing in residential, commercial, and agricultural
              construction, renovations, and excavation. Quality craftsmanship
              rooted in our community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:9028633935"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold tracking-wide uppercase text-sm hover:bg-brand-orange/90 transition-all hover:shadow-lg hover:shadow-brand-orange/20"
              >
                <Phone className="w-4 h-4" />
                Get a Free Estimate
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold tracking-wide uppercase text-sm hover:border-white/60 transition-all"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative bg-brand-dark py-10 lg:py-14" style={{ clipPath: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)", marginTop: "-3rem", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { end: 15, suffix: "+", label: "Years Experience" },
              { end: 4, suffix: ".4", label: "Google Rating", prefix: "" },
              { end: 100, suffix: "%", label: "Free Estimates" },
              { end: 579, suffix: "+", label: "Facebook Followers" },
            ].map((stat, i) => {
              const counter = useCounter(stat.end, 1800);
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <span
                      ref={counter.ref}
                      className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl text-brand-orange"
                    >
                      {stat.prefix ?? ""}
                      {counter.count}
                      {stat.suffix}
                    </span>
                    <p className="text-white/50 text-sm mt-2 font-[family-name:var(--font-mono)] tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 lg:py-32 dot-grid relative" style={{ marginTop: "-2rem", paddingTop: "5rem" }}>
        <div className="container">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase">
                What We Do
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl text-brand-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg mb-16">
              From foundations to finishing touches, we provide comprehensive
              construction services across Antigonish and surrounding communities
              in Nova Scotia.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="group bg-card border border-border p-8 hover:shadow-xl hover:shadow-brand-charcoal/5 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                  {/* Number label */}
                  <span className="absolute top-4 right-4 font-[family-name:var(--font-mono)] text-xs text-muted-foreground/40 tracking-wider">
                    0{i + 1}
                  </span>
                  <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                    <s.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-brand-charcoal mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {s.desc}
                  </p>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-brand-orange group-hover:w-full transition-all duration-500" />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Additional services note */}
          <FadeUp delay={0.3}>
            <div className="mt-12 p-6 border-l-4 border-brand-orange bg-brand-sandstone/50">
              <p className="text-brand-charcoal font-medium">
                We also offer{" "}
                <strong>demolition services</strong>,{" "}
                <strong>aggregate &amp; gravel sales</strong>, and{" "}
                <strong>steel roofing &amp; siding</strong>.{" "}
                Call us for a free estimate on any project.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── OUR WORK / GALLERY ─── */}
      <section
        id="work"
        className="py-20 lg:py-32 bg-brand-dark relative"
        style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)", paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="container">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl text-white mb-4">
              Our Work
            </h2>
            <p className="text-white/50 max-w-2xl text-lg mb-16">
              A selection of projects showcasing our range — from custom homes
              and agricultural buildings to excavation and interior renovations.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((img, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-[family-name:var(--font-mono)] text-xs text-brand-orange tracking-widest uppercase">
                      {img.label}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 lg:py-32 relative" style={{ marginTop: "-2rem", paddingTop: "5rem" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Archibald Contracting construction site"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-brand-orange p-6 shadow-xl">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-white block">
                    15+
                  </span>
                  <span className="text-white/80 text-sm font-[family-name:var(--font-mono)] tracking-wider uppercase">
                    Years in Business
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-orange" />
                  <span className="text-brand-orange font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase">
                    About Us
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl text-brand-charcoal mb-6">
                  Family-Owned.
                  <br />
                  Community-Rooted.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Robert Archibald General Contracting LTD. is a family-owned
                    construction company based in Antigonish, Nova Scotia. With
                    over 15 years of experience in the industry, we've built our
                    reputation on quality craftsmanship, honest service, and a
                    deep commitment to our community.
                  </p>
                  <p>
                    From custom homes and agricultural buildings to commercial
                    projects and renovations, our team brings expertise in every
                    phase of construction — including excavation, foundations,
                    framing, and finishing. We operate our own heavy equipment
                    and manage projects from start to finish.
                  </p>
                  <p>
                    As proud members of the Antigonish Chamber of Commerce, we're
                    invested in building not just structures, but lasting
                    relationships with our clients and neighbours across Nova
                    Scotia.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:9028633935"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold tracking-wide uppercase text-sm hover:bg-brand-orange/90 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us Today
                  </a>
                  <a
                    href="https://www.facebook.com/ArchibaldContracting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-charcoal/20 text-brand-charcoal font-semibold tracking-wide uppercase text-sm hover:border-brand-charcoal/40 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="py-20 lg:py-32 bg-brand-sandstone/50 dot-grid relative">
        <div className="container">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl text-brand-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center gap-2 mb-16">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "text-brand-orange fill-brand-orange" : "text-brand-orange/40 fill-brand-orange/40"}`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm font-[family-name:var(--font-mono)]">
                4.4 / 5 on Google
              </span>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-card border border-border p-8 relative">
                  {/* Quote mark */}
                  <span className="absolute top-4 right-6 font-[family-name:var(--font-display)] text-6xl text-brand-orange/10 leading-none">
                    &ldquo;
                  </span>
                  <div className="flex gap-1 mb-4">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-brand-orange fill-brand-orange" />
                    ))}
                  </div>
                  <p className="text-brand-charcoal leading-relaxed mb-6 italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange/10 flex items-center justify-center font-[family-name:var(--font-display)] text-brand-orange text-lg">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal text-sm">
                        {r.name}
                      </p>
                      <p className="text-muted-foreground text-xs font-[family-name:var(--font-mono)]">
                        {r.time}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / MAP ─── */}
      <section
        id="contact"
        className="py-20 lg:py-32 bg-brand-dark relative"
        style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)", paddingTop: "6rem" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeUp>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-brand-orange" />
                  <span className="text-brand-orange font-[family-name:var(--font-mono)] text-xs tracking-widest uppercase">
                    Get In Touch
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl text-white mb-6">
                  Ready to Build?
                </h2>
                <p className="text-white/50 text-lg mb-10 leading-relaxed">
                  Whether you're planning a new home, renovating an existing
                  space, or need excavation work done, we'd love to hear from
                  you. Free estimates on all projects.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:9028633935"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                      <Phone className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-white text-lg font-[family-name:var(--font-mono)] group-hover:text-brand-orange transition-colors">
                        (902) 863-3935
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href="https://maps.app.goo.gl/FJGk5njusN4hSEf6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase mb-1">
                        Address
                      </p>
                      <p className="text-white group-hover:text-brand-orange transition-colors">
                        54 St Marys St, Antigonish, NS B2G 2A5
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase mb-1">
                        Business Hours
                      </p>
                      <p className="text-white">
                        Monday &ndash; Friday: 8:30 AM &ndash; 4:30 PM
                      </p>
                      <p className="text-white/40 text-sm">
                        Saturday &amp; Sunday: Closed
                      </p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/ArchibaldContracting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange/20 transition-colors">
                      <Facebook className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase mb-1">
                        Social
                      </p>
                      <p className="text-white group-hover:text-brand-orange transition-colors">
                        Follow us on Facebook
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Map embed */}
            <FadeUp delay={0.2}>
              <div className="w-full h-full min-h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.5!2d-61.9888587!3d45.6242327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5c450cf697dec3%3A0x5543a9d20b91c88e!2sArchibald%20Robert%20General%20Contracting%20Ltd!5e0!3m2!1sen!2sca!4v1711648000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Archibald Contracting Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-brand-dark border-t border-white/5 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-brand-orange rounded-sm flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <span className="font-[family-name:var(--font-display)] text-white text-lg tracking-tight">
                    Archibald
                  </span>
                  <span className="block text-[11px] text-white/60 font-[family-name:var(--font-mono)] tracking-wider uppercase">
                    General Contracting
                  </span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Specializing in residential, commercial, and agricultural
                construction in Antigonish, Nova Scotia.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-widest uppercase mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="block text-white/60 hover:text-brand-orange transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-[family-name:var(--font-mono)] text-xs text-white/40 tracking-widest uppercase mb-4">
                Contact
              </h4>
              <div className="space-y-2 text-sm">
                <a href="tel:9028633935" className="block text-white/60 hover:text-brand-orange transition-colors font-[family-name:var(--font-mono)]">
                  (902) 863-3935
                </a>
                <p className="text-white/60">
                  54 St Marys St, Antigonish, NS B2G 2A5
                </p>
                <p className="text-white/60">
                  Mon&ndash;Fri: 8:30 AM &ndash; 4:30 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs font-[family-name:var(--font-mono)]">
              &copy; {new Date().getFullYear()} Robert Archibald General Contracting LTD. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              Antigonish, Nova Scotia, Canada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
