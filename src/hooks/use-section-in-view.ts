'use client';

import { useCallback } from 'react';

import { useActiveSection } from '@/components/active-section-provider';
import type { SectionName } from '@/lib/types';

// Threshold remains accepted for existing callers. The provider tracks section
// tops centrally so even galleries taller than the viewport stay active.
export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  // Compatibility only: viewport-top tracking does not use visibility ratios.
  void threshold;
  const { registerSection } = useActiveSection();
  const ref = useCallback(
    (element: HTMLElement | null) => {
      registerSection(sectionName, element);
    },
    [registerSection, sectionName]
  );

  return { ref };
};
