import { same } from "../same";
import type { Question } from "../types";

export const sectionQuestions: Question[] = [
  {
    id: "mid-basic",
    topicId: "section",
    difficulty: "foundation",
    stem: {
      en: "The coordinates of the mid-point of $A(-3,\\,4)$ and $B(7,\\,-2)$ are",
      zh: "$A(-3,\\,4)$ 和 $B(7,\\,-2)$ 的中點坐標是",
    },
    options: [
      { key: "A", text: same("$(2,\\,1)$"), value: "(2, 1)" },
      {
        key: "B",
        text: same("$(2,\\,3)$"),
        value: "(2, 3)",
        trap: {
          en: "The y-coordinate $-2$ was treated as $+2$, so $\\dfrac{4+2}{2}=3$.",
          zh: "把 y 坐標 $-2$ 當成了 $+2$，於是 $\\dfrac{4+2}{2}=3$。",
        },
      },
      {
        key: "C",
        text: same("$(5,\\,-3)$"),
        value: "(5, -3)",
        trap: {
          en: "Half of the difference $B-A$ was used: $\\left(\\dfrac{7-(-3)}{2},\\,\\dfrac{-2-4}{2}\\right)=(5,\\,-3)$. The mid-point is the average, not half the change.",
          zh: "用了 $B-A$ 的一半：$\\left(\\dfrac{7-(-3)}{2},\\,\\dfrac{-2-4}{2}\\right)=(5,\\,-3)$。中點是平均，不是變化量的一半。",
        },
      },
      {
        key: "D",
        text: same("$(4,\\,2)$"),
        value: "(4, 2)",
        trap: {
          en: "The coordinates were added but not divided by $2$: $(-3+7,\\,4+(-2))=(4,\\,2)$.",
          zh: "坐標相加後沒有除以 $2$：$(-3+7,\\,4+(-2))=(4,\\,2)$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Mid-point $=\\left(\\dfrac{x_1+x_2}{2},\\,\\dfrac{y_1+y_2}{2}\\right)$. Add the coordinates, including the negative sign, and then divide by $2$.",
      zh: "中點 $=\\left(\\dfrac{x_1+x_2}{2},\\,\\dfrac{y_1+y_2}{2}\\right)$。坐標連同負號一起相加，然後除以 $2$。",
    },
    steps: [
      {
        en: "The mid-point is $\\left(\\dfrac{-3+7}{2},\\,\\dfrac{4+(-2)}{2}\\right)$.",
        zh: "中點是 $\\left(\\dfrac{-3+7}{2},\\,\\dfrac{4+(-2)}{2}\\right)$。",
      },
      {
        en: "This is $\\left(\\dfrac{4}{2},\\,\\dfrac{2}{2}\\right)=(2,\\,1)$.",
        zh: "即 $\\left(\\dfrac{4}{2},\\,\\dfrac{2}{2}\\right)=(2,\\,1)$。",
      },
      {
        en: "The same point divides $AB$ internally in the ratio $1:1$.",
        zh: "同一點把 $AB$ 內分為 $1:1$。",
      },
    ],
    examTip: {
      en: "A negative coordinate is added, not subtracted a second time and not turned positive inside the bracket. Write $4+(-2)$ rather than $4-2$ if the minus sign tends to disappear in your working.",
      zh: "負坐標是加進去的，不是再減一次，也不要在括號裏變成正數。如果負號容易消失，就寫成 $4+(-2)$，不要急着寫成 $4-2$。",
    },
  },
  {
    id: "sec-internal",
    topicId: "section",
    difficulty: "standard",
    stem: {
      en: "The point $P$ divides the line segment joining $A(2,\\,-1)$ and $B(8,\\,5)$ internally in the ratio $AP:PB=1:2$. The coordinates of $P$ are",
      zh: "點 $P$ 把 $A(2,\\,-1)$ 與 $B(8,\\,5)$ 的連線內分為 $AP:PB=1:2$。$P$ 的坐標是",
    },
    figure: {
      type: "coord",
      xMin: 0,
      xMax: 10,
      yMin: -3,
      yMax: 7,
      segments: [{ x1: 2, y1: -1, x2: 8, y2: 5, tone: "accent" }],
      points: [
        { x: 2, y: -1, label: "A", dx: -16, dy: 4 },
        { x: 8, y: 5, label: "B", dx: 8, dy: -4 },
      ],
    },
    options: [
      { key: "A", text: same("$(4,\\,1)$"), value: "(4, 1)" },
      {
        key: "B",
        text: same("$(6,\\,3)$"),
        value: "(6, 3)",
        trap: {
          en: "The ratio was reversed. $(6,\\,3)$ divides $AB$ internally in the ratio $AP:PB=2:1$.",
          zh: "比例的次序反了。$(6,\\,3)$ 把 $AB$ 內分為 $AP:PB=2:1$。",
        },
      },
      {
        key: "C",
        text: same("$(5,\\,2)$"),
        value: "(5, 2)",
        trap: {
          en: "This is the mid-point, the internal division $1:1$. The required ratio is $1:2$.",
          zh: "這是中點，即內分比 $1:1$。題目要求的比是 $1:2$。",
        },
      },
      {
        key: "D",
        text: same("$(14,\\,11)$"),
        value: "(14, 11)",
        trap: {
          en: "The external-division formula was used, and the ratio was also reversed. $(14,\\,11)$ divides $AB$ externally in the ratio $2:1$.",
          zh: "用了外分公式，而且比例也反了。$(14,\\,11)$ 把 $AB$ 外分為 $2:1$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "For internal division $AP:PB=m:n$, use $\\left(\\dfrac{nx_1+mx_2}{m+n},\\,\\dfrac{ny_1+my_2}{m+n}\\right)$. Here $m=1$ and $n=2$, so $A$ has the larger weight. $P$ is closer to $A$.",
      zh: "內分 $AP:PB=m:n$ 時，用 $\\left(\\dfrac{nx_1+mx_2}{m+n},\\,\\dfrac{ny_1+my_2}{m+n}\\right)$。這裏 $m=1$、$n=2$，所以 $A$ 的權重較大。$P$ 比較靠近 $A$。",
    },
    steps: [
      {
        en: "Since $AP:PB=1:2$, $P$ lies one third of the way from $A$ to $B$. It is closer to $A$.",
        zh: "因為 $AP:PB=1:2$，$P$ 在由 $A$ 到 $B$ 的三分之一處。它比較靠近 $A$。",
      },
      {
        en: "$P=\\left(\\dfrac{2\\cdot 2+1\\cdot 8}{1+2},\\,\\dfrac{2\\cdot(-1)+1\\cdot 5}{1+2}\\right)$.",
        zh: "$P=\\left(\\dfrac{2\\cdot 2+1\\cdot 8}{1+2},\\,\\dfrac{2\\cdot(-1)+1\\cdot 5}{1+2}\\right)$。",
      },
      {
        en: "$P=\\left(\\dfrac{4+8}{3},\\,\\dfrac{-2+5}{3}\\right)=(4,\\,1)$.",
        zh: "$P=\\left(\\dfrac{4+8}{3},\\,\\dfrac{-2+5}{3}\\right)=(4,\\,1)$。",
      },
      {
        en: "The reversed substitution $\\dfrac{1\\cdot 2+2\\cdot 8}{3}=6$ and $\\dfrac{1\\cdot(-1)+2\\cdot 5}{3}=3$ gives $(6,\\,3)$, which is the point for the ratio $2:1$.",
        zh: "若把權重對調，$\\dfrac{1\\cdot 2+2\\cdot 8}{3}=6$，$\\dfrac{1\\cdot(-1)+2\\cdot 5}{3}=3$，得到 $(6,\\,3)$，那是比 $2:1$ 的分點。",
      },
    ],
    examTip: {
      en: "In $m:n$, the number $m$ is the part toward $B$, so $m$ multiplies the coordinates of $B$. If $m<n$, the point is closer to $A$. Use that picture to catch a reversed ratio.",
      zh: "在 $m:n$ 中，$m$ 是靠近 $B$ 的那一段，所以 $m$ 乘 $B$ 的坐標。若 $m<n$，分點比較靠近 $A$。用這幅圖來檢查有沒有把比例寫反。",
    },
  },
  {
    id: "sec-external",
    topicId: "section",
    difficulty: "exam",
    stem: {
      en: "The point $P$ divides the line segment joining $A(2,\\,-1)$ and $B(8,\\,5)$ externally in the ratio $AP:PB=1:2$. The coordinates of $P$ are",
      zh: "點 $P$ 把 $A(2,\\,-1)$ 與 $B(8,\\,5)$ 的連線外分為 $AP:PB=1:2$。$P$ 的坐標是",
    },
    options: [
      { key: "A", text: same("$(-4,\\,-7)$"), value: "(-4, -7)" },
      {
        key: "B",
        text: same("$(4,\\,1)$"),
        value: "(4, 1)",
        trap: {
          en: "The internal formula for the ratio $1:2$ was used. $(4,\\,1)$ lies between $A$ and $B$.",
          zh: "用了比 $1:2$ 的內分公式。$(4,\\,1)$ 在 $A$ 與 $B$ 之間。",
        },
      },
      {
        key: "C",
        text: same("$(6,\\,3)$"),
        value: "(6, 3)",
        trap: {
          en: "This is the internal division in the reversed ratio $2:1$.",
          zh: "這是把比例反過來之後的內分點，比是 $2:1$。",
        },
      },
      {
        key: "D",
        text: same("$(14,\\,11)$"),
        value: "(14, 11)",
        trap: {
          en: "The external formula was used with $m$ and $n$ swapped. $(14,\\,11)$ divides $AB$ externally in the ratio $2:1$.",
          zh: "外分公式中的 $m$ 和 $n$ 對調了。$(14,\\,11)$ 把 $AB$ 外分為 $2:1$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "External division in the ratio $m:n$ uses $\\left(\\dfrac{mx_2-nx_1}{m-n},\\,\\dfrac{my_2-ny_1}{m-n}\\right)$. The point is not between $A$ and $B$. For $1:2$ it lies on the side of $A$ away from $B$.",
      zh: "外分比 $m:n$ 用 $\\left(\\dfrac{mx_2-nx_1}{m-n},\\,\\dfrac{my_2-ny_1}{m-n}\\right)$。分點不在 $A$ 與 $B$ 之間。比是 $1:2$ 時，它在 $A$ 遠離 $B$ 的一側。",
    },
    steps: [
      {
        en: "For external division $AP:PB=m:n$, $P=\\left(\\dfrac{mx_2-nx_1}{m-n},\\,\\dfrac{my_2-ny_1}{m-n}\\right)$.",
        zh: "外分 $AP:PB=m:n$ 時，$P=\\left(\\dfrac{mx_2-nx_1}{m-n},\\,\\dfrac{my_2-ny_1}{m-n}\\right)$。",
      },
      {
        en: "With $m=1$ and $n=2$, $x=\\dfrac{1\\cdot 8-2\\cdot 2}{1-2}=\\dfrac{4}{-1}=-4$.",
        zh: "代入 $m=1$、$n=2$，$x=\\dfrac{1\\cdot 8-2\\cdot 2}{1-2}=\\dfrac{4}{-1}=-4$。",
      },
      {
        en: "$y=\\dfrac{1\\cdot 5-2\\cdot(-1)}{1-2}=\\dfrac{7}{-1}=-7$. So $P=(-4,\\,-7)$.",
        zh: "$y=\\dfrac{1\\cdot 5-2\\cdot(-1)}{1-2}=\\dfrac{7}{-1}=-7$。所以 $P=(-4,\\,-7)$。",
      },
      {
        en: "Directed segments: $\\overrightarrow{AP}=(-6,\\,-6)$ and $\\overrightarrow{PB}=(12,\\,12)$. Then $\\overrightarrow{AP}=-\\dfrac{1}{2}\\overrightarrow{PB}$, so the absolute ratio is $1:2$ and the directions are opposite. That is external division.",
        zh: "有向線段：$\\overrightarrow{AP}=(-6,\\,-6)$，$\\overrightarrow{PB}=(12,\\,12)$。於是 $\\overrightarrow{AP}=-\\dfrac{1}{2}\\overrightarrow{PB}$，絕對值的比是 $1:2$，方向相反。這就是外分。",
      },
    ],
    examTip: {
      en: "For the same two points and the same ratio $1:2$, the four usual answers are $(4,\\,1)$, $(6,\\,3)$, $(-4,\\,-7)$ and $(14,\\,11)$. The words “internally” or “externally”, and the order of the ratio, decide which one you need.",
      zh: "同一對點、同一個比 $1:2$，四個常見答案是 $(4,\\,1)$、$(6,\\,3)$、$(-4,\\,-7)$ 和 $(14,\\,11)$。題目寫「內分」還是「外分」，以及比例的次序，決定你要哪一個。",
    },
  },
  {
    id: "mid-endpoint",
    topicId: "section",
    difficulty: "standard",
    stem: {
      en: "The mid-point of $AB$ is $M(3,\\,-1)$. If $A$ is $(-1,\\,4)$, then $B$ is",
      zh: "$AB$ 的中點是 $M(3,\\,-1)$。若 $A$ 是 $(-1,\\,4)$，則 $B$ 是",
    },
    options: [
      { key: "A", text: same("$(7,\\,-6)$"), value: "(7, -6)" },
      {
        key: "B",
        text: same("$\\left(1,\\,\\dfrac{3}{2}\\right)$"),
        value: "(1, 3/2)",
        trap: {
          en: "The mid-point of $A$ and $M$ was found, instead of the other end of $AB$.",
          zh: "求的是 $A$ 和 $M$ 的中點，而不是 $AB$ 的另一端。",
        },
      },
      {
        key: "C",
        text: same("$(4,\\,-5)$"),
        value: "(4, -5)",
        trap: {
          en: "$M-A=(4,\\,-5)$ stops one step short. The correct rearrangement is $B=2M-A$, so the difference has to be added to $M$ again.",
          zh: "$M-A=(4,\\,-5)$ 少做了一步。正確的變形是 $B=2M-A$，所以這個差還要再加到 $M$ 上。",
        },
      },
      {
        key: "D",
        text: same("$(2,\\,3)$"),
        value: "(2, 3)",
        trap: {
          en: "The coordinates of $M$ and $A$ were added. The formula $B=2M-A$ was replaced by $M+A$.",
          zh: "把 $M$ 和 $A$ 的坐標相加了。公式 $B=2M-A$ 被換成了 $M+A$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "If $M$ is the mid-point, then $M=\\dfrac{A+B}{2}$. Rearrange to $B=2M-A$, and do it separately for $x$ and for $y$.",
      zh: "若 $M$ 是中點，則 $M=\\dfrac{A+B}{2}$。整理成 $B=2M-A$，並對 $x$ 和 $y$ 分別計算。",
    },
    steps: [
      {
        en: "Let $B=(x,\\,y)$. Then $\\dfrac{-1+x}{2}=3$ and $\\dfrac{4+y}{2}=-1$.",
        zh: "設 $B=(x,\\,y)$。則 $\\dfrac{-1+x}{2}=3$，$\\dfrac{4+y}{2}=-1$。",
      },
      {
        en: "From the first equation, $-1+x=6$, so $x=7$.",
        zh: "由第一式，$-1+x=6$，所以 $x=7$。",
      },
      {
        en: "From the second, $4+y=-2$, so $y=-6$.",
        zh: "由第二式，$4+y=-2$，所以 $y=-6$。",
      },
      {
        en: "Therefore $B=(7,\\,-6)$. In vector form, $B=2(3,\\,-1)-(-1,\\,4)=(7,\\,-6)$.",
        zh: "因此 $B=(7,\\,-6)$。向量形式是 $B=2(3,\\,-1)-(-1,\\,4)=(7,\\,-6)$。",
      },
    ],
    examTip: {
      en: "The working $M-A$ is halfway to the answer. You still have to add that result to $M$, which is what the factor $2$ in $2M-A$ is doing.",
      zh: "算出 $M-A$ 只完成了一半。還要把這個結果加回 $M$，這正是 $2M-A$ 裏那個 $2$ 在做的事。",
    },
  },
  {
    id: "sec-three-two",
    topicId: "section",
    difficulty: "standard",
    stem: {
      en: "The point $P$ divides $AB$ internally in the ratio $AP:PB=3:2$. If $A=(-2,\\,1)$ and $B=(8,\\,11)$, then $P=$",
      zh: "點 $P$ 把 $AB$ 內分為 $AP:PB=3:2$。若 $A=(-2,\\,1)$，$B=(8,\\,11)$，則 $P=$",
    },
    options: [
      { key: "A", text: same("$(4,\\,7)$"), value: "(4, 7)" },
      {
        key: "B",
        text: same("$(2,\\,5)$"),
        value: "(2, 5)",
        trap: {
          en: "The weights were attached to the wrong ends. This is the internal point for $AP:PB=2:3$.",
          zh: "權重乘錯了端點。這是 $AP:PB=2:3$ 的內分點。",
        },
      },
      {
        key: "C",
        text: same("$(3,\\,6)$"),
        value: "(3, 6)",
        trap: {
          en: "This is the mid-point $\\left(\\dfrac{-2+8}{2},\\,\\dfrac{1+11}{2}\\right)$. The ratio $3:2$ is not $1:1$.",
          zh: "這是中點 $\\left(\\dfrac{-2+8}{2},\\,\\dfrac{1+11}{2}\\right)$。比 $3:2$ 不是 $1:1$。",
        },
      },
      {
        key: "D",
        text: same("$(6,\\,9)$"),
        value: "(6, 9)",
        trap: {
          en: "$P$ was placed four fifths of the way from $A$ to $B$. The correct fraction of the segment is $\\dfrac{3}{3+2}=\\dfrac{3}{5}$.",
          zh: "把 $P$ 放在由 $A$ 到 $B$ 的五分之四處。正確的線段分數是 $\\dfrac{3}{3+2}=\\dfrac{3}{5}$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "$AP$ is $\\dfrac{3}{5}$ of $AB$, so $P=A+\\dfrac{3}{5}(B-A)$. In the section formula, $m=3$ multiplies $B$ and $n=2$ multiplies $A$.",
      zh: "$AP$ 是 $AB$ 的 $\\dfrac{3}{5}$，所以 $P=A+\\dfrac{3}{5}(B-A)$。在分點公式中，$m=3$ 乘 $B$，$n=2$ 乘 $A$。",
    },
    steps: [
      {
        en: "With $m=3$ and $n=2$, $P=\\left(\\dfrac{2\\cdot(-2)+3\\cdot 8}{5},\\,\\dfrac{2\\cdot 1+3\\cdot 11}{5}\\right)$.",
        zh: "代入 $m=3$、$n=2$，$P=\\left(\\dfrac{2\\cdot(-2)+3\\cdot 8}{5},\\,\\dfrac{2\\cdot 1+3\\cdot 11}{5}\\right)$。",
      },
      {
        en: "$P=\\left(\\dfrac{-4+24}{5},\\,\\dfrac{2+33}{5}\\right)=(4,\\,7)$.",
        zh: "$P=\\left(\\dfrac{-4+24}{5},\\,\\dfrac{2+33}{5}\\right)=(4,\\,7)$。",
      },
      {
        en: "Vector check: $B-A=(10,\\,10)$ and $A+\\dfrac{3}{5}(10,\\,10)=(-2,\\,1)+(6,\\,6)=(4,\\,7)$.",
        zh: "用向量覆核：$B-A=(10,\\,10)$，$A+\\dfrac{3}{5}(10,\\,10)=(-2,\\,1)+(6,\\,6)=(4,\\,7)$。",
      },
    ],
    examTip: {
      en: "The ratio $3:2$ means three parts toward $B$ and two parts back toward $A$, out of five. Dividing by $2$, or walking three parts out of two, are the two arithmetic slips that produce the other options.",
      zh: "比 $3:2$ 是五份之中，靠近 $B$ 的三份、靠近 $A$ 的兩份。除以 $2$，或者走了三份卻用二作分母，就是其餘選項的計算錯誤。",
    },
  },
];
