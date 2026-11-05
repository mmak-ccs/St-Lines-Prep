"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { questions, questionsByTopic } from "@/lib/questions";
import { TOPICS, topicById } from "@/lib/topics";
import type { OptionKey } from "@/lib/types";
import { MathText } from "./math-text";
import { QuestionCard } from "./question-card";
import { Palette, type PaletteTone } from "./palette";
import { useI18n } from "./providers";

type LocalState = {
  selected?: OptionKey;
  checked: boolean;
  hintOpen: boolean;
  solutionOpen: boolean;
  solutionBeforeCheck: boolean;
};

const emptyState: LocalState = {
  checked: false,
  hintOpen: false,
  solutionOpen: false,
  solutionBeforeCheck: false,
};

export function PracticeIndex() {
  const { tr } = useI18n();
  const text = (en: string) => en;
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-margin uppercase">
        {text("Topic practice")}
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
        {text("Choose a topic")}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
        {text("Work one question at a time. The hint reminds you of the method. The full solution shows every line of working and explains the other three options.")}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {TOPICS.map((topic) => {
          const count = questions.filter((question) => question.topicId === topic.id).length;
          return (
            <Link
              key={topic.id}
              href={`/practice/${topic.id}`}
              className="rounded-xl bg-card px-4 py-4 ring-1 ring-foreground/10 hover:bg-muted/40"
            >
              <span className="block font-serif text-lg font-semibold">
                {topic.en}
              </span>
              <span className="mt-1 block text-sm leading-6 text-muted-foreground">{tr(topic.blurb)}</span>
              <span className="mt-2 block text-xs text-muted-foreground">
                {count} {text("questions")}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function TopicDrill({ topicId }: { topicId: string }) {
  const topic = topicById(topicId);
  const bank = questionsByTopic(topicId);
  const { tr, attempts, record, markStudied } = useI18n();
  const text = (en: string) => en;
  const [index, setIndex] = useState(0);
  const [missedIds, setMissedIds] = useState<string[] | null>(null);
  const [local, setLocal] = useState<Record<string, LocalState>>({});

  const visible = missedIds ? bank.filter((question) => missedIds.includes(question.id)) : bank;

  useEffect(() => {
    if (index > 0 && index >= visible.length) setIndex(0);
  }, [index, visible.length]);

  if (!topic) {
    return (
      <p>
        {text("This topic is not in the bank.")}{" "}
        <Link href="/practice" className="underline">
          {text("Back to topics")}
        </Link>
      </p>
    );
  }

  const correctCount = bank.filter((question) => attempts[question.id]?.status === "correct").length;

  function patch(id: string, partial: Partial<LocalState>) {
    setLocal((current) => {
      const previous = current[id] ?? emptyState;
      return { ...current, [id]: { ...previous, ...partial } };
    });
  }

  if (visible.length === 0) {
    return (
      <div>
        <h1 className="font-serif text-3xl font-semibold">{topic.en}</h1>
        <p className="mt-3 text-sm leading-6">
          {text("Every question in this topic has a correct answer recorded before the solution was opened.")}
        </p>
        <Button type="button" className="mt-4" variant="outline" onClick={() => setMissedIds(null)}>
          {text("Show all questions")}
        </Button>
      </div>
    );
  }

  const question = visible[Math.min(index, visible.length - 1)];
  const state = local[question.id] ?? emptyState;

  function tone(itemIndex: number): PaletteTone {
    const item = visible[itemIndex];
    const status = attempts[item.id]?.status;
    if (status === "correct" || status === "wrong" || status === "studied") return status;
    return "empty";
  }

  return (
    <div className="space-y-4">
      <div>
        <Link href="/practice" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
          {text("All topics")}
        </Link>
        <h1 className="mt-2 font-serif text-3xl font-semibold">{topic.en}</h1>
        <p className="math-copy mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          <span className="font-medium text-foreground">{text("Key idea. ")}</span>
          <MathText text={tr(topic.idea)} />
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {text(`${correctCount} of ${bank.length} correct before the solution was opened.`)}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Palette
          count={visible.length}
          current={Math.min(index, visible.length - 1)}
          onPick={setIndex}
          tone={tone}
          label={text("Questions")}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            if (missedIds) {
              setMissedIds(null);
              return;
            }
            setMissedIds(
              bank.filter((item) => attempts[item.id]?.status !== "correct").map((item) => item.id),
            );
            setIndex(0);
          }}
        >
          {missedIds ? text("Show all") : text("Hide ones already correct")}
        </Button>
      </div>

      <QuestionCard
        question={question}
        index={Math.min(index, visible.length - 1)}
        total={visible.length}
        topicLabel={topic.en}
        selected={state.selected}
        checked={state.checked}
        hintOpen={state.hintOpen}
        solutionOpen={state.solutionOpen}
        onSelect={(key) => patch(question.id, { selected: key })}
        onCheck={() => {
          if (!state.selected) return;
          const used = state.solutionBeforeCheck || state.solutionOpen;
          record(question.id, state.selected, state.selected === question.answer, used);
          patch(question.id, { checked: true });
        }}
        onToggleHint={() => patch(question.id, { hintOpen: !state.hintOpen })}
        onToggleSolution={() => {
          const next = !state.solutionOpen;
          if (next && !state.checked) {
            patch(question.id, { solutionOpen: true, solutionBeforeCheck: true });
            return;
          }
          patch(question.id, { solutionOpen: next });
          if (next) markStudied(question.id);
        }}
        onTryAgain={
          state.checked
            ? () =>
                patch(question.id, {
                  selected: undefined,
                  checked: false,
                  solutionBeforeCheck: state.solutionBeforeCheck || state.solutionOpen,
                })
            : undefined
        }
      />

      <div className="flex items-center justify-between gap-2">
        <Button type="button" variant="outline" disabled={index === 0} onClick={() => setIndex((value) => value - 1)}>
          {text("Previous")}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={index >= visible.length - 1}
          onClick={() => setIndex((value) => value + 1)}
        >
          {text("Next")}
        </Button>
      </div>
    </div>
  );
}
