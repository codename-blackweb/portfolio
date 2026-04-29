"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sectionViewport = { once: true, amount: 0.2 };

function linkProps(url) {
  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}

function AssetFallback({ asset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="relative grid h-full overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(201,161,90,0.18),transparent_28%),radial-gradient(circle_at_80%_85%,rgba(201,161,90,0.10),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-5 md:grid-cols-[0.9fr_1.1fr] md:p-8"
    >
      <div className="relative z-10 flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.58)] p-6 backdrop-blur">
        <div>
          <p className="editorial-kicker">
            Interactive Preview
          </p>
          <h3 className="editorial-sans mt-5 text-3xl font-semibold leading-tight text-[var(--text-primary)] md:text-4xl">
            {asset.title}
          </h3>
          <p className="editorial-copy mt-5 text-sm leading-7">{asset.category}</p>
        </div>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
            Live preview unavailable due to site security restrictions
          </p>
          <a
            href={asset.liveUrl}
            {...linkProps(asset.liveUrl)}
            className="editorial-button-primary mt-5 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
          >
            Open Asset
          </a>
        </div>
      </div>
      <div className="relative z-10 mt-5 rounded-2xl border border-[var(--border)] bg-[rgba(10,10,10,0.62)] p-5 backdrop-blur md:mt-0">
        <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
            Preview Surface
          </p>
          <motion.div
            animate={{ width: ['34%', '82%', '54%', '92%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 rounded-full bg-[var(--gold)]"
          />
        </div>
        <div className="mt-5 space-y-4">
          {['Narrative section', 'Visual system', 'Strategic proof'].map((label, index) => (
            <motion.div
              key={label}
              animate={{ y: [0, -4, 0], opacity: [0.72, 1, 0.72] }}
              transition={{
                duration: 3.2,
                delay: index * 0.35,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="rounded-2xl border border-[var(--border-muted)] bg-[var(--panel-strong)] p-4"
            >
              <p className="editorial-sans text-sm font-semibold text-[var(--text-primary)]">{label}</p>
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

function AssetPreviewFrame({ asset }) {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');
    const timeout = window.setTimeout(() => {
      setStatus((currentStatus) =>
        currentStatus === 'loading' ? 'unavailable' : currentStatus
      );
    }, 8000);

    return () => window.clearTimeout(timeout);
  }, [asset.previewUrl]);

  const showFallback = status === 'unavailable' || !asset.previewUrl;

  return (
    <div className="relative h-[24rem] overflow-hidden rounded-b-[1.4rem] bg-[var(--background)] md:h-[34rem]">
      {status === 'loading' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-10 grid place-items-center bg-[var(--background)]"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto h-12 w-12 rounded-full border border-[var(--border)] bg-[var(--gold-soft)] shadow-2xl shadow-[rgba(201,161,90,0.18)]"
            />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">
              Loading asset preview
            </p>
          </div>
        </motion.div>
      )}
      {!showFallback && (
        <motion.iframe
          key={asset.previewUrl}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: status === 'loaded' ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          src={asset.previewUrl}
          title={`${asset.title} live preview`}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('unavailable')}
          className="h-full w-full rounded-b-2xl border-0 bg-[var(--background)]"
        />
      )}
      {showFallback && <AssetFallback asset={asset} />}
    </div>
  );
}

function BrowserFrame({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className="rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-3 shadow-2xl shadow-[rgba(201,161,90,0.08)] backdrop-blur-xl"
    >
      <div className="rounded-[1.4rem] border border-[var(--border-muted)] bg-[rgba(8,8,8,0.88)]">
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

export default function StrategicAssetsSection({ assets }) {
  return (
    <section id="strategic-assets" className="editorial-section px-4 py-24 md:px-12 xl:pl-56 xl:pr-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="editorial-kicker">
            Supporting Work
          </p>
          <h2 className="editorial-serif mt-4 text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl">
            Strategic Assets & Supporting Work
          </h2>
        </motion.div>

        <div className="mt-14 space-y-16">
          {assets.map((asset, index) => (
            <motion.article
              key={asset.title}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{
                duration: 0.75,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-center"
            >
              <div>
                <p className="editorial-kicker">
                  {asset.category}
                </p>
                <h3 className="editorial-sans mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
                  {asset.title}
                </h3>
                <a
                  href={asset.liveUrl}
                  {...linkProps(asset.liveUrl)}
                  className="editorial-button-primary mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-widest transition hover:scale-105"
                >
                  Open Asset
                </a>
              </div>
              <BrowserFrame>
                <AssetPreviewFrame asset={asset} />
              </BrowserFrame>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
