import type { CoordFigure, FigureSpec, SketchFigure } from "@/lib/types";

const tones = {
  ink: "oklch(0.32 0.045 255)",
  accent: "oklch(0.5 0.16 27)",
  soft: "oklch(0.48 0.04 250)",
};

export function FigureView({ spec }: { spec: FigureSpec }) {
  if (spec.type === "sketch") return <SketchFigureView spec={spec} />;
  return <CoordFigureView spec={spec} />;
}

function CoordFigureView({ spec }: { spec: CoordFigure }) {
  const width = 440;
  const height = 300;
  const pad = 34;
  const worldW = spec.xMax - spec.xMin;
  const worldH = spec.yMax - spec.yMin;
  const scale = Math.min((width - pad * 2) / worldW, (height - pad * 2) / worldH);
  const usedW = worldW * scale;
  const usedH = worldH * scale;
  const originX = pad + (width - pad * 2 - usedW) / 2;
  const originY = pad + (height - pad * 2 - usedH) / 2;
  const X = (x: number) => originX + (x - spec.xMin) * scale;
  const Y = (y: number) => originY + (spec.yMax - y) * scale;

  const span = Math.max(worldW, worldH);
  const step = span > 14 ? 2 : 1;
  const xStart = Math.ceil(spec.xMin / step) * step;
  const yStart = Math.ceil(spec.yMin / step) * step;
  const verticals: number[] = [];
  const horizontals: number[] = [];
  for (let x = xStart; x <= spec.xMax + 1e-6; x += step) verticals.push(x);
  for (let y = yStart; y <= spec.yMax + 1e-6; y += step) horizontals.push(y);
  const showNumbers = worldW <= 14 && worldH <= 12;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full max-w-[440px]"
      role="img"
      aria-hidden="true"
    >
      <rect x="0" y="0" width={width} height={height} rx="12" fill="oklch(0.985 0.008 90)" />
      {verticals.map((x) => (
        <line
          key={`vx${x}`}
          x1={X(x)}
          y1={Y(spec.yMin)}
          x2={X(x)}
          y2={Y(spec.yMax)}
          stroke="oklch(0.9 0.015 85)"
          strokeWidth="1"
        />
      ))}
      {horizontals.map((y) => (
        <line
          key={`hy${y}`}
          x1={X(spec.xMin)}
          y1={Y(y)}
          x2={X(spec.xMax)}
          y2={Y(y)}
          stroke="oklch(0.9 0.015 85)"
          strokeWidth="1"
        />
      ))}
      {spec.yMin < 0 && spec.yMax > 0 && (
        <line
          x1={X(spec.xMin)}
          y1={Y(0)}
          x2={X(spec.xMax)}
          y2={Y(0)}
          stroke="oklch(0.38 0.04 255)"
          strokeWidth="1.4"
        />
      )}
      {spec.xMin < 0 && spec.xMax > 0 && (
        <line
          x1={X(0)}
          y1={Y(spec.yMin)}
          x2={X(0)}
          y2={Y(spec.yMax)}
          stroke="oklch(0.38 0.04 255)"
          strokeWidth="1.4"
        />
      )}
      {showNumbers &&
        verticals
          .filter((x) => Math.abs(x) > 1e-6)
          .map((x) => (
            <text
              key={`xl${x}`}
              x={X(x)}
              y={spec.yMin < 0 && spec.yMax > 0 ? Y(0) + 14 : height - 10}
              textAnchor="middle"
              fontSize="11"
              fill="oklch(0.48 0.03 255)"
            >
              {x}
            </text>
          ))}
      {showNumbers &&
        horizontals
          .filter((y) => Math.abs(y) > 1e-6)
          .map((y) => (
            <text
              key={`yl${y}`}
              x={spec.xMin < 0 && spec.xMax > 0 ? X(0) - 8 : 14}
              y={Y(y) + 4}
              textAnchor="end"
              fontSize="11"
              fill="oklch(0.48 0.03 255)"
            >
              {y}
            </text>
          ))}
      {spec.circles?.map((circle, index) => (
        <circle
          key={`c${index}`}
          cx={X(circle.cx)}
          cy={Y(circle.cy)}
          r={circle.r * scale}
          fill="none"
          stroke={tones.soft}
          strokeWidth="1.5"
          strokeDasharray={circle.dashed ? "5 4" : undefined}
        />
      ))}
      {spec.segments?.map((segment, index) => (
        <line
          key={`s${index}`}
          x1={X(segment.x1)}
          y1={Y(segment.y1)}
          x2={X(segment.x2)}
          y2={Y(segment.y2)}
          stroke={tones[segment.tone ?? "ink"]}
          strokeWidth={segment.tone === "accent" ? 2.4 : 1.7}
          strokeDasharray={segment.dashed ? "6 4" : undefined}
          strokeLinecap="round"
        />
      ))}
      {spec.arcs?.map((arc, index) => {
        const start = (arc.startDeg * Math.PI) / 180;
        const end = (arc.endDeg * Math.PI) / 180;
        const startX = X(arc.cx + arc.r * Math.cos(start));
        const startY = Y(arc.cy + arc.r * Math.sin(start));
        const endX = X(arc.cx + arc.r * Math.cos(end));
        const endY = Y(arc.cy + arc.r * Math.sin(end));
        const large = arc.endDeg - arc.startDeg > 180 ? 1 : 0;
        const mid = ((arc.startDeg + arc.endDeg) / 2) * (Math.PI / 180);
        const labelR = arc.r + 0.42;
        return (
          <g key={`a${index}`}>
            <path
              d={`M ${startX} ${startY} A ${arc.r * scale} ${arc.r * scale} 0 ${large} 0 ${endX} ${endY}`}
              fill="none"
              stroke={tones.accent}
              strokeWidth="1.6"
            />
            {arc.label && (
              <text
                x={X(arc.cx + labelR * Math.cos(mid))}
                y={Y(arc.cy + labelR * Math.sin(mid))}
                fontSize="13"
                fill={tones.accent}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {arc.label}
              </text>
            )}
          </g>
        );
      })}
      {spec.rightAngles?.map((mark, index) => {
        const length = 12;
        const ox = X(mark.x);
        const oy = Y(mark.y);
        const p1x = X(mark.x + mark.dx1) - ox;
        const p1y = Y(mark.y + mark.dy1) - oy;
        const p2x = X(mark.x + mark.dx2) - ox;
        const p2y = Y(mark.y + mark.dy2) - oy;
        const n1 = Math.hypot(p1x, p1y) || 1;
        const n2 = Math.hypot(p2x, p2y) || 1;
        const v1x = (p1x / n1) * length;
        const v1y = (p1y / n1) * length;
        const v2x = (p2x / n2) * length;
        const v2y = (p2y / n2) * length;
        return (
          <path
            key={`r${index}`}
            d={`M ${ox + v1x} ${oy + v1y} L ${ox + v1x + v2x} ${oy + v1y + v2y} L ${ox + v2x} ${oy + v2y}`}
            fill="none"
            stroke={tones.ink}
            strokeWidth="1.4"
          />
        );
      })}
      {spec.points?.map((point) => (
        <g key={point.label}>
          <circle cx={X(point.x)} cy={Y(point.y)} r="4" fill={tones.accent} />
          <text
            x={X(point.x) + (point.dx ?? 8)}
            y={Y(point.y) + (point.dy ?? -8)}
            fontSize="14"
            fontWeight="650"
            fill="oklch(0.28 0.04 255)"
            stroke="oklch(0.985 0.008 90)"
            strokeWidth="4"
            paintOrder="stroke"
          >
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function SketchFigureView({ spec }: { spec: SketchFigure }) {
  return (
    <svg viewBox="0 0 320 230" className="h-auto w-full max-w-[420px]" role="img" aria-hidden="true">
      <rect width="320" height="230" rx="12" fill="oklch(0.985 0.008 90)" />
      {spec.lines.map((line, index) => (
        <line
          key={`l${index}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={tones[line.tone ?? "ink"]}
          strokeWidth={line.tone === "accent" ? 2.4 : 1.8}
          strokeDasharray={line.dashed ? "6 4" : undefined}
          strokeLinecap="round"
        />
      ))}
      {spec.labels.map((label) => (
        <text
          key={`${label.text}${label.x}`}
          x={label.x}
          y={label.y}
          fontSize="15"
          fontWeight="650"
          textAnchor="middle"
          fill="oklch(0.28 0.04 255)"
        >
          {label.text}
        </text>
      ))}
    </svg>
  );
}
