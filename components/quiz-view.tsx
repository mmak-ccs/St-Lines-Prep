"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { questionById, questions } from "@/lib/questions";
import { buildQuizIds, todayPaperCode } from "@/lib/quiz";
import { TOPICS, topicById } from "@/lib/topics";
import type { OptionKey } from "@/lib/types";
import { QuestionCard } from "./question-card";
import { Palette, type PaletteTone } from "./palette";
import { useI18n } from "./providers";

export function QuizView() {
  const { record } = useI18n();
  const text = (en: string) => en;
  const [code, setCode] = useState("");
  const [paperCode, setPaperCode] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"setup" | "paper" | "review">("setup");
  const [selections, setSelections] = useState<Record<string, OptionKey>>({});
  const [hints, setHints] = useState<Record<string, boolean>>({});
  const [solutions, setSolutions] = useState<Record<string, boolean>>({});
  const [warn, setWarn] = useState(false);

  useEffect(() => {
    setCode(todayPaperCode());
  }, []);

  const ids = useMemo(
    () =>
      paperCode
        ? buildQuizIds(
            paperCode,
            10,
            questions,
            TOPICS.map((topic) => topic.id),
          )
        : [],
    [paperCode],
  );

  function start(nextCode: string) {
    const trimmed = nextCode.trim() || todayPaperCode();
    setPaperCode(trimmed);
    setCode(trimmed);
    setIndex(0);
    setPhase("paper");
    setSelections({});
    setHints({});
    setSolutions({});
    setWarn(false);
  }

  if (phase === "setup" || !paperCode) {
    return (
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-margin uppercase">
          {text("Paper 2 style")}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
          {text("Mixed quiz")}
        </h1>
        <p className="mt-3 text-sm leading-7">
          {text("Ten questions drawn from every part of the topic. Give the class a paper code and everyone receives the same paper. Hints are available. The full solution stays closed until you hand the paper in. A calculator is allowed, as in the live paper.")}
        </p>
        <label className="mt-6 block text-sm font-medium" htmlFor="paper-code">
          {text("Paper code")}
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <Input
            id="paper-code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="h-10 sm:max-w-xs"
          />
          <Button type="button" size="lg" onClick={() => start(code)}>
            {text("Start this paper")}
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={() => setCode(`S4-${Math.floor(1000 + Math.random() * 9000)}`)}
          >
            {text("New code")}
          </Button>
        </div>
      </div>
    );
  }

  const question = questionById(ids[index]);
  if (!question) return null;
  const topic = topicById(question.topicId);
  const blank = ids.filter((id) => !selections[id]).length;
  const score = ids.filter((id) => selections[id] && questionById(id)?.answer === selections[id]).length;

  function handIn() {
    if (blank > 0 && !warn) {
      setWarn(true);
      return;
    }
    for (const id of ids) {
      const selected = selections[id];
      if (!selected) continue;
      const item = questionById(id);
      if (!item) continue;
      record(id, selected, item.answer === selected, false);
    }
    setPhase("review");
    setWarn(false);
  }

  function tone(itemIndex: number): PaletteTone {
    const id = ids[itemIndex];
    if (phase === "review") {
      const selected = selections[id];
      if (!selected) return "empty";
      return questionById(id)?.answer === selected ? "correct" : "wrong";
    }
    return selections[id] ? "answered" : "empty";
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-margin uppercase">
            {text("Paper code")} {paperCode}
          </p>
          <h1 className="mt-1 font-serif text-3xl font-semibold">
            {phase === "review" ? text("Review") : text("Mixed quiz")}
          </h1>
          {phase === "review" ? (
            <p className="mt-1 text-sm">
              {text(`${score} out of ${ids.length}.`)}
            </p>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">
              {text("Hand in when every row you want to count has an option.")}
            </p>
          )}
        </div>
        <Button type="button" variant="outline" size="sm" onClick={() => setPhase("setup")}>
          {text("Another paper")}
        </Button>
      </div>

      <Palette count={ids.length} current={index} onPick={setIndex} tone={tone} label={text("Questions")} />

      <QuestionCard
        question={question}
        index={index}
        total={ids.length}
        topicLabel={topic ? topic.en : ""}
        selected={selections[question.id]}
        checked={phase === "review"}
        hintOpen={Boolean(hints[question.id])}
        solutionOpen={phase === "review" && Boolean(solutions[question.id])}
        solutionLocked={phase !== "review"}
        onSelect={
          phase === "paper"
            ? (key) => {
                setSelections((current) => ({ ...current, [question.id]: key }));
                setWarn(false);
              }
            : undefined
        }
        onToggleHint={() => setHints((current) => ({ ...current, [question.id]: !current[question.id] }))}
        onToggleSolution={() =>
          setSolutions((current) => ({ ...current, [question.id]: !current[question.id] }))
        }
      />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Button type="button" variant="outline" disabled={index === 0} onClick={() => setIndex((value) => value - 1)}>
          {text("Previous")}
        </Button>
        <div className="flex flex-wrap gap-2">
          {phase === "paper" && (
            <Button type="button" onClick={handIn}>
              {warn
                ? text(`Hand in with ${blank} blank`)
                : text("Hand in")}
            </Button>
          )}
          <Button
            type="button"
            variant="outline"
            disabled={index >= ids.length - 1}
            onClick={() => setIndex((value) => value + 1)}
          >
            {text("Next")}
          </Button>
        </div>
      </div>
      {warn && phase === "paper" && (
        <p className="text-sm text-destructive">
          {text(`${blank} question${blank === 1 ? "" : "s"} still have no option. Press the button again to hand in anyway.`)}
        </p>
      )}
    </div>
  );
}
