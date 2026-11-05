import { same } from "../same";
import type { Question } from "../types";

export const formsQuestions: Question[] = [
  {
    id: "eq-point-slope",
    topicId: "forms",
    difficulty: "foundation",
    stem: {
      en: "Using the point-slope form, the equation of the straight line which passes through $(-2,\\,5)$ and has slope $-3$ is",
      zh: "利用點斜式，通過 $(-2,\\,5)$ 且斜率為 $-3$ 的直線方程是",
    },
    figure: {
      type: "coord",
      xMin: -4,
      xMax: 2,
      yMin: -3,
      yMax: 8,
      segments: [{ x1: -3, y1: 8, x2: 1, y2: -4, tone: "accent" }],
      points: [{ x: -2, y: 5, label: "P", dx: 8, dy: -4 }],
    },
    options: [
      {
        key: "A",
        text: same("$y-5=-3(x-2)$"),
        value: "3x+y-11=0",
        trap: {
          en: "The x-coordinate $-2$ was copied as $+2$. The bracket should contain $x-(-2)$, which is $x+2$.",
          zh: "把 x 坐標 $-2$ 抄成了 $+2$。括號內應是 $x-(-2)$，即 $x+2$。",
        },
      },
      { key: "B", text: same("$y-5=-3(x+2)$"), value: "3x+y+1=0" },
      {
        key: "C",
        text: same("$y+5=-3(x+2)$"),
        value: "3x+y+11=0",
        trap: {
          en: "The y-coordinate was given the wrong sign. The form is $y-y_1$, and $y_1=5$, so the left side is $y-5$.",
          zh: "y 坐標的正負號寫反了。點斜式是 $y-y_1$，而 $y_1=5$，左邊應是 $y-5$。",
        },
      },
      {
        key: "D",
        text: same("$y+5=-3(x-2)$"),
        value: "3x+y-1=0",
        trap: {
          en: "Both coordinates changed sign. Neither bracket matches the given point $(-2,\\,5)$.",
          zh: "兩個坐標的正負號都改錯了。兩個括號都對不上已知點 $(-2,\\,5)$。",
        },
      },
    ],
    answer: "B",
    hint: {
      en: "Point-slope form: $y-y_1=m(x-x_1)$. Substitute $x_1=-2$ directly. Subtracting a negative number is written with a plus.",
      zh: "點斜式：$y-y_1=m(x-x_1)$。把 $x_1=-2$ 直接代入。減去一個負數，寫出來是加號。",
    },
    steps: [
      {
        en: "The point-slope form of a line through $(x_1,y_1)$ with slope $m$ is $y-y_1=m(x-x_1)$.",
        zh: "通過 $(x_1,y_1)$、斜率為 $m$ 的直線，點斜式是 $y-y_1=m(x-x_1)$。",
      },
      {
        en: "Here $(x_1,y_1)=(-2,\\,5)$ and $m=-3$, so $y-5=-3\\bigl(x-(-2)\\bigr)$.",
        zh: "這裏 $(x_1,y_1)=(-2,\\,5)$，$m=-3$，所以 $y-5=-3\\bigl(x-(-2)\\bigr)$。",
      },
      {
        en: "Simplify the bracket: $y-5=-3(x+2)$.",
        zh: "簡化括號：$y-5=-3(x+2)$。",
      },
      {
        en: "As a check, expand to general form. $y-5=-3x-6$, so $3x+y+1=0$. Substituting $(-2,\\,5)$ gives $3(-2)+5+1=0$.",
        zh: "可展開成一般式覆核。$y-5=-3x-6$，即 $3x+y+1=0$。代入 $(-2,\\,5)$：$3(-2)+5+1=0$。",
      },
    ],
    examTip: {
      en: "When the given coordinate is negative, the written equation usually contains a plus. The option that looks “simpler”, with two minus signs, is often the one that has changed the sign of a coordinate.",
      zh: "已知坐標是負數時，寫出來的方程通常會出現加號。看起來「比較整齊」、兩處都是減號的選項，往往把坐標的正負號改掉了。",
    },
  },
  {
    id: "eq-two-point",
    topicId: "forms",
    difficulty: "standard",
    stem: {
      en: "Using the two-point form, the equation of the straight line passing through $A(-1,\\,3)$ and $B(2,\\,-3)$ is",
      zh: "利用兩點式，通過 $A(-1,\\,3)$ 及 $B(2,\\,-3)$ 的直線方程是",
    },
    figure: {
      type: "coord",
      xMin: -3,
      xMax: 4,
      yMin: -4,
      yMax: 5,
      segments: [{ x1: -2, y1: 5, x2: 3, y2: -5, tone: "accent" }],
      points: [
        { x: -1, y: 3, label: "A", dx: -16, dy: -4 },
        { x: 2, y: -3, label: "B", dx: 8, dy: 4 },
      ],
    },
    options: [
      {
        key: "A",
        text: same("$x+2y-5=0$"),
        value: "x+2y-5=0",
        trap: {
          en: "The slope was inverted: $\\dfrac{2-(-1)}{-3-3}=-\\dfrac{1}{2}$ was used instead of $\\dfrac{-3-3}{2-(-1)}=-2$.",
          zh: "斜率上下顛倒了：用了 $\\dfrac{2-(-1)}{-3-3}=-\\dfrac{1}{2}$，而不是 $\\dfrac{-3-3}{2-(-1)}=-2$。",
        },
      },
      {
        key: "B",
        text: same("$2x-y+5=0$"),
        value: "2x-y+5=0",
        trap: {
          en: "The slope was given the wrong sign. This is the line through $A$ with slope $+2$, namely $y-3=2(x+1)$.",
          zh: "斜率的正負號寫反了。這是通過 $A$、斜率為 $+2$ 的直線，即 $y-3=2(x+1)$。",
        },
      },
      { key: "C", text: same("$2x+y-1=0$"), value: "2x+y-1=0" },
      {
        key: "D",
        text: same("$2x+y-5=0$"),
        value: "2x+y-5=0",
        trap: {
          en: "The x-coordinate of $A$ was treated as $+1$. The bracket $x-x_1$ became $x-1$ instead of $x-(-1)$.",
          zh: "把 $A$ 的 x 坐標當成了 $+1$。括號 $x-x_1$ 寫成了 $x-1$，而不是 $x-(-1)$。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Two-point form: $\\dfrac{y-y_1}{x-x_1}=\\dfrac{y_2-y_1}{x_2-x_1}$. Find the slope first. It is negative, and its absolute value is greater than $1$.",
      zh: "兩點式：$\\dfrac{y-y_1}{x-x_1}=\\dfrac{y_2-y_1}{x_2-x_1}$。先求斜率。它是負數，而且絕對值大於 $1$。",
    },
    steps: [
      {
        en: "The two-point form is $\\dfrac{y-y_1}{x-x_1}=\\dfrac{y_2-y_1}{x_2-x_1}$.",
        zh: "兩點式是 $\\dfrac{y-y_1}{x-x_1}=\\dfrac{y_2-y_1}{x_2-x_1}$。",
      },
      {
        en: "The slope is $\\dfrac{-3-3}{2-(-1)}=\\dfrac{-6}{3}=-2$.",
        zh: "斜率是 $\\dfrac{-3-3}{2-(-1)}=\\dfrac{-6}{3}=-2$。",
      },
      {
        en: "Using $A(-1,\\,3)$: $\\dfrac{y-3}{x-(-1)}=-2$, so $y-3=-2(x+1)$.",
        zh: "用 $A(-1,\\,3)$：$\\dfrac{y-3}{x-(-1)}=-2$，即 $y-3=-2(x+1)$。",
      },
      {
        en: "Expand: $y-3=-2x-2$, hence $2x+y-1=0$. The point $B(2,\\,-3)$ satisfies $2(2)+(-3)-1=0$.",
        zh: "展開：$y-3=-2x-2$，所以 $2x+y-1=0$。點 $B(2,\\,-3)$ 滿足 $2(2)+(-3)-1=0$。",
      },
    ],
    examTip: {
      en: "After you finish, substitute both given points. A sign error often still passes through one of the two points, so one successful substitution is not enough.",
      zh: "做完後把兩個已知點都代回去。正負號錯誤的直線往往仍然通過其中一點，所以只代一個點並不足夠。",
    },
  },
  {
    id: "eq-slope-intercept",
    topicId: "forms",
    difficulty: "foundation",
    stem: {
      en: "A straight line has slope $\\dfrac{2}{3}$ and $y$-intercept $-4$. Its equation is",
      zh: "一條直線的斜率是 $\\dfrac{2}{3}$，$y$ 截距是 $-4$。它的方程是",
    },
    options: [
      { key: "A", text: same("$2x-3y-12=0$"), value: "2x-3y-12=0" },
      {
        key: "B",
        text: same("$2x-3y+12=0$"),
        value: "2x-3y+12=0",
        trap: {
          en: "The $y$-intercept was taken as $+4$. This line is $y=\\dfrac{2}{3}x+4$.",
          zh: "把 $y$ 截距當成了 $+4$。這條直線是 $y=\\dfrac{2}{3}x+4$。",
        },
      },
      {
        key: "C",
        text: same("$2x+3y+12=0$"),
        value: "2x+3y+12=0",
        trap: {
          en: "The slope changed sign. This line is $y=-\\dfrac{2}{3}x-4$.",
          zh: "斜率的正負號被改掉了。這條直線是 $y=-\\dfrac{2}{3}x-4$。",
        },
      },
      {
        key: "D",
        text: same("$3x-2y-8=0$"),
        value: "3x-2y-8=0",
        trap: {
          en: "The slope was replaced by its reciprocal $\\dfrac{3}{2}$, while the intercept $-4$ was kept.",
          zh: "斜率被換成了它的倒數 $\\dfrac{3}{2}$，截距 $-4$ 則保留了下來。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Slope-intercept form is $y=mx+c$. Write $y=\\dfrac{2}{3}x-4$, then multiply through by $3$ before you rearrange.",
      zh: "斜截式是 $y=mx+c$。先寫 $y=\\dfrac{2}{3}x-4$，通分乘以 $3$，再整理。",
    },
    steps: [
      {
        en: "The slope-intercept form is $y=mx+c$. Here $m=\\dfrac{2}{3}$ and $c=-4$, so $y=\\dfrac{2}{3}x-4$.",
        zh: "斜截式是 $y=mx+c$。這裏 $m=\\dfrac{2}{3}$，$c=-4$，所以 $y=\\dfrac{2}{3}x-4$。",
      },
      {
        en: "Multiply by $3$: $3y=2x-12$.",
        zh: "乘以 $3$：$3y=2x-12$。",
      },
      {
        en: "Rearrange into general form: $2x-3y-12=0$.",
        zh: "整理成一般式：$2x-3y-12=0$。",
      },
      {
        en: "Check the two given facts. The slope is $-\\dfrac{A}{B}=-\\dfrac{2}{-3}=\\dfrac{2}{3}$. When $x=0$, $-3y-12=0$, so $y=-4$.",
        zh: "覆核兩個已知條件。斜率是 $-\\dfrac{A}{B}=-\\dfrac{2}{-3}=\\dfrac{2}{3}$。當 $x=0$，$-3y-12=0$，所以 $y=-4$。",
      },
    ],
    examTip: {
      en: "Moving $-4$ across the equation is where the constant term changes sign. After you reach $Ax+By+C=0$, read the intercept again from the new equation.",
      zh: "把 $-4$ 移項時，常數項的正負號最容易改變。得到 $Ax+By+C=0$ 之後，再用新方程把截距讀一次。",
    },
  },
  {
    id: "eq-intercept-form",
    topicId: "forms",
    difficulty: "standard",
    stem: {
      en: "The $x$-intercept and the $y$-intercept of a straight line are $-3$ and $6$ respectively. The equation of the line is",
      zh: "一條直線的 $x$ 截距和 $y$ 截距分別是 $-3$ 和 $6$。該直線的方程是",
    },
    options: [
      { key: "A", text: same("$\\dfrac{x}{-3}+\\dfrac{y}{6}=1$"), value: "2x-y+6=0" },
      {
        key: "B",
        text: same("$\\dfrac{x}{3}+\\dfrac{y}{6}=1$"),
        value: "2x+y-6=0",
        trap: {
          en: "The negative sign of the $x$-intercept was dropped. This line cuts the x-axis at $3$, not $-3$.",
          zh: "$x$ 截距的負號被去掉了。這條直線交 x 軸於 $3$，不是 $-3$。",
        },
      },
      {
        key: "C",
        text: same("$\\dfrac{x}{-3}+\\dfrac{y}{-6}=1$"),
        value: "2x+y+6=0",
        trap: {
          en: "Both intercepts were made negative. The $y$-intercept of this line is $-6$.",
          zh: "兩個截距都被寫成了負數。這條直線的 $y$ 截距是 $-6$。",
        },
      },
      {
        key: "D",
        text: same("$\\dfrac{x}{6}+\\dfrac{y}{-3}=1$"),
        value: "x-2y-6=0",
        trap: {
          en: "The two intercepts were swapped. This line has $x$-intercept $6$ and $y$-intercept $-3$.",
          zh: "兩個截距對調了。這條直線的 $x$ 截距是 $6$，$y$ 截距是 $-3$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Intercept form: $\\dfrac{x}{a}+\\dfrac{y}{b}=1$, where $a$ is the $x$-intercept and $b$ is the $y$-intercept. Keep the negative sign inside $a$.",
      zh: "截距式：$\\dfrac{x}{a}+\\dfrac{y}{b}=1$，其中 $a$ 是 $x$ 截距，$b$ 是 $y$ 截距。$a$ 的負號要保留。",
    },
    steps: [
      {
        en: "If the intercepts are $a$ and $b$, both non-zero, the intercept form is $\\dfrac{x}{a}+\\dfrac{y}{b}=1$.",
        zh: "若截距 $a$ 和 $b$ 都不為零，截距式是 $\\dfrac{x}{a}+\\dfrac{y}{b}=1$。",
      },
      {
        en: "Substitute $a=-3$ and $b=6$: $\\dfrac{x}{-3}+\\dfrac{y}{6}=1$.",
        zh: "代入 $a=-3$、$b=6$：$\\dfrac{x}{-3}+\\dfrac{y}{6}=1$。",
      },
      {
        en: "Check. When $y=0$, $\\dfrac{x}{-3}=1$, so $x=-3$. When $x=0$, $\\dfrac{y}{6}=1$, so $y=6$.",
        zh: "覆核。當 $y=0$，$\\dfrac{x}{-3}=1$，所以 $x=-3$。當 $x=0$，$\\dfrac{y}{6}=1$，所以 $y=6$。",
      },
      {
        en: "In general form, multiply by $6$: $-2x+y=6$, or $2x-y+6=0$.",
        zh: "寫成一般式時，乘以 $6$：$-2x+y=6$，即 $2x-y+6=0$。",
      },
    ],
    examTip: {
      en: "The intercept form needs the actual signed intercepts. A negative intercept stays in the denominator; it is not moved to the other side by hand.",
      zh: "截距式要用帶正負號的截距。負的截距留在分母裏，不要隨手把它移到等號另一邊。",
    },
  },
  {
    id: "eq-general-slope",
    topicId: "forms",
    difficulty: "standard",
    stem: {
      en: "The slope of the straight line $4x-2y+5=0$ is",
      zh: "直線 $4x-2y+5=0$ 的斜率是",
    },
    options: [
      { key: "A", text: same("$2$"), value: "2" },
      {
        key: "B",
        text: same("$-2$"),
        value: "-2",
        trap: {
          en: "The coefficient of $y$ was read as $+2$, ignoring the minus already printed in $-2y$. Then $-\\dfrac{4}{2}=-2$.",
          zh: "把 $y$ 的係數讀成 $+2$，忽略了 $-2y$ 裏已經印好的負號。於是變成 $-\\dfrac{4}{2}=-2$。",
        },
      },
      {
        key: "C",
        text: same("$4$"),
        value: "4",
        trap: {
          en: "The coefficient of $x$ was copied as the slope.",
          zh: "把 $x$ 的係數直接當成了斜率。",
        },
      },
      {
        key: "D",
        text: same("$\\dfrac{1}{2}$"),
        value: "1/2",
        trap: {
          en: "The fraction $-\\dfrac{A}{B}$ was replaced by $-\\dfrac{B}{A}$ or by $\\dfrac{|B|}{A}$.",
          zh: "把 $-\\dfrac{A}{B}$ 寫成了 $-\\dfrac{B}{A}$，或寫成了 $\\dfrac{|B|}{A}$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "For $Ax+By+C=0$, the slope is $-\\dfrac{A}{B}$. Here $B$ is $-2$, not $2$. You can also make $y$ the subject.",
      zh: "對於 $Ax+By+C=0$，斜率是 $-\\dfrac{A}{B}$。這裏的 $B$ 是 $-2$，不是 $2$。也可以先把 $y$ 抽成主項。",
    },
    steps: [
      {
        en: "Write $y$ as the subject. From $4x-2y+5=0$, $-2y=-4x-5$.",
        zh: "把 $y$ 寫成主項。由 $4x-2y+5=0$，得 $-2y=-4x-5$。",
      },
      {
        en: "Divide by $-2$: $y=2x+\\dfrac{5}{2}$.",
        zh: "除以 $-2$：$y=2x+\\dfrac{5}{2}$。",
      },
      {
        en: "The slope is $2$. The same result comes from $-\\dfrac{A}{B}=-\\dfrac{4}{-2}=2$.",
        zh: "斜率是 $2$。用公式同樣得到 $-\\dfrac{A}{B}=-\\dfrac{4}{-2}=2$。",
      },
    ],
    examTip: {
      en: "In $Ax+By+C=0$, read $B$ together with its sign. For $4x-2y+5=0$, $A=4$ and $B=-2$. The slope formula already contains one minus sign, so a second minus from $B$ makes the slope positive.",
      zh: "在 $Ax+By+C=0$ 中，$B$ 要連同正負號一起讀。對於 $4x-2y+5=0$，$A=4$，$B=-2$。斜率公式本身已有一個負號，$B$ 再提供一個負號，斜率就是正的。",
    },
  },
  {
    id: "eq-point-on-line",
    topicId: "forms",
    difficulty: "foundation",
    stem: {
      en: "Which of the following points lies on the straight line $3x+2y-12=0$?",
      zh: "下列哪一點在直線 $3x+2y-12=0$ 上？",
    },
    options: [
      {
        key: "A",
        text: same("$(1,\\,4)$"),
        value: "(1, 4)",
        trap: {
          en: "$3(1)+2(4)-12=-1$, not $0$. The two terms $3$ and $8$ are close to $12$, but they do not add to it.",
          zh: "$3(1)+2(4)-12=-1$，不是 $0$。$3$ 和 $8$ 加起來接近 $12$，但並不相等。",
        },
      },
      { key: "B", text: same("$(2,\\,3)$"), value: "(2, 3)" },
      {
        key: "C",
        text: same("$(4,\\,1)$"),
        value: "(4, 1)",
        trap: {
          en: "The coordinates of a nearby point were swapped. $3(4)+2(1)-12=2$, not $0$.",
          zh: "把附近一點的坐標對調了。$3(4)+2(1)-12=2$，不是 $0$。",
        },
      },
      {
        key: "D",
        text: same("$(0,\\,4)$"),
        value: "(0, 4)",
        trap: {
          en: "The $y$-intercept was taken as $\\dfrac{12}{3}=4$. The intercept is $\\dfrac{12}{2}=6$, so the point on the y-axis is $(0,\\,6)$.",
          zh: "把 $y$ 截距算成 $\\dfrac{12}{3}=4$。截距應是 $\\dfrac{12}{2}=6$，所以 y 軸上的點是 $(0,\\,6)$。",
        },
      },
    ],
    answer: "B",
    hint: {
      en: "A point lies on the line when its coordinates make the left side exactly $0$. Substitute all four points. Do not stop at the first one that looks close.",
      zh: "把坐標代入後，左邊剛好等於 $0$，該點才在直線上。四個點都代入。不要在「看起來很接近」的地方停下來。",
    },
    steps: [
      {
        en: "Substitute $(2,\\,3)$ into $3x+2y-12$: $3(2)+2(3)-12=6+6-12=0$.",
        zh: "把 $(2,\\,3)$ 代入 $3x+2y-12$：$3(2)+2(3)-12=6+6-12=0$。",
      },
      {
        en: "So $(2,\\,3)$ lies on the line.",
        zh: "因此 $(2,\\,3)$ 在直線上。",
      },
      {
        en: "The other three points give $-1$, $2$ and $-4$. A value close to zero is still not zero.",
        zh: "其餘三點分別得到 $-1$、$2$ 和 $-4$。接近零並不是零。",
      },
    ],
    examTip: {
      en: "For a general line $Ax+By+C=0$, the $y$-intercept is $-\\dfrac{C}{B}$, not $-\\dfrac{C}{A}$. Dividing by the coefficient of $x$ is the usual way to get the wrong intercept.",
      zh: "對於一般式 $Ax+By+C=0$，$y$ 截距是 $-\\dfrac{C}{B}$，不是 $-\\dfrac{C}{A}$。除以 $x$ 的係數，是求錯截距的常見原因。",
    },
  },
];
