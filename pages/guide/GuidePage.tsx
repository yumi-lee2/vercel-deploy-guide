import { useParams, Navigate } from "react-router-dom";
import { getGuideStep, getAdjacentSteps } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";
import { StepNav } from "@/components/StepNav";

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const step = slug ? getGuideStep(slug) : undefined;

  if (!step) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentSteps(slug!);

  return (
    <>
      <title>{`${step.step}. ${step.title} — Vercel 배포가이드 ver.2`}</title>
      <meta name="description" content={step.description} />
      <article>
        <div className="mb-8">
          <span className="mb-2 inline-block rounded-full bg-[var(--color-accent-light)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
            Step {step.step}
          </span>
          <h1 className="text-3xl font-bold tracking-tight">{step.title}</h1>
          <p className="mt-2 text-[var(--color-muted)]">{step.description}</p>
        </div>

        <MdxContent Component={step.Component} />

        <StepNav prev={prev} next={next} />
      </article>
    </>
  );
}
