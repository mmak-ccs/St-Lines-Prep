import { same } from "../same";
import type { Question } from "../types";

export const distanceQuestions: Question[] = [
  {
    id: "dist-two-points",
    topicId: "distance",
    difficulty: "foundation",
    stem: {
      en: "The distance between $A(-2,\\,3)$ and $B(4,\\,-5)$ is",
      zh: "$A(-2,\\,3)$ 與 $B(4,\\,-5)$ 之間的距離是",
    },
    figure: {
      type: "coord",
      xMin: -4,
      xMax: 6,
      yMin: -6,
      yMax: 5,
      segments: [{ x1: -2, y1: 3, x2: 4, y2: -5, tone: "accent" }],
      points: [
        { x: -2, y: 3, label: "A", dx: -16, dy: -4 },
        { x: 4, y: -5, label: "B", dx: 8, dy: 4 },
      ],
    },
    options: [
      { key: "A", text: same("$10$"), value: "10" },
      {
        key: "B",
        text: same("$14$"),
        value: "14",
        trap: {
          en: "The horizontal and vertical changes were added: $|6|+|-8|=14$. Distance is not the sum of the two changes.",
          zh: "把水平和垂直變化相加了：$|6|+|-8|=14$。距離不是這兩個變化的和。",
        },
      },
      {
        key: "C",
        text: same("$\\sqrt{10}$"),
        value: "sqrt10",
        trap: {
          en: "The squares were omitted and the square root was kept: $\\sqrt{6+4}$ is not the distance formula.",
          zh: "漏掉了平方，卻保留了開方：$\\sqrt{6+4}$ 不是距離公式。",
        },
      },
      {
        key: "D",
        text: same("$100$"),
        value: "100",
        trap: {
          en: "The square root was forgotten. $6^2+(-8)^2=100$ is the square of the distance.",
          zh: "忘記開方。$6^2+(-8)^2=100$ 是距離的平方。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Distance $=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Work out $6$ and $-8$ first. The result should be a $6$-$8$-$10$ triple.",
      zh: "距離 $=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$。先算出 $6$ 和 $-8$。結果應是一組 $6$-$8$-$10$。",
    },
    steps: [
      {
        en: "$x_2-x_1=4-(-2)=6$ and $y_2-y_1=-5-3=-8$.",
        zh: "$x_2-x_1=4-(-2)=6$，$y_2-y_1=-5-3=-8$。",
      },
      {
        en: "$AB=\\sqrt{6^2+(-8)^2}=\\sqrt{36+64}=\\sqrt{100}=10$.",
        zh: "$AB=\\sqrt{6^2+(-8)^2}=\\sqrt{36+64}=\\sqrt{100}=10$。",
      },
      {
        en: "The negative sign disappears when the change in $y$ is squared. It must not be dropped before the squaring step by turning the formula into a sum of absolute values.",
        zh: "$y$ 的變化被平方之後，負號會消失。不能在平方之前就把公式改成兩個絕對值的和。",
      },
    ],
    examTip: {
      en: "If the changes are $6$ and $8$, the distance is $10$, not $14$ and not $100$. Recognising the Pythagorean triple prevents both of the common slips.",
      zh: "變化量是 $6$ 和 $8$ 時，距離是 $10$，不是 $14$，也不是 $100$。認出這組勾股數，兩個常見錯誤都可以避開。",
    },
  },
  {
    id: "dist-foot",
    topicId: "distance",
    difficulty: "foundation",
    stem: {
      en: "The coordinates of the foot of the perpendicular from $A(-1,\\,4)$ to the $x$-axis are",
      zh: "由 $A(-1,\\,4)$ 向 $x$ 軸作垂線，垂足的坐標是",
    },
    figure: {
      type: "coord",
      xMin: -4,
      xMax: 4,
      yMin: -1,
      yMax: 5,
      segments: [{ x1: -1, y1: 4, x2: -1, y2: 0, dashed: true, tone: "accent" }],
      points: [
        { x: -1, y: 4, label: "A", dx: 8, dy: -4 },
        { x: -1, y: 0, label: "H", dx: 8, dy: 14 },
      ],
    },
    options: [
      {
        key: "A",
        text: same("$(0,\\,4)$"),
        value: "(0, 4)",
        trap: {
          en: "This is the foot of the perpendicular from $A$ to the $y$-axis.",
          zh: "這是由 $A$ 向 $y$ 軸作垂線的垂足。",
        },
      },
      { key: "B", text: same("$(-1,\\,0)$"), value: "(-1, 0)" },
      {
        key: "C",
        text: same("$(4,\\,-1)$"),
        value: "(4, -1)",
        trap: {
          en: "The coordinates of $A$ were swapped and a sign was changed.",
          zh: "把 $A$ 的坐標對調，並且改了一個正負號。",
        },
      },
      {
        key: "D",
        text: same("$(0,\\,-1)$"),
        value: "(0, -1)",
        trap: {
          en: "The x-coordinate was moved to the y-coordinate and the point was placed on the y-axis.",
          zh: "把 x 坐標搬到了 y 坐標，點被放在 y 軸上。",
        },
      },
    ],
    answer: "B",
    hint: {
      en: "The x-axis is horizontal, so the shortest path to it is vertical. A vertical line keeps the x-coordinate unchanged and meets the x-axis where $y=0$.",
      zh: "x 軸是水平的，所以到它的最短路徑是鉛垂的。鉛垂線不改變 x 坐標，並在 $y=0$ 處碰到 x 軸。",
    },
    steps: [
      {
        en: "The perpendicular from a point to the x-axis is vertical.",
        zh: "由一點向 x 軸所作的垂線是鉛垂線。",
      },
      {
        en: "It has equation $x=-1$ and meets the x-axis at $y=0$.",
        zh: "它的方程是 $x=-1$，與 x 軸交於 $y=0$。",
      },
      {
        en: "The foot is $(-1,\\,0)$. The distance from $A$ to the x-axis is the absolute value of its y-coordinate, which is $4$.",
        zh: "垂足是 $(-1,\\,0)$。$A$ 到 x 軸的距離是它的 y 坐標的絕對值，即 $4$。",
      },
    ],
    examTip: {
      en: "“Foot to the x-axis” changes $y$ to $0$ and keeps $x$. “Foot to the y-axis” changes $x$ to $0$ and keeps $y$. The two answers are both in the options on purpose.",
      zh: "「向 x 軸作垂足」是把 $y$ 改成 $0$，保留 $x$。「向 y 軸作垂足」是把 $x$ 改成 $0$，保留 $y$。這兩個答案故意都放在選項裏。",
    },
  },
  {
    id: "dist-point-line",
    topicId: "distance",
    difficulty: "standard",
    stem: {
      en: "The perpendicular distance from the point $P(-1,\\,2)$ to the straight line $3x-4y+5=0$ is",
      zh: "由點 $P(-1,\\,2)$ 到直線 $3x-4y+5=0$ 的垂直距離是",
    },
    figure: {
      type: "coord",
      xMin: -3,
      xMax: 3,
      yMin: -1,
      yMax: 4,
      segments: [
        { x1: -2.2, y1: -0.4, x2: 1.6, y2: 2.45, tone: "ink" },
        { x1: -1, y1: 2, x2: -0.28, y2: 1.04, dashed: true, tone: "accent" },
      ],
      points: [{ x: -1, y: 2, label: "P", dx: -16, dy: -4 }],
    },
    options: [
      { key: "A", text: same("$\\dfrac{6}{5}$"), value: "6/5" },
      {
        key: "B",
        text: same("$6$"),
        value: "6",
        trap: {
          en: "The numerator $|3(-1)-4(2)+5|=6$ was left without dividing by $\\sqrt{3^2+(-4)^2}$.",
          zh: "分子 $|3(-1)-4(2)+5|=6$ 沒有再除以 $\\sqrt{3^2+(-4)^2}$。",
        },
      },
      {
        key: "C",
        text: same("$\\dfrac{16}{5}$"),
        value: "16/5",
        trap: {
          en: "The constant $+5$ was given the wrong sign inside the absolute value: $|-3-8-5|=16$.",
          zh: "絕對值內把常數 $+5$ 的正負號寫反了：$|-3-8-5|=16$。",
        },
      },
      {
        key: "D",
        text: same("$\\dfrac{6}{7}$"),
        value: "6/7",
        trap: {
          en: "The denominator was taken as $|3|+|-4|=7$ instead of $\\sqrt{3^2+(-4)^2}=5$.",
          zh: "分母用了 $|3|+|-4|=7$，而不是 $\\sqrt{3^2+(-4)^2}=5$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "For $Ax+By+C=0$, the distance from $(x_0,y_0)$ is $\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$. Here $3$-$4$-$5$ is the denominator you want.",
      zh: "對於 $Ax+By+C=0$，點 $(x_0,y_0)$ 到直線的距離是 $\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$。這裏分母正好是一組 $3$-$4$-$5$。",
    },
    steps: [
      {
        en: "The formula is $\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$.",
        zh: "公式是 $\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$。",
      },
      {
        en: "The numerator is $|3(-1)-4(2)+5|=|-3-8+5|=6$.",
        zh: "分子是 $|3(-1)-4(2)+5|=|-3-8+5|=6$。",
      },
      {
        en: "The denominator is $\\sqrt{3^2+(-4)^2}=\\sqrt{9+16}=5$.",
        zh: "分母是 $\\sqrt{3^2+(-4)^2}=\\sqrt{9+16}=5$。",
      },
      {
        en: "The distance is $\\dfrac{6}{5}$.",
        zh: "距離是 $\\dfrac{6}{5}$。",
      },
    ],
    examTip: {
      en: "The expression inside the absolute value is the whole left side $Ax_0+By_0+C$, including the constant. The denominator is a square root of a sum of squares, never the sum of the absolute values.",
      zh: "絕對值裏面是整個左邊 $Ax_0+By_0+C$，常數也要放進去。分母是平方和的開方，不是絕對值的和。",
    },
  },
  {
    id: "dist-parameter",
    topicId: "distance",
    difficulty: "exam",
    stem: {
      en: "The distance between $P(k,\\,-2)$ and $Q(3,\\,4)$ is $10$. Then $k=$",
      zh: "$P(k,\\,-2)$ 與 $Q(3,\\,4)$ 的距離是 $10$。則 $k=$",
    },
    options: [
      {
        key: "A",
        text: { en: "$11$ only", zh: "只有 $11$" },
        value: "11",
        trap: {
          en: "Only the positive square root $k-3=8$ was kept.",
          zh: "只保留了正的平方根 $k-3=8$。",
        },
      },
      {
        key: "B",
        text: { en: "$-5$ only", zh: "只有 $-5$" },
        value: "-5",
        trap: {
          en: "Only the negative square root $k-3=-8$ was kept.",
          zh: "只保留了負的平方根 $k-3=-8$。",
        },
      },
      {
        key: "C",
        text: { en: "$11$ or $-5$", zh: "$11$ 或 $-5$" },
        value: "11,-5",
      },
      {
        key: "D",
        text: { en: "$5$ or $-11$", zh: "$5$ 或 $-11$" },
        value: "5,-11",
        trap: {
          en: "The bracket was written $k+3$ instead of $k-3$, because the sign inside $k-3$ was reversed.",
          zh: "括號寫成了 $k+3$，而不是 $k-3$，因為 $k-3$ 裏面的正負號被反過來了。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Square both sides of the distance equation. You should reach $(k-3)^2=64$. A squared equation has two roots unless the question gives a reason to reject one.",
      zh: "把距離方程兩邊平方。你應得到 $(k-3)^2=64$。平方方程有兩個根，除非題目說明要捨去其中一個。",
    },
    steps: [
      {
        en: "$\\sqrt{(k-3)^2+(-2-4)^2}=10$.",
        zh: "$\\sqrt{(k-3)^2+(-2-4)^2}=10$。",
      },
      {
        en: "Square both sides: $(k-3)^2+(-6)^2=100$, so $(k-3)^2+36=100$.",
        zh: "兩邊平方：$(k-3)^2+(-6)^2=100$，即 $(k-3)^2+36=100$。",
      },
      {
        en: "$(k-3)^2=64$, hence $k-3=8$ or $k-3=-8$.",
        zh: "$(k-3)^2=64$，所以 $k-3=8$ 或 $k-3=-8$。",
      },
      {
        en: "$k=11$ or $k=-5$. Both points are at distance $10$ from $Q$, one on each side.",
        zh: "$k=11$ 或 $k=-5$。兩點與 $Q$ 的距離都是 $10$，分別在兩側。",
      },
    ],
    examTip: {
      en: "A distance equation is not linear. After squaring, keep both square roots. “Only” in an option is a signal to check whether the other root was discarded too early.",
      zh: "距離方程不是一次方程。平方之後，兩個平方根都要留下。選項裏的「只有」是一個訊號，提醒你檢查另一個根是不是被過早捨去。",
    },
  },
  {
    id: "dist-parallel-lines",
    topicId: "distance",
    difficulty: "exam",
    stem: {
      en: "The distance between the parallel lines $3x-4y+1=0$ and $6x-8y-18=0$ is",
      zh: "兩條平行線 $3x-4y+1=0$ 和 $6x-8y-18=0$ 之間的距離是",
    },
    options: [
      { key: "A", text: same("$2$"), value: "2" },
      {
        key: "B",
        text: same("$10$"),
        value: "10",
        trap: {
          en: "After the second equation was reduced to $3x-4y-9=0$, the numerator $|1-(-9)|=10$ was not divided by $5$.",
          zh: "第二式化成 $3x-4y-9=0$ 之後，分子 $|1-(-9)|=10$ 沒有再除以 $5$。",
        },
      },
      {
        key: "C",
        text: same("$\\dfrac{19}{5}$"),
        value: "19/5",
        trap: {
          en: "The constants were subtracted as $|1-(-18)|$ while the denominator still used the first line, $\\sqrt{3^2+(-4)^2}$. The second equation had not been scaled.",
          zh: "常數按 $|1-(-18)|$ 相減，分母卻仍用第一條線的 $\\sqrt{3^2+(-4)^2}$。第二式還沒有化成相同係數。",
        },
      },
      {
        key: "D",
        text: same("$\\dfrac{19}{10}$"),
        value: "19/10",
        trap: {
          en: "The constants $1$ and $-18$ were used with $\\sqrt{6^2+(-8)^2}$. The two equations were not written with the same $x$ and $y$ coefficients.",
          zh: "用了常數 $1$ 和 $-18$，再除以 $\\sqrt{6^2+(-8)^2}$。兩式的 $x$、$y$ 係數還沒有化成一樣。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Divide the second equation by $2$ so that both lines have the form $3x-4y+c=0$. The distance is then $\\dfrac{|c_1-c_2|}{\\sqrt{3^2+(-4)^2}}$.",
      zh: "把第二式除以 $2$，使兩條線都變成 $3x-4y+c=0$。距離就是 $\\dfrac{|c_1-c_2|}{\\sqrt{3^2+(-4)^2}}$。",
    },
    steps: [
      {
        en: "Divide $6x-8y-18=0$ by $2$: $3x-4y-9=0$.",
        zh: "把 $6x-8y-18=0$ 除以 $2$：$3x-4y-9=0$。",
      },
      {
        en: "The lines are now $3x-4y+1=0$ and $3x-4y-9=0$. They are parallel because the $x$ and $y$ coefficients match and the constants do not.",
        zh: "現在兩線是 $3x-4y+1=0$ 和 $3x-4y-9=0$。$x$、$y$ 係數相同而常數不同，所以它們平行且相異。",
      },
      {
        en: "The distance is $\\dfrac{|1-(-9)|}{\\sqrt{3^2+(-4)^2}}=\\dfrac{10}{5}=2$.",
        zh: "距離是 $\\dfrac{|1-(-9)|}{\\sqrt{3^2+(-4)^2}}=\\dfrac{10}{5}=2$。",
      },
      {
        en: "The same value is the distance from any point of one line to the other. On $3x-4y-9=0$, $y=0$ gives $x=3$. The distance from $(3,\\,0)$ to $3x-4y+1=0$ is $\\dfrac{|9+1|}{5}=2$.",
        zh: "這個值也等於其中一條線上任一點到另一條線的距離。例如 $y=0$ 時，$3x-9=0$，$x=3$，點 $(3,\\,0)$ 在第二條線上。它到第一條線的距離是 $\\dfrac{|9+1|}{5}=2$。",
      },
    ],
    examTip: {
      en: "Do not put the two constants into the formula until the coefficients of $x$ and $y$ are identical, not merely proportional. Dividing by $2$ is part of the method, not an optional simplification.",
      zh: "在 $x$ 和 $y$ 的係數完全相同之前，不要把兩個常數放進公式。係數成比例還不夠。除以 $2$ 是步驟的一部分，不是可做可不做的化簡。",
    },
  },
];
