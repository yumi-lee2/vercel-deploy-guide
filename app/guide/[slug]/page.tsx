import { notFound } from "next/navigation";
import { getGuideStep, getGuideSteps, getAdjacentSteps } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";
import { StepNav } from "@/components/StepNav";

export function generateStaticParams() {
  const steps = getGuideSteps();
  return steps.map((step) => ({ slug: step.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const step = getGuideStep(slug);
    if (!step) return { title: "Not Found" };
    return {
      title: `${step.step}. ${step.title} — Vercel 배포 가이드`,
      description: step.description,
    };
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const step = getGuideStep(slug);

  if (!step) {
    notFound();
  }

  const { prev, next } = getAdjacentSteps(slug);

  return (
    <article>
      <div className="mb-8">
        <span className="mb-2 inline-block rounded-full bg-[var(--color-accent-light)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
          Step {step.step}
        </span>
        <h1 className="text-3xl font-bold tracking-tight">{step.title}</h1>
        <p className="mt-2 text-[var(--color-muted)]">{step.description}</p>
      </div>

      <MdxContent source={step.content} />

      <StepNav prev={prev} next={next} />
    </article>
  );
}
