"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/lib/questions";
import { TOPICS } from "@/lib/topics";
import { useI18n } from "./providers";

const traps = [
  {
    href: "/practice/slope",
    en: "The slope fraction is written upside down, or only one coordinate changes sign.",
  },
  {
    href: "/practice/slope",
    en: "An obtuse inclination is treated as its acute partner, so a negative slope becomes positive.",
  },
  {
    href: "/practice/parallel",
    en: "Parallel and perpendicular are swapped, or the slope only changes sign instead of becoming the negative reciprocal.",
  },
  {
    href: "/practice/section",
    en: "In the ratio m:n, the weight m is attached to the wrong endpoint.",
  },
  {
    href: "/practice/area",
    en: "A same-height area ratio is squared, or a similar-triangle ratio is not.",
  },
  {
    href: "/practice/centres",
    en: "The centroid, orthocentre, circumcentre and incentre are paired with the wrong lines.",
  },
];

export function HomeView() {
  const { tr, attempts, resetProgress } = useI18n();
  const text = (en: string) => en;
  const [confirmReset, setConfirmReset] = useState(false);
  const attempted = Object.keys(attempts).length;
  const correct = Object.values(attempts).filter((item) => item.status === "correct").length;

  return (
    <div className="space-y-10">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-margin uppercase">
          HKDSE Mathematics · Compulsory Part · S4
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Equations of Straight Lines
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/90">
          {text("Forty-eight multiple-choice questions in the style of HKDSE Paper 2. Each wrong option is a mistake that shows up on Secondary 4 scripts: a reversed ratio, a missing minus sign, or a squared area ratio that should have stayed as it was. Open a hint, or the full worked solution, whenever you want to check.")}
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <Link href="/practice" className="block">
          <Card className="h-full transition-colors hover:bg-muted/40">
            <CardHeader>
              <CardTitle>{text("Practice by topic")}</CardTitle>
              <CardDescription>
                {text("Eight topics, from slope to the four centres. Hints and full solutions stay open.")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>{questions.length} {text("questions")}</Badge>
            </CardContent>
          </Card>
        </Link>
        <Link href="/quiz" className="block">
          <Card className="h-full transition-colors hover:bg-muted/40">
            <CardHeader>
              <CardTitle>{text("Mixed quiz")}</CardTitle>
              <CardDescription>
                {text("Ten questions from across the topic. Same paper code, same paper. Solutions open after you hand in.")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{text("Calculator allowed")}</Badge>
            </CardContent>
          </Card>
        </Link>
        <Link href="/formulas" className="block">
          <Card className="h-full transition-colors hover:bg-muted/40">
            <CardHeader>
              <CardTitle>{text("Formulae and traps")}</CardTitle>
              <CardDescription>
                {text("The forms, tests and ratios, with the slip that usually sits next to each one.")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">{text("One-page reference")}</Badge>
            </CardContent>
          </Card>
        </Link>
      </section>

      <section>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-2xl font-semibold">{text("Topics")}</h2>
            <p className="text-sm text-muted-foreground">
              {attempted === 0
                ? text("No attempts yet. Slope and inclination is the idea the later questions keep using.")
                : text(`${correct} correct without the solution, out of ${questions.length}. ${attempted} attempted.`)}
            </p>
          </div>
          {attempted > 0 && (
            <Button
              type="button"
              variant={confirmReset ? "destructive" : "outline"}
              size="sm"
              onClick={() => {
                if (!confirmReset) {
                  setConfirmReset(true);
                  return;
                }
                resetProgress();
                setConfirmReset(false);
              }}
            >
              {confirmReset ? text("Confirm reset") : text("Reset progress")}
            </Button>
          )}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {TOPICS.map((topic) => {
            const bank = questions.filter((question) => question.topicId === topic.id);
            const done = bank.filter((question) => attempts[question.id]?.status === "correct").length;
            return (
              <Link key={topic.id} href={`/practice/${topic.id}`} className="block">
                <Card className="h-full transition-colors hover:bg-muted/40">
                  <CardHeader>
                    <CardTitle>{topic.en}</CardTitle>
                    <CardDescription>{tr(topic.blurb)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={bank.length === 0 ? 0 : (done / bank.length) * 100}>
                      <span className="text-xs text-muted-foreground">
                        {done}/{bank.length}
                      </span>
                    </Progress>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-semibold">{text("Six traps that cost the mark")}</h2>
        <ol className="mt-3 space-y-2">
          {traps.map((trap, index) => (
            <li key={trap.en}>
              <Link
                href={trap.href}
                className="flex gap-3 rounded-lg bg-card px-4 py-3 ring-1 ring-foreground/10 hover:bg-muted/50"
              >
                <span className="font-serif text-lg font-semibold text-margin">{index + 1}</span>
                <span className="text-sm leading-6">{trap.en}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
