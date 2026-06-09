# 🪷 Bhagwat Geeta AI — Next.js Edition

Speak with Shri Krishna through a RAG-powered AI grounded in all 700 verses of the Bhagavad Gita. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Deploys to **Coolify** (or any Docker host) in one click.

---

## ✨ Tech Stack

| Layer       | Choice                                                   |
| ----------- | -------------------------------------------------------- |
| Framework   | **Next.js 15** (App Router) + React 19                   |
| Language    | **TypeScript** (strict)                                  |
| Styling     | **Tailwind CSS** with custom divine theme                |
| Animations  | **Framer Motion**                                        |
| Icons       | **lucide-react**                                         |
| Fonts       | `next/font/google` — Cinzel Decorative, Cinzel, EB Garamond |
| Backend     | Next API route → proxies to your **n8n** webhook         |
| Container   | Multi-stage Dockerfile, `output: 'standalone'`           |

The Next API route at `/api/krishna` proxies your n8n webhook server-side — **no more CORS headaches** in the browser.

---

## 🚀 Local development

```bash
cp .env.example .env.local
# edit N8N_WEBHOOK_URL if needed
npm install
npm run dev
```

Visit http://localhost:3000

---

## 🐳 Deploy with Coolify

1. **Push this project to a Git repo** (GitHub / GitLab).
2. In Coolify → **+ New Resource** → **Public Repository** (or private with auth).
3. Set **Build Pack** = `Dockerfile`.
4. Set **Port** = `3000`.
5. Add environment variable:
   - `N8N_WEBHOOK_URL` = `https://n8n.tilottamwagh.com/webhook/krishna`
6. (Optional) attach your domain — Coolify auto-issues a Let's Encrypt cert.
7. **Deploy**. Coolify will build the Dockerfile, run the standalone Next server, and serve on port 3000 behind Traefik.

That's it — `https://your-domain.com` will serve the app, and chat requests go through `/api/krishna` to n8n.

---

## 🐳 Deploy with plain Docker

```bash
docker build -t bhagwat-geeta-ai .
docker run -d -p 3000:3000 \
  -e N8N_WEBHOOK_URL=https://n8n.tilottamwagh.com/webhook/krishna \
  --name geeta bhagwat-geeta-ai
```

---

## 📁 Project structure

```
bhagwat-geeta-ai/
├── app/
│   ├── api/krishna/route.ts   # Server proxy to n8n
│   ├── globals.css
│   ├── layout.tsx             # Fonts + metadata
│   └── page.tsx               # Home page composition
├── components/
│   ├── Chat.tsx               # Chat UI (with fullscreen toggle)
│   ├── CosmosCanvas.tsx       # Animated star canvas
│   └── Sections.tsx           # Nav, Hero, Features, Wisdom, How, Footer
├── Dockerfile                 # Multi-stage, standalone Next.js
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠 Customisation

- **Change Krishna's webhook** → set `N8N_WEBHOOK_URL` env var.
- **Tweak colors** → edit `tailwind.config.ts` (`colors.gold`, `colors.chakra`, etc.).
- **Add verses** → edit `VERSES` in `components/Sections.tsx`.
- **Change suggested prompts** → edit `SUGGESTIONS` in `components/Chat.tsx`.

---

## 🙏 License

Built with devotion. Use freely for spiritual and educational purposes.

> सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज  
> — Bhagavad Gita 18.66
