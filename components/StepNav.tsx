import { Link } from "react-router-dom";

interface StepLink {
  slug: string;
  title: string;
  step: number;
}

export function StepNav({
  prev,
  next,
}: {
  prev: StepLink | null;
  next: StepLink | null;
}) {
  return (
    <nav className="mt-12 flex items-stretch gap-4 border-t border-[var(--color-border)] pt-6">
      {prev ? (
        <Link
          to={`/guide/${prev.slug}`}
          className="group flex flex-1 flex-col rounded-lg border border-[var(--color-border)] p-4 transition-colors hover:border-[var(--color-accent)]"
        >
          <span className="text-xs text-[var(--color-muted)]">
            이전 단계
          </span>
          <span className="mt-1 text-sm font-medium group-hover:text-[var(--color-accent)]">
            {prev.step}. {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          to={`/guide/${next.slug}`}
          className="group flex flex-1 flex-col items-end rounded-lg border border-[var(--color-border)] p-4 text-right transition-colors hover:border-[var(--color-accent)]"
        >
          <span className="text-xs text-[var(--color-muted)]">
            다음 단계
          </span>
          <span className="mt-1 text-sm font-medium group-hover:text-[var(--color-accent)]">
            {next.step}. {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
