"use client";

import { motion } from 'framer-motion';

/**
 * Capabilities outlines Ezra's areas of expertise. Each card is animated on
 * scroll and uses a semi‑transparent background to continue the layered theme.
 */
export default function Capabilities() {
  const capabilities = [
    {
      title: 'Full‑Stack Engineering',
      description:
        'Crafting scalable front‑end and back‑end systems with modern frameworks and architectures.',
    },
    {
      title: 'Marketing Systems',
      description:
        'Building data‑driven marketing pipelines that automate acquisition, retention, and growth.',
    },
    {
      title: 'AI & Automation',
      description:
        'Integrating AI to optimize processes, personalize experiences, and unlock new capabilities.',
    },
    {
      title: 'Growth & Optimization',
      description:
        'Designing experiments that unlock traction and scale through rigorous testing and insights.',
    },
  ];

  return (
    <section id="capabilities" className="editorial-section px-4 py-24 md:px-12 xl:pl-56 xl:pr-16">
      <div className="max-w-6xl mx-auto">
        <p className="editorial-kicker mb-4">Operating Range</p>
        <h2 className="editorial-serif mb-10 text-4xl font-semibold text-[var(--text-primary)] md:text-5xl">Capabilities</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="editorial-panel rounded-2xl p-6"
            >
              <h3 className="editorial-sans mb-2 text-xl font-semibold text-[var(--text-primary)]">{cap.title}</h3>
              <p className="editorial-copy text-sm leading-7">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
