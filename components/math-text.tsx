import katex from "katex";

const pattern = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;

function renderMath(source: string, display: boolean): string {
  return katex.renderToString(source, {
    displayMode: display,
    throwOnError: false,
    strict: "ignore",
    trust: false,
    output: "html",
  });
}

export function renderMixed(text: string): string {
  const parts: string[] = [];
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push(escapeHtml(text.slice(cursor, index)));
    const display = match[1];
    const inline = match[2];
    parts.push(renderMath(display ?? inline ?? "", Boolean(display)));
    cursor = index + match[0].length;
  }
  if (cursor < text.length) parts.push(escapeHtml(text.slice(cursor)));
  return parts.join("");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function MathText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: renderMixed(text) }}
    />
  );
}
