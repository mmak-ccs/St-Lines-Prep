import { same } from "../same";
import type { Question } from "../types";

const parallelTriangle: Question["figure"] = {
  type: "sketch",
  lines: [
    { x1: 160, y1: 28, x2: 36, y2: 200 },
    { x1: 160, y1: 28, x2: 284, y2: 200 },
    { x1: 36, y1: 200, x2: 284, y2: 200 },
    { x1: 119, y1: 85, x2: 201, y2: 85, tone: "accent" },
    { x1: 148, y1: 78, x2: 154, y2: 92, tone: "accent" },
    { x1: 166, y1: 78, x2: 172, y2: 92, tone: "accent" },
    { x1: 148, y1: 193, x2: 154, y2: 207 },
    { x1: 166, y1: 193, x2: 172, y2: 207 },
  ],
  labels: [
    { x: 160, y: 16, text: "A" },
    { x: 22, y: 214, text: "B" },
    { x: 292, y: 214, text: "C" },
    { x: 102, y: 78, text: "D" },
    { x: 208, y: 78, text: "E" },
  ],
};

export const areaQuestions: Question[] = [
  {
    id: "area-basic",
    topicId: "area",
    difficulty: "foundation",
    stem: {
      en: "The area of the triangle with vertices $A(1,\\,2)$, $B(5,\\,2)$ and $C(3,\\,6)$ is",
      zh: "頂點為 $A(1,\\,2)$、$B(5,\\,2)$ 和 $C(3,\\,6)$ 的三角形，面積是",
    },
    figure: {
      type: "coord",
      xMin: -1,
      xMax: 7,
      yMin: -1,
      yMax: 7,
      segments: [
        { x1: 1, y1: 2, x2: 5, y2: 2, tone: "accent" },
        { x1: 5, y1: 2, x2: 3, y2: 6, tone: "accent" },
        { x1: 3, y1: 6, x2: 1, y2: 2, tone: "accent" },
      ],
      points: [
        { x: 1, y: 2, label: "A", dx: -16, dy: 4 },
        { x: 5, y: 2, label: "B", dx: 8, dy: 4 },
        { x: 3, y: 6, label: "C", dx: 8, dy: -4 },
      ],
    },
    options: [
      { key: "A", text: same("$8$"), value: "8" },
      {
        key: "B",
        text: same("$16$"),
        value: "16",
        trap: {
          en: "The factor $\\dfrac{1}{2}$ was omitted. The base is $4$ and the height is $4$, so the product $16$ is not yet the area.",
          zh: "漏了係數 $\\dfrac{1}{2}$。底是 $4$，高是 $4$，乘積 $16$ 還不是面積。",
        },
      },
      {
        key: "C",
        text: same("$4$"),
        value: "4",
        trap: {
          en: "Only the base, or half of the correct area, was reported.",
          zh: "只寫了底，或把正確面積再除以 $2$。",
        },
      },
      {
        key: "D",
        text: same("$10$"),
        value: "10",
        trap: {
          en: "The base $4$ and the vertical change $6$ were added. The height is the change from the base line $y=2$ up to $y=6$, which is $4$, and the area still needs the factor $\\dfrac{1}{2}$.",
          zh: "把底 $4$ 和垂直坐標的差 $6$ 相加了。高是由底邊所在的 $y=2$ 升到 $y=6$，即 $4$，而且面積仍要乘 $\\dfrac{1}{2}$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "$AB$ is horizontal, so it can be the base. The base is $5-1=4$ and the height is $6-2=4$. Remember the $\\dfrac{1}{2}$.",
      zh: "$AB$ 是水平的，可以當作底。底是 $5-1=4$，高是 $6-2=4$。記得乘 $\\dfrac{1}{2}$。",
    },
    steps: [
      {
        en: "$A$ and $B$ have the same y-coordinate, so $AB$ is horizontal and has length $5-1=4$.",
        zh: "$A$ 和 $B$ 的 y 坐標相同，所以 $AB$ 是水平的，長度是 $5-1=4$。",
      },
      {
        en: "The height from $C$ to this base is $6-2=4$.",
        zh: "由 $C$ 向這條底所作的高是 $6-2=4$。",
      },
      {
        en: "The area is $\\dfrac{1}{2}\\times 4\\times 4=8$.",
        zh: "面積是 $\\dfrac{1}{2}\\times 4\\times 4=8$。",
      },
      {
        en: "By the shoelace formula, $\\dfrac{1}{2}\\bigl|1(2-6)+5(6-2)+3(2-2)\\bigr|=\\dfrac{1}{2}|-4+20|=8$.",
        zh: "用鞋帶公式，$\\dfrac{1}{2}\\bigl|1(2-6)+5(6-2)+3(2-2)\\bigr|=\\dfrac{1}{2}|-4+20|=8$。",
      },
    ],
    examTip: {
      en: "The formula $\\dfrac{1}{2}|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$ already contains the $\\dfrac{1}{2}$. If you also use $\\dfrac{1}{2}\\times\\text{base}\\times\\text{height}$, do not apply that factor twice, and do not leave it out.",
      zh: "公式 $\\dfrac{1}{2}|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|$ 已經包含 $\\dfrac{1}{2}$。如果改用 $\\dfrac{1}{2}\\times\\text{底}\\times\\text{高}$，這個係數不能用兩次，也不能漏掉。",
    },
  },
  {
    id: "area-collinear",
    topicId: "area",
    difficulty: "standard",
    stem: {
      en: "The points $A(-1,\\,2)$, $B(2,\\,5)$ and $C(5,\\,k)$ are collinear. Then $k=$",
      zh: "點 $A(-1,\\,2)$、$B(2,\\,5)$ 和 $C(5,\\,k)$ 共線。則 $k=$",
    },
    options: [
      { key: "A", text: same("$8$"), value: "8" },
      {
        key: "B",
        text: same("$5$"),
        value: "5",
        trap: {
          en: "The run was taken from $B$ to $C$ only: $k-2=5-2$. The slope equation has to use a pair of points that determines the same line, with matching changes.",
          zh: "水平變化只用了由 $B$ 到 $C$：$k-2=5-2$。斜率方程要用能確定同一直線的一對點，變化量要對應。",
        },
      },
      {
        key: "C",
        text: same("$-4$"),
        value: "-4",
        trap: {
          en: "The slope of $AB$ was given the wrong sign. $\\dfrac{k-2}{6}=-1$ gives $k=-4$.",
          zh: "$AB$ 的斜率被寫成了相反數。$\\dfrac{k-2}{6}=-1$ 會得到 $k=-4$。",
        },
      },
      {
        key: "D",
        text: same("$11$"),
        value: "11",
        trap: {
          en: "The slope $1$ was multiplied by the x-coordinate $5$ and then added to $2$: $k=2+3\\times 3$ is a similar slip. The correct run from $A$ to $C$ is $6$, not $3$ and not $5$ alone.",
          zh: "把斜率 $1$ 乘了 x 坐標再加到 $2$ 上。由 $A$ 到 $C$ 的水平變化是 $6$，不是 $3$，也不是單獨一個 $5$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Collinear points give slope $AB$ equal to slope $AC$, or they make the area of triangle $ABC$ equal to $0$. The slope of $AB$ is $1$.",
      zh: "共線時，斜率 $AB$ 等於斜率 $AC$，或者三角形 $ABC$ 的面積是 $0$。$AB$ 的斜率是 $1$。",
    },
    steps: [
      {
        en: "The slope of $AB$ is $\\dfrac{5-2}{2-(-1)}=\\dfrac{3}{3}=1$.",
        zh: "$AB$ 的斜率是 $\\dfrac{5-2}{2-(-1)}=\\dfrac{3}{3}=1$。",
      },
      {
        en: "The slope of $AC$ is $\\dfrac{k-2}{5-(-1)}=\\dfrac{k-2}{6}$.",
        zh: "$AC$ 的斜率是 $\\dfrac{k-2}{5-(-1)}=\\dfrac{k-2}{6}$。",
      },
      {
        en: "Set them equal: $\\dfrac{k-2}{6}=1$, so $k-2=6$ and $k=8$.",
        zh: "令它們相等：$\\dfrac{k-2}{6}=1$，所以 $k-2=6$，$k=8$。",
      },
      {
        en: "Area check: $\\dfrac{1}{2}\\bigl|-1(5-8)+2(8-2)+5(2-5)\\bigr|=\\dfrac{1}{2}|3+12-15|=0$. The area is zero, so the points are collinear.",
        zh: "用面積覆核：$\\dfrac{1}{2}\\bigl|-1(5-8)+2(8-2)+5(2-5)\\bigr|=\\dfrac{1}{2}|3+12-15|=0$。面積是零，三點共線。",
      },
    ],
    examTip: {
      en: "A zero area is the collinear test when the slope method feels messy. If you use slopes, the run from $A$ to $C$ is $5-(-1)=6$. Using $5-2=3$ produces the option $k=5$.",
      zh: "斜率方法容易混亂時，面積等於零就是共線的檢驗。如果用斜率，由 $A$ 到 $C$ 的水平變化是 $5-(-1)=6$。用了 $5-2=3$，就會得到選項 $k=5$。",
    },
  },
  {
    id: "area-same-height",
    topicId: "area",
    difficulty: "standard",
    stem: {
      en: "In $\\triangle ABC$, $D$ is a point on $BC$ such that $BD:DC=2:3$. Then the area of $\\triangle ABD:$ the area of $\\triangle ADC=$",
      zh: "在 $\\triangle ABC$ 中，$D$ 在 $BC$ 上，且 $BD:DC=2:3$。則 $\\triangle ABD$ 的面積 $:$ $\\triangle ADC$ 的面積 $=$",
    },
    figure: {
      type: "sketch",
      lines: [
        { x1: 160, y1: 24, x2: 40, y2: 200 },
        { x1: 160, y1: 24, x2: 300, y2: 200 },
        { x1: 40, y1: 200, x2: 300, y2: 200 },
        { x1: 160, y1: 24, x2: 144, y2: 200, tone: "accent" },
      ],
      labels: [
        { x: 160, y: 14, text: "A" },
        { x: 28, y: 214, text: "B" },
        { x: 308, y: 214, text: "C" },
        { x: 144, y: 216, text: "D" },
        { x: 90, y: 188, text: "2" },
        { x: 210, y: 188, text: "3" },
      ],
    },
    options: [
      { key: "A", text: same("$2:3$"), value: "2:3" },
      {
        key: "B",
        text: same("$3:2$"),
        value: "3:2",
        trap: {
          en: "The ratio $BD:DC$ was reversed when it was copied as an area ratio.",
          zh: "把 $BD:DC$ 抄成面積比時，次序寫反了。",
        },
      },
      {
        key: "C",
        text: same("$4:9$"),
        value: "4:9",
        trap: {
          en: "The ratio was squared. Squaring is for similar figures. $\\triangle ABD$ and $\\triangle ADC$ share a height, but they are not similar in general.",
          zh: "把比例平方了。平方用於相似圖形。$\\triangle ABD$ 和 $\\triangle ADC$ 有相同的高，但一般並不相似。",
        },
      },
      {
        key: "D",
        text: same("$2:5$"),
        value: "2:5",
        trap: {
          en: "$BD:BC=2:5$ compares $\\triangle ABD$ with the whole $\\triangle ABC$, not with $\\triangle ADC$.",
          zh: "$BD:BC=2:5$ 比較的是 $\\triangle ABD$ 和整個 $\\triangle ABC$，不是和 $\\triangle ADC$ 比較。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "The two triangles have the same height from $A$ to the line $BC$. Areas with the same height are in the ratio of their bases. Do not square $2:3$.",
      zh: "兩個三角形由 $A$ 向直線 $BC$ 的高相同。同高的面積比等於底的比。不要把 $2:3$ 平方。",
    },
    steps: [
      {
        en: "$\\triangle ABD$ and $\\triangle ADC$ have bases $BD$ and $DC$ on the same straight line, and they share the vertex $A$.",
        zh: "$\\triangle ABD$ 和 $\\triangle ADC$ 的底 $BD$、$DC$ 在同一直線上，而且共用頂點 $A$。",
      },
      {
        en: "Their heights from $A$ to $BC$ are equal.",
        zh: "它們由 $A$ 向 $BC$ 的高相等。",
      },
      {
        en: "Therefore $\\dfrac{\\text{area of }\\triangle ABD}{\\text{area of }\\triangle ADC}=\\dfrac{BD}{DC}=\\dfrac{2}{3}$.",
        zh: "因此 $\\dfrac{\\triangle ABD\\text{ 的面積}}{\\triangle ADC\\text{ 的面積}}=\\dfrac{BD}{DC}=\\dfrac{2}{3}$。",
      },
    ],
    examTip: {
      en: "Square a ratio only when the triangles are similar, usually because a line has been drawn parallel to a side. A point lying on the base does not create similar triangles.",
      zh: "只有三角形相似時才把比平方，通常是因為畫了一條與一邊平行的線。底邊上的一個分點不會造出相似三角形。",
    },
  },
  {
    id: "area-similar",
    topicId: "area",
    difficulty: "exam",
    stem: {
      en: "In $\\triangle ABC$, $D$ and $E$ are points on $AB$ and $AC$ respectively such that $DE\\parallel BC$ and $AD:DB=1:2$. Then the area of $\\triangle ADE:$ the area of $\\triangle ABC=$",
      zh: "在 $\\triangle ABC$ 中，$D$、$E$ 分別在 $AB$、$AC$ 上，$DE\\parallel BC$，且 $AD:DB=1:2$。則 $\\triangle ADE$ 的面積 $:$ $\\triangle ABC$ 的面積 $=$",
    },
    figure: parallelTriangle,
    options: [
      {
        key: "A",
        text: same("$1:2$"),
        value: "1:2",
        trap: {
          en: "This is $AD:DB$, not $AD:AB$, and it has not been squared.",
          zh: "這是 $AD:DB$，不是 $AD:AB$，而且還沒有平方。",
        },
      },
      {
        key: "B",
        text: same("$1:3$"),
        value: "1:3",
        trap: {
          en: "This is the ratio of corresponding lengths $AD:AB$. The area ratio of similar figures is the square of the length ratio.",
          zh: "這是對應長度的比 $AD:AB$。相似圖形的面積比是長度比的平方。",
        },
      },
      {
        key: "C",
        text: same("$1:4$"),
        value: "1:4",
        trap: {
          en: "$\\left(\\dfrac{1}{2}\\right)^2$ squares $AD:DB$. The comparison required is with the whole side $AB$, not with the remaining part $DB$.",
          zh: "$\\left(\\dfrac{1}{2}\\right)^2$ 把 $AD:DB$ 平方了。要比較的是整條邊 $AB$，不是餘下的 $DB$。",
        },
      },
      { key: "D", text: same("$1:9$"), value: "1:9" },
    ],
    answer: "D",
    hint: {
      en: "Because $DE\\parallel BC$, the triangles are similar. First convert $AD:DB=1:2$ into $AD:AB$. Then square that ratio.",
      zh: "因為 $DE\\parallel BC$，兩個三角形相似。先把 $AD:DB=1:2$ 換成 $AD:AB$。再把這個比平方。",
    },
    steps: [
      {
        en: "$AD:DB=1:2$, so $AD:AB=1:(1+2)=1:3$.",
        zh: "$AD:DB=1:2$，所以 $AD:AB=1:(1+2)=1:3$。",
      },
      {
        en: "Since $DE\\parallel BC$, corresponding angles are equal and $\\triangle ADE\\sim\\triangle ABC$.",
        zh: "因為 $DE\\parallel BC$，對應角相等，$\\triangle ADE\\sim\\triangle ABC$。",
      },
      {
        en: "The ratio of areas is the square of the ratio of corresponding sides: $\\left(\\dfrac{1}{3}\\right)^2=\\dfrac{1}{9}$.",
        zh: "面積比是對應邊之比的平方：$\\left(\\dfrac{1}{3}\\right)^2=\\dfrac{1}{9}$。",
      },
      {
        en: "So the area of $\\triangle ADE:$ the area of $\\triangle ABC=1:9$.",
        zh: "因此 $\\triangle ADE$ 的面積 $:$ $\\triangle ABC$ 的面積 $=1:9$。",
      },
    ],
    examTip: {
      en: "Two decisions are required, and each one has its own trap. First change $1:2$ into $1:3$ by adding the parts. Then square. Stopping after either decision produces an option on the page.",
      zh: "這題要做兩個決定，每個決定都有自己的陷阱。先把 $1:2$ 的兩份相加，換成 $1:3$。然後平方。在任何一步停下來，都會得到卷面上的一個選項。",
    },
  },
  {
    id: "area-trapezium",
    topicId: "area",
    difficulty: "exam",
    stem: {
      en: "In $\\triangle ABC$, $D$ and $E$ are points on $AB$ and $AC$ respectively such that $DE\\parallel BC$ and $AD:DB=1:2$. Then the area of $\\triangle ADE:$ the area of trapezium $DECB=$",
      zh: "在 $\\triangle ABC$ 中，$D$、$E$ 分別在 $AB$、$AC$ 上，$DE\\parallel BC$，且 $AD:DB=1:2$。則 $\\triangle ADE$ 的面積 $:$ 梯形 $DECB$ 的面積 $=$",
    },
    figure: parallelTriangle,
    options: [
      {
        key: "A",
        text: same("$1:2$"),
        value: "1:2",
        trap: {
          en: "The length ratio $AD:DB$ was used as an area ratio.",
          zh: "把長度比 $AD:DB$ 直接當成了面積比。",
        },
      },
      {
        key: "B",
        text: same("$1:4$"),
        value: "1:4",
        trap: {
          en: "$\\left(\\dfrac{AD}{DB}\\right)^2=\\dfrac{1}{4}$ squares the wrong pair of lengths.",
          zh: "$\\left(\\dfrac{AD}{DB}\\right)^2=\\dfrac{1}{4}$ 把不該平方的兩段長度平方了。",
        },
      },
      { key: "C", text: same("$1:8$"), value: "1:8" },
      {
        key: "D",
        text: same("$1:9$"),
        value: "1:9",
        trap: {
          en: "This compares $\\triangle ADE$ with the whole $\\triangle ABC$. The question asks for the trapezium that remains after the small triangle is removed.",
          zh: "這是 $\\triangle ADE$ 和整個 $\\triangle ABC$ 的比。題目問的是去掉小三角形之後剩下的梯形。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "From the parallel line, the small triangle and the whole triangle have area ratio $1:9$. The trapezium is the whole triangle with the small triangle removed. Subtract the parts: $9-1=8$.",
      zh: "由平行線，小三角形和整個三角形的面積比是 $1:9$。梯形是整個三角形去掉小三角形。把份數相減：$9-1=8$。",
    },
    steps: [
      {
        en: "$AD:AB=1:3$ and $\\triangle ADE\\sim\\triangle ABC$, so their areas are in the ratio $1^2:3^2=1:9$.",
        zh: "$AD:AB=1:3$，而且 $\\triangle ADE\\sim\\triangle ABC$，所以面積比是 $1^2:3^2=1:9$。",
      },
      {
        en: "Let the area of $\\triangle ADE$ be $1$ part. Then the area of $\\triangle ABC$ is $9$ parts.",
        zh: "設 $\\triangle ADE$ 的面積是 $1$ 份。則 $\\triangle ABC$ 的面積是 $9$ 份。",
      },
      {
        en: "The trapezium $DECB$ has area $9-1=8$ parts.",
        zh: "梯形 $DECB$ 的面積是 $9-1=8$ 份。",
      },
      {
        en: "Therefore the area of $\\triangle ADE:$ the area of trapezium $DECB=1:8$.",
        zh: "因此 $\\triangle ADE$ 的面積 $:$ 梯形 $DECB$ 的面積 $=1:8$。",
      },
    ],
    examTip: {
      en: "Read the second region carefully. $1:9$ is correct for the small triangle against the whole triangle, and it is printed as an option so that it can be chosen one line too early.",
      zh: "第二個區域要看清楚。小三角形對整個三角形確實是 $1:9$，這個答案也印在選項裏，專門給提早停下來的人。",
    },
  },
  {
    id: "area-coordinate",
    topicId: "area",
    difficulty: "exam",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(1,\\,1)$, $B(7,\\,1)$ and $C(1,\\,7)$. The point $P$ lies on $BC$ such that $BP:PC=1:2$. Then the area of $\\triangle ABP:$ the area of $\\triangle APC=$",
      zh: "$\\triangle ABC$ 的頂點是 $A(1,\\,1)$、$B(7,\\,1)$ 和 $C(1,\\,7)$。點 $P$ 在 $BC$ 上，且 $BP:PC=1:2$。則 $\\triangle ABP$ 的面積 $:$ $\\triangle APC$ 的面積 $=$",
    },
    figure: {
      type: "coord",
      xMin: -1,
      xMax: 9,
      yMin: -1,
      yMax: 9,
      segments: [
        { x1: 1, y1: 1, x2: 7, y2: 1 },
        { x1: 1, y1: 1, x2: 1, y2: 7 },
        { x1: 7, y1: 1, x2: 1, y2: 7 },
        { x1: 1, y1: 1, x2: 5, y2: 3, tone: "accent" },
      ],
      points: [
        { x: 1, y: 1, label: "A", dx: -16, dy: 12 },
        { x: 7, y: 1, label: "B", dx: 8, dy: 4 },
        { x: 1, y: 7, label: "C", dx: -16, dy: -4 },
        { x: 5, y: 3, label: "P", dx: 8, dy: -4 },
      ],
    },
    options: [
      { key: "A", text: same("$1:2$"), value: "1:2" },
      {
        key: "B",
        text: same("$1:4$"),
        value: "1:4",
        trap: {
          en: "The base ratio $1:2$ was squared. The triangles share the height from $A$ to the line $BC$, so they are not the similar pair.",
          zh: "把底的比 $1:2$ 平方了。兩個三角形共用由 $A$ 向直線 $BC$ 的高，它們不是那一對相似三角形。",
        },
      },
      {
        key: "C",
        text: same("$2:1$"),
        value: "2:1",
        trap: {
          en: "The section ratio was reversed, so the areas came out as $12:6$.",
          zh: "分點的比被寫反了，面積就變成 $12:6$。",
        },
      },
      {
        key: "D",
        text: same("$1:3$"),
        value: "1:3",
        trap: {
          en: "This is the area of $\\triangle ABP$ compared with the whole $\\triangle ABC$. Since $BP:BC=1:3$, that comparison is $1:3$, but the question asks for $\\triangle APC$.",
          zh: "這是 $\\triangle ABP$ 和整個 $\\triangle ABC$ 的比。因為 $BP:BC=1:3$，這個比較確實是 $1:3$，但題目問的是 $\\triangle APC$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "You can find $P$ by the section formula and then use the shoelace formula. You can also avoid the coordinates: the two small triangles have the same height from $A$ to $BC$.",
      zh: "可以用分點公式求 $P$，再用鞋帶公式。也可以不用坐標：兩個小三角形由 $A$ 向 $BC$ 的高相同。",
    },
    steps: [
      {
        en: "$P$ divides $BC$ internally in the ratio $BP:PC=1:2$, so $P=\\left(\\dfrac{2\\cdot 7+1\\cdot 1}{3},\\,\\dfrac{2\\cdot 1+1\\cdot 7}{3}\\right)=(5,\\,3)$.",
        zh: "$P$ 把 $BC$ 內分為 $BP:PC=1:2$，所以 $P=\\left(\\dfrac{2\\cdot 7+1\\cdot 1}{3},\\,\\dfrac{2\\cdot 1+1\\cdot 7}{3}\\right)=(5,\\,3)$。",
      },
      {
        en: "Area of $\\triangle ABP=\\dfrac{1}{2}\\bigl|1(1-3)+7(3-1)+5(1-1)\\bigr|=\\dfrac{1}{2}|-2+14|=6$.",
        zh: "$\\triangle ABP$ 的面積 $=\\dfrac{1}{2}\\bigl|1(1-3)+7(3-1)+5(1-1)\\bigr|=\\dfrac{1}{2}|-2+14|=6$。",
      },
      {
        en: "Area of $\\triangle APC=\\dfrac{1}{2}\\bigl|1(3-7)+5(7-1)+1(1-3)\\bigr|=\\dfrac{1}{2}|-4+30-2|=12$.",
        zh: "$\\triangle APC$ 的面積 $=\\dfrac{1}{2}\\bigl|1(3-7)+5(7-1)+1(1-3)\\bigr|=\\dfrac{1}{2}|-4+30-2|=12$。",
      },
      {
        en: "The ratio is $6:12=1:2$. This matches the bases: $BP:PC=1:2$, and the heights from $A$ are equal.",
        zh: "比是 $6:12=1:2$。這和底邊一致：$BP:PC=1:2$，而由 $A$ 所作的高相等。",
      },
    ],
    examTip: {
      en: "Coordinates are available, but the area ratio does not need them. Once $P$ is on $BC$, the ratio of areas from $A$ equals $BP:PC$. Squaring is the similar-triangle rule and does not apply here.",
      zh: "題目給了坐標，但求面積比不一定要用它們。只要 $P$ 在 $BC$ 上，由 $A$ 分出的面積比就等於 $BP:PC$。平方是相似三角形的規則，這裏用不上。",
    },
  },
  {
    id: "area-absolute",
    topicId: "area",
    difficulty: "exam",
    stem: {
      en: "The area of the triangle with vertices $(0,\\,0)$, $(k,\\,2)$ and $(4,\\,6)$ is $10$. Then $k=$",
      zh: "頂點為 $(0,\\,0)$、$(k,\\,2)$ 和 $(4,\\,6)$ 的三角形，面積是 $10$。則 $k=$",
    },
    options: [
      {
        key: "A",
        text: { en: "$\\dfrac{14}{3}$ only", zh: "只有 $\\dfrac{14}{3}$" },
        value: "14/3",
        trap: {
          en: "The absolute value was dropped, so only $6k-8=20$ was solved.",
          zh: "去掉了絕對值，只解了 $6k-8=20$。",
        },
      },
      {
        key: "B",
        text: { en: "$-2$ only", zh: "只有 $-2$" },
        value: "-2",
        trap: {
          en: "Only the negative case $6k-8=-20$ was solved.",
          zh: "只解了負的情形 $6k-8=-20$。",
        },
      },
      {
        key: "C",
        text: { en: "$-2$ or $\\dfrac{14}{3}$", zh: "$-2$ 或 $\\dfrac{14}{3}$" },
        value: "-2,14/3",
      },
      {
        key: "D",
        text: { en: "$2$ or $-\\dfrac{14}{3}$", zh: "$2$ 或 $-\\dfrac{14}{3}$" },
        value: "2,-14/3",
        trap: {
          en: "The expression inside the absolute value was given the wrong sign, $|6k+8|=20$.",
          zh: "絕對值內的式子正負號寫反了，變成 $|6k+8|=20$。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "The shoelace formula contains an absolute value. Set $\\dfrac{1}{2}|6k-8|=10$, then split into two linear equations. Both give a triangle of area $10$, on opposite sides of the base.",
      zh: "鞋帶公式裏有絕對值。列式 $\\dfrac{1}{2}|6k-8|=10$，再拆成兩個一次方程。兩個答案都給出面積 $10$ 的三角形，分別在底的兩側。",
    },
    steps: [
      {
        en: "$\\dfrac{1}{2}\\bigl|0(2-6)+k(6-0)+4(0-2)\\bigr|=10$.",
        zh: "$\\dfrac{1}{2}\\bigl|0(2-6)+k(6-0)+4(0-2)\\bigr|=10$。",
      },
      {
        en: "$\\dfrac{1}{2}|6k-8|=10$, so $|6k-8|=20$.",
        zh: "$\\dfrac{1}{2}|6k-8|=10$，所以 $|6k-8|=20$。",
      },
      {
        en: "$6k-8=20$ or $6k-8=-20$.",
        zh: "$6k-8=20$ 或 $6k-8=-20$。",
      },
      {
        en: "$6k=28$ or $6k=-12$, hence $k=\\dfrac{14}{3}$ or $k=-2$.",
        zh: "$6k=28$ 或 $6k=-12$，所以 $k=\\dfrac{14}{3}$ 或 $k=-2$。",
      },
    ],
    examTip: {
      en: "An area equation produces an absolute value. Unless a diagram fixes the point on one side of a line, both roots are valid. An option that says “only” has thrown one of them away.",
      zh: "面積方程會帶來絕對值。除非圖形把點固定在直線的一側，否則兩個根都成立。寫着「只有」的選項，是把其中一個根丟掉了。",
    },
  },
];
