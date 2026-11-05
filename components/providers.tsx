"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Attempt, Localized, OptionKey } from "@/lib/types";

const STORAGE_KEY = "s4-straight-lines-v2";

type Store = {
  attempts: Record<string, Attempt>;
};

type I18nValue = {
  tr: (text: Localized) => string;
  attempts: Record<string, Attempt>;
  record: (
    id: string,
    selected: OptionKey,
    correct: boolean,
    usedSolution: boolean,
  ) => void;
  markStudied: (id: string) => void;
  resetProgress: () => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [attempts, setAttempts] = useState<Record<string, Attempt>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem("s4-straight-lines-v1");
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Store>;
        if (parsed.attempts && typeof parsed.attempts === "object") {
          setAttempts(parsed.attempts);
        }
      }
    } catch {
      // Ignore a damaged local record and start again.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ attempts }));
    document.documentElement.lang = "en";
  }, [attempts, ready]);

  const record = useCallback(
    (id: string, selected: OptionKey, correct: boolean, usedSolution: boolean) => {
      setAttempts((current) => {
        if (current[id]?.status === "correct") return current;
        const status = correct && !usedSolution ? "correct" : usedSolution ? "studied" : "wrong";
        return { ...current, [id]: { status, selected } };
      });
    },
    [],
  );

  const markStudied = useCallback((id: string) => {
    setAttempts((current) => {
      const previous = current[id];
      if (!previous || previous.status === "correct") return current;
      return { ...current, [id]: { ...previous, status: "studied" } };
    });
  }, []);

  const resetProgress = useCallback(() => setAttempts({}), []);

  const value = useMemo<I18nValue>(
    () => ({
      tr: (text) => text.en,
      attempts,
      record,
      markStudied,
      resetProgress,
    }),
    [attempts, markStudied, record, resetProgress],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used within Providers");
  return value;
}
