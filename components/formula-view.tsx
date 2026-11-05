"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { checklist, formulaSections } from "@/lib/formulas";
import { MathText } from "./math-text";
import { useI18n } from "./providers";

export function FormulaView() {
  const { tr } = useI18n();
  const text = (en: string) => en;

  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-margin uppercase">
        {text("Reference")}
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
        {text("Formulae and traps")}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
        {text("Keep this beside the questions. The right-hand note on each row is the mistake the options are written to catch.")}
      </p>

      <Tabs defaultValue="formulae" className="mt-6">
        <TabsList>
          <TabsTrigger value="formulae">{text("Formulae")}</TabsTrigger>
          <TabsTrigger value="check">{text("Before you shade")}</TabsTrigger>
        </TabsList>
        <TabsContent value="formulae" className="mt-4 space-y-4">
          {formulaSections.map((section) => (
            <Card key={section.id}>
              <CardHeader>
                <CardTitle className="font-serif text-xl">{tr(section.title)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.rows.map((row) => (
                  <div key={row.name.en} className="grid gap-2 border-t border-border pt-3 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_1fr]">
                    <div>
                      <p className="text-sm font-semibold">{tr(row.name)}</p>
                      <p className="math-copy mt-1 text-sm">
                        <MathText text={row.math} />
                      </p>
                    </div>
                    <div className="space-y-1 text-sm leading-6">
                      <p className="math-copy">
                        <MathText text={tr(row.when)} />
                      </p>
                      <p className="math-copy text-margin">
                        <MathText text={tr(row.trap)} />
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="check" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{text("Before you shade the box")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {checklist.map((item, index) => (
                  <li key={item.en} className="flex gap-3 text-sm leading-6">
                    <span className="font-serif text-lg font-semibold text-margin">{index + 1}</span>
                    <span className="math-copy">
                      <MathText text={tr(item)} />
                    </span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
