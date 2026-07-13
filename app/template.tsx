/**
 * Remounts on every route change, giving each page a soft fade-up entrance
 * (see .page-enter in globals.css). Navbar and Footer live in layout.tsx, so
 * they stay put while the page content transitions.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
