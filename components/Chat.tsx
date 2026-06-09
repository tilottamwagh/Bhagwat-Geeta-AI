"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, Maximize2, Minimize2, Trash2, Settings, BookOpen, X,
} from "lucide-react";

const KRISHNA_IMG =
  "https://bhagavadgita.com/images/hero/bhagavad-gita-3x4-576x768.webp";

type Msg = {
  id: string;
  who: "krishna" | "user";
  text: string;
  verseRef?: string | null;
};

const SUGGESTIONS = [
  "I feel lost in life's purpose",
  "I'm afraid of failure and judgment",
  "How do I let go of attachment?",
  "My relationships are breaking apart",
];

const WELCOME: Msg = {
  id: "welcome",
  who: "krishna",
  text:
    "**ॐ नमः।** Dear soul, I am here — as I have always been, dwelling within you as the eternal witness.\n\nYou stand at your own Kurukshetra. Whatever dharma-sankat, confusion, grief, or fear weighs upon your heart — speak it freely. I listened to Arjuna without judgment for 18 chapters; I listen to you the same.\n\n**What troubles your soul today?**",
  verseRef: "Bhagavad Gita · Chapter 18:65",
};

function format(text: string) {
  // very small markdown: **bold**, *italic*, \n\n -> paragraph
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

function detectVerse(t: string): string | null {
  const m =
    t.match(/Chapter\s+\d+[,:]?\s*Verse\s+[\d–\-]+/i) ||
    t.match(/BG\s+\d+:\d+/i) ||
    t.match(/Gita\s+\d+\.\d+/i);
  return m ? m[0] : null;
}

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [sessionId] = useState(() => "session_" + Date.now());
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    document.body.classList.toggle("chat-fullscreen", fullscreen);
  }, [fullscreen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreen) setFullscreen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [fullscreen]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || sending) return;
    setShowSuggestions(false);
    setMessages((m) => [...m, { id: crypto.randomUUID(), who: "user", text }]);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    setSending(true);

    try {
      const res = await fetch("/api/krishna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: text,
          message: text,
          sessionId,
          query: text,
        }),
      });
      const data = await res.json();
      let reply: string;
      if (typeof data === "string") reply = data;
      else if (data.output) reply = data.output;
      else if (data.text) reply = data.text;
      else if (data.message) reply = data.message;
      else if (data.response) reply = data.response;
      else if (data.answer) reply = data.answer;
      else if (Array.isArray(data) && data[0])
        reply = data[0].output || data[0].text || data[0].message || JSON.stringify(data[0]);
      else reply = JSON.stringify(data);

      if (!reply?.trim()) {
        reply =
          "ॐ ... The divine channel is open, dear one, but no words came through. Please verify the n8n workflow is active.";
      }

      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          who: "krishna",
          text: reply,
          verseRef: detectVerse(reply),
        },
      ]);
    } catch (err) {
      const detail = err instanceof Error ? err.message : "Unknown error";
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          who: "krishna",
          text: `Dear one, a disturbance arose in our connection.\n\n_Error: ${detail}_`,
          verseRef: "Connection Issue",
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const clear = () => {
    setMessages([{ ...WELCOME, id: "welcome-" + Date.now() }]);
    setShowSuggestions(true);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const autoResize = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  };

  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 z-[9999] flex flex-col bg-[rgba(8,5,22,0.97)] backdrop-blur-2xl"
          : "w-full max-w-6xl mx-auto rounded-2xl border border-gold/30 bg-[rgba(8,5,22,0.93)] backdrop-blur-2xl shadow-[0_0_90px_rgba(123,79,255,0.15),0_0_45px_rgba(212,168,67,0.10)] flex flex-col overflow-hidden"
      }
    >
      {/* TOP BAR */}
      <div className="flex items-center gap-3 px-5 sm:px-8 py-4 border-b border-gold/15 bg-[rgba(3,1,10,0.65)]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-[0_0_22px_rgba(212,168,67,0.45)] flex-shrink-0">
          <img
            src={KRISHNA_IMG}
            alt="Shri Krishna"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-sans text-sm sm:text-base font-semibold text-gold-pale truncate">
            Shri Krishna — The Supreme Guide
          </div>
          <div className="flex items-center gap-1.5 text-xs text-tulsi mt-0.5">
            <span className="w-2 h-2 rounded-full bg-tulsi animate-blink" />
            <span>Omnipresent · Always listening</span>
          </div>
        </div>
        <div className="flex gap-1.5">
          <IconBtn onClick={() => setFullscreen((v) => !v)} title="Toggle full-screen">
            {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </IconBtn>
          <IconBtn onClick={clear} title="Clear conversation">
            <Trash2 size={16} />
          </IconBtn>
          {fullscreen && (
            <IconBtn onClick={() => setFullscreen(false)} title="Close">
              <X size={16} />
            </IconBtn>
          )}
        </div>
      </div>

      {/* MESSAGES */}
      <div
        ref={scrollRef}
        className={
          fullscreen
            ? "flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col gap-5"
            : "overflow-y-auto p-5 sm:p-7 flex flex-col gap-5 min-h-[60vh] max-h-[72vh]"
        }
      >
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <MessageBubble key={m.id} msg={m} fullscreen={fullscreen} />
          ))}
        </AnimatePresence>

        {sending && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <Avatar krishna />
            <div className="px-4 py-3 rounded-r-xl rounded-bl-xl bg-nebula/80 border border-gold/20 border-l-2 border-l-gold flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full bg-gold animate-dot-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* SUGGESTIONS */}
      {showSuggestions && (
        <div className="px-5 sm:px-8 py-3 border-t border-gold/10 flex gap-2 flex-wrap">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-sm italic font-serif text-moonlight/70 px-3.5 py-1.5 rounded-full border border-gold/20 hover:border-gold hover:text-gold-pale hover:bg-gold/5 transition"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* INPUT */}
      <div className="px-4 sm:px-6 py-4 border-t border-gold/15 bg-[rgba(3,1,10,0.55)] flex gap-3 items-end">
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            autoResize(e.target);
          }}
          onKeyDown={handleKey}
          placeholder="Pour your heart out... He is listening 🙏"
          className="flex-1 px-4 py-3 rounded-lg bg-nebula/80 border border-gold/25 focus:border-gold/55 outline-none text-moonlight font-serif text-base resize-none min-h-[52px] max-h-[160px] placeholder:text-moonlight/30 placeholder:italic transition"
        />
        <button
          onClick={() => send()}
          disabled={sending || !input.trim()}
          className="w-13 h-13 px-4 rounded-lg btn-divine text-void disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:animate-none flex items-center justify-center flex-shrink-0"
          title="Send"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

function IconBtn({
  onClick, title, children,
}: { onClick: () => void; title: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-9 h-9 rounded-full border border-gold/25 text-moonlight/55 hover:border-gold hover:text-gold flex items-center justify-center transition"
    >
      {children}
    </button>
  );
}

function Avatar({ krishna }: { krishna?: boolean }) {
  if (krishna) {
    return (
      <div className="w-9 h-9 rounded-full overflow-hidden border border-gold/35 flex-shrink-0 mt-0.5 bg-gradient-to-br from-[#0a4a3a] to-[#1a8c6e]">
        <img
          src={KRISHNA_IMG}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-chakra/20 border border-chakra/40 flex items-center justify-center text-base flex-shrink-0 mt-0.5">
      🙏
    </div>
  );
}

function MessageBubble({ msg, fullscreen }: { msg: Msg; fullscreen: boolean }) {
  const isUser = msg.who === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse self-end" : ""} ${
        fullscreen ? "max-w-[78%]" : "max-w-[92%]"
      }`}
    >
      <Avatar krishna={!isUser} />
      <div className="flex-1 min-w-0">
        <div
          className={`font-sans text-[11px] tracking-widest mb-1 ${
            isUser ? "text-chakra/90 text-right" : "text-gold/80"
          }`}
        >
          {isUser ? "You" : "Shri Krishna"}
        </div>
        <div
          className={
            isUser
              ? "px-4 py-3 rounded-l-xl rounded-br-xl bg-chakra/15 border border-chakra/30 text-moonlight leading-relaxed"
              : "px-4 py-3 rounded-r-xl rounded-bl-xl bg-nebula/80 border border-gold/20 border-l-2 border-l-gold text-moonlight leading-relaxed"
          }
          dangerouslySetInnerHTML={{ __html: format(msg.text) }}
        />
        {msg.verseRef && (
          <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 text-[10px] tracking-widest text-tulsi border border-tulsi/30 rounded">
            <BookOpen size={11} /> {msg.verseRef.toUpperCase()}
          </div>
        )}
      </div>
    </motion.div>
  );
}
