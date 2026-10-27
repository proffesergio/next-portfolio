import { MessageCircle } from 'lucide-react';

import { socialLinks } from '@/lib/social-links';

export const WhatsAppChat = () => (
  <a
    href={socialLinks.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-chat"
    aria-label="Chat with Billal on WhatsApp (opens in a new tab)"
  >
    <MessageCircle size={22} aria-hidden="true" />
    <span>Chat on WhatsApp</span>
  </a>
);
