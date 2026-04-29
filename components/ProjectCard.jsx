"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * ProjectCard renders a single project summary with a glass‑like background
 * overlay, bullet points, and actionable buttons. It leverages framer‑motion
 * for both scroll‑based entrance animations (whileInView) and hover effects
 * that scale the card slightly to create a tactile feel. The button styling
 * ensures the live links stand out clearly.
 */
export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="editorial-panel group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_0_42px_rgba(201,161,90,0.13)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-muted)] to-transparent" />
      <p className="editorial-kicker mb-4">{project.category}</p>
      <h3 className="editorial-sans mb-3 text-2xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
      <p className="editorial-copy mb-5 text-sm leading-7">
        {project.description}
      </p>
      <ul className="editorial-muted mb-7 space-y-2 text-xs">
        {project.bullets.slice(0, 4).map((point, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-2 h-1 w-4 shrink-0 bg-[var(--gold-muted)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <a
          href={project.liveUrl || project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-button-primary rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-105"
        >
          View Live
        </a>
        <Link
          href={`/projects/${project.slug}`}
          className="editorial-button-secondary rounded-full px-4 py-2 text-sm font-semibold transition hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
