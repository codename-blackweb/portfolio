"use client";

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const filters = [
  'All',
  'Systems',
  'Intelligence',
  'Campaigns',
  'Editorial',
  'Developer Experience',
  'Strategic Assets',
];

export default function ProjectsSection({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.filterGroup === activeFilter);
  }, [activeFilter, projects]);

  function handleFilterClick(filter) {
    if (filter === 'Strategic Assets') {
      document.getElementById('strategic-assets')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    setActiveFilter(filter);
  }

  return (
    <section id="projects" className="editorial-section px-4 py-24 md:px-12 xl:pl-56 xl:pr-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col gap-6">
          <p className="editorial-kicker">Portfolio Index</p>
          <h2 className="editorial-serif text-4xl font-semibold text-[var(--text-primary)] md:text-5xl">
            Systems, Campaigns & Digital Products
          </h2>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterClick(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                  activeFilter === filter
                    ? 'border-[var(--gold)] bg-[var(--gold)] text-[#12100c] shadow-[0_0_22px_rgba(201,161,90,0.14)]'
                    : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--gold-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
