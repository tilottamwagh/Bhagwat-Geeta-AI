"use client";
import { useEffect, useRef } from "react";

export default function CosmosCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, t = 0, raf = 0;
    type Star = { x: number; y: number; r: number; a: number; speed: number; twinkle: number };
    type Blob = { x: number; y: number; r: number; col: string; a: number; dx: number; dy: number };
    let stars: Star[] = [];
    let blobs: Blob[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const initStars = () => {
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random() * 0.8 + 0.15,
        speed: Math.random() * 0.25 + 0.04,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };
    const initBlobs = () => {
      blobs = Array.from({ length: 28 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 70 + 18,
        col: Math.random() > 0.5 ? "rgba(123,79,255," : "rgba(212,168,67,",
        a: Math.random() * 0.038 + 0.008,
        dx: (Math.random() - 0.5) * 0.18,
        dy: (Math.random() - 0.5) * 0.18,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.01;
      blobs.forEach((b) => {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.col + b.a + ")");
        g.addColorStop(1, b.col + "0)");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r) b.x = W + b.r;
        if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r;
        if (b.y > H + b.r) b.y = -b.r;
      });
      stars.forEach((s) => {
        const tw = 0.35 + 0.65 * Math.sin(t * s.speed * 4 + s.twinkle);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250,234,176,${s.a * tw})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };

    resize();
    initStars();
    initBlobs();
    draw();
    const onResize = () => {
      resize();
      initStars();
      initBlobs();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
