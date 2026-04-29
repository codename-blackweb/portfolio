import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import StrategicAssetsSection from '../components/StrategicAssetsSection';
import Capabilities from '../components/Capabilities';
import Contact from '../components/Contact';
import { projects, strategicAssets } from '../data/projects';

/**
 * The home page orchestrates the major sections of the portfolio. It pulls
 * project data from a central source and passes it into the project grid,
 * ensuring easy updates. The layout flows from a cinematic hero through
 * featured projects, capabilities, and a final call to action.
 */
export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProjectsSection projects={projects} />
      <StrategicAssetsSection assets={strategicAssets} />
      <Capabilities />
      <Contact />
    </main>
  );
}
