'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownToLine,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

import { useActiveSection } from '@/components/active-section-provider';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { ThemeToggle } from '@/components/theme-toggle';
import { links } from '@/lib/data';
import type { SectionName } from '@/lib/types';

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background';
const desktopSections = ['Websites', 'About', 'Experience'] as const;
const creativeSections = links.filter(
  ({ name }) => name === 'Static Designs' || name === 'Motion Graphics'
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const creativeRef = useRef<HTMLDetailsElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const creativeActive = creativeSections.some(
    ({ name }) => name === activeSection
  );

  const selectSection = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    if (creativeRef.current) creativeRef.current.open = false;
  };

  useEffect(() => {
    const closeCreative = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !creativeRef.current?.contains(event.target) &&
        creativeRef.current
      ) {
        creativeRef.current.open = false;
      }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeMobile = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener('pointerdown', closeCreative);
    desktop.addEventListener('change', closeMobile);
    return () => {
      document.removeEventListener('pointerdown', closeCreative);
      desktop.removeEventListener('change', closeMobile);
    };
  }, []);

  const navClass = (active: boolean) =>
    `${focusRing} relative flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${active ? 'bg-violet-500/10 text-violet-700 dark:text-violet-300' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`;

  return (
    <motion.header
      data-portfolio-header
      initial={reducedMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="border-border/70 bg-background/90 text-foreground sticky top-3 z-40 mx-auto my-3 w-[calc(100%-36px)] max-w-[1200px] rounded-2xl border px-3 py-2 shadow-lg shadow-violet-500/5 backdrop-blur-xl md:top-4 md:my-4 md:w-[calc(100%-64px)] md:px-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent"
      />
      <div className="flex min-w-0 items-center justify-between gap-2">
        <Link
          ref={brandRef}
          href={links[0].hash}
          aria-label="billal. — Home"
          aria-current={activeSection === 'Home' ? 'location' : undefined}
          onClick={() => selectSection('Home')}
          className={`${focusRing} group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl pr-2 text-xl font-extrabold tracking-tight`}
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 text-white shadow-md shadow-fuchsia-500/20 motion-safe:transition-transform motion-safe:group-hover:rotate-12">
            <Sparkles aria-hidden="true" className="size-4" />
          </span>
          <span>
            billal<span className="text-fuchsia-500">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {desktopSections.map((name) => {
              const link = links.find((item) => item.name === name)!;
              return (
                <li key={name}>
                  <Link
                    href={link.hash}
                    onClick={() => selectSection(name)}
                    aria-current={
                      activeSection === name ? 'location' : undefined
                    }
                    className={navClass(activeSection === name)}
                  >
                    {name === 'Websites' ? 'Work' : name}
                    {activeSection === name && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <details
                ref={creativeRef}
                className="group relative"
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node | null
                    )
                  )
                    event.currentTarget.open = false;
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    event.currentTarget.open = false;
                    event.currentTarget.querySelector('summary')?.focus();
                  }
                }}
              >
                <summary
                  className={`${navClass(creativeActive)} cursor-pointer list-none gap-1 [&::-webkit-details-marker]:hidden`}
                >
                  Creative{' '}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-3.5 motion-safe:transition-transform motion-safe:group-open:rotate-180"
                  />
                </summary>
                <ul className="border-border bg-background absolute right-0 top-full mt-3 w-52 rounded-2xl border p-2 shadow-xl shadow-violet-500/10">
                  {creativeSections.map(({ name, hash }) => (
                    <li key={name}>
                      <Link
                        href={hash}
                        className={navClass(activeSection === name)}
                        aria-current={
                          activeSection === name ? 'location' : undefined
                        }
                        onClick={() => {
                          selectSection(name);
                          creativeRef.current
                            ?.querySelector('summary')
                            ?.focus();
                        }}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={links.find(({ name }) => name === 'Contact')!.hash}
            onClick={() => selectSection('Contact')}
            aria-current={activeSection === 'Contact' ? 'location' : undefined}
            className={`${focusRing} hidden min-h-11 items-center gap-1 rounded-full bg-gradient-to-r from-violet-700 to-fuchsia-700 px-4 text-sm font-semibold text-white shadow-md shadow-violet-500/20 transition-shadow hover:shadow-lg hover:shadow-fuchsia-500/25 md:inline-flex`}
          >
            Let’s talk <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <ThemeToggle className="bg-background/70 shrink-0 border-violet-500/20 hover:border-fuchsia-500/50" />
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
                className="shrink-0 border-violet-500/20 md:hidden"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="text-foreground from-background via-background top-4 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-sm overflow-y-auto rounded-2xl border-violet-500/20 bg-gradient-to-br to-violet-500/10 p-5"
              onCloseAutoFocus={(event) => {
                if (window.matchMedia('(min-width: 768px)').matches) {
                  event.preventDefault();
                  brandRef.current?.focus();
                }
              }}
            >
              <DialogHeader className="pr-8 text-left">
                <DialogTitle className="text-xl tracking-tight">
                  Explore<span className="text-fuchsia-500">.</span>
                </DialogTitle>
                <DialogDescription>
                  Code, design & everything in motion.
                </DialogDescription>
              </DialogHeader>
              <nav aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {links.map(({ name, hash }, index) => (
                    <li key={name}>
                      <DialogClose asChild>
                        <Link
                          href={hash}
                          onClick={() => selectSection(name)}
                          aria-current={
                            activeSection === name ? 'location' : undefined
                          }
                          className={`${navClass(activeSection === name)} justify-between rounded-xl py-2`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className="text-muted-foreground font-mono text-xs"
                            >
                              0{index + 1}
                            </span>
                            {name}
                          </span>
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        </Link>
                      </DialogClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <DialogClose asChild>
                <a
                  href="/hossain_billal.pdf"
                  download
                  className={`${focusRing} border-border hover:bg-muted flex min-h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition-colors`}
                >
                  Download CV{' '}
                  <ArrowDownToLine aria-hidden="true" className="size-4" />
                </a>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.header>
  );
};
