import type { Localized } from "./types";

/** Option text that is identical in English and Chinese, usually pure mathematics. */
export function same(text: string): Localized {
  return { en: text, zh: text };
}
