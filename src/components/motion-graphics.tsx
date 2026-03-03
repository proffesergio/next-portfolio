'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { MotionGraphic } from '@/components/motion-graphic';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { motionGraphicsData } from '@/lib/data';

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

const allCategories = [
  'All',
  ...Array.from(new Set(motionGraphicsData.map((item) => item.category))),
];

export const MotionGraphics = () => {
  const { ref } = useSectionInView('Motion Graphics');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? motionGraphicsData
      : motionGraphicsData.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={ref}
      id="motion-graphics"
      className="my-16 scroll-mt-28 md:mb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Motion Graphics & Animation"
          content="Dynamic animations and video content showcasing movement and transitions."
        />
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
          >
            {activeCategory === category && (
              <motion.span
                layoutId="activeMgFilter"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {category}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Filterable Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {filteredItems.map((item, index) => (
            <MotionGraphic key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
