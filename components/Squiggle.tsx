/**
 * Editorial accent word — italic serif in the pale brand blue (Coverly-style).
 * Replaces the old hand-drawn red brush underline; tuned for the navy
 * surfaces where it's used (CtaBand headings and dark hero titles).
 */
export default function Squiggle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <em className={`font-display italic font-normal text-brand-300 ${className}`}>{children}</em>;
}
