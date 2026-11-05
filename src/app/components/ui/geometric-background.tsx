import { cn } from "../../../lib/utils";

/**
 * Minimal background used behind blog articles and paper notes:
 * a soft pool of light at the top fading into charcoal.
 * (Kept the original export name so every existing page picks up the new look.)
 */
export function GeometricBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[#121212]" />
      <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,242,234,0.07),transparent_65%)]" />
    </div>
  );
}
