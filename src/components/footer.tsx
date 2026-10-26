import { ArrowUpRight } from 'lucide-react';

export const Footer = () => (
  <footer className="site-shell portfolio-footer">
    <a
      href="#home"
      className="font-heading text-2xl font-extrabold tracking-tight"
    >
      billal<span className="text-violet-400">.</span>
    </a>
    <p>© {new Date().getFullYear()} Billal Hossain. Made with curiosity.</p>
    <a
      href="https://github.com/proffesergio"
      target="_blank"
      rel="noopener noreferrer"
    >
      Find me on GitHub <ArrowUpRight size={14} />
    </a>
  </footer>
);
