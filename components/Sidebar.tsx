import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface SidebarItem {
  slug: string;
  title: string;
  step: number;
}

export function Sidebar({ items }: { items: SidebarItem[] }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background)]/80 px-4 backdrop-blur-sm lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 transition-colors hover:bg-[var(--color-surface)]"
          aria-label="메뉴 열기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <Link to="/" className="text-sm font-semibold">
          Vercel 배포 가이드
        </Link>
        <ThemeToggle />
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-dvh w-[280px] flex-col border-r border-[var(--color-border)] bg-[var(--color-background)] transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-[var(--color-border)] px-5">
          <Link
            to="/"
            className="text-sm font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Vercel 배포 가이드
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 transition-colors hover:bg-[var(--color-surface)] lg:hidden"
              aria-label="메뉴 닫기"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 px-2 text-xs font-medium tracking-wider text-[var(--color-muted)] uppercase">
            가이드 단계
          </p>
          <ul className="space-y-1">
            {items.map((item) => {
              const href = `/guide/${item.slug}`;
              const isActive = pathname === href;

              return (
                <li key={item.slug}>
                  <Link
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--color-accent-light)] font-medium text-[var(--color-accent)]"
                        : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                        isActive
                          ? "bg-[var(--color-accent)] text-white"
                          : "bg-[var(--color-surface)] text-[var(--color-muted)]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-[var(--color-border)] p-4">
          <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Vercel 공식 문서
          </a>
        </div>
      </aside>
    </>
  );
}
