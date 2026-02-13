import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface GuideStep {
  slug: string;
  title: string;
  description: string;
  step: number;
  content: string;
}

export function getGuideSteps(): GuideStep[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: filename.replace(/^\d+-/, "").replace(/\.mdx$/, ""),
        title: data.title || "",
        description: data.description || "",
        step: data.step || 0,
        content,
      };
    })
    .sort((a, b) => a.step - b.step);
}

export function getGuideStep(slug: string): GuideStep | undefined {
  const steps = getGuideSteps();
  return steps.find((s) => s.slug === slug);
}

export function getAdjacentSteps(slug: string) {
  const steps = getGuideSteps();
  const index = steps.findIndex((s) => s.slug === slug);
  return {
    prev: index > 0 ? steps[index - 1] : null,
    next: index < steps.length - 1 ? steps[index + 1] : null,
  };
}
