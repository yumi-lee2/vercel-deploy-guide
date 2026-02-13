import { Sidebar } from "@/components/Sidebar";
import { getGuideSteps } from "@/lib/content";

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const steps = getGuideSteps();
  const sidebarItems = steps.map((s) => ({
    slug: s.slug,
    title: s.title,
    step: s.step,
  }));

  return (
    <div className="flex min-h-dvh">
      <Sidebar items={sidebarItems} />
      <main className="flex-1 pt-14 lg:pt-0">
        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
