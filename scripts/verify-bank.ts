import { questions } from "../lib/questions";
import { buildQuizIds } from "../lib/quiz";
import { TOPICS } from "../lib/topics";
import type { Question } from "../lib/types";

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x || 1;
}

function frac(value: number): string {
  if (!Number.isFinite(value)) throw new Error(`not finite: ${value}`);
  const sign = value < 0 ? "-" : "";
  const magnitude = Math.abs(value);
  for (let denominator = 1; denominator <= 48; denominator += 1) {
    const numerator = Math.round(magnitude * denominator);
    if (Math.abs(numerator / denominator - magnitude) < 1e-8) {
      const divisor = gcd(numerator, denominator);
      const top = numerator / divisor;
      const bottom = denominator / divisor;
      return bottom === 1 ? `${sign}${top}` : `${sign}${top}/${bottom}`;
    }
  }
  throw new Error(`not a short fraction: ${value}`);
}

function point(x: number, y: number): string {
  return `(${frac(x)}, ${frac(y)})`;
}

function line(a: number, b: number, c: number): string {
  let coefficients = [a, b, c].map((value) => {
    if (Math.abs(value - Math.round(value)) > 1e-8) {
      throw new Error(`non-integer coefficient ${value}`);
    }
    return Math.round(value);
  });
  const divisor = coefficients.reduce((current, value) => gcd(current, Math.abs(value)), 0);
  coefficients = coefficients.map((value) => value / divisor);
  if (
    coefficients[0] < 0 ||
    (coefficients[0] === 0 && coefficients[1] < 0) ||
    (coefficients[0] === 0 && coefficients[1] === 0 && coefficients[2] < 0)
  ) {
    coefficients = coefficients.map((value) => -value);
  }
  const [xCoef, yCoef, constant] = coefficients;
  const parts: string[] = [];
  const push = (coefficient: number, variable: string) => {
    if (coefficient === 0) return;
    const body = variable
      ? Math.abs(coefficient) === 1
        ? variable
        : `${Math.abs(coefficient)}${variable}`
      : `${Math.abs(coefficient)}`;
    if (parts.length === 0) parts.push(coefficient < 0 ? `-${body}` : body);
    else parts.push(coefficient < 0 ? `-${body}` : `+${body}`);
  };
  push(xCoef, "x");
  push(yCoef, "y");
  push(constant, "");
  return `${parts.join("")}=0`;
}

function area(points: [number, number][]): number {
  let sum = 0;
  for (let index = 0; index < points.length; index += 1) {
    const [x1, y1] = points[index];
    const [x2, y2] = points[(index + 1) % points.length];
    sum += x1 * y2 - x2 * y1;
  }
  return Math.abs(sum) / 2;
}

function internal(a: [number, number], b: [number, number], m: number, n: number): [number, number] {
  return [(n * a[0] + m * b[0]) / (m + n), (n * a[1] + m * b[1]) / (m + n)];
}

function external(a: [number, number], b: [number, number], m: number, n: number): [number, number] {
  return [(m * b[0] - n * a[0]) / (m - n), (m * b[1] - n * a[1]) / (m - n)];
}

