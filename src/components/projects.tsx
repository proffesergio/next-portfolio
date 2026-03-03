'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const Projects = () => {
  const { ref } = useSectionInView('Websites');

  return (
    <section ref={ref} id="websites" className="my-16 scroll-mt-28 md:mb-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="Web Projects"
          content="Websites and web apps I built. Each one containing its own case study."
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projectsData.map((project, index) => (
          <Project
            key={`${project.title}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};
