import { projects } from '../../../data/projects';
import ProjectPageClient from './ProjectPageClient';

export function generateStaticParams() {
  return projects.flatMap((project) => [
    { slug: project.slug },
    ...(project.legacySlugs || []).map((slug) => ({ slug })),
  ]);
}

export function generateMetadata({ params }) {
  const { slug } = params;
  const project = projects.find(
    (p) => p.slug === slug || p.legacySlugs?.includes(slug)
  );

  if (!project) {
    return {
      title: 'Project not found | Ezra Portfolio',
    };
  }

  return {
    title: `${project.title} | Ezra Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projects.find(
    (p) => p.slug === slug || p.legacySlugs?.includes(slug)
  );

  if (!project) {
    return <div className="min-h-screen p-8 text-[var(--text-primary)]">Project not found.</div>;
  }

  return <ProjectPageClient project={project} />;
}
