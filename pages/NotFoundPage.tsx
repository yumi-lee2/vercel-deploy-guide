import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <title>페이지를 찾을 수 없습니다 — Vercel 배포 가이드!</title>
      <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg text-[var(--color-muted)]">
          페이지를 찾을 수 없습니다.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--color-foreground)] px-6 py-3 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </>
  );
}
