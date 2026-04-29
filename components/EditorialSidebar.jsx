"use client";

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Intro', href: '#hero' },
  { id: 'projects', label: 'Systems', href: '#projects' },
  { id: 'strategic-assets', label: 'Assets', href: '#strategic-assets' },
  { id: 'capabilities', label: 'Capabilities', href: '#capabilities' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function EditorialSidebar() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    let animationFrame = null;

    function resolveActiveSection() {
      const sectionPoint = window.scrollY + window.innerHeight * 0.34;
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let currentSection = sections[0];

      sections.forEach((section) => {
        if (section.offsetTop <= sectionPoint) {
          currentSection = section;
        }
      });

      if (currentSection?.id) {
        setActiveId(currentSection.id);
      }
    }

    function handleScroll() {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        resolveActiveSection();
        animationFrame = null;
      });
    }

    resolveActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <nav className="relative border-l border-[var(--border)] py-4 pl-5">
        <div className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--gold-muted)] to-transparent" />
        <ol className="space-y-5">
          {navItems.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setActiveId(item.id)}
                  className={`group flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] transition ${
                    isActive
                      ? 'text-[var(--gold)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className="font-mono text-[0.62rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                  <span
                    className={`h-px transition-all ${
                      isActive
                        ? 'w-8 bg-[var(--gold)]'
                        : 'w-3 bg-[var(--border)] group-hover:w-6'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}
