"use client";
import { motion } from "framer-motion";
import { Sparkles, Eye, BookOpen, Infinity as InfinityIcon, Flower2, Languages } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

const KRISHNA_IMG =
  "https://bhagavadgita.com/images/hero/bhagavad-gita-3x4-576x768.webp";

const FEATURE_ICONS = [Sparkles, Eye, BookOpen, InfinityIcon];

/* ═══ NAV ═══ */
export function Nav() {
  const { lang, toggle } = useLang();
  const tr = t[lang].nav;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-12 py-4 border-b border-gold/15 backdrop-blur-xl bg-void/75">
      <div className="flex items-center gap-3">
        <div className="text-3xl gradient-gold-soft animate-om-pulse leading-none">ॐ</div>
        <div>
          <div className="font-sans text-sm sm:text-base font-semibold tracking-widest text-gold-pale uppercase">
            {tr.brand}
          </div>
          <div className="font-serif italic text-xs text-moonlight/50 tracking-wide">
            {tr.tagline}
          </div>
        </div>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {tr.links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-sans text-[11px] tracking-widest uppercase text-moonlight/60 hover:text-gold transition"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        {/* Language toggle */}
        <button
          onClick={toggle}
          title={lang === "en" ? "Switch to Hindi" : "Switch to English"}
          className="flex items-center gap-1.5 font-sans text-[11px] tracking-widest uppercase px-3 py-2 border border-chakra/40 text-chakra hover:bg-chakra/10 rounded transition"
        >
          <Languages size={13} />
          {tr.langSwitch}
        </button>
        <a
          href="#chat"
          className="font-sans text-[11px] tracking-widest uppercase px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-void rounded transition"
        >
          {tr.cta}
        </a>
      </div>
    </nav>
  );
}

/* ═══ HERO ═══ */
export function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section className="min-h-[92vh] grid lg:grid-cols-[1fr_480px] items-center px-6 sm:px-12 lg:px-20 py-12 gap-12 relative overflow-hidden">
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-sans text-xs tracking-[0.42em] uppercase text-gold mb-6"
        >
          {tr.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display font-black leading-[1.05] text-[clamp(2.6rem,5vw,4.8rem)] gradient-gold mb-2"
        >
          {tr.headline[0]}<br />{tr.headline[1]}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="font-display text-chakra text-[clamp(1.1rem,2vw,1.6rem)] tracking-wide mb-7"
        >
          {tr.sub}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-3 mb-7"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
          <Flower2 size={16} className="text-gold" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
        </motion.div>
        <motion.blockquote
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 1 }}
          className="italic text-lg text-moonlight/75 max-w-xl border-l-2 border-gold/40 pl-5 leading-relaxed mb-10"
        >
          {tr.quote}
          <cite className="block not-italic text-xs text-gold tracking-widest mt-3">
            {tr.cite}
          </cite>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#chat"
            className="btn-divine text-void font-sans text-sm tracking-widest uppercase px-8 py-4 rounded font-bold inline-flex items-center gap-2"
          >
            <Sparkles size={16} /> {tr.cta1}
          </a>
          <a
            href="#wisdom"
            className="font-sans text-sm tracking-widest uppercase px-8 py-4 rounded border border-moonlight/25 text-moonlight hover:border-chakra hover:text-chakra transition inline-flex items-center"
          >
            {tr.cta2}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute w-[440px] h-[440px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.18),rgba(123,79,255,0.12)_40%,transparent_70%)] blur-3xl animate-halo-breathe" />
        <div className="relative z-10 w-[300px] sm:w-[360px] border border-gold/35 rounded-md overflow-hidden shadow-[0_0_60px_rgba(212,168,67,0.2),0_0_120px_rgba(123,79,255,0.12)]">
          <img
            src={KRISHNA_IMG}
            alt="Lord Krishna and Arjuna at Kurukshetra"
            className="w-full block saturate-[1.15] brightness-[0.92]"
          />
          <div className="absolute top-2 left-2 w-7 h-7 border-l-2 border-t-2 border-gold" />
          <div className="absolute bottom-2 right-2 w-7 h-7 border-r-2 border-b-2 border-gold" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-void/85 border border-gold/40 rounded text-[10px] tracking-widest uppercase text-gold backdrop-blur-md flex items-center gap-1.5">
            <BookOpen size={11} /> {tr.badge}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══ FEATURES ═══ */
export function Features() {
  const { lang } = useLang();
  const tr = t[lang].features;

  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-transparent via-nebula/40 to-transparent">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">{tr.label}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-gold-pale mt-3">{tr.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {tr.items.map((f, i) => {
          const Icon = FEATURE_ICONS[i];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-7 rounded-lg border border-gold/15 bg-cosmos/70 backdrop-blur-md text-center hover:border-gold/40 hover:-translate-y-1.5 transition-all"
            >
              <Icon className="text-gold mx-auto mb-4 drop-shadow-[0_0_10px_rgba(212,168,67,0.5)]" size={32} />
              <div className="font-sans text-sm tracking-wider uppercase text-gold mb-2">{f.title}</div>
              <p className="text-sm text-moonlight/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══ WISDOM ═══ */
const VERSE_SANSKRIT = [
  "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
  "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
  "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
  "न जायते म्रियते वा कदाचित्\nनायं भूत्वा भविता वा न भूयः।",
  "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
  "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
];

export function Wisdom() {
  const { lang } = useLang();
  const tr = t[lang].wisdom;

  return (
    <section id="wisdom" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">{tr.label}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-gold-pale mt-3 mb-2">{tr.title}</h2>
        <p className="text-moonlight/55 italic">{tr.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tr.verses.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="relative overflow-hidden p-7 rounded-lg border border-gold/15 bg-gradient-to-br from-cosmos/90 to-nebula/60 hover:border-gold/35 hover:-translate-y-1 transition-all group"
          >
            <div className="absolute top-3 right-4 font-display text-6xl font-black text-gold/[0.07] leading-none">
              {v.num}
            </div>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="font-sans text-[10px] tracking-widest uppercase text-gold mb-3">
              {tr.chapLabel(v.chap)}
            </div>
            <div className="font-serif italic text-moonlight whitespace-pre-line leading-relaxed mb-3">
              {VERSE_SANSKRIT[i]}
            </div>
            <div className="text-sm text-moonlight/60 leading-relaxed">{v.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══ HOW IT WORKS ═══ */
export function How() {
  const { lang } = useLang();
  const tr = t[lang].how;

  return (
    <section id="how" className="py-20 px-6 sm:px-12 bg-cosmos/40">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">{tr.label}</p>
        <h2 className="font-display text-3xl sm:text-4xl text-gold-pale mt-3">{tr.title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
        <div className="hidden lg:block absolute top-[1.4rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        {tr.steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center px-3 relative"
          >
            <div className="w-11 h-11 rounded-full border border-gold flex items-center justify-center font-sans text-sm text-gold mx-auto mb-4 bg-void/85 relative z-10">
              {s.num}
            </div>
            <div className="font-sans text-sm tracking-wider uppercase text-gold-pale mb-2">
              {s.title}
            </div>
            <p className="text-sm text-moonlight/55 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══ FOOTER ═══ */
export function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;

  return (
    <footer className="border-t border-gold/15 py-9 px-6 text-center bg-void/85">
      <div className="text-3xl gradient-gold-soft mb-2">ॐ</div>
      <p className="font-sans text-[10px] tracking-widest text-moonlight/35 uppercase">
        {tr.line1}
      </p>
      <p className="font-sans text-[10px] tracking-widest text-moonlight/20 mt-2">
        {tr.mantra}
      </p>
    </footer>
  );
}
