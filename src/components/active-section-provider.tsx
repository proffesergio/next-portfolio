'use client';

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { links } from '@/lib/data';
import type { SectionName } from '@/lib/types';

type TActiveSectionContext = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  registerSection: (name: SectionName, element: HTMLElement | null) => void;
};

export const ActiveSectionContext = createContext<TActiveSectionContext | null>(
  null
);

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const sections = useRef(new Map<SectionName, HTMLElement>());
  const lastClick = useRef(0);
  const scheduleUpdate = useRef<() => void>(() => {});

  const registerSection = useCallback(
    (name: SectionName, element: HTMLElement | null) => {
      if (element) sections.current.set(name, element);
      else sections.current.delete(name);
      scheduleUpdate.current();
    },
    []
  );

  useEffect(() => {
    lastClick.current = timeOfLastClick;
    scheduleUpdate.current();
  }, [timeOfLastClick]);

  useEffect(() => {
    let frame = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      frame = 0;
      clearTimeout(resumeTimer);
      // Keep a clicked destination selected while smooth scrolling past others.
      const remaining = 1000 - (Date.now() - lastClick.current);
      if (remaining > 0) {
        resumeTimer = setTimeout(schedule, remaining + 20);
        return;
      }

      const headerBottom =
        document
          .querySelector('[data-portfolio-header]')
          ?.getBoundingClientRect().bottom ?? 0;
      const readingLine = Math.min(
        Math.max(headerBottom + 24, 112),
        window.innerHeight * 0.35
      );
      const available = links.flatMap(({ name, hash }) => {
        const element =
          sections.current.get(name) ?? document.getElementById(hash.slice(1));
        if (!element) return [];
        const rect = element.getBoundingClientRect();
        return rect.height > 0 ? [{ name, rect }] : [];
      });
      available.sort((a, b) => a.rect.top - b.rect.top);
      let current = available[0];
      for (const section of available) {
        if (section.rect.top <= readingLine) current = section;
      }
      // A short final section may never reach the reading line.
      const last = available[available.length - 1];
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && last && last.rect.top < window.innerHeight)
        current = last;
      if (current) setActiveSection(current.name);
    };

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    const syncHash = () => {
      const destination = links.find(
        ({ hash }) => hash === window.location.hash
      );
      if (destination) {
        setActiveSection(destination.name);
        lastClick.current = Date.now();
      } else {
        lastClick.current = 0;
      }
      schedule();
    };

    scheduleUpdate.current = schedule;
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    // Covers image/font loading and expanded galleries without per-section listeners.
    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(schedule);
    observer?.observe(document.body);
    syncHash();

    return () => {
      window.cancelAnimationFrame(frame);
      clearTimeout(resumeTimer);
      observer?.disconnect();
      scheduleUpdate.current = () => {};
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        registerSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider'
    );
  }
  return context;
};
