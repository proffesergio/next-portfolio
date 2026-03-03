'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import Image from 'next/image';

import { ImageModal } from '@/components/image-modal';
import { graphicDesignsData } from '@/lib/data';

interface GraphicDesignProps {
  item: (typeof graphicDesignsData)[number];
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const GraphicDesign = ({ item }: GraphicDesignProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        variants={itemVariants}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-950 shadow-lg transition-all duration-300 hover:border-rose-600 hover:shadow-2xl hover:shadow-rose-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-800">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/50 to-transparent"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/30"
            >
              <Eye className="size-5" />
              <span>View Full Size</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-between space-y-3 p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-rose-400">
              {item.title}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-400 transition-colors group-hover:text-gray-300">
              {item.description}
            </p>
          </div>

          {/* Category Badge */}
          <span className="w-fit rounded-full border border-rose-500/30 bg-gradient-to-r from-rose-500/20 to-pink-500/20 px-3 py-1 text-xs font-medium text-rose-300 backdrop-blur-sm">
            {item.category}
          </span>
        </div>

        {/* Decorative Border Glow */}
        <div className="absolute inset-0 -z-10 origin-center rounded-xl bg-gradient-to-r from-rose-500/0 via-rose-500/0 to-pink-500/0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-10" />
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={item.image}
        title={item.title}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
