'use client';

import { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';

import { Project } from '@/components/project';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { portfolioProjects } from '@/lib/project-data';

const filters = [
  'All work',
  'Web apps',
  'Commerce',
  'Community',
  'Client sites',
] as const;

export const Projects = () => {
  const { ref } = useSectionInView('Websites');
  const [filter, setFilter] = useState<string>('All work');
  const [query, setQuery] = useState('');
  const projects = portfolioProjects.filter(
    (project) =>
      (filter === 'All work' || project.category === filter) &&
      [project.title, project.description, ...project.technologies]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase())
  );

  return (
    <section ref={ref} id="websites" className="work-section">
      <div className="work-heading">
        <div>
          <span className="eyebrow text-violet-400">
            01 / Selected work & experiments
          </span>
          <h2>
            Built to be <span className="gradient-text">used.</span>
          </h2>
          <p>
            From everyday tools to full-stack platforms. A collection of ideas
            I’ve brought to the browser.
          </p>
        </div>
        <a
          href="https://github.com/proffesergio"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="work-toolbar">
        <div
          className="filter-list"
          role="group"
          aria-label="Filter web projects"
        >
          {filters.map((item) => (
            <button
              key={item}
              className="filter-button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === 'All work' && (
                <span className="ml-2 opacity-60">
                  {portfolioProjects.length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="project-search">
          <Search size={14} />
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            placeholder="Find a project or technology"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      {projects.length === 0 && (
        <div className="rounded-2xl border p-12 text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            No projects match that search.
          </p>
          <button
            className="outline-button"
            onClick={() => {
              setFilter('All work');
              setQuery('');
            }}
          >
            Show all projects
          </button>
        </div>
      )}
      <p className="project-count" role="status" aria-live="polite">
        Showing {projects.length} of {portfolioProjects.length} projects · Open
        a project for details and demo status.
      </p>
    </section>
  );
};
