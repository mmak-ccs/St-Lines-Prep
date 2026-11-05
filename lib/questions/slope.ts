import { same } from "../same";
import type { Question } from "../types";

export const slopeQuestions: Question[] = [
  {
    id: "sl-slope-two-points",
    topicId: "slope",
    difficulty: "foundation",
    stem: {
      en: "The slope of the straight line passing through $A(-1,\\, 2)$ and $B(3,\\, -4)$ is",
      zh: "通過 $A(-1,\\, 2)$ 及 $B(3,\\, -4)$ 的直線，其斜率是",
    },
    figure: {
      type: "coord",
      xMin: -3,
      xMax: 5,
      yMin: -5,
      yMax: 4,
      segments: [{ x1: -1, y1: 2, x2: 3, y2: -4, tone: "accent" }],
      points: [
        { x: -1, y: 2, label: "A", dx: -16, dy: -6 },
        { x: 3, y: -4, label: "B", dx: 8, dy: 14 },
      ],
    },
    options: [
      { key: "A", text: same("$-\\dfrac{3}{2}$"), value: "-3/2" },
      {
        key: "B",
        text: same("$\\dfrac{3}{2}$"),
        value: "3/2",
        trap: {
          en: "The rise was taken as $2-(-4)$ while the run stayed $3-(-1)$, so the two coordinates were not ordered in the same way.",
          zh: "分子用了 $2-(-4)$，分母卻仍用 $3-(-1)$，兩點的次序不一致，負號因而消失。",
        },
      },
      {
        key: "C",
        text: same("$-\\dfrac{2}{3}$"),
        value: "-2/3",
        trap: {
          en: "The fraction was turned upside down: $\\dfrac{x_2-x_1}{y_2-y_1}$ was used instead of $\\dfrac{y_2-y_1}{x_2-x_1}$.",
          zh: "把分數上下顛倒，用了 $\\dfrac{x_2-x_1}{y_2-y_1}$，而不是 $\\dfrac{y_2-y_1}{x_2-x_1}$。",
        },
      },
      {
        key: "D",
        text: same("$\\dfrac{2}{3}$"),
        value: "2/3",
        trap: {
          en: "Both slips above happened together: the fraction was inverted and the sign was lost.",
          zh: "上面兩個錯誤一併出現：分數上下顛倒，而且正負號也丟了。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Use $m=\\dfrac{y_2-y_1}{x_2-x_1}$. Keep the same point first in both the numerator and the denominator. Here the run is positive and the rise is negative.",
      zh: "用 $m=\\dfrac{y_2-y_1}{x_2-x_1}$。分子和分母要以同一點為先。這題的水平變化是正的，垂直變化是負的。",
    },
    steps: [
      {
        en: "The slope of the line through $(x_1,y_1)$ and $(x_2,y_2)$ is $m=\\dfrac{y_2-y_1}{x_2-x_1}$.",
        zh: "通過 $(x_1,y_1)$ 和 $(x_2,y_2)$ 的直線，斜率是 $m=\\dfrac{y_2-y_1}{x_2-x_1}$。",
      },
      {
        en: "Take $A(-1,\\,2)$ first and $B(3,\\,-4)$ second: $m=\\dfrac{-4-2}{3-(-1)}=\\dfrac{-6}{4}=-\\dfrac{3}{2}$.",
        zh: "以 $A(-1,\\,2)$ 為第一點、$B(3,\\,-4)$ 為第二點：$m=\\dfrac{-4-2}{3-(-1)}=\\dfrac{-6}{4}=-\\dfrac{3}{2}$。",
      },
      {
        en: "Reversing both points gives the same slope: $\\dfrac{2-(-4)}{-1-3}=\\dfrac{6}{-4}=-\\dfrac{3}{2}$. The order may be swapped, but it must be swapped in both the numerator and the denominator.",
        zh: "兩點對調，斜率不變：$\\dfrac{2-(-4)}{-1-3}=\\dfrac{6}{-4}=-\\dfrac{3}{2}$。次序可以對調，但分子和分母必須一起對調。",
      },
    ],
    examTip: {
      en: "On scripts, $\\dfrac{2}{3}$ almost always means the fraction was written run over rise. Say “rise over run” while you write the fraction.",
      zh: "試卷上出現 $\\dfrac{2}{3}$，多半是把「水平變化」寫到了分子。寫分式時先默念「先垂直、後水平」。",
    },
  },
  {
    id: "sl-inclination-sqrt3",
    topicId: "slope",
    difficulty: "standard",
    stem: {
      en: "The slope of a straight line is $\\sqrt{3}$. The inclination of the line is",
      zh: "一條直線的斜率是 $\\sqrt{3}$。該直線的傾角是",
    },
    figure: {
      type: "coord",
      xMin: -1,
      xMax: 3,
      yMin: -1,
      yMax: 3.2,
      segments: [{ x1: 0, y1: 0, x2: 1.5, y2: 2.598, tone: "accent" }],
      arcs: [{ cx: 0, cy: 0, r: 0.55, startDeg: 0, endDeg: 60, label: "θ" }],
    },
    options: [
      {
        key: "A",
        text: same("$30^\\circ$"),
        value: "30",
        trap: {
          en: "$\\tan 30^\\circ=\\dfrac{1}{\\sqrt{3}}$, not $\\sqrt{3}$.",
          zh: "$\\tan 30^\\circ=\\dfrac{1}{\\sqrt{3}}$，不是 $\\sqrt{3}$。",
        },
      },
      {
        key: "B",
        text: same("$45^\\circ$"),
        value: "45",
        trap: {
          en: "$\\tan 45^\\circ=1$. A slope of $\\sqrt{3}$ is steeper than $1$.",
          zh: "$\\tan 45^\\circ=1$。斜率 $\\sqrt{3}$ 比 $1$ 陡。",
        },
      },
      { key: "C", text: same("$60^\\circ$"), value: "60" },
      {
        key: "D",
        text: same("$120^\\circ$"),
        value: "120",
        trap: {
          en: "$\\tan 120^\\circ=-\\sqrt{3}$. A positive slope cannot give an obtuse inclination.",
          zh: "$\\tan 120^\\circ=-\\sqrt{3}$。斜率是正數時，傾角一定是銳角。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Inclination $\\theta$ satisfies $\\tan\\theta=m$ and $0^\\circ\\le\\theta<180^\\circ$. Which standard angle has tangent $\\sqrt{3}$, and is the slope positive or negative?",
      zh: "傾角 $\\theta$ 滿足 $\\tan\\theta=m$，而且 $0^\\circ\\le\\theta<180^\\circ$。哪一個特殊角的正切是 $\\sqrt{3}$？這條線的斜率是正還是負？",
    },
    steps: [
      {
        en: "By definition, if the inclination is $\\theta$, then $m=\\tan\\theta$, where $0^\\circ\\le\\theta<180^\\circ$.",
        zh: "按定義，若傾角是 $\\theta$，則 $m=\\tan\\theta$，其中 $0^\\circ\\le\\theta<180^\\circ$。",
      },
      {
        en: "So $\\tan\\theta=\\sqrt{3}$. The standard angle in the required range is $\\theta=60^\\circ$.",
        zh: "因此 $\\tan\\theta=\\sqrt{3}$。在指定範圍內的特殊角是 $\\theta=60^\\circ$。",
      },
      {
        en: "$\\tan 120^\\circ=-\\sqrt{3}$. That would be the inclination of a line with slope $-\\sqrt{3}$, not $\\sqrt{3}$.",
        zh: "$\\tan 120^\\circ=-\\sqrt{3}$。那是斜率為 $-\\sqrt{3}$ 的直線的傾角，不是 $\\sqrt{3}$。",
      },
    ],
    examTip: {
      en: "A positive slope means the line rises as $x$ increases, so the inclination is acute. Do not quote the second-quadrant angle just because tangent is also $\\sqrt{3}$ there with a minus sign.",
      zh: "斜率是正數，直線隨 $x$ 增加而上升，傾角是銳角。不要因為第二象限的正切和 $\\sqrt{3}$ 有關，就選了鈍角。",
    },
  },
  {
    id: "sl-inclination-135",
    topicId: "slope",
    difficulty: "standard",
    stem: {
      en: "If the inclination of a straight line is $135^\\circ$, then its slope is",
      zh: "若一條直線的傾角是 $135^\\circ$，則它的斜率是",
    },
    figure: {
      type: "coord",
      xMin: -3,
      xMax: 3,
      yMin: -3,
      yMax: 3,
      segments: [{ x1: -2, y1: 2, x2: 2, y2: -2, tone: "accent" }],
      arcs: [{ cx: 0, cy: 0, r: 0.7, startDeg: 0, endDeg: 135, label: "135°" }],
    },
    options: [
      {
        key: "A",
        text: same("$1$"),
        value: "1",
        trap: {
          en: "$\\tan 45^\\circ=1$. The related acute angle was used and the obtuse inclination was ignored.",
          zh: "$\\tan 45^\\circ=1$。只用了相關的銳角，沒有處理鈍角傾角。",
        },
      },
      { key: "B", text: same("$-1$"), value: "-1" },
      {
        key: "C",
        text: same("$\\sqrt{3}$"),
        value: "sqrt3",
        trap: {
          en: "$\\sqrt{3}=\\tan 60^\\circ$. It is the tangent of a different special angle.",
          zh: "$\\sqrt{3}=\\tan 60^\\circ$，是另一個特殊角的正切。",
        },
      },
      {
        key: "D",
        text: same("$0$"),
        value: "0",
        trap: {
          en: "Slope $0$ belongs to inclination $0^\\circ$, a horizontal line.",
          zh: "斜率 $0$ 屬於傾角 $0^\\circ$，即水平線。",
        },
      },
    ],
    answer: "B",
    hint: {
      en: "$m=\\tan 135^\\circ$. Write $135^\\circ$ as $180^\\circ-45^\\circ$ and use $\\tan(180^\\circ-\\theta)=-\\tan\\theta$.",
      zh: "$m=\\tan 135^\\circ$。把 $135^\\circ$ 寫成 $180^\\circ-45^\\circ$，并用 $\\tan(180^\\circ-\\theta)=-\\tan\\theta$。",
    },
    steps: [
      {
        en: "The slope is the tangent of the inclination: $m=\\tan 135^\\circ$.",
        zh: "斜率等於傾角的正切：$m=\\tan 135^\\circ$。",
      },
      {
        en: "$135^\\circ=180^\\circ-45^\\circ$, so $\\tan 135^\\circ=-\\tan 45^\\circ=-1$.",
        zh: "$135^\\circ=180^\\circ-45^\\circ$，所以 $\\tan 135^\\circ=-\\tan 45^\\circ=-1$。",
      },
      {
        en: "The line falls as $x$ increases. Any inclination strictly between $90^\\circ$ and $180^\\circ$ has a negative slope.",
        zh: "這條直線隨 $x$ 增加而下降。傾角嚴格介於 $90^\\circ$ 與 $180^\\circ$ 之間時，斜率是負數。",
      },
    ],
    examTip: {
      en: "Students who shade $1$ have found the acute angle between the line and the x-axis. The inclination is the angle from the positive x-axis, so it can be obtuse, and then the slope is negative.",
      zh: "選了 $1$ 的同學，求出的是直線與 x 軸所成的銳角。傾角是由正 x 軸量度的，可以是鈍角，此時斜率是負數。",
    },
  },
  {
    id: "sl-vertical-inclination",
    topicId: "slope",
    difficulty: "foundation",
    stem: {
      en: "The inclination of the straight line $x=-3$ is",
      zh: "直線 $x=-3$ 的傾角是",
    },
    figure: {
      type: "coord",
      xMin: -5,
      xMax: 3,
      yMin: -3,
      yMax: 4,
      segments: [{ x1: -3, y1: -2.4, x2: -3, y2: 3.4, tone: "accent" }],
    },
    options: [
      {
        key: "A",
        text: same("$0^\\circ$"),
        value: "0",
        trap: {
          en: "$0^\\circ$ is the inclination of a horizontal line, such as $y=-3$.",
          zh: "$0^\\circ$ 是水平線的傾角，例如 $y=-3$。",
        },
      },
      {
        key: "B",
        text: same("$45^\\circ$"),
        value: "45",
        trap: {
          en: "$45^\\circ$ would mean slope $1$. The line $x=-3$ does not have a defined slope.",
          zh: "$45^\\circ$ 表示斜率是 $1$。直線 $x=-3$ 的斜率無定義。",
        },
      },
      { key: "C", text: same("$90^\\circ$"), value: "90" },
      {
        key: "D",
        text: same("$180^\\circ$"),
        value: "180",
        trap: {
          en: "An inclination of $180^\\circ$ is not used. It describes the same direction as $0^\\circ$, and the range of inclination stops before $180^\\circ$.",
          zh: "傾角不用 $180^\\circ$。它和 $0^\\circ$ 是同一方向，而傾角的範圍取至 $180^\\circ$ 之前。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Every point on $x=-3$ has the same x-coordinate. Is the line horizontal or vertical? A vertical line is perpendicular to the positive x-axis.",
      zh: "$x=-3$ 上每一點的 x 坐標都相同。這是水平線還是鉛垂線？鉛垂線與正 x 軸垂直。",
    },
    steps: [
      {
        en: "The equation $x=-3$ fixes the x-coordinate and lets $y$ take any value. The line is vertical.",
        zh: "方程 $x=-3$ 把 x 坐標固定，$y$ 可以是任何數。這是一條鉛垂線。",
      },
      {
        en: "A vertical line makes a right angle with the positive x-axis, so its inclination is $90^\\circ$.",
        zh: "鉛垂線與正 x 軸成直角，傾角是 $90^\\circ$。",
      },
      {
        en: "Its slope is undefined, because the run $x_2-x_1$ is $0$ and $\\tan 90^\\circ$ is undefined. Do not write the slope as $0$. Slope $0$ belongs to $y=k$.",
        zh: "它的斜率無定義，因為水平變化 $x_2-x_1$ 是 $0$，而 $\\tan 90^\\circ$ 無定義。不要把斜率寫成 $0$。斜率 $0$ 屬於 $y=k$。",
      },
    ],
    examTip: {
      en: "The constant in the equation is not the slope. In $x=-3$ the number $-3$ is the x-intercept, and the inclination is still $90^\\circ$.",
      zh: "方程裏的常數不是斜率。在 $x=-3$ 中，$-3$ 是 x 截距，傾角仍然是 $90^\\circ$。",
    },
  },
  {
    id: "sl-perp-inclination",
    topicId: "slope",
    difficulty: "exam",
    stem: {
      en: "The inclination of the straight line $L_1$ is $70^\\circ$. If $L_2$ is perpendicular to $L_1$, then the inclination of $L_2$ is",
      zh: "直線 $L_1$ 的傾角是 $70^\\circ$。若 $L_2$ 與 $L_1$ 垂直，則 $L_2$ 的傾角是",
    },
    options: [
      {
        key: "A",
        text: same("$20^\\circ$"),
        value: "20",
        trap: {
          en: "$20^\\circ$ is the complement of $70^\\circ$. The product of the slopes would be $\\tan 70^\\circ\\tan 20^\\circ=1$, not $-1$.",
          zh: "$20^\\circ$ 是 $70^\\circ$ 的餘角。兩斜率的積會是 $\\tan 70^\\circ\\tan 20^\\circ=1$，不是 $-1$。",
        },
      },
      {
        key: "B",
        text: same("$90^\\circ$"),
        value: "90",
        trap: {
          en: "$90^\\circ$ is the inclination of a vertical line. It is perpendicular only to a horizontal line.",
          zh: "$90^\\circ$ 是鉛垂線的傾角。它只與水平線垂直。",
        },
      },
      { key: "C", text: same("$160^\\circ$"), value: "160" },
      {
        key: "D",
        text: same("$110^\\circ$"),
        value: "110",
        trap: {
          en: "$110^\\circ=180^\\circ-70^\\circ$ is a different direction. $\\tan 70^\\circ\\tan 110^\\circ=\\tan 70^\\circ(-\\tan 70^\\circ)$, which is not $-1$.",
          zh: "$110^\\circ=180^\\circ-70^\\circ$ 是另一個方向。$\\tan 70^\\circ\\tan 110^\\circ=\\tan 70^\\circ(-\\tan 70^\\circ)$，這個積不是 $-1$。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Adding $90^\\circ$ to an inclination gives a perpendicular direction. If the result reaches $180^\\circ$ or more, subtract $180^\\circ$ so that the answer stays inside $0^\\circ\\le\\theta<180^\\circ$.",
      zh: "傾角加 $90^\\circ$ 就得到垂直方向。若結果達到或超過 $180^\\circ$，要減去 $180^\\circ$，使答案留在 $0^\\circ\\le\\theta<180^\\circ$。",
    },
    steps: [
      {
        en: "A line perpendicular to a line of inclination $\\theta$ has inclination $\\theta+90^\\circ$, adjusted by $180^\\circ$ if needed so that it lies in $[0^\\circ,\\,180^\\circ)$.",
        zh: "與傾角 $\\theta$ 的直線垂直的直線，傾角是 $\\theta+90^\\circ$；如有需要再加減 $180^\\circ$，使它落在 $[0^\\circ,\\,180^\\circ)$。",
      },
      {
        en: "$70^\\circ+90^\\circ=160^\\circ$, which is already inside the range. So the inclination of $L_2$ is $160^\\circ$.",
        zh: "$70^\\circ+90^\\circ=160^\\circ$，已經在範圍內。因此 $L_2$ 的傾角是 $160^\\circ$。",
      },
      {
        en: "Check with slopes. $m_1=\\tan 70^\\circ$ and $m_2=\\tan 160^\\circ=-\\tan 20^\\circ$. Since $\\tan 70^\\circ=\\dfrac{1}{\\tan 20^\\circ}$, the product is $m_1 m_2=-1$.",
        zh: "用斜率覆核。$m_1=\\tan 70^\\circ$，$m_2=\\tan 160^\\circ=-\\tan 20^\\circ$。因為 $\\tan 70^\\circ=\\dfrac{1}{\\tan 20^\\circ}$，所以 $m_1 m_2=-1$。",
      },
      {
        en: "The popular wrong answer $20^\\circ$ gives product $+1$, so those two lines are not perpendicular.",
        zh: "常見錯答 $20^\\circ$ 會使兩斜率的積是 $+1$，那兩條直線並不垂直。",
      },
    ],
    examTip: {
      en: "Perpendicular lines meet at $90^\\circ$. That is not the same statement as “the two inclinations are complementary”. Complementary inclinations give slopes whose product is $+1$.",
      zh: "垂直是兩線相交成 $90^\\circ$。這不等於「兩個傾角互餘」。互餘的傾角會使兩斜率的積變成 $+1$。",
    },
  },
];
