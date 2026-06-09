import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, EB_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhagwat Geeta AI — Speak with Shri Krishna",
  description:
    "Seek timeless wisdom from the Bhagavad Gita. Speak directly with Shri Krishna through an AI guided by all 700 sacred shlokas.",
  keywords: ["Bhagavad Gita", "Krishna", "AI", "spiritual guidance", "RAG", "Sanskrit", "dharma"],
  openGraph: {
    title: "Bhagwat Geeta AI — Speak with Shri Krishna",
    description: "Receive timeless counsel rooted in the 700 verses of the Bhagavad Gita.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${ebGaramond.variable}`}
    >
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
