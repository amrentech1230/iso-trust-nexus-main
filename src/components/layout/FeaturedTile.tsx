import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { FeaturedTile as Tile } from "@/config/navigation";

export function FeaturedTile({ tile, onNavigate }: { tile: Tile; onNavigate?: () => void }) {
  return (
    <div className="gradient-indigo relative overflow-hidden rounded-xl p-6 text-white">
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 size-48 rounded-full bg-honey/25 blur-3xl"
      />
      <p className="relative text-[11px] font-semibold tracking-[0.18em] text-honey uppercase">
        {tile.eyebrow}
      </p>
      <h3 className="relative mt-3 text-lg leading-snug font-bold">{tile.heading}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/80">{tile.body}</p>
      <Link
        to={tile.href}
        onClick={onNavigate}
        className="relative mt-5 inline-flex items-center gap-2 rounded-md bg-honey px-4 py-2 text-sm font-semibold text-indigo-brand transition-colors hover:bg-honey-hover"
      >
        {tile.cta}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