function expectedValue(id: string): string {
  switch (id) {
    case "sl-slope-two-points":
      return frac((-4 - 2) / (3 - -1));
    case "sl-inclination-sqrt3":
      if (Math.tan((60 * Math.PI) / 180) <= 0) throw new Error("tan 60");
      return "60";
    case "sl-inclination-135":
      return frac(Math.tan((135 * Math.PI) / 180));
    case "sl-vertical-inclination":
      return "90";
    case "sl-perp-inclination": {
      const product = Math.tan((70 * Math.PI) / 180) * Math.tan((160 * Math.PI) / 180);
      if (Math.abs(product + 1) > 1e-9) throw new Error(`perp inclination product ${product}`);
      return "160";
    }
    case "eq-point-slope":
      return line(3, 1, 1);
    case "eq-two-point": {
      const slope = (-3 - 3) / (2 - -1);
      if (slope !== -2) throw new Error(String(slope));
      return line(2, 1, -1);
    }
    case "eq-slope-intercept":
      return line(2, -3, -12);
    case "eq-intercept-form":
      return line(2, -1, 6);
    case "eq-general-slope":
      return frac(-4 / -2);
    case "eq-point-on-line": {
      const onLine = (x: number, y: number) => Math.abs(3 * x + 2 * y - 12) < 1e-9;
      if (!onLine(2, 3) || onLine(1, 4) || onLine(4, 1) || onLine(0, 4)) {
        throw new Error("point-on-line check failed");
      }
      return point(2, 3);
    }
    case "hv-horizontal":
      return line(0, 1, 4);
    case "hv-same-x":
      return line(1, 0, -5);
    case "hv-perp-horizontal":
      return line(1, 0, -5);
    case "hv-three-lines":
      return "L1-parallel-L2-perp-L3";
    case "pp-parallel":
      return line(3, -4, -11);
    case "pp-perpendicular":
      return line(5, -2, -13);
    case "pp-find-a": {
      const a = 2 / 4;
      if (a * 4 + 2 * -1 !== 0) throw new Error("perpendicular condition");
      return frac(a);
    }
    case "pp-parallel-distinct":
      return "parallel-distinct";
    case "pp-k-parallel": {
      const slope = (-4 - 2) / (4 - 1);
      if (slope !== -2) throw new Error(String(slope));
      return frac(1 / 2);
    }
    case "pp-origin": {
      const x = 2;
      const y = 1;
      if (x + y - 3 !== 0 || 2 * x - y - 3 !== 0) throw new Error("intersection");
      return line(1, -2, 0);
    }
    case "pp-family": {
      const x = 1;
      const y = 2;
      if (x - 2 * y + 3 !== 0 || 2 * x + y - 4 !== 0) throw new Error("family intersection");
      return line(3, 1, -5);
    }
    case "dist-two-points":
      return frac(Math.hypot(4 - -2, -5 - 3));
    case "dist-foot":
      return point(-1, 0);
    case "dist-point-line":
      return frac(Math.abs(3 * -1 - 4 * 2 + 5) / Math.hypot(3, -4));
    case "dist-parameter": {
      const roots = [3 + 8, 3 - 8];
      if (roots[0] !== 11 || roots[1] !== -5) throw new Error(roots.join(","));
      return "11,-5";
    }
    case "dist-parallel-lines":
      return frac(Math.abs(1 - -9) / 5);
    case "mid-basic":
      return point((-3 + 7) / 2, (4 + -2) / 2);
    case "sec-internal": {
      const [x, y] = internal([2, -1], [8, 5], 1, 2);
      return point(x, y);
    }
    case "sec-external": {
      const [x, y] = external([2, -1], [8, 5], 1, 2);
      return point(x, y);
    }
    case "mid-endpoint":
      return point(2 * 3 - -1, 2 * -1 - 4);
    case "sec-three-two": {
      const [x, y] = internal([-2, 1], [8, 11], 3, 2);
      return point(x, y);
    }
    case "area-basic":
      return frac(area([[1, 2], [5, 2], [3, 6]]));
    case "area-collinear": {
      const slope = (5 - 2) / (2 - -1);
      return frac(2 + slope * (5 - -1));
    }
    case "area-same-height":
      return "2:3";
    case "area-similar":
      return "1:9";
    case "area-trapezium":
      return "1:8";
    case "area-coordinate": {
      const p = internal([7, 1], [1, 7], 1, 2);
      const left = area([[1, 1], [7, 1], p]);
      const right = area([[1, 1], p, [1, 7]]);
      if (left !== 6 || right !== 12) throw new Error(`${left}:${right}`);
      return "1:2";
    }
    case "area-absolute": {
      const positive = (20 + 8) / 6;
      const negative = (-20 + 8) / 6;
      if (frac(positive) !== "14/3" || frac(negative) !== "-2") {
        throw new Error(`${positive}, ${negative}`);
      }
      return "-2,14/3";
    }
    case "cen-concept":
      return "circumcentre-perp-bisectors";
    case "cen-ratio":
      return "2:1";
    case "cen-centroid":
      return point((1 + 5 + 3) / 3, (2 + 4 + 10) / 3);
    case "cen-ortho":
      return point(0, 0);
    case "cen-circum":
      return point((6 + 0) / 2, (0 + 8) / 2);
    case "cen-in": {
      const ix = (10 * 0 + 8 * 6 + 6 * 0) / 24;
      const iy = (10 * 0 + 8 * 0 + 6 * 8) / 24;
      const radius = (6 + 8 - 10) / 2;
      if (ix !== radius || iy !== radius) throw new Error("incentre");
      return point(ix, iy);
    }
    case "cen-altitude": {
      const slope = (-2 - 2) / (4 - -2);
      if (Math.abs(slope - -2 / 3) > 1e-9) throw new Error(String(slope));
      return line(3, -2, 0);
    }
    case "cen-bisector": {
      const slope = (1 - 3) / (3 - -1);
      if (slope !== -0.5) throw new Error(String(slope));
      return line(2, -1, 0);
    }
    case "cen-ortho-iso": {
      if (4 + 2 * 2 - 8 !== 0) throw new Error("orthocentre not on altitude");
      return point(4, 2);
    }
    default:
      throw new Error(`no independent check for ${id}`);
  }
}

