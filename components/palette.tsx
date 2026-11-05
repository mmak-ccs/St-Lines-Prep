"use client";

import { cn } from "@/lib/utils";

export type PaletteTone = "correct" | "wrong" | "studied" | "answered" | "empty";

export function Palette({
  count,
  current,
  onPick,
  tone,
  label,
}: {
  count: number;
  current: number;
  onPick: (index: number) => void;
  tone: (index: number) => PaletteTone;
  label: string;
}) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1" aria-label={label}>
      {Array.from({ length: count }, (_, index) => {
        const state = tone(index);
        const active = index === current;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onPick(index)}
            aria-current={active ? "true" : undefined}
            className={cn(
              "size-9 shrink-0 rounded-md border text-sm font-medium",
              active && "border-primary bg-primary text-primary-foreground",
              !active && state === "correct" && "border-correct bg-correct-soft text-correct",
              !active && state === "wrong" && "border-destructive/50 bg-destructive/10 text-destructive",
              !active && state === "studied" && "border-hint/40 bg-hint/10 text-hint",
              !active && state === "answered" && "border-primary/40 bg-primary/10 text-primary",
              !active && state === "empty" && "border-border bg-card text-muted-foreground",
            )}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
