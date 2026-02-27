import type { ComponentType } from "react";

import Step1, { frontmatter as fm1 } from "@/content/01-setup.mdx";
import Step2, { frontmatter as fm2 } from "@/content/02-create-project.mdx";
import Step3, { frontmatter as fm3 } from "@/content/03-github.mdx";
import Step4, { frontmatter as fm4 } from "@/content/04-deploy.mdx";
import Step5, { frontmatter as fm5 } from "@/content/05-env-vars.mdx";
import Step6, { frontmatter as fm6 } from "@/content/06-preview.mdx";
import Step7, { frontmatter as fm7 } from "@/content/07-troubleshoot.mdx";

export interface GuideStep {
  slug: string;
  title: string;
  description: string;
  step: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
}

const steps: GuideStep[] = [
  {
    slug: "setup",
    title: fm1.title as string,
    description: fm1.description as string,
    step: fm1.step as number,
    Component: Step1,
  },
  {
    slug: "create-project",
    title: fm2.title as string,
    description: fm2.description as string,
    step: fm2.step as number,
    Component: Step2,
  },
  {
    slug: "github",
    title: fm3.title as string,
    description: fm3.description as string,
    step: fm3.step as number,
    Component: Step3,
  },
  {
    slug: "deploy",
    title: fm4.title as string,
    description: fm4.description as string,
    step: fm4.step as number,
    Component: Step4,
  },
  {
    slug: "env-vars",
    title: fm5.title as string,
    description: fm5.description as string,
    step: fm5.step as number,
    Component: Step5,
  },
  {
    slug: "preview",
    title: fm6.title as string,
    description: fm6.description as string,
    step: fm6.step as number,
    Component: Step6,
  },
  {
    slug: "troubleshoot",
    title: fm7.title as string,
    description: fm7.description as string,
    step: fm7.step as number,
    Component: Step7,
  },
].sort((a, b) => a.step - b.step);

export function getGuideSteps(): GuideStep[] {
  return steps;
}

export function getGuideStep(slug: string): GuideStep | undefined {
  return steps.find((s) => s.slug === slug);
}

export function getAdjacentSteps(slug: string) {
  const index = steps.findIndex((s) => s.slug === slug);
  return {
    prev: index > 0 ? steps[index - 1] : null,
    next: index < steps.length - 1 ? steps[index + 1] : null,
  };
}
