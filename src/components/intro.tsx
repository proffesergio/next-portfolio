'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SpaceBackground } from '@/components/space-background';
import { useSectionInView } from '@/hooks/use-section-in-view';

const ROLES = [
  'Web Developer',
  'App Developer',
  'Graphic Designer',
  'Motion Editor',
  'Digital Marketer',
  'Publishing Expert',
] as const;

const STATS = [
  { value: '5+', label: 'Years Exp.' },
  { value: '30+', label: 'Projects' },
  { value: '6', label: 'Domains' },
] as const;

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen w-full scroll-mt-96 flex-col items-center justify-center overflow-hidden text-center"
    >
      <SpaceBackground className="absolute inset-0 size-full" />

      <div className="from-background/80 pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent" />
      <div className="to-background pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-7 px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="#contact"
            className="border-border bg-background/60 hover:bg-background/80 flex items-center gap-2.5 rounded-full border px-4 py-1.5 backdrop-blur-sm transition-colors"
          >
            <span className="relative flex size-2">
              <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative flex size-2 rounded-full bg-green-400" />
            </span>
            <span className="font-mono text-sm">Available for work</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.2em]">
            Hi, I&#39;m
          </p>
          <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Billal{' '}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Hossain
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="flex h-10 items-center gap-2 font-mono text-xl font-semibold md:text-2xl"
        >
          <span className="select-none text-blue-500 dark:text-blue-400">
            {'<'}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
            >
              {ROLES[roleIdx]}
            </motion.span>
          </AnimatePresence>
          <span className="select-none text-blue-500 dark:text-blue-400">
            {'/>'}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground max-w-lg text-base leading-relaxed"
        >
          A multidisciplinary digital creator based in Bangladesh — crafting
          modern web experiences, mobile apps, brand identities, motion content,
          and publication-ready academic work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center"
        >
          {STATS.map(({ value, label }, i) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center px-6">
                <span className="font-heading text-3xl font-extrabold">
                  {value}
                </span>
                <span className="text-muted-foreground text-xs">{label}</span>
              </div>
              {i < STATS.length - 1 && <div className="bg-border h-8 w-px" />}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <Button asChild size="lg">
            <Link href="#contact">
              Get in touch <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hidden sm:flex"
            asChild
          >
            <a href="/hossain_billal.pdf" download>
              Download CV <Icons.download className="ml-2 size-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/hossainbillal"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://github.com/proffesergio"
              aria-label="GitHub"
              target="_blank"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-2 flex flex-col items-center gap-1"
        >
          <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icons.chevronDown className="text-muted-foreground size-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
