'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

import { VideoModal } from '@/components/video-modal';
import { motionGraphicsData } from '@/lib/data';

export const MotionGraphic = ({
  item,
}: {
  item: (typeof motionGraphicsData)[number];
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
          className="project-preview"
          onClick={() => setOpen(true)}
          aria-label={`Play ${item.title}`}
        >
          <video
            src={item.video + '#t=0.1'}
            preload="metadata"
            muted
            playsInline
            className="size-full object-cover"
            aria-hidden="true"
          />
          <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/15">
            <span className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm">
              <Play size={20} fill="currentColor" />
            </span>
          </span>
          <span className="preview-open">Watch motion</span>
        </button>
        <div className="project-content">
          <span className="project-meta">{item.category}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="project-tags">
            {item.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </motion.article>
      <VideoModal
        isOpen={open}
        videoUrl={item.video}
        title={item.title}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
