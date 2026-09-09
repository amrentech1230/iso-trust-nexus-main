import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { searchAll } from "@/lib/search";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchAll(query), [query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-24 max-w-2xl translate-y-0 p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Search TRAIBCERT</DialogTitle>
          <DialogDescription>
            Search certifications, training courses, industries and resources.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-3 border-b px-5 py-4">
          <Search className="size-5 text-muted-foreground" aria-hidden="true" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search standards, courses, industries, articles…"
            aria-label="Search TRAIBCERT"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim().length < 2 ? (
            <p className="px-4 py-6 text-sm text-muted-foreground">
              Try “ISO 27001”, “lead auditor”, “food safety” or “pre-shipment inspection”.
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-muted-foreground">
              No matches. Try a standard number, a course level or an industry.
            </p>
          ) : (
            <ul className="space-y-1">
              {results.map((result) => (
                <li key={`${result.group}-${result.href}-${result.title}`}>
                  <Link
                    to={result.href}
                    onClick={() => onOpenChange(false)}
                    className="block rounded-lg px-4 py-3 transition-colors hover:bg-muted"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-indigo-soft uppercase">
                      {result.group}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-foreground">
                      {result.title}
                    </span>
                    <span className="mt-0.5 block line-clamp-1 text-sm text-muted-foreground">
                      {result.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
