"use client";

import { motion } from 'framer-motion';

/**
 * Contact presents a concise call‑to‑action encouraging collaboration. The
 * section uses minimal content with a strong CTA button linking to a mailto
 * address. Animations ensure the content slides gracefully into view.
 */
export default function Contact() {
  return (
    <section id="contact" className="editorial-section px-4 py-24 md:px-12 xl:pl-56 xl:pr-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="editorial-kicker mb-4">Next Build</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-serif mb-6 text-4xl font-semibold text-[var(--text-primary)] md:text-5xl"
        >
          Ready to build?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="editorial-copy mb-8"
        >
          Let’s collaborate on the next big thing. Drop me a line and let's get started.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="mailto:hello@example.com"
          className="editorial-button-primary inline-block rounded-full px-8 py-4 font-bold transition hover:scale-105"
        >
          Contact Ezra
        </motion.a>
      </div>
    </section>
  );
}
