import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { CTAButton, HeroCTAs, PHONE, PHONE_DISPLAY, WHATSAPP, DIRECTIONS } from "@/components/CTAButtons";
import { TrialForm } from "@/components/TrialForm";
import heroImg from "@/assets/hero-gym.jpg";
import logo from "@/assets/zurich-fitness-logo.png.asset.json";
import {
  Star, Phone, MessageCircle, MapPin, Clock, ShieldCheck, Users, Sparkles, Dumbbell, HeartPulse,
  Activity, Bike, Music2, Flame, Zap, Apple, UserCheck, Wind, Trophy, Footprints, Baby, Scale,
  TrendingUp, Heart, Award, Mic2, Speaker, PersonStanding, Check,
} from "lucide-react";

const plans = [
  {
    name: "Monthly", price: "₹2,499", period: "/ month", popular: false,
    features: ["Full gym access", "Group classes", "Locker facility"],
    cta: "Get Started",
  },
  {
    name: "Quarterly", price: "₹5,999", period: "/ 3 months", popular: true,
    features: ["Everything in Monthly", "1 Personal session", "Diet consultation"],
    cta: "Most Popular",
  },
  {
    name: "Annual", price: "₹17,999", period: "/ year", popular: false,
    features: ["All access", "Personal training", "Custom nutrition plan", "Free guest passes"],
    cta: "Best Value",
  },
];

