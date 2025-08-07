"use client";
import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }

    resizeCanvas();

    const SEGMENTS = 8;
    const BUBBLE_RADIUS = Math.min(width, height) * 0.16;
    const SPEED = 0.0002; // lower = slower movement
    let time = 0;

    interface Bubble {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      alphaDir: number;
    }

    const bubbles: Bubble[] = Array.from({ length: SEGMENTS }, () => {
      const r = BUBBLE_RADIUS * (0.5 + Math.random() * 1.4);
      const x = r + Math.random() * (width - 2 * r);
      const y = r + Math.random() * (height - 2 * r);
      const angle = Math.random() * Math.PI * 2;
      const speed = SPEED * (0.7 + Math.random() * 0.6);
      const vx = Math.cos(angle) * speed * width;
      const vy = Math.sin(angle) * speed * height;
      return {
        x,
        y,
        vx,
        vy,
        r,
        alpha: Math.random() * 0.7 + 0.3,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      };
    });

    function animateBubbles() {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((bubble, i) => {
        // move
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        // bounce off edges
        if (bubble.x < bubble.r) {
          bubble.x = bubble.r;
          bubble.vx *= -1;
        } else if (bubble.x > width - bubble.r) {
          bubble.x = width - bubble.r;
          bubble.vx *= -1;
        }

        if (bubble.y < bubble.r) {
          bubble.y = bubble.r;
          bubble.vy *= -1;
        } else if (bubble.y > height - bubble.r) {
          bubble.y = height - bubble.r;
          bubble.vy *= -1;
        }

        // fade in/out
        bubble.alpha +=
          bubble.alphaDir * 0.0015 * (0.7 + Math.sin(time * 0.01 + i));
        if (bubble.alpha > 1) {
          bubble.alpha = 1;
          bubble.alphaDir = -1;
        } else if (bubble.alpha < 0.18) {
          bubble.alpha = 0.18;
          bubble.alphaDir = 1;
        }

        // expand
        const breathing = 0.1 + 0.08 * Math.sin(time * 0.02 + i * 0.7);
        const radius = bubble.r * (1 + breathing);

        // colour change
        const hue = 210 + 10 * Math.sin(time * 0.01 + i * 0.5);
        const sat = 40 + 10 * Math.cos(time * 0.02 + i * 0.3);
        const light = 60 + 10 * Math.sin(time * 0.015 + i * 0.8);

        // draw
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, radius, 0, 2 * Math.PI);

        // fill
        const grad = ctx.createRadialGradient(
          bubble.x - radius * 0.3,
          bubble.y - radius * 0.3,
          radius * 0.1,
          bubble.x,
          bubble.y,
          radius,
        );
        grad.addColorStop(0, `rgba(255,255,255,${0.25 * bubble.alpha})`);
        grad.addColorStop(
          0.25,
          `hsl(${hue},${sat}%,${light + 10}%,${0.45 * bubble.alpha})`,
        );
        grad.addColorStop(
          0.7,
          `hsl(${hue},${sat}%,${light}%,${0.25 * bubble.alpha})`,
        );
        grad.addColorStop(1, `hsl(${hue},${sat}%,${light - 18}%,0)`);

        ctx.fillStyle = grad;
        ctx.globalAlpha = bubble.alpha;
        ctx.shadowColor = `hsl(${hue}, 70%, 40%)`;
        ctx.shadowBlur = 18 * (0.7 + 0.3 * Math.sin(time * 0.02 + i));
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      time += 1;
      requestAnimationFrame(animateBubbles);
    }

    animateBubbles();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute top-0 left-0 z-[-10] block h-full w-full"
      style={{ inset: 0 }}
    />
  );
}
