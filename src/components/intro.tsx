'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Github,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SpaceBackground } from '@/components/space-background';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const reducedMotion = useReducedMotion();

  return (
    <section ref={ref} id="home" className="hero-section">
      <SpaceBackground className="absolute inset-0 size-full opacity-80" />
      <div className="hero-aura" aria-hidden="true" />
      <div className="site-shell relative z-10">
        <div className="hero-topline">
          <span className="eyebrow">
            <span className="status-dot" /> Available for freelance work
          </span>
          <span className="text-muted-foreground hidden items-center gap-2 text-xs sm:flex">
            <MapPin size={13} /> Dhaka, Bangladesh · Working everywhere
          </span>
        </div>
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted-foreground mb-5 font-mono text-sm">
              Hey, I’m Billal Hossain{' '}
              <span className="text-violet-400">↗</span>
            </p>
            <h1 className="hero-title">
              A little code.
              <br />A lot of <span className="gradient-text">possibility.</span>
            </h1>
            <p className="hero-description">
              Developer by logic. Designer by instinct. I turn ideas into useful
              web apps, thoughtful identities, and things that move.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#websites" className="gradient-button">
                Explore my work <ArrowDown size={17} />
              </Link>
              <Link href="#contact" className="outline-button">
                Let’s collaborate <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/proffesergio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/hossainbillal"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
              <a href="/hossain_billal.pdf" download>
                Download CV <ArrowDown size={12} />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-collage"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="collage-orbit" aria-hidden="true" />
            <motion.div
              className="collage-spark"
              aria-hidden="true"
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <Asterisk strokeWidth={1} />
            </motion.div>
            <motion.a
              href="#websites"
              className="collage-card collage-back"
              animate={
                reducedMotion ? {} : { y: [0, -9, 0], rotate: [7, 5, 7] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              aria-label="Explore EarnLoop and other web projects"
            >
              <div className="collage-browser">
                <span />
                <span />
                <span />
                <span className="ml-auto font-mono text-[9px]">
                  earnloop-kappa.vercel.app ↗
                </span>
              </div>
              <Image
                src="/images/earnloop.png"
                alt="EarnLoop opportunity discovery website"
                width={600}
                height={340}
                priority
                className="collage-image"
              />
              <div className="collage-caption">
                <span>EarnLoop</span>
                <ArrowUpRight size={15} />
              </div>
            </motion.a>
            <motion.a
              href="#websites"
              className="collage-card collage-front"
              animate={
                reducedMotion ? {} : { y: [0, 10, 0], rotate: [-7, -5, -7] }
              }
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              aria-label="Explore BornoLab and other web projects"
            >
              <div className="collage-browser">
                <span />
                <span />
                <span />
                <span className="ml-auto font-mono text-[9px]">
                  bornolab.vercel.app ↗
                </span>
              </div>
              <Image
                src="/images/bornolab.png"
                alt="BornoLab Bangla typography and document tools"
                width={600}
                height={340}
                priority
                className="collage-image"
              />
              <div className="collage-caption">
                <span>BornoLab</span>
                <span className="text-muted-foreground text-xs font-normal">
                  Built for everyday creativity
                </span>
              </div>
            </motion.a>
            <div className="collage-sticker">
              <span>Made with</span>
              <strong>curiosity.</strong>
              <ArrowUpRight size={20} />
            </div>
            <span className="collage-note">
              from the idea → to the internet
            </span>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <span>
            DEVELOPMENT <Asterisk size={16} /> DESIGN <Asterisk size={16} />{' '}
            MOTION
          </span>
          <a href="#websites" aria-label="Scroll to selected work">
            Scroll to discover <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