export const Route = createFileRoute("/")(
{
  head: () => ({
    meta: [
      { title: "Zurich Fitness Rajajinagar | Best Gym in Bengaluru | Expert Trainers" },
      { name: "description", content: "Zurich Fitness Rajajinagar — Bengaluru's top-rated gym. Expert certified trainers, modern equipment, personal training, yoga, HIIT, Zumba & more. Open 5 AM–11 PM. Call +91 86188 89800 or book a free trial." },
      { name: "keywords", content: "Zurich Fitness Rajajinagar, best gym Rajajinagar, gym in Bengaluru, fitness center Bangalore, personal training Rajajinagar, weight training, yoga classes, HIIT, Zumba, crossfit Bangalore, gym near me" },
      { property: "og:title", content: "Zurich Fitness Rajajinagar | Best Gym in Bengaluru" },
      { property: "og:description", content: "Top-rated gym in Rajajinagar, Bengaluru with expert trainers and personalized programs." },
      { property: "og:url", content: "/" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
}
);

const services = [
  { icon: Dumbbell, label: "Weight Training" }, { icon: Activity, label: "Crossfit" },
  { icon: Flame, label: "HIIT Classes" }, { icon: HeartPulse, label: "Cardio Exercise" },
  { icon: Trophy, label: "Body Building" }, { icon: Scale, label: "Weight Loss" },
  { icon: TrendingUp, label: "Weight Gain" }, { icon: UserCheck, label: "Personal Training" },
  { icon: Users, label: "Private Lessons" }, { icon: Apple, label: "Nutrition Consulting" },
  { icon: Wind, label: "Yoga Classes" }, { icon: Sparkles, label: "Power Yoga" },
  { icon: PersonStanding, label: "Pilates" }, { icon: Zap, label: "Kickboxing" },
  { icon: Bike, label: "Cycling" }, { icon: Music2, label: "Zumba" },
  { icon: Speaker, label: "Dance Fitness" }, { icon: Mic2, label: "Hip Hop" },
  { icon: Music2, label: "Bollybeats" }, { icon: Footprints, label: "Stepper Aerobics" },
  { icon: Heart, label: "Aerobics Training" }, { icon: Baby, label: "Kids Dance" },
  { icon: Award, label: "Youth Sports" }, { icon: Users, label: "Youth Classes" },
];

const highlights = [
  { title: "Supportive Trainers", body: "Certified coaches who guide every rep with patience and expertise." },
  { title: "Motivating Atmosphere", body: "An energy that pushes you to show up — and show out — every session." },
  { title: "Modern Equipment", body: "Premium machines and free weights kept in top condition." },
  { title: "Spacious Workout Area", body: "Plenty of room to train freely without waiting on machines." },
  { title: "Clean & Hygienic", body: "Sanitized floors, fresh towels and a facility we're proud of." },
  { title: "Personalized Plans", body: "Programs tailored to your body, goal and lifestyle." },
];

const whyUs = [
  { icon: Star, title: "Top-Rated in Rajajinagar", body: "4.9-star rated by 140+ members who train with us." },
  { icon: Users, title: "Friendly Trainers", body: "Supportive coaches who genuinely care about your progress." },
  { icon: ShieldCheck, title: "Clean & Hygienic", body: "Spotless equipment, fresh air and a facility we maintain daily." },
  { icon: Sparkles, title: "Modern Equipment", body: "Latest strength, cardio and functional training gear." },
  { icon: UserCheck, title: "Personalized Plans", body: "Tailored programs for weight loss, strength and wellness." },
  { icon: Dumbbell, title: "Wide Range of Classes", body: "From CrossFit and HIIT to Yoga, Zumba and Pilates." },
];

// Hook: observe elements and add .revealed class
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-scale");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Index() {
  useScrollReveal();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO — fills viewport, no gap */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "calc(100svh - 5rem)" }}
      >
        <img
          src={heroImg}
          alt="Premium gym interior at Zurich Fitness Rajajinagar Bengaluru"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient covers all the way to the bottom — no awkward dark band */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-radial-glow" />
        {/* Extra bottom fade to background colour */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 flex flex-col justify-center" style={{ minHeight: "inherit" }}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-surface/70 backdrop-blur border border-border rounded-full px-4 py-1.5 mb-6 reveal">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-xs sm:text-sm font-medium">4.9 ★ rated by 140+ members in Rajajinagar</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight reveal stagger-1">
              Train Better.<br />Get Stronger.<br />
              <span className="text-gradient-primary">Stay Consistent.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed reveal stagger-2">
              Zurich Fitness Rajajinagar is a top-rated gym with expert trainers, modern equipment, and a motivating atmosphere designed to help you reach your fitness goals.
            </p>
            <div className="mt-8 reveal stagger-3"><HeroCTAs /></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground reveal stagger-4">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open 5 AM · Closes 11 PM</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 4th Block, Rajajinagar</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 sm:py-24 border-y border-border/60 bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 reveal">
            <div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                <span className="ml-2 font-display text-2xl font-bold">4.9</span>
                <span className="text-muted-foreground text-sm ml-1">/ 5 · 140 reviews</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Loved by members across Rajajinagar</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((h, i) => (
              <div key={h.title} className={`reveal stagger-${(i % 6) + 1} bg-card border border-border rounded-xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-all shadow-card-premium`}>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <h3 className="font-display text-lg font-semibold mb-1.5">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold reveal">About Zurich Fitness</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 mb-6 reveal stagger-1">A trusted Rajajinagar gym built around <span className="text-gradient-primary">your transformation</span></h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed reveal stagger-2">
            At Zurich Fitness Rajajinagar, strength, discipline and personal support sit at the heart of everything we do. We're a premium fitness center in Bengaluru where serious trainers, modern equipment and a motivating community come together to make consistency easy. Whether you're starting your fitness journey or chasing a new personal best, our coaches design a path that fits your body, your goal and your schedule.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-28 bg-surface/40 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Services</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">Everything you need under one roof</h2>
            <p className="mt-4 text-muted-foreground">From heavy lifting to dance, yoga to HIIT — we cover every kind of fitness goal.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map((s, i) => (
              <div key={s.label} className={`reveal stagger-${(i % 6) + 1} group bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col items-start gap-3 hover:border-primary/60 hover:bg-card/80 transition-all`}>
                <div className="w-11 h-11 rounded-lg bg-gradient-primary/20 border border-primary/30 flex items-center justify-center group-hover:shadow-glow transition">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold leading-tight">{s.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3">The Rajajinagar gym members keep coming back to</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <div key={w.title} className={`reveal-scale stagger-${(i % 6) + 1} relative bg-card border border-border rounded-2xl p-6 sm:p-7 overflow-hidden hover:border-primary/60 transition`}>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
                <w.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-20 sm:py-28 bg-surface/40 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-left">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Visit Us</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 mb-4">Right in the heart of <span className="text-gradient-primary">Rajajinagar</span></h2>
            <div className="space-y-3 text-base text-muted-foreground mb-6">
              <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /> 9th Main Rd, 4th Block, Rajajinagar,<br />Bengaluru, Karnataka 560010</p>
              <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> <span><span className="text-foreground font-semibold">Open now</span> · 5 AM – 11 PM, every day</span></p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a></p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton variant="primary" href={DIRECTIONS} icon={MapPin} target="_blank" rel="noopener">Get Directions</CTAButton>
              <CTAButton variant="whatsapp" href={WHATSAPP} icon={MessageCircle} target="_blank" rel="noopener">WhatsApp Us</CTAButton>
            </div>
          </div>
          <div className="reveal rounded-2xl overflow-hidden border border-border shadow-card-premium aspect-[4/3] lg:aspect-square">
            <iframe
              title="Zurich Fitness Rajajinagar location map"
              src="https://www.google.com/maps?q=Zurich+Fitness+Rajajinagar+9th+Main+Rd+4th+Block+Bengaluru+560010&output=embed"
              className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* PRICING removed as requested */}

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div className="reveal-left">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mt-3 mb-4">Ready to start? <span className="text-gradient-primary">Let's talk.</span></h2>
            <p className="text-muted-foreground mb-8 max-w-md">Call, message, or fill the form — our team responds quickly and will help you book your free trial session.</p>
            <div className="space-y-3">
              <CTAButton variant="primary" href={`tel:${PHONE}`} icon={Phone} className="w-full sm:w-auto">Call {PHONE_DISPLAY}</CTAButton>
              <CTAButton variant="whatsapp" href={WHATSAPP} icon={MessageCircle} target="_blank" rel="noopener" className="w-full sm:w-auto">Chat on WhatsApp</CTAButton>
            </div>
            <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
              <h3 className="font-display text-lg font-bold mb-2">Zurich Fitness Rajajinagar</h3>
              <p className="text-sm text-muted-foreground">9th Main Rd, 4th Block, Rajajinagar,<br />Bengaluru, Karnataka 560010</p>
              <p className="text-sm text-muted-foreground mt-2">Open every day · 5 AM – 11 PM</p>
            </div>
          </div>
          <div className="reveal">
            <TrialForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            {/* Footer logo with visible name */}
            <a href="#top" className="inline-flex items-center gap-3 group mb-4">
              <img
                src={logo.url}
                alt="Zurich Fitness Rajajinagar"
                className="h-16 w-auto drop-shadow-[0_0_10px_oklch(0.64_0.22_32/0.5)] transition-all group-hover:drop-shadow-[0_0_18px_oklch(0.64_0.22_32/0.8)]"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold tracking-widest italic bg-gradient-to-b from-[oklch(0.82_0.22_42)] via-[oklch(0.70_0.24_34)] to-[oklch(0.50_0.22_26)] bg-clip-text text-transparent">
                  ZURICH FITNESS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">Rajajinagar</span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">Premium gym in Rajajinagar, Bengaluru. Rise to the challenge.</p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>9th Main Rd, 4th Block, Rajajinagar,<br />Bengaluru, Karnataka 560010</li>
              <li><a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-primary">WhatsApp: 8618889800</a></li>
              <li>Open 5 AM – 11 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground px-4">
          © {new Date().getFullYear()} Zurich Fitness Rajajinagar · Rise to the Challenge
        </div>
      </footer>

      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
