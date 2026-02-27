import { Link } from "react-router-dom";
import { getGuideSteps } from "@/lib/content";

export default function HomePage() {
  const steps = getGuideSteps();

  return (
    <>
      <title>Vercel 배포 가이드</title>
      <meta
        name="description"
        content="프론트엔드 개발자를 위한 Vercel 배포 가이드. Next.js 프로젝트를 Vercel에 배포하는 전체 흐름을 단계별로 안내합니다."
      />
      <div className="flex min-h-dvh flex-col">
        {/* Hero */}
        <header className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center lg:pt-32 lg:pb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm text-[var(--color-muted)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 76 65"
              fill="currentColor"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            Next.js + Vercel
          </div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
            Vercel 배포 가이드
          </h1>
          <p className="mt-4 max-w-lg text-lg text-[var(--color-muted)]">
            프론트엔드 개발자를 위한 단계별 배포 가이드.
            <br />
            GitHub 연동부터 배포까지, 한 번에 따라하세요.
          </p>
          <Link
            to={steps.length > 0 ? `/guide/${steps[0].slug}` : "#"}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--color-foreground)] px-6 py-3 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
          >
            시작하기
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </header>

        {/* Steps Grid */}
        <section className="mx-auto w-full max-w-4xl px-6 pb-24">
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <Link
                key={step.slug}
                to={`/guide/${step.slug}`}
                className="group rounded-xl border border-[var(--color-border)] p-6 transition-all hover:border-[var(--color-accent)] hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] text-sm font-semibold text-[var(--color-muted)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
                    {step.step}
                  </span>
                  <h3 className="font-semibold group-hover:text-[var(--color-accent)]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {step.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-muted)]">
          Vercel 배포 가이드 &mdash; {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
