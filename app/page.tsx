"use client";
import CosmosCanvas from "@/components/CosmosCanvas";
import Chat from "@/components/Chat";
import { Nav, Hero, Features, Wisdom, How, Footer } from "@/components/Sections";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/translations";

export default function Home() {
  const { lang } = useLang();
  const tr = t[lang].chatSection;

  return (
    <>
      <CosmosCanvas />
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.055]"
        style={{
          backgroundImage: "url('https://bhagavadgita.com/bg-verses-fixed.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px auto",
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />
      <div className="relative z-[2] flex flex-col min-h-screen">
        <Nav />
        <Hero />
        <Features />
        <section
          id="chat"
          className="py-16 px-4 sm:px-6 flex flex-col items-center gap-6"
        >
          <p className="font-sans text-xs tracking-[0.42em] uppercase text-gold">
            {tr.label}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-gold-pale text-center">
            {tr.title}
          </h2>
          <p className="text-moonlight/60 italic text-center max-w-xl leading-relaxed">
            {tr.body}
          </p>
          <Chat />
        </section>
        <Wisdom />
        <How />
        <Footer />
      </div>
    </>
  );
}
