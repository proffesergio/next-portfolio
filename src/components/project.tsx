'use client';

import { CSSProperties, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Expand, Github } from 'lucide-react';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/dialog';
import { PortfolioProject } from '@/lib/project-data';

export const Project = ({ project }: { project: PortfolioProject }) => {
  const [open, setOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const reducedMotion = useReducedMotion();
  const hasImage = project.image && !imageFailed;

  return (
    <>
      <motion.article
        layout={!reducedMotion}
        initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.4 }}
        whileHover={reducedMotion ? {} : { y: -5 }}
        className={`project-card ${project.featured ? 'featured' : ''}`}
        style={{ '--project-color': project.color } as CSSProperties}
        data-project={project.id}
      >
        <button
          className="project-preview"
          onClick={() => setOpen(true)}
          aria-label={`View ${project.title} project details`}
        >
          {hasImage ? (
            <Image
              src={project.image!}
              alt={`${project.title} website preview`}
              fill
              sizes={
                project.featured
                  ? '(max-width: 768px) 100vw, 660px'
                  : '(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 380px'
              }
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="project-artwork">
              <span>{project.category}</span>
              <strong>{project.title}</strong>
              <small>{project.technologies.slice(0, 3).join(' / ')}</small>
            </div>
          )}
          <span className="preview-open">
            <Expand size={12} /> Explore project
          </span>
        </button>
        <div className="project-content">
          <div className="project-meta">
            <span>{project.category}</span>
            <span
              className="project-status"
              data-live={project.status === 'Live site'}
            >
              {project.status}
            </span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="project-actions">
            {project.preview ? (
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.status === 'Live demo'
                  ? 'Visit demo'
                  : 'Visit website'}{' '}
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <button onClick={() => setOpen(true)}>
                About the project <ArrowUpRight size={14} />
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <Github size={14} />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </motion.article>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90dvh] w-[calc(100%-24px)] max-w-3xl overflow-y-auto rounded-2xl p-6 sm:p-8">
          <div className="pr-10">
            <p className="eyebrow mb-3 text-violet-400">
              {project.category} · {project.status}
            </p>
            <DialogTitle className="font-heading text-3xl tracking-tight">
              {project.title}
            </DialogTitle>
          </div>
          <DialogDescription className="leading-relaxed">
            {project.description}
          </DialogDescription>
          {hasImage && (
            <Image
              src={project.image!}
              alt={`${project.title} full preview`}
              width={1280}
              height={800}
              className="project-details-image"
            />
          )}
          <div className="project-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="project-notes">
            <strong className="text-foreground mb-1 block">
              About this showcase
            </strong>
            {project.notes}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.preview && (
              <a
                className="gradient-button"
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open {project.status === 'Live demo' ? 'demo' : 'website'}{' '}
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.github && (
              <a
                className="outline-button"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} /> View source
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
