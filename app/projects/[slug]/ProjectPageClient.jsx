"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionViewport = { once: true, amount: 0.25 };

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const systemLayers = ['Strategy Layer', 'Workflow Layer', 'Intelligence Layer', 'Execution Layer'];

function sectionTransition(delay = 0) {
  return { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] };
}

function liveLinkProps(url) {
  if (!url || url === '#') {
    return {};
  }

  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}

function InteractiveFallbackPreview({ project, ctaLabel }) {
  const fragments =
    project.preview?.cards?.map((card) => card.title) ||
    project.workflow?.cards?.map((card) => card.title) || [
      `${project.title} overview`,
      `${project.title} navigation`,
      `${project.title} content surface`,
      `${project.title} live access`,
    ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="relative grid h-full overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_80%_85%,rgba(34,211,238,0.13),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.015))] p-5 md:grid-cols-[0.9fr_1.1fr] md:p-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, -12, 0], opacity: [0.2, 0.34, 0.22, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 top-8 h-40 w-40 rounded-full bg-[var(--gold-soft)] blur-3xl"
      />

      <div className="relative z-10 flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.58)] p-6 backdrop-blur">
        <div>
          <p className="editorial-kicker">
            Interactive Preview
          </p>
          <h3 className="editorial-sans mt-5 text-3xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
            {project.title}
          </h3>
          <p className="editorial-copy mt-5 text-sm leading-7 md:text-base">
            {project.description ||
              'A live asset preview is represented here with animated product UI fragments while the embedded site blocks iframe rendering.'}
          </p>
        </div>

        <div className="mt-8">
          <p className="editorial-sans text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
            Live preview unavailable due to site security restrictions
          </p>
          <a
            href={project.liveUrl}
            {...liveLinkProps(project.liveUrl)}
            className="editorial-button-primary mt-5 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-5 min-h-72 rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.62)] p-5 backdrop-blur md:mt-0">
        <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Preview Surface
            </p>
            <p className="editorial-sans mt-2 text-lg font-semibold text-[var(--text-primary)]">Live asset model</p>
          </div>
          <motion.div
            animate={{ width: ['34%', '82%', '54%', '92%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 rounded-full bg-[var(--gold)]"
          />
        </div>

        <div className="mt-5 space-y-4">
          {fragments.map((fragment, index) => (
            <motion.div
              key={fragment}
              animate={{ y: [0, -4, 0], opacity: [0.72, 1, 0.72] }}
              transition={{
                duration: 3.2,
                delay: index * 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="rounded-2xl border border-[var(--border-muted)] bg-[var(--panel-strong)] p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="editorial-sans mt-2 text-sm font-semibold text-[var(--text-primary)]">{fragment}</p>
                </div>
                <span className="h-10 w-10 rounded-full border border-[var(--border)] bg-[var(--gold-soft)]" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <span className="h-2 rounded-full bg-[var(--gold-muted)]" />
                <span className="h-2 rounded-full bg-white/20" />
                <span className="h-2 rounded-full bg-[var(--gold-soft)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LivePreviewFrame({ project, ctaLabel = 'Open Live System' }) {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');

    const timeout = window.setTimeout(() => {
      setStatus((currentStatus) =>
        currentStatus === 'loading' ? 'unavailable' : currentStatus
      );
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [project.previewUrl]);

  const showFallback = status === 'unavailable' || !project.previewUrl;
  const showIframe = project.previewUrl && !showFallback;

  return (
    <div className="relative h-[30rem] overflow-hidden rounded-b-[1.4rem] bg-[var(--background)] md:h-[42rem]">
      {status === 'loading' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-10 grid place-items-center bg-[var(--background)]"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto h-14 w-14 rounded-full border border-[var(--border)] bg-[var(--gold-soft)] shadow-2xl shadow-[rgba(201,161,90,0.18)]"
            />
            <p className="editorial-sans mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">
              Loading live preview
            </p>
          </div>
        </motion.div>
      )}

      {showIframe && (
        <motion.iframe
          key={project.previewUrl}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: status === 'loaded' ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          src={project.previewUrl}
          title={`${project.title} live preview`}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('unavailable')}
          className="h-full w-full rounded-b-2xl border-0 bg-[var(--background)]"
        />
      )}

      {showFallback && (
        <InteractiveFallbackPreview project={project} ctaLabel={ctaLabel} />
      )}
    </div>
  );
}

function BrowserFrame({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className={`rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-3 shadow-2xl shadow-[rgba(201,161,90,0.08)] backdrop-blur-xl ${className}`}
    >
      <div className="rounded-[1.4rem] border border-[var(--border-muted)] bg-[rgba(8,8,8,0.9)]">
        <div className="flex items-center gap-2 border-b border-[var(--border-muted)] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-4 h-7 flex-1 rounded-full border border-[var(--border)] bg-[var(--panel)]" />
        </div>
        {children}
      </div>
    </motion.div>
  );
}

function CampaignAssetEcosystem({ project }) {
  if (!project.relatedAssets?.length) {
    return null;
  }

  return (
    <section className="px-4 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={fadeUp}
          transition={sectionTransition()}
          className="max-w-4xl"
        >
          <p className="editorial-kicker">
            Supporting System
          </p>
          <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {project.relatedAssetsTitle || 'Related Asset System'}
          </h2>
          <p className="editorial-copy mt-6 text-lg leading-8">
            {project.relatedAssetsIntro ||
              'This build includes supporting assets that extend the core system into walkthroughs, proof surfaces, and related digital experiences.'}
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {project.relatedAssets.map((asset, index) => (
            <motion.article
              key={asset.title}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={fadeUp}
              transition={sectionTransition(index * 0.08)}
              className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="editorial-kicker">
                  Asset {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="editorial-sans mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  {asset.title}
                </h3>
                <p className="editorial-copy mt-5 text-base leading-8 md:text-lg">
                  {asset.description}
                </p>
                <a
                  href={asset.liveUrl}
                  {...liveLinkProps(asset.liveUrl)}
                  className="editorial-button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
                >
                  Open Asset
                </a>
              </div>

              <BrowserFrame className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <LivePreviewFrame project={asset} ctaLabel="Open Asset" />
              </BrowserFrame>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectPageClient({ project }) {
  const liveUrl = project.liveUrl || project.link || '#';
  const capabilityCards = project.capabilities.cards;
  const impactBullets = project.impact.bullets;
  const systemCards = project.system.cards;
  const layeredCapabilities = systemLayers.map((layer, index) => {
    return (
      systemCards.find((capability) => capability.label === layer) ||
      systemCards[index]
    );
  }).filter(Boolean);
  const problemContent =
    typeof project.problem === 'string'
      ? {
          headline: `${project.title} problem`,
          body: project.problem,
          bullets: impactBullets,
        }
      : project.problem;
  const previewCards = project.preview.cards;
  const workflowCards = project.workflow.cards;

  return (
    <main className="min-h-screen overflow-hidden text-[var(--text-primary)]">
      <section className="relative min-h-screen px-4 py-24 md:px-12">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className="absolute left-1/2 top-16 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--gold-soft)] blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 30, -20, 0], opacity: [0.2, 0.34, 0.22, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-[rgba(201,161,90,0.09)] blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerGroup}
            className="pt-10 md:pt-20"
          >
            <motion.p
              variants={fadeUp}
              transition={sectionTransition()}
              className="editorial-kicker mb-5"
            >
              {project.category}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={sectionTransition(0.05)}
              className="editorial-serif max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl"
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={sectionTransition(0.1)}
              className="editorial-copy mt-7 max-w-2xl text-xl leading-8 md:text-2xl"
            >
              {project.positioning}
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={sectionTransition(0.15)}
              className="editorial-serif mt-5 max-w-3xl text-2xl font-semibold leading-9 text-[var(--text-primary)] md:text-3xl"
            >
              {project.headline}
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={sectionTransition(0.2)}
              className="editorial-muted mt-5 max-w-3xl text-base leading-8 md:text-lg"
            >
              {project.subheadline}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={sectionTransition(0.25)}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={liveUrl}
                {...liveLinkProps(liveUrl)}
                className="editorial-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
              >
                View Live System
              </a>
              <a
                href="#architecture"
                className="editorial-button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
              >
                Explore Architecture
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 46, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={sectionTransition(0.3)}
            whileHover={{ scale: 1.015 }}
            className="editorial-panel relative rounded-[2rem] p-3"
          >
            <div className="rounded-[1.4rem] border border-[var(--border-muted)] bg-[rgba(8,8,8,0.86)]">
              <div className="flex items-center gap-2 border-b border-[var(--border-muted)] px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-4 h-7 flex-1 rounded-full border border-[var(--border)] bg-[var(--panel)]" />
              </div>
              <div className="relative min-h-[24rem] overflow-hidden rounded-b-[1.4rem] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(34,211,238,0.12),transparent_34%)]" />
                <div className="relative grid h-full gap-4">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                      {project.preview.label}
                    </p>
                    <p className="editorial-sans mt-3 text-2xl font-semibold text-[var(--text-primary)]">{project.preview.title}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {previewCards.map((step, index) => (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={sectionTransition(0.45 + index * 0.1)}
                        className="rounded-2xl border border-[var(--border-muted)] bg-[rgba(10,10,10,0.58)] p-4"
                      >
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                          {step.label}
                        </p>
                        <p className="editorial-sans mt-2 text-sm font-semibold text-[var(--text-primary)]">{step.title}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={sectionTransition()}
            className="lg:sticky lg:top-24 lg:h-fit"
          >
            <p className="editorial-kicker">
              Context
            </p>
            <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {problemContent.headline}
            </h2>
            <p className="editorial-copy mt-6 text-lg leading-8">{problemContent.body}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerGroup}
            className="grid gap-5 sm:grid-cols-2"
          >
            {problemContent.bullets.map((statement) => (
              <motion.div
                key={statement}
                variants={fadeUp}
                transition={sectionTransition()}
                whileHover={{ y: -6, scale: 1.015 }}
                className="editorial-panel rounded-2xl p-6"
              >
                <span className="mb-6 block h-1 w-10 rounded-full bg-[var(--gold)]" />
                <p className="editorial-serif text-lg font-semibold leading-7 text-[var(--text-primary)]">{statement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={sectionTransition()}
            className="max-w-3xl"
          >
            <p className="editorial-kicker">
              Product Logic
            </p>
            <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {project.system.headline}
            </h2>
            <p className="editorial-copy mt-6 text-lg leading-8">{project.system.intro}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerGroup}
            className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {layeredCapabilities.map((capability) => (
              <motion.div
                key={`${capability.label}-${capability.title}`}
                variants={fadeUp}
                transition={sectionTransition()}
                whileHover={{ y: -8, scale: 1.02 }}
                className="editorial-panel min-h-72 rounded-2xl p-6"
              >
                <p className="editorial-kicker">
                  {capability.label}
                </p>
                <h3 className="editorial-sans mt-8 text-2xl font-semibold leading-8">{capability.title}</h3>
                <p className="editorial-copy mt-5 text-sm leading-7">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="architecture" className="px-4 py-24 md:px-12">
        <div className="editorial-panel mx-auto max-w-7xl rounded-[2rem] p-5 md:p-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={sectionTransition()}
            className="max-w-3xl"
          >
            <p className="editorial-kicker">
              Architecture
            </p>
            <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {project.workflow.headline}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerGroup}
            className="mt-12 grid gap-4 lg:grid-cols-4"
          >
            {workflowCards.map((step, index) => (
              <motion.div
                key={step.label}
                variants={fadeUp}
                transition={sectionTransition()}
                whileHover={{ y: -6, scale: 1.015 }}
                className="relative rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.58)] p-6"
              >
                {index < workflowCards.length - 1 && (
                  <span className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-[var(--gold-muted)] to-transparent lg:block" />
                )}
                <p className="editorial-sans text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
                  {step.label}
                </p>
                <h3 className="editorial-sans mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="editorial-copy mt-4 text-sm leading-7">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={sectionTransition()}
            className="max-w-3xl"
          >
            <p className="editorial-kicker">
              Capabilities
            </p>
            <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {project.capabilities.headline}
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerGroup}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {capabilityCards.map((capability) => (
              <motion.div
                key={`${capability.label}-${capability.title}`}
                variants={fadeUp}
                transition={sectionTransition()}
                whileHover={{ y: -6, scale: 1.015 }}
                className="editorial-panel rounded-2xl p-6"
              >
                <p className="editorial-kicker">
                  {capability.label}
                </p>
                <h3 className="editorial-sans mt-5 text-2xl font-semibold">{capability.title}</h3>
                <p className="editorial-copy mt-4 text-sm leading-7">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={fadeUp}
            transition={sectionTransition()}
            className="lg:sticky lg:top-24 lg:h-fit"
          >
            <p className="editorial-kicker">
              Impact
            </p>
            <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              {project.impact.headline}
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={staggerGroup}
            className="space-y-4"
          >
            {impactBullets.map((statement) => (
              <motion.div
                key={statement}
                variants={fadeUp}
                transition={sectionTransition()}
                className="editorial-panel flex gap-5 rounded-2xl p-5"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--gold)]" />
                <p className="text-lg leading-8 text-[var(--text-secondary)]">{statement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition()}
          className="mx-auto max-w-7xl"
        >
          <p className="editorial-kicker">
            Live Preview
          </p>
          <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Product surface
          </h2>
          <BrowserFrame className="mt-10">
            <LivePreviewFrame project={project} />
          </BrowserFrame>
        </motion.div>
      </section>

      <CampaignAssetEcosystem project={project} />

      <section className="px-4 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={sectionTransition()}
          className="editorial-panel mx-auto max-w-5xl rounded-[2rem] px-6 py-16 text-center md:px-12"
        >
          <p className="editorial-kicker">
            Next Step
          </p>
          <h2 className="editorial-serif mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Explore the live system
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={liveUrl}
              {...liveLinkProps(liveUrl)}
              className="editorial-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
            >
              View Live
            </a>
            <Link
              href="/#projects"
              className="editorial-button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
            >
              Back to Systems
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
