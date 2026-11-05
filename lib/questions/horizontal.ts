import { same } from "../same";
import type { Question } from "../types";

export const horizontalQuestions: Question[] = [
  {
    id: "hv-horizontal",
    topicId: "horizontal",
    difficulty: "foundation",
    stem: {
      en: "The equation of the horizontal line passing through $(3,\\,-4)$ is",
      zh: "通過 $(3,\\,-4)$ 的水平線的方程是",
    },
    figure: {
      type: "coord",
      xMin: -1,
      xMax: 6,
      yMin: -6,
      yMax: 3,
      segments: [{ x1: -0.5, y1: -4, x2: 5.5, y2: -4, tone: "accent" }],
      points: [{ x: 3, y: -4, label: "P", dx: 8, dy: 14 }],
    },
    options: [
      {
        key: "A",
        text: same("$x=3$"),
        value: "x-3=0",
        trap: {
          en: "This is the vertical line through the point. A horizontal line keeps $y$ fixed, not $x$.",
          zh: "這是通過該點的鉛垂線。水平線固定的是 $y$，不是 $x$。",
        },
      },
      {
        key: "B",
        text: same("$y=3$"),
        value: "y-3=0",
        trap: {
          en: "The x-coordinate was used as the constant in a horizontal equation.",
          zh: "把 x 坐標寫進了水平線的方程。",
        },
      },
      {
        key: "C",
        text: same("$x=-4$"),
        value: "x+4=0",
        trap: {
          en: "The y-coordinate was used, but the equation was written as a vertical line.",
          zh: "用了 y 坐標，卻把它寫成了鉛垂線。",
        },
      },
      { key: "D", text: same("$y=-4$"), value: "y+4=0" },
    ],
    answer: "D",
    hint: {
      en: "On a horizontal line every point has the same y-coordinate. Read the y-coordinate of the given point.",
      zh: "水平線上每一點的 y 坐標都相同。讀出已知點的 y 坐標。",
    },
    steps: [
      {
        en: "A horizontal line has equation $y=k$. Its slope is $0$ and its inclination is $0^\\circ$.",
        zh: "水平線的方程是 $y=k$。斜率是 $0$，傾角是 $0^\\circ$。",
      },
      {
        en: "The given point has y-coordinate $-4$, so the line is $y=-4$.",
        zh: "已知點的 y 坐標是 $-4$，所以直線是 $y=-4$。",
      },
      {
        en: "The x-coordinate $3$ tells you that the point lies on this horizontal line. It does not appear in the equation.",
        zh: "x 坐標 $3$ 只說明該點在這條水平線上。它不會出現在方程裏。",
      },
    ],
    examTip: {
      en: "Say the sentence aloud: “horizontal, same height, equation $y=\\ldots$”. The option $x=3$ is the other line through the same point, and it is vertical.",
      zh: "可以先說一句：「水平、同一高度、方程是 $y=\\ldots$」。選項 $x=3$ 是通過同一點的另一條線，它是鉛垂線。",
    },
  },
  {
    id: "hv-same-x",
    topicId: "horizontal",
    difficulty: "foundation",
    stem: {
      en: "The straight line passing through $(5,\\,-2)$ and $(5,\\,7)$ has equation",
      zh: "通過 $(5,\\,-2)$ 和 $(5,\\,7)$ 的直線方程是",
    },
    options: [
      {
        key: "A",
        text: same("$y=5$"),
        value: "y-5=0",
        trap: {
          en: "The repeated coordinate was put into a horizontal equation. The repeated coordinate is an x-coordinate, so the line is vertical.",
          zh: "把重複出現的坐標放進了水平方程。重複的是 x 坐標，所以直線是鉛垂的。",
        },
      },
      { key: "B", text: same("$x=5$"), value: "x-5=0" },
      {
        key: "C",
        text: same("$y=-2$"),
        value: "y+2=0",
        trap: {
          en: "This horizontal line passes through only the first point. The second point has y-coordinate $7$.",
          zh: "這條水平線只通過第一點。第二點的 y 坐標是 $7$。",
        },
      },
      {
        key: "D",
        text: same("$x=-2$"),
        value: "x+2=0",
        trap: {
          en: "A y-coordinate was used as the constant of a vertical line. Neither given point has x-coordinate $-2$.",
          zh: "把一個 y 坐標當成了鉛垂線的常數。兩個已知點的 x 坐標都不是 $-2$。",
        },
      },
    ],
    answer: "B",
    hint: {
      en: "Look at the two x-coordinates before you try to calculate a slope. If they are equal, stop: the run is zero and the line is vertical.",
      zh: "計算斜率之前，先看兩個 x 坐標。如果它們相等，就停下來：水平變化是零，直線是鉛垂線。",
    },
    steps: [
      {
        en: "Both points have x-coordinate $5$. The line is vertical.",
        zh: "兩點的 x 坐標都是 $5$。這是一條鉛垂線。",
      },
      {
        en: "Its equation is $x=5$.",
        zh: "方程是 $x=5$。",
      },
      {
        en: "The slope formula gives $\\dfrac{7-(-2)}{5-5}=\\dfrac{9}{0}$, which is undefined. There is no value of $m$ for which $y=mx+c$ can describe this line.",
        zh: "斜率公式得到 $\\dfrac{7-(-2)}{5-5}=\\dfrac{9}{0}$，沒有定義。沒有任何 $m$ 能讓 $y=mx+c$ 表示這條直線。",
      },
    ],
    examTip: {
      en: "If a denominator is zero, do not invent a slope of $0$. Undefined and zero are the two answers students swap most often on this topic.",
      zh: "分母是零時，不要把斜率改寫成 $0$。在這個課題裏，「無定義」和「零」是最常被對調的兩個答案。",
    },
  },
  {
    id: "hv-perp-horizontal",
    topicId: "horizontal",
    difficulty: "standard",
    stem: {
      en: "Which of the following straight lines is perpendicular to the line $y=2$?",
      zh: "下列哪一條直線與 $y=2$ 垂直？",
    },
    options: [
      {
        key: "A",
        text: same("$y=-2$"),
        value: "y+2=0",
        trap: {
          en: "$y=-2$ is also horizontal. Two horizontal lines are parallel, and distinct when the constants differ.",
          zh: "$y=-2$ 也是水平線。兩條水平線互相平行；常數不同時，它們是相異的。",
        },
      },
      {
        key: "B",
        text: same("$y=x$"),
        value: "x-y=0",
        trap: {
          en: "This line has inclination $45^\\circ$. The angle between it and a horizontal line is $45^\\circ$, not $90^\\circ$.",
          zh: "這條直線的傾角是 $45^\\circ$。它和水平線的夾角是 $45^\\circ$，不是 $90^\\circ$。",
        },
      },
      { key: "C", text: same("$x=5$"), value: "x-5=0" },
      {
        key: "D",
        text: same("$2x+y=0$"),
        value: "2x+y=0",
        trap: {
          en: "This line has slope $-2$. The product of its slope and the slope of $y=2$ is $0$, not $-1$.",
          zh: "這條直線的斜率是 $-2$。它和 $y=2$ 的斜率之積是 $0$，不是 $-1$。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "$y=2$ is horizontal. A line perpendicular to a horizontal line is vertical. Which option has the form $x=h$?",
      zh: "$y=2$ 是水平線。與水平線垂直的直線是鉛垂線。哪個選項的形式是 $x=h$?",
    },
    steps: [
      {
        en: "The line $y=2$ is horizontal. Its slope is $0$ and its inclination is $0^\\circ$.",
        zh: "直線 $y=2$ 是水平線。斜率是 $0$，傾角是 $0^\\circ$。",
      },
      {
        en: "A perpendicular line has inclination $90^\\circ$, so it is vertical and has an equation of the form $x=h$.",
        zh: "垂直的直線傾角是 $90^\\circ$，所以它是鉛垂線，方程的形式是 $x=h$。",
      },
      {
        en: "Among the options, only $x=5$ is vertical. Any vertical line is perpendicular to any horizontal line.",
        zh: "選項中只有 $x=5$ 是鉛垂線。任何鉛垂線都與任何水平線垂直。",
      },
    ],
    examTip: {
      en: "The negative-reciprocal rule $m_1 m_2=-1$ cannot be used when one line is vertical, because that line has no slope. Recognise the horizontal and vertical cases before you start dividing.",
      zh: "當其中一條線是鉛垂線時，不能用負倒數法則 $m_1 m_2=-1$，因為那條線沒有斜率。開始做除法之前，先辨認水平線和鉛垂線。",
    },
  },
  {
    id: "hv-three-lines",
    topicId: "horizontal",
    difficulty: "standard",
    stem: {
      en: "$L_1:\\, x=4$, $L_2:\\, x=-1$ and $L_3:\\, y=4$. Which of the following is true?",
      zh: "$L_1:\\, x=4$，$L_2:\\, x=-1$，$L_3:\\, y=4$。下列何者正確？",
    },
    figure: {
      type: "coord",
      xMin: -3,
      xMax: 6,
      yMin: -2,
      yMax: 6,
      segments: [
        { x1: 4, y1: -1.5, x2: 4, y2: 5.5, tone: "accent" },
        { x1: -1, y1: -1.5, x2: -1, y2: 5.5, tone: "ink" },
        { x1: -2.5, y1: 4, x2: 5.5, y2: 4, tone: "soft" },
      ],
      points: [
        { x: 4, y: 5.2, label: "L1", dx: 6, dy: 0 },
        { x: -1, y: 5.2, label: "L2", dx: -18, dy: 0 },
        { x: 5.2, y: 4, label: "L3", dx: 4, dy: 4 },
      ],
    },
    options: [
      {
        key: "A",
        text: {
          en: "$L_1$ is parallel to $L_3$.",
          zh: "$L_1$ 與 $L_3$ 平行。",
        },
        value: "L1-parallel-L3",
        trap: {
          en: "$L_1$ is vertical and $L_3$ is horizontal. They meet at a right angle.",
          zh: "$L_1$ 是鉛垂線，$L_3$ 是水平線。它們相交成直角。",
        },
      },
      {
        key: "B",
        text: {
          en: "$L_1$ is perpendicular to $L_2$.",
          zh: "$L_1$ 與 $L_2$ 垂直。",
        },
        value: "L1-perp-L2",
        trap: {
          en: "Both lines are vertical. Two vertical lines are parallel; they do not meet, so they are not perpendicular.",
          zh: "兩條都是鉛垂線。兩條鉛垂線互相平行；它們不相交，所以並不垂直。",
        },
      },
      {
        key: "C",
        text: {
          en: "$L_1$ is parallel to $L_2$, and $L_1$ is perpendicular to $L_3$.",
          zh: "$L_1$ 與 $L_2$ 平行，而且 $L_1$ 與 $L_3$ 垂直。",
        },
        value: "L1-parallel-L2-perp-L3",
      },
      {
        key: "D",
        text: {
          en: "$L_1$, $L_2$ and $L_3$ are concurrent.",
          zh: "$L_1$、$L_2$ 和 $L_3$ 共點。",
        },
        value: "concurrent",
        trap: {
          en: "$L_1$ meets $L_3$ at $(4,\\,4)$ and $L_2$ meets $L_3$ at $(-1,\\,4)$. Those are different points, and $L_1$ does not meet $L_2$.",
          zh: "$L_1$ 與 $L_3$ 交於 $(4,\\,4)$，$L_2$ 與 $L_3$ 交於 $(-1,\\,4)$。這是兩個不同的點，而且 $L_1$ 與 $L_2$ 不相交。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Sort the three equations into vertical and horizontal before you compare them. Lines of the same kind are parallel. A horizontal line and a vertical line are perpendicular.",
      zh: "比較之前，先把三條方程分成鉛垂和水平。同一類的直線互相平行。一條水平線和一條鉛垂線互相垂直。",
    },
    steps: [
      {
        en: "$L_1$ and $L_2$ both have the form $x=h$. They are vertical, so $L_1\\parallel L_2$. They do not intersect.",
        zh: "$L_1$ 和 $L_2$ 都是 $x=h$ 的形式。它們是鉛垂線，所以 $L_1\\parallel L_2$。它們不相交。",
      },
      {
        en: "$L_3$ has the form $y=k$. It is horizontal, so it is perpendicular to both vertical lines. In particular $L_1\\perp L_3$.",
        zh: "$L_3$ 是 $y=k$ 的形式。它是水平線，所以與兩條鉛垂線都垂直。特別地，$L_1\\perp L_3$。",
      },
      {
        en: "Therefore $L_1$ is parallel to $L_2$, and $L_1$ is perpendicular to $L_3$.",
        zh: "因此 $L_1$ 與 $L_2$ 平行，而且 $L_1$ 與 $L_3$ 垂直。",
      },
    ],
    examTip: {
      en: "“Both vertical” does not mean “perpendicular”. Vertical lines are parallel to each other. Each of them is perpendicular to a horizontal line.",
      zh: "「兩條都是鉛垂線」並不表示「它們垂直」。鉛垂線彼此平行。它們各自與水平線垂直。",
    },
  },
];
