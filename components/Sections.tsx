"use client";
import { motion } from "framer-motion";
import { Sparkles, Eye, BookOpen, Infinity as InfinityIcon, Flower2 } from "lucide-react";

const KRISHNA_IMG =
  "https://bhagavadgita.com/images/hero/bhagavad-gita-3x4-576x768.webp";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-12 py-4 border-b border-gold/15 backdrop-blur-xl bg-void/75">
      <div className="flex items-center gap-3">
        <div className="text-3xl gradient-gold-soft animate-om-pulse leading-none">ॐ</div>
        <div>
          <div className="font-sans text-sm sm:text-base font-semibold tracking-widest text-gold-pale uppercase">
            Bhagwat Geeta AI
          </div>
          <div className="font-serif italic text-xs text-moonlight/50 tracking-wide">
            Speak with the Divine
          </div>
        </div>
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {[
          ["Seek Guidance", "#chat"],
          ["Sacred Verses", "#wisdom"],
          ["How It Works", "#how"],
        ].map(([t, h]) => (
          <li key={h}>
            <a
              href={h}
              className="font-sans text-[11px] tracking-widest uppercase text-moonlight/60 hover:text-gold transition"
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#chat"
        className="font-sans text-[11px] tracking-widest uppercase px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-void rounded transition"
      >
        Begin Now
      </a>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="min-h-[92vh] grid lg:grid-cols-[1fr_480px] items-center px-6 sm:px-12 lg:px-20 py-12 gap-12 relative overflow-hidden">
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-sans text-xs tracking-[0.42em] uppercase text-gold mb-6"
        >
          ॐ नमो भगवते वासुदेवाय
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display font-black leading-[1.05] text-[clamp(2.6rem,5vw,4.8rem)] gradient-gold mb-2"
        >
          Bhagwat<br />Geeta AI
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="font-display text-chakra text-[clamp(1.1rem,2vw,1.6rem)] tracking-wide mb-7"
        >
          Speak Directly with Shri Krishna
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
          &ldquo;Whenever righteousness declines and unrighteousness rises, O Arjuna,
          I manifest myself — to protect the good, to destroy evil, to re-establish
          dharma, I am born age after age.&rdquo;
          <cite className="block not-italic text-xs text-gold tracking-widest mt-3">
            — Bhagavad Gita · Chapter 4, Verse 7–8
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
            <Sparkles size={16} /> Seek His Wisdom
          </a>
          <a
            href="#wisdom"
            className="font-sans text-sm tracking-widest uppercase px-8 py-4 rounded border border-moonlight/25 text-moonlight hover:border-chakra hover:text-chakra transition inline-flex items-center"
          >
            Read Sacred Verses
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
            <BookOpen size={11} /> Bhagavad Gita · Kurukshetra
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const FEATURES = [
  {
    icon: Sparkles,
    title: "RAG-Powered Wisdom",
    desc: "Every answer is rooted in the 700 verses of the Bhagavad Gita, retrieved with semantic precision from your n8n knowledge base.",
  },
  {
    icon: Eye,
    title: "Real-Life Guidance",
    desc: "Share your struggles — relationships, career, fear, grief, or purpose — and receive timeless counsel in Lord Krishna's divine voice.",
  },
  {
    icon: BookOpen,
    title: "Cited Shlokas",
    desc: "Every response references the original Sanskrit shloka and chapter, so the source of wisdom is always transparent and sacred.",
  },
  {
    icon: InfinityIcon,
    title: "Always Present",
    desc: "Day or night, the Divine presence is accessible. As Krishna told Arjuna — “I am ever present to those who have realised Me.”",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-transparent via-nebula/40 to-transparent">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">What Awaits You</p>
        <h2 className="font-display text-3xl sm:text-4xl text-gold-pale mt-3">
          The Divine Digital Ashram
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-7 rounded-lg border border-gold/15 bg-cosmos/70 backdrop-blur-md text-center hover:border-gold/40 hover:-translate-y-1.5 transition-all"
          >
            <f.icon className="text-gold mx-auto mb-4 drop-shadow-[0_0_10px_rgba(212,168,67,0.5)]" size={32} />
            <div className="font-sans text-sm tracking-wider uppercase text-gold mb-2">
              {f.title}
            </div>
            <p className="text-sm text-moonlight/65 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const VERSES = [
  {
    num: "II",
    chap: "Chapter 2 · Verse 47",
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    eng: "You have the right to perform your duties, but never to their fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.",
  },
  {
    num: "VI",
    chap: "Chapter 6 · Verse 5",
    sanskrit:
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    eng: "Elevate yourself through the power of your own mind, and do not degrade yourself — for the mind can be both your friend and your enemy.",
  },
  {
    num: "IX",
    chap: "Chapter 9 · Verse 22",
    sanskrit:
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    eng: "For those who worship Me with undivided devotion — I carry what they lack and preserve what they have.",
  },
  {
    num: "II",
    chap: "Chapter 2 · Verse 20",
    sanskrit: "न जायते म्रियते वा कदाचित्\nनायं भूत्वा भविता वा न भूयः।",
    eng: "The soul is never born, nor does it die. It is unborn, eternal, and primeval.",
  },
  {
    num: "IV",
    chap: "Chapter 4 · Verse 7–8",
    sanskrit:
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    eng: "Whenever righteousness declines and unrighteousness rises, I manifest myself — age after age.",
  },
  {
    num: "XVIII",
    chap: "Chapter 18 · Verse 66",
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    eng: "Abandon all varieties of dharma and simply surrender unto Me alone. I shall liberate you from all sinful reactions — do not fear.",
  },
];

export function Wisdom() {
  return (
    <section id="wisdom" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">Sacred Verses</p>
        <h2 className="font-display text-3xl sm:text-4xl text-gold-pale mt-3 mb-2">
          From the Battlefield to Your Life
        </h2>
        <p className="text-moonlight/55 italic">
          18 chapters. 700 shlokas. One eternal truth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VERSES.map((v, i) => (
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
              {v.chap}
            </div>
            <div className="font-serif italic text-moonlight whitespace-pre-line leading-relaxed mb-3">
              {v.sanskrit}
            </div>
            <div className="text-sm text-moonlight/60 leading-relaxed">{v.eng}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  { num: "I", title: "You Seek", desc: "Share your real-life problem openly — just as Arjuna spoke to Krishna on the eve of battle." },
  { num: "II", title: "AI Listens", desc: "Your query travels to the n8n RAG workflow, which semantically searches all 700 Bhagavad Gita shlokas." },
  { num: "III", title: "Krishna Speaks", desc: "The AI Agent — guided by a Shri Krishna voice system prompt — crafts a spiritually grounded answer." },
  { num: "IV", title: "You Receive", desc: "Wisdom arrives with cited verses, offering clarity, peace, and divine perspective." },
];

export function How() {
  return (
    <section id="how" className="py-20 px-6 sm:px-12 bg-cosmos/40">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">The Sacred Process</p>
        <h2 className="font-display text-3xl sm:text-4xl text-gold-pale mt-3">
          How the Divine Dialogue Works
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
        <div className="hidden lg:block absolute top-[1.4rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        {STEPS.map((s, i) => (
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

export function Footer() {
  return (
    <footer className="border-t border-gold/15 py-9 px-6 text-center bg-void/85">
      <div className="text-3xl gradient-gold-soft mb-2">ॐ</div>
      <p className="font-sans text-[10px] tracking-widest text-moonlight/35 uppercase">
        Bhagwat Geeta AI · Powered by Shri Krishna&apos;s Eternal Wisdom · Built with Devotion
      </p>
      <p className="font-sans text-[10px] tracking-widest text-moonlight/20 mt-2">
        हरे कृष्ण हरे कृष्ण · कृष्ण कृष्ण हरे हरे · हरे राम हरे राम · राम राम हरे हरे
      </p>
    </footer>
  );
}
