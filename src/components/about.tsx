'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clapperboard, Code2, Palette } from 'lucide-react';

import { useSectionInView } from '@/hooks/use-section-in-view';

const capabilities = [
  {
    icon: Code2,
    title: 'Code that solves something',
    description:
      'Next.js, React, TypeScript, Python, Django, and Node.js. From a useful interface to the systems behind it.',
  },
  {
    icon: Palette,
    title: 'Design with a point of view',
    description:
      'Brand identities, digital experiences, and print design, shaped in Figma, Illustrator, and Photoshop.',
  },
  {
    icon: Clapperboard,
    title: 'Ideas in motion',
    description:
      'Animation, editing, and visual storytelling with After Effects and Premiere Pro.',
  },
];

export const About = () => {
  const { ref } = useSectionInView('About');
  return (
    <section ref={ref} id="about" className="about-section">
      <div className="about-copy">
        <span className="eyebrow text-violet-400">
          02 / The person behind the pixels
        </span>
        <h2>
          Curious mind.
          <br />
          <span className="gradient-text">Many mediums.</span>
        </h2>
        <p>
          I’m Billal, a full-stack developer and multidisciplinary designer
          based in Dhaka, Bangladesh. I like making complicated things feel
          simple, whether that’s a web application, a visual identity, or a
          piece of motion design.
        </p>
        <p>
          My work spans commerce, community platforms, everyday tools, and
          publication design. The common thread is a love of solving problems
          and seeing an idea become something people can use.
        </p>
        <a href="#contact" className="outline-button mt-3">
          Have something in mind? <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="pt-3">
        {capabilities.map(({ icon: Icon, title, description }, index) => (
          <motion.div
            key={title}
            className="capability-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <Icon size={22} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