function assertText(question: Question, label: string, value: { en: string; zh: string } | undefined) {
  if (!value?.en.trim() || !value.zh.trim()) {
    throw new Error(`${question.id} missing ${label}`);
  }
}

const ids = new Set<string>();
for (const question of questions) {
  if (ids.has(question.id)) throw new Error(`duplicate id ${question.id}`);
  ids.add(question.id);
  if (!TOPICS.some((topic) => topic.id === question.topicId)) {
    throw new Error(`${question.id} has unknown topic ${question.topicId}`);
  }
  if (question.options.map((option) => option.key).join("") !== "ABCD") {
    throw new Error(`${question.id} options are not A B C D`);
  }
  const values = new Set(question.options.map((option) => option.value));
  if (values.size !== 4) throw new Error(`${question.id} has duplicate option values`);
  assertText(question, "stem", question.stem);
  assertText(question, "hint", question.hint);
  assertText(question, "exam tip", question.examTip);
  if (question.steps.length < 3) throw new Error(`${question.id} needs at least 3 steps`);
  for (const step of question.steps) assertText(question, "step", step);
  const expected = expectedValue(question.id);
  const matches = question.options.filter((option) => option.value === expected);
  if (matches.length !== 1) {
    throw new Error(
      `${question.id} expected value ${expected}, found ${matches.map((option) => option.key).join(",") || "none"} (${question.options.map((option) => option.value).join(" | ")})`,
    );
  }
  if (matches[0].key !== question.answer) {
    throw new Error(`${question.id} answer key is ${question.answer} but value sits on ${matches[0].key}`);
  }
  for (const option of question.options) {
    if (option.key === question.answer) continue;
    assertText(question, `trap ${option.key}`, option.trap);
  }
}

const topicIds = TOPICS.map((topic) => topic.id);
const first = buildQuizIds("S4-1105", 10, questions, topicIds);
const second = buildQuizIds("S4-1105", 10, questions, topicIds);
if (first.join() !== second.join()) throw new Error("quiz code is not stable");
if (new Set(first).size !== 10) throw new Error("quiz repeated a question");
const covered = new Set(first.map((id) => questions.find((question) => question.id === id)?.topicId));
if (covered.size < 8) throw new Error(`quiz covered only ${covered.size} topics`);

console.log(`Verified ${questions.length} questions.`);
for (const topic of TOPICS) {
  const count = questions.filter((question) => question.topicId === topic.id).length;
  console.log(`  ${topic.id}: ${count}`);
}
console.log(`Sample paper S4-1105: ${first.join(", ")}`);
