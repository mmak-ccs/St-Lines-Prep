"use client";

import { Check, Lightbulb, X } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { OptionKey, Question } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FigureView } from "./figure";
import { MathText } from "./math-text";
import { useI18n } from "./providers";

const difficultyCopy = {
  foundation: "Foundation",
  standard: "Standard",
  exam: "Exam style",
} as const;

export function QuestionCard({
  question,
  index,
  total,
  topicLabel,
  selected,
  onSelect,
  checked,
  onCheck,
  hintOpen,
  onToggleHint,
  solutionOpen,
  onToggleSolution,
  solutionLocked,
  onTryAgain,
}: {
  question: Question;
  index: number;
  total: number;
  topicLabel: string;
  selected?: OptionKey;
  onSelect?: (key: OptionKey) => void;
  checked: boolean;
  onCheck?: () => void;
  hintOpen: boolean;
  onToggleHint: () => void;
  solutionOpen: boolean;
  onToggleSolution: () => void;
  solutionLocked?: boolean;
  onTryAgain?: () => void;
}) {
  const { tr } = useI18n();
  const text = (en: string) => en;
  const correct = checked && selected === question.answer;
  const wrong = checked && selected && selected !== question.answer;
  const chosenTrap = question.options.find((option) => option.key === selected)?.trap;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
      ) {
        return;
      }
      const key = event.key.toUpperCase();
      if (!checked && onSelect && (key === "A" || key === "B" || key === "C" || key === "D")) {
        onSelect(key);
      }
      if (event.key === "Enter" && !checked && selected && onCheck) onCheck();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [checked, onCheck, onSelect, selected]);

  return (
    <article className="relative overflow-hidden rounded-xl bg-card shadow-[0_16px_40px_-28px_rgba(28,36,48,0.7)] ring-1 ring-foreground/10">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-margin" />
      <div className="px-4 py-5 sm:px-7 sm:py-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-margin">
            Question {index + 1}
          </span>
          <span className="text-muted-foreground">
            {index + 1} / {total}
          </span>
          <Badge variant="outline">{topicLabel}</Badge>
          <Badge variant="secondary">{difficultyCopy[question.difficulty]}</Badge>
        </div>

        <h2 className="exam-stem math-copy mt-4 text-foreground">
          <MathText text={tr(question.stem)} />
        </h2>

        {question.figure && (
          <div className="mt-4">
            <FigureView spec={question.figure} />
          </div>
        )}

        <div className="mt-5 grid gap-2" role="radiogroup" aria-label={text("Options")}>
          {question.options.map((option) => {
            const isSelected = selected === option.key;
            const isAnswer = checked && option.key === question.answer;
            const isWrongPick = checked && isSelected && option.key !== question.answer;
            return (
              <button
                key={option.key}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={checked || !onSelect}
                onClick={() => onSelect?.(option.key)}
                className={cn(
                  "flex min-h-14 w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors",
                  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none",
                  !checked && "hover:bg-muted/70",
                  isSelected && !checked && "border-primary bg-primary/5",
                  !isSelected && !isAnswer && "border-border bg-background",
                  isAnswer && "border-correct bg-correct-soft",
                  isWrongPick && "border-destructive bg-destructive/10",
                  checked && "cursor-default",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-md border text-sm font-semibold",
                    isAnswer && "border-correct bg-correct text-white",
                    isWrongPick && "border-destructive bg-destructive text-white",
                  )}
                >
                  {option.key}
                </span>
                <MathText text={tr(option.text)} className="math-copy font-serif text-base leading-7" />
                {isAnswer && <Check className="ml-auto size-4 shrink-0 text-correct" />}
                {isWrongPick && <X className="ml-auto size-4 shrink-0 text-destructive" />}
              </button>
            );
          })}
        </div>

        {checked && (
          <p className={cn("mt-4 text-sm font-medium", correct ? "text-correct" : "text-destructive")}>
            {correct
              ? text("Correct.")
              : text(`Not this one. The answer is ${question.answer}.`)}
          </p>
        )}
        {wrong && chosenTrap && !solutionOpen && (
          <p className="math-copy mt-2 text-sm leading-6 text-foreground">
            <MathText text={tr(chosenTrap)} />
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {onCheck && !checked && (
            <Button type="button" size="lg" onClick={onCheck} disabled={!selected}>
              {text("Check answer")}
            </Button>
          )}
          {onTryAgain && checked && (
            <Button type="button" size="lg" variant="outline" onClick={onTryAgain}>
              {text("Try again")}
            </Button>
          )}
          <Button type="button" size="lg" variant="secondary" onClick={onToggleHint}>
            <Lightbulb />
            {hintOpen ? text("Hide hint") : text("Hint")}
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={onToggleSolution}
            disabled={solutionLocked}
          >
            {solutionOpen
              ? text("Hide solution")
              : text("Full solution")}
          </Button>
        </div>
        {!checked && (
          <p className="mt-2 text-xs text-muted-foreground">
            {text("Keys A to D select an option. A hint does not reveal the letter.")}
          </p>
        )}
        {solutionLocked && (
          <p className="mt-2 text-xs text-muted-foreground">
            {text("The full solution opens after you hand in the paper.")}
          </p>
        )}

        {hintOpen && (
          <div className="mt-4 rounded-lg border border-hint/30 bg-hint/8 px-4 py-3">
            <p className="text-sm font-semibold text-hint">{text("Hint")}</p>
            <p className="math-copy mt-1 text-sm leading-6">
              <MathText text={tr(question.hint)} />
            </p>
          </div>
        )}

        {solutionOpen && !solutionLocked && (
          <div className="mt-4 rounded-lg border bg-background px-4 py-4">
            <p className="font-serif text-lg font-semibold">
              {text("Full solution")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {text("The correct option is")} {question.answer}.
            </p>
            <ol className="mt-3 space-y-3">
              {question.steps.map((step, stepIndex) => (
                <li key={step.en} className="flex gap-3 text-sm leading-6">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {stepIndex + 1}
                  </span>
                  <span className="math-copy">
                    <MathText text={tr(step)} />
                  </span>
                </li>
              ))}
            </ol>
            <Separator className="my-4" />
            <p className="text-sm font-semibold">{text("Why the other options are there")}</p>
            <ul className="mt-2 space-y-2">
              {question.options
                .filter((option) => option.key !== question.answer && option.trap)
                .map((option) => (
                  <li key={option.key} className="math-copy text-sm leading-6">
                    <span className="font-semibold">{option.key}. </span>
                    <MathText text={tr(option.trap!)} />
                  </li>
                ))}
            </ul>
            <div className="mt-4 border-l-2 border-margin pl-3">
              <p className="text-sm font-semibold text-margin">{text("Common exam trap")}</p>
              <p className="math-copy mt-1 text-sm leading-6">
                <MathText text={tr(question.examTip)} />
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
