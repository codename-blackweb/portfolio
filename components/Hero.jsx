"use client";

import { motion } from 'framer-motion';

const metrics = [
  '$10M+ Revenue Generated',
  '17 Years in Marketing & Systems',
  'End-to-End Attribution Built',
  'Multi-Platform Content Engines Deployed',
];

export default function Hero() {
  return (
    <section id="hero" className="editorial-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.34, 0.18], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-24 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[var(--gold-soft)] blur-3xl"
      />

      <div className="w-full max-w-6xl text-center">
        <p className="editorial-kicker mb-6">Revenue Systems / Intelligence / Execution</p>
        <h1 className="editorial-serif mb-6 text-5xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-8xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            I Build Revenue Systems,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="block text-[var(--gold)]"
          >
            Not Just Marketing.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="editorial-copy mx-auto mb-6 max-w-3xl text-xl leading-relaxed md:text-2xl"
        >
          Content. Intelligence. Attribution.
          <span className="block">
            Engineered to drive decisions, not just engagement.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="editorial-muted mx-auto mb-12 max-w-4xl text-base leading-8 md:text-lg"
        >
          From real-time dashboards to full-scale content engines, I design and
          deploy systems that turn data into direction and strategy into
          measurable growth.
        </motion.p>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.55 + index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="editorial-panel flex min-h-24 items-center justify-center rounded-xl px-5 py-5"
            >
              <span className="editorial-sans text-sm font-semibold uppercase leading-6 tracking-widest text-[var(--text-primary)] md:text-base">
                {metric}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.65, delay: 1.1 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="editorial-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#capabilities"
              className="editorial-button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
            >
              Explore Systems
            </a>
          </div>
          <p className="editorial-muted text-sm">
            Selected builds across marketing, intelligence, and execution
            systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
