import { useState } from "react";

export function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group my-4 overflow-hidden rounded-lg border border-[var(--color-border)]">
      {filename && (
        <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2">
          <span className="text-xs text-[var(--color-muted)]">{filename}</span>
          <button
            onClick={handleCopy}
            className="rounded px-2 py-1 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            {copied ? "복사됨" : "복사"}
          </button>
        </div>
      )}
      <div className="relative">
        {!filename && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 rounded px-2 py-1 text-xs text-[var(--color-muted)] opacity-0 transition-all hover:text-[var(--color-foreground)] group-hover:opacity-100"
          >
            {copied ? "복사됨" : "복사"}
          </button>
        )}
        <pre className="overflow-x-auto bg-[var(--color-surface)] p-4">
          <code
            className={`text-sm leading-relaxed ${language ? `language-${language}` : ""}`}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
