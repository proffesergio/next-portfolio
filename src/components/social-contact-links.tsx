import { ArrowUpRight, Facebook, MessageCircle } from 'lucide-react';

import { socialLinks } from '@/lib/social-links';

export const SocialContactLinks = ({
  compact = false,
}: {
  compact?: boolean;
}) => (
  <>
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={compact ? undefined : 'gradient-button'}
    >
      <MessageCircle size={16} aria-hidden="true" />
      {compact ? 'WhatsApp' : 'Chat on WhatsApp'}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
    <a
      href={socialLinks.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className={compact ? undefined : 'outline-button'}
    >
      <Facebook size={16} aria-hidden="true" />
      {compact ? 'Facebook' : 'Find me on Facebook'}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  </>
);
