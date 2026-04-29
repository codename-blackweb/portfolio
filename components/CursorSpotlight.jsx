"use client";

import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 768px)');

    function handleMove(event) {
      if (!mediaQuery.matches) {
        return;
      }

      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMove, { passive: true });

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 mix-blend-screen blur-2xl md:block"
      style={{
        transform: `translate3d(${position.x - 280}px, ${position.y - 280}px, 0)`,
        background:
          'radial-gradient(circle, rgba(201,161,90,0.15) 0%, rgba(201,161,90,0.08) 34%, transparent 70%)',
      }}
    />
  );
}
