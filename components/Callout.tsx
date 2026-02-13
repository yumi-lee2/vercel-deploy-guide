interface CalloutProps {
  type?: "info" | "tip" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    border: "border-[var(--color-info)]",
    bg: "bg-[var(--color-info)]/5",
    icon: "i",
    label: "참고",
  },
  tip: {
    border: "border-[var(--color-success)]",
    bg: "bg-[var(--color-success)]/5",
    icon: "✓",
    label: "팁",
  },
  warning: {
    border: "border-[var(--color-warning)]",
    bg: "bg-[var(--color-warning)]/5",
    icon: "!",
    label: "주의",
  },
  error: {
    border: "border-[var(--color-error)]",
    bg: "bg-[var(--color-error)]/5",
    icon: "✕",
    label: "경고",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = styles[type];

  return (
    <div
      className={`my-6 rounded-lg border-l-4 ${style.border} ${style.bg} p-4`}
    >
      <p className="mb-1 text-sm font-semibold">{title || style.label}</p>
      <div className="text-sm text-[var(--color-muted)]">{children}</div>
    </div>
  );
}
