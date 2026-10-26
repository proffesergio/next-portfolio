'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import Image from 'next/image';

import { ImageModal } from '@/components/image-modal';
import { graphicDesignsData } from '@/lib/data';

export const GraphicDesign = ({
  item,
}: {
  item: (typeof graphicDesignsData)[number];
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.article
        className="project-card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button
          className="project-preview aspect-[1.4]"
          onClick={() => setOpen(true)}
          aria-label={`View ${item.title} full size`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          />
          <span className="preview-open">
            <Expand size={12} /> View design
          </span>
        </button>
        <div className="project-content">
          <span className="project-meta">{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </motion.article>
      <ImageModal
        isOpen={open}
        imageUrl={item.image}
        title={item.title}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
