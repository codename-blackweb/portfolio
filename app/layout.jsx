import './globals.css';
import CursorSpotlight from '../components/CursorSpotlight';
import EditorialSidebar from '../components/EditorialSidebar';
import OrbitalVisual from '../components/OrbitalVisual';
import AmbientOrbitBackground from '../components/AmbientOrbitBackground';

/**
 * RootLayout defines the global HTML structure for the portfolio. It applies
 * dark background and white text by default and injects metadata for SEO
 * purposes. Using the App Router's layout file ensures consistent
 * styling and metadata across pages.
 */
export const metadata = {
  title: 'Ezra Portfolio',
  description: 'Cinematic creative technology portfolio for Ezra.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 z-0 dot-grid opacity-40" />
          <AmbientOrbitBackground />
          <OrbitalVisual />
          <CursorSpotlight />
          <EditorialSidebar />
          <div className="relative z-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
