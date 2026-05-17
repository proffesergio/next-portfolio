'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseOpacity: number;
  phase: number;
  phaseSpeed: number;
  isNode: boolean;
  colorIdx: number;
}

const DARK_NODE_COLORS = [
  '#60a5fa',
  '#a78bfa',
  '#34d399',
  '#f472b6',
  '#fb923c',
  '#facc15',
] as const;

const LIGHT_NODE_COLORS = [
  '#3b82f6',
  '#7c3aed',
  '#10b981',
  '#ec4899',
  '#f97316',
  '#ca8a04',
] as const;

export const SpaceBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf: number;
    let particles: Particle[] = [];

    const isDark = () => document.documentElement.classList.contains('dark');

    const setSize = () => {
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    const build = () => {
      const count = Math.min(
        Math.max(Math.floor((canvas.width * canvas.height) / 8500), 40),
        110
      );
      particles = [];
      for (let i = 0; i < count; i++) {
        const isNode = i < 6;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isNode ? Math.random() * 1.5 + 2 : Math.random() * 1.2 + 0.4,
          baseOpacity: isNode ? 0.85 : Math.random() * 0.35 + 0.15,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.6 + 0.2,
          isNode,
          colorIdx: i,
        });
      }
    };

    const draw = (t: number) => {
      const dark = isDark();
      const { width: w, height: h } = canvas;
      const ts = t * 0.001;
      ctx.clearRect(0, 0, w, h);

      const lineBase = dark ? '99,179,237' : '99,102,241';
      const starBase = dark ? '200,215,240' : '100,116,139';
      const colors = dark ? DARK_NODE_COLORS : LIGHT_NODE_COLORS;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineBase},${(1 - d / 160) * (dark ? 0.18 : 0.12)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const color = colors[p.colorIdx % colors.length];

        if (p.isNode) {
          const grd = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 7
          );
          grd.addColorStop(0, color + '55');
          grd.addColorStop(1, color + '00');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 7, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = p.baseOpacity;
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          const op =
            p.baseOpacity *
            (0.65 + 0.35 * Math.sin(ts * p.phaseSpeed + p.phase));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${starBase},${op})`;
          ctx.fill();
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx += (w / 2 - p.x) * 0.000005;
        p.vy += (h / 2 - p.y) * 0.000005;

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 0.55) {
          p.vx *= 0.55 / spd;
          p.vy *= 0.55 / spd;
        }

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    setSize();
    build();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      setSize();
      build();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none', className)}
      aria-hidden="true"
    />
  );
};
