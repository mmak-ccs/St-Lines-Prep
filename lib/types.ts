export type Lang = "en" | "zh";

export type Localized = {
  en: string;
  zh: string;
};

export type OptionKey = "A" | "B" | "C" | "D";

export type Difficulty = "foundation" | "standard" | "exam";

export type CoordFigure = {
  type: "coord";
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  points?: {
    x: number;
    y: number;
    label: string;
    dx?: number;
    dy?: number;
  }[];
  segments?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    dashed?: boolean;
    tone?: "ink" | "accent" | "soft";
  }[];
  circles?: {
    cx: number;
    cy: number;
    r: number;
    dashed?: boolean;
  }[];
  arcs?: {
    cx: number;
    cy: number;
    r: number;
    startDeg: number;
    endDeg: number;
    label?: string;
  }[];
  rightAngles?: {
    x: number;
    y: number;
    dx1: number;
    dy1: number;
    dx2: number;
    dy2: number;
  }[];
};

export type SketchFigure = {
  type: "sketch";
  lines: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    dashed?: boolean;
    tone?: "ink" | "accent" | "soft";
  }[];
  labels: { x: number; y: number; text: string }[];
};

export type FigureSpec = CoordFigure | SketchFigure;

export type Choice = {
  key: OptionKey;
  text: Localized;
  /** Canonical token checked by scripts/verify-bank.ts. Not shown to students. */
  value: string;
  trap?: Localized;
};

export type Question = {
  id: string;
  topicId: string;
  difficulty: Difficulty;
  stem: Localized;
  figure?: FigureSpec;
  options: [Choice, Choice, Choice, Choice];
  answer: OptionKey;
  hint: Localized;
  steps: Localized[];
  examTip: Localized;
};

export type AttemptStatus = "correct" | "wrong" | "studied";

export type Attempt = {
  status: AttemptStatus;
  selected: OptionKey;
};
