import type { Question } from "./types";

export function hashString(input: string): number {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    const current = copy[index];
    copy[index] = copy[swapIndex];
    copy[swapIndex] = current;
  }
  return copy;
}

export function buildQuizIds(
  code: string,
  count: number,
  bank: Pick<Question, "id" | "topicId">[],
  topicOrder: string[],
): string[] {
  const random = mulberry32(hashString(code || "S4"));
  const pools = new Map<string, string[]>();
  for (const topicId of topicOrder) pools.set(topicId, []);
  for (const question of bank) {
    const pool = pools.get(question.topicId);
    if (pool) pool.push(question.id);
  }
  for (const [topicId, ids] of pools) {
    pools.set(topicId, shuffle(ids, random));
  }

  const picked: string[] = [];
  let guard = 0;
  while (picked.length < count && guard < topicOrder.length * count) {
    let added = false;
    for (const topicId of topicOrder) {
      const pool = pools.get(topicId);
      const next = pool?.pop();
      if (!next) continue;
      picked.push(next);
      added = true;
      if (picked.length === count) break;
    }
    if (!added) break;
    guard += 1;
  }

  return shuffle(picked, random);
}

export function todayPaperCode(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-HK", {
    timeZone: "Asia/Hong_Kong",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const month = parts.find((part) => part.type === "month")?.value ?? "01";
  const day = parts.find((part) => part.type === "day")?.value ?? "01";
  return `S4-${month}${day}`;
}
