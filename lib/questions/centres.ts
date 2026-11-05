import { same } from "../same";
import type { Question } from "../types";

const rightTriangle: Question["figure"] = {
  type: "coord",
  xMin: -1.5,
  xMax: 8,
  yMin: -1.5,
  yMax: 9,
  segments: [
    { x1: 0, y1: 0, x2: 6, y2: 0, tone: "accent" },
    { x1: 0, y1: 0, x2: 0, y2: 8, tone: "accent" },
    { x1: 6, y1: 0, x2: 0, y2: 8 },
  ],
  points: [
    { x: 0, y: 0, label: "A", dx: -14, dy: 14 },
    { x: 6, y: 0, label: "B", dx: 6, dy: 14 },
    { x: 0, y: 8, label: "C", dx: 8, dy: -2 },
  ],
  rightAngles: [{ x: 0, y: 0, dx1: 1, dy1: 0, dx2: 0, dy2: 1 }],
};

export const centresQuestions: Question[] = [
  {
    id: "cen-concept",
    topicId: "centres",
    difficulty: "foundation",
    stem: {
      en: "Which of the following is correct?",
      zh: "下列何者正確？",
    },
    options: [
      {
        key: "A",
        text: {
          en: "The centroid is the intersection of the altitudes.",
          zh: "重心是三條高的交點。",
        },
        value: "centroid-altitudes",
        trap: {
          en: "The altitudes meet at the orthocentre. The centroid is the intersection of the medians.",
          zh: "三條高交於垂心。重心是三條中線的交點。",
        },
      },
      {
        key: "B",
        text: {
          en: "The orthocentre is the intersection of the medians.",
          zh: "垂心是三條中線的交點。",
        },
        value: "orthocentre-medians",
        trap: {
          en: "The medians meet at the centroid. The orthocentre is the intersection of the altitudes.",
          zh: "三條中線交於重心。垂心是三條高的交點。",
        },
      },
      {
        key: "C",
        text: {
          en: "The circumcentre is the intersection of the perpendicular bisectors of the sides.",
          zh: "外心是三邊垂直平分線的交點。",
        },
        value: "circumcentre-perp-bisectors",
      },
      {
        key: "D",
        text: {
          en: "The incentre is the intersection of the medians.",
          zh: "內心是三條中線的交點。",
        },
        value: "incentre-medians",
        trap: {
          en: "The medians meet at the centroid. The incentre is the intersection of the angle bisectors.",
          zh: "三條中線交於重心。內心是三條角平分線的交點。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "Match each centre with its lines: centroid with medians, orthocentre with altitudes, circumcentre with perpendicular bisectors, incentre with angle bisectors.",
      zh: "把每個心和它的直線配對：重心對中線，垂心對高，外心對垂直平分線，內心對角平分線。",
    },
    steps: [
      {
        en: "The three medians meet at the centroid. The centroid divides each median from the vertex to the mid-point in the ratio $2:1$.",
        zh: "三條中線交於重心。重心把每條中線由頂點到中點分成 $2:1$。",
      },
      {
        en: "The three altitudes meet at the orthocentre.",
        zh: "三條高交於垂心。",
      },
      {
        en: "The perpendicular bisectors of the three sides meet at the circumcentre, the centre of the circle through all three vertices.",
        zh: "三邊的垂直平分線交於外心，即通過三個頂點的圓的圓心。",
      },
      {
        en: "The angle bisectors meet at the incentre, the centre of the circle touching all three sides. Only statement C pairs a centre with the correct lines.",
        zh: "三條角平分線交於內心，即與三邊都相切的圓的圓心。只有陳述 C 把心和正確的直線配在一起。",
      },
    ],
    examTip: {
      en: "The four names are easy to swap. Memorise the lines with the names: medians for the centroid, altitudes for the orthocentre, perpendicular bisectors for the circumcentre, and angle bisectors for the incentre.",
      zh: "四個名稱容易對調，因為「重心、垂心、外心、內心」本身沒有說出用哪種線。要連同直線一起記：中線、高、垂直平分線、角平分線。",
    },
  },
  {
    id: "cen-ratio",
    topicId: "centres",
    difficulty: "foundation",
    stem: {
      en: "In $\\triangle ABC$, $M$ is the mid-point of $BC$ and $G$ is the centroid. Then $AG:GM=$",
      zh: "在 $\\triangle ABC$ 中，$M$ 是 $BC$ 的中點，$G$ 是重心。則 $AG:GM=$",
    },
    options: [
      {
        key: "A",
        text: same("$1:1$"),
        value: "1:1",
        trap: {
          en: "The centroid is not the mid-point of the median.",
          zh: "重心不是中線的中點。",
        },
      },
      {
        key: "B",
        text: same("$1:2$"),
        value: "1:2",
        trap: {
          en: "The ratio $2:1$ was written from the mid-point toward the vertex. The longer part is on the vertex side.",
          zh: "把 $2:1$ 由中點向着頂點來寫了。較長的一段在頂點那一側。",
        },
      },
      { key: "C", text: same("$2:1$"), value: "2:1" },
      {
        key: "D",
        text: same("$3:1$"),
        value: "3:1",
        trap: {
          en: "$AG:AM=2:3$ was replaced by $AG:GM=3:1$. The whole median is $3$ parts, and the two pieces are $2$ and $1$.",
          zh: "把 $AG:AM=2:3$ 改寫成了 $AG:GM=3:1$。整條中線是 $3$ 份，兩段分別是 $2$ 份和 $1$ 份。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "The centroid divides each median in the ratio $2:1$, with the longer part between the vertex and the centroid.",
      zh: "重心把每條中線分成 $2:1$，較長的一段在頂點和重心之間。",
    },
    steps: [
      {
        en: "$AM$ is a median because $M$ is the mid-point of $BC$. The centroid $G$ lies on $AM$.",
        zh: "因為 $M$ 是 $BC$ 的中點，$AM$ 是一條中線。重心 $G$ 在 $AM$ 上。",
      },
      {
        en: "From the vertex to the mid-point, $AG:GM=2:1$.",
        zh: "由頂點到中點，$AG:GM=2:1$。",
      },
      {
        en: "A numerical check: for $A(0,\\,0)$, $B(6,\\,0)$ and $C(0,\\,6)$, the mid-point of $BC$ is $M(3,\\,3)$ and the centroid is $G(2,\\,2)$. Then $AG:GM=\\sqrt{8}:\\sqrt{2}=2:1$.",
        zh: "用數字覆核：取 $A(0,\\,0)$、$B(6,\\,0)$、$C(0,\\,6)$，$BC$ 的中點是 $M(3,\\,3)$，重心是 $G(2,\\,2)$。於是 $AG:GM=\\sqrt{8}:\\sqrt{2}=2:1$。",
      },
    ],
    examTip: {
      en: "Write the vertex first. $AG:GM=2:1$ means two parts from $A$ to $G$ and one part from $G$ to $M$. The reversed ratio $1:2$ is the standard trap.",
      zh: "先寫頂點。$AG:GM=2:1$ 就是由 $A$ 到 $G$ 兩份、由 $G$ 到 $M$ 一份。把比寫成 $1:2$ 是這題的標準陷阱。",
    },
  },
  {
    id: "cen-centroid",
    topicId: "centres",
    difficulty: "standard",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(1,\\,2)$, $B(5,\\,4)$ and $C(3,\\,10)$. The coordinates of the centroid are",
      zh: "$\\triangle ABC$ 的頂點是 $A(1,\\,2)$、$B(5,\\,4)$ 和 $C(3,\\,10)$。重心的坐標是",
    },
    options: [
      { key: "A", text: same("$\\left(3,\\,\\dfrac{16}{3}\\right)$"), value: "(3, 16/3)" },
      {
        key: "B",
        text: same("$(4,\\,7)$"),
        value: "(4, 7)",
        trap: {
          en: "This is the mid-point of $BC$, namely $\\left(\\dfrac{5+3}{2},\\,\\dfrac{4+10}{2}\\right)$. The centroid lies two thirds of the way from $A$ to this mid-point, not at the mid-point itself.",
          zh: "這是 $BC$ 的中點 $\\left(\\dfrac{5+3}{2},\\,\\dfrac{4+10}{2}\\right)$。重心在由 $A$ 到這個中點的三分之二處，不在中點上。",
        },
      },
      {
        key: "C",
        text: same("$\\left(2,\\,\\dfrac{11}{3}\\right)$"),
        value: "(2, 11/3)",
        trap: {
          en: "The median was divided in the ratio $1:2$ instead of $2:1$, giving $\\dfrac{2A+1M}{3}$.",
          zh: "把中線按 $1:2$ 來分，而不是 $2:1$，得到 $\\dfrac{2A+1M}{3}$。",
        },
      },
      {
        key: "D",
        text: same("$(3,\\,3)$"),
        value: "(3, 3)",
        trap: {
          en: "This is the mid-point of $AB$. A mid-point of one side is not the centroid.",
          zh: "這是 $AB$ 的中點。一條邊的中點不是重心。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Average the three vertices: $G=\\left(\\dfrac{x_1+x_2+x_3}{3},\\,\\dfrac{y_1+y_2+y_3}{3}\\right)$. Divide by $3$, not by $2$.",
      zh: "把三個頂點平均：$G=\\left(\\dfrac{x_1+x_2+x_3}{3},\\,\\dfrac{y_1+y_2+y_3}{3}\\right)$。除以 $3$，不是除以 $2$。",
    },
    steps: [
      {
        en: "$G=\\left(\\dfrac{1+5+3}{3},\\,\\dfrac{2+4+10}{3}\\right)=\\left(3,\\,\\dfrac{16}{3}\\right)$.",
        zh: "$G=\\left(\\dfrac{1+5+3}{3},\\,\\dfrac{2+4+10}{3}\\right)=\\left(3,\\,\\dfrac{16}{3}\\right)$。",
      },
      {
        en: "Check with the median. The mid-point of $BC$ is $M(4,\\,7)$.",
        zh: "用中線覆核。$BC$ 的中點是 $M(4,\\,7)$。",
      },
      {
        en: "$G$ divides $AM$ in the ratio $AG:GM=2:1$, so $G=\\left(\\dfrac{1\\cdot 1+2\\cdot 4}{3},\\,\\dfrac{1\\cdot 2+2\\cdot 7}{3}\\right)=\\left(3,\\,\\dfrac{16}{3}\\right)$.",
        zh: "$G$ 把 $AM$ 分成 $AG:GM=2:1$，所以 $G=\\left(\\dfrac{1\\cdot 1+2\\cdot 4}{3},\\,\\dfrac{1\\cdot 2+2\\cdot 7}{3}\\right)=\\left(3,\\,\\dfrac{16}{3}\\right)$。",
      },
    ],
    examTip: {
      en: "The average of the three vertices is the fastest method. If you use the median instead, $AG:GM=2:1$ puts weight $1$ on the vertex and weight $2$ on the mid-point.",
      zh: "三個頂點的平均是最快的方法。如果改用中線，$AG:GM=2:1$ 表示頂點的權重是 $1$，中點的權重是 $2$。",
    },
  },
  {
    id: "cen-ortho",
    topicId: "centres",
    difficulty: "standard",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(0,\\,0)$, $B(6,\\,0)$ and $C(0,\\,8)$. The orthocentre is",
      zh: "$\\triangle ABC$ 的頂點是 $A(0,\\,0)$、$B(6,\\,0)$ 和 $C(0,\\,8)$。垂心是",
    },
    figure: rightTriangle,
    options: [
      { key: "A", text: same("$(0,\\,0)$"), value: "(0, 0)" },
      {
        key: "B",
        text: same("$\\left(2,\\,\\dfrac{8}{3}\\right)$"),
        value: "(2, 8/3)",
        trap: {
          en: "This is the centroid, the average of the vertices.",
          zh: "這是重心，即三個頂點的平均。",
        },
      },
      {
        key: "C",
        text: same("$(3,\\,4)$"),
        value: "(3, 4)",
        trap: {
          en: "This is the circumcentre, the mid-point of the hypotenuse $BC$.",
          zh: "這是外心，即斜邊 $BC$ 的中點。",
        },
      },
      {
        key: "D",
        text: same("$(2,\\,2)$"),
        value: "(2, 2)",
        trap: {
          en: "This is the incentre. For this right triangle, $r=\\dfrac{6+8-10}{2}=2$.",
          zh: "這是內心。這個直角三角形的內切圓半徑是 $r=\\dfrac{6+8-10}{2}=2$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "First name the right angle. $AB$ lies on the x-axis and $AC$ lies on the y-axis, so the right angle is at $A$. In a right triangle the orthocentre is the right-angled vertex.",
      zh: "先指出直角。$AB$ 在 x 軸上，$AC$ 在 y 軸上，所以直角在 $A$。直角三角形的垂心就是直角頂點。",
    },
    steps: [
      {
        en: "$AB$ is horizontal and $AC$ is vertical, so $\\angle A=90^\\circ$.",
        zh: "$AB$ 是水平的，$AC$ 是鉛垂的，所以 $\\angle A=90^\\circ$。",
      },
      {
        en: "The altitude from $C$ to $AB$ is the vertical line through $C$, which is the side $AC$. The altitude from $B$ to $AC$ is the horizontal line through $B$, which is the side $AB$.",
        zh: "由 $C$ 向 $AB$ 所作的高，是通過 $C$ 的鉛垂線，即邊 $AC$。由 $B$ 向 $AC$ 所作的高，是通過 $B$ 的水平線，即邊 $AB$。",
      },
      {
        en: "These altitudes meet at $A(0,\\,0)$. In a right-angled triangle, the orthocentre is the vertex of the right angle.",
        zh: "這些高交於 $A(0,\\,0)$。直角三角形的垂心就是直角的頂點。",
      },
    ],
    examTip: {
      en: "For the $6$-$8$-$10$ triangle on the axes, the four centres are four different points: orthocentre $(0,\\,0)$, centroid $\\left(2,\\,\\dfrac{8}{3}\\right)$, circumcentre $(3,\\,4)$ and incentre $(2,\\,2)$. All four are in the options. Read which centre is named in the stem.",
      zh: "放在坐標軸上的 $6$-$8$-$10$ 三角形，四心是四個不同的點：垂心 $(0,\\,0)$、重心 $\\left(2,\\,\\dfrac{8}{3}\\right)$、外心 $(3,\\,4)$、內心 $(2,\\,2)$。四個點都在選項裏。要看題幹問的是哪一個心。",
    },
  },
  {
    id: "cen-circum",
    topicId: "centres",
    difficulty: "standard",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(0,\\,0)$, $B(6,\\,0)$ and $C(0,\\,8)$. The circumcentre is",
      zh: "$\\triangle ABC$ 的頂點是 $A(0,\\,0)$、$B(6,\\,0)$ 和 $C(0,\\,8)$。外心是",
    },
    figure: {
      type: "coord",
      xMin: -1.5,
      xMax: 8,
      yMin: -1.5,
      yMax: 9,
      segments: [
        { x1: 0, y1: 0, x2: 6, y2: 0 },
        { x1: 0, y1: 0, x2: 0, y2: 8 },
        { x1: 6, y1: 0, x2: 0, y2: 8, tone: "accent" },
        { x1: 3, y1: -1, x2: 3, y2: 8, dashed: true, tone: "soft" },
        { x1: -1, y1: 4, x2: 7, y2: 4, dashed: true, tone: "soft" },
      ],
      points: [
        { x: 0, y: 0, label: "A", dx: -14, dy: 14 },
        { x: 6, y: 0, label: "B", dx: 6, dy: 14 },
        { x: 0, y: 8, label: "C", dx: 8, dy: -2 },
      ],
      rightAngles: [{ x: 0, y: 0, dx1: 1, dy1: 0, dx2: 0, dy2: 1 }],
    },
    options: [
      {
        key: "A",
        text: same("$(2,\\,2)$"),
        value: "(2, 2)",
        trap: {
          en: "This is the incentre.",
          zh: "這是內心。",
        },
      },
      {
        key: "B",
        text: same("$\\left(2,\\,\\dfrac{8}{3}\\right)$"),
        value: "(2, 8/3)",
        trap: {
          en: "This is the centroid.",
          zh: "這是重心。",
        },
      },
      { key: "C", text: same("$(3,\\,4)$"), value: "(3, 4)" },
      {
        key: "D",
        text: same("$(0,\\,0)$"),
        value: "(0, 0)",
        trap: {
          en: "This is the orthocentre, the right-angled vertex.",
          zh: "這是垂心，即直角頂點。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "The triangle is right-angled at the origin. The circumcentre of a right triangle is the mid-point of the hypotenuse. The dashed lines in the figure are the perpendicular bisectors of the legs.",
      zh: "三角形在原點成直角。直角三角形的外心是斜邊的中點。圖中的虛線是兩條直角邊的垂直平分線。",
    },
    steps: [
      {
        en: "$\\angle A=90^\\circ$, so the hypotenuse is $BC$.",
        zh: "$\\angle A=90^\\circ$，所以斜邊是 $BC$。",
      },
      {
        en: "The circumcentre is the mid-point of the hypotenuse: $\\left(\\dfrac{6+0}{2},\\,\\dfrac{0+8}{2}\\right)=(3,\\,4)$.",
        zh: "外心是斜邊的中點：$\\left(\\dfrac{6+0}{2},\\,\\dfrac{0+8}{2}\\right)=(3,\\,4)$。",
      },
      {
        en: "By construction, the perpendicular bisector of $AB$ is $x=3$ and the perpendicular bisector of $AC$ is $y=4$. They meet at $(3,\\,4)$.",
        zh: "用作法覆核：$AB$ 的垂直平分線是 $x=3$，$AC$ 的垂直平分線是 $y=4$。它們交於 $(3,\\,4)$。",
      },
      {
        en: "The distance from $(3,\\,4)$ to each vertex is $5$, so the circumradius is $5$ and $BC=10$ is a diameter.",
        zh: "$(3,\\,4)$ 到每個頂點的距離都是 $5$，所以外接圓半徑是 $5$，而 $BC=10$ 是直徑。",
      },
    ],
    examTip: {
      en: "Do not average the three vertices here. That average is the centroid $\\left(2,\\,\\dfrac{8}{3}\\right)$. The circumcentre uses mid-points of sides and perpendicular lines, not the average of the vertices.",
      zh: "這裏不要把三個頂點平均。那個平均是重心 $\\left(2,\\,\\dfrac{8}{3}\\right)$。外心用的是各邊中點和垂直線，不是頂點的平均。",
    },
  },
  {
    id: "cen-in",
    topicId: "centres",
    difficulty: "exam",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(0,\\,0)$, $B(6,\\,0)$ and $C(0,\\,8)$. The incentre is",
      zh: "$\\triangle ABC$ 的頂點是 $A(0,\\,0)$、$B(6,\\,0)$ 和 $C(0,\\,8)$。內心是",
    },
    figure: rightTriangle,
    options: [
      {
        key: "A",
        text: same("$(3,\\,4)$"),
        value: "(3, 4)",
        trap: {
          en: "This is the circumcentre, the mid-point of the hypotenuse.",
          zh: "這是外心，即斜邊的中點。",
        },
      },
      {
        key: "B",
        text: same("$(0,\\,0)$"),
        value: "(0, 0)",
        trap: {
          en: "This is the orthocentre, the right-angled vertex.",
          zh: "這是垂心，即直角頂點。",
        },
      },
      {
        key: "C",
        text: same("$\\left(2,\\,\\dfrac{8}{3}\\right)$"),
        value: "(2, 8/3)",
        trap: {
          en: "This is the centroid.",
          zh: "這是重心。",
        },
      },
      { key: "D", text: same("$(2,\\,2)$"), value: "(2, 2)" },
    ],
    answer: "D",
    hint: {
      en: "The side lengths are $6$, $8$ and $10$. For a right triangle with the right angle at the origin and the legs along the axes, the incentre is $(r,\\,r)$ where $r=\\dfrac{a+b-c}{2}$.",
      zh: "三邊長是 $6$、$8$ 和 $10$。直角在原點、兩條直角邊沿着坐標軸時，內心是 $(r,\\,r)$，其中 $r=\\dfrac{a+b-c}{2}$。",
    },
    steps: [
      {
        en: "$AB=6$, $AC=8$ and $BC=\\sqrt{6^2+8^2}=10$.",
        zh: "$AB=6$，$AC=8$，$BC=\\sqrt{6^2+8^2}=10$。",
      },
      {
        en: "The inradius of a right triangle is $r=\\dfrac{\\text{leg}_1+\\text{leg}_2-\\text{hypotenuse}}{2}=\\dfrac{6+8-10}{2}=2$.",
        zh: "直角三角形的內切圓半徑是 $r=\\dfrac{\\text{直角邊}_1+\\text{直角邊}_2-\\text{斜邊}}{2}=\\dfrac{6+8-10}{2}=2$。",
      },
      {
        en: "The incircle touches both axes, so its centre is at $(r,\\,r)=(2,\\,2)$.",
        zh: "內切圓與兩條坐標軸都相切，所以圓心是 $(r,\\,r)=(2,\\,2)$。",
      },
      {
        en: "The general formula gives the same point. With $a=BC=10$, $b=AC=8$ and $c=AB=6$, $I=\\left(\\dfrac{10\\cdot 0+8\\cdot 6+6\\cdot 0}{24},\\,\\dfrac{10\\cdot 0+8\\cdot 0+6\\cdot 8}{24}\\right)=(2,\\,2)$.",
        zh: "一般公式得到同一點。取 $a=BC=10$、$b=AC=8$、$c=AB=6$，$I=\\left(\\dfrac{10\\cdot 0+8\\cdot 6+6\\cdot 0}{24},\\,\\dfrac{10\\cdot 0+8\\cdot 0+6\\cdot 8}{24}\\right)=(2,\\,2)$。",
      },
    ],
    examTip: {
      en: "In the side-length formula, $a$, $b$ and $c$ are the lengths of the sides opposite $A$, $B$ and $C$. The weight of each vertex is the length of the opposite side. For a right triangle on the axes, $(r,\\,r)$ is faster and harder to confuse with the centroid.",
      zh: "在邊長公式中，$a$、$b$、$c$ 是 $A$、$B$、$C$ 的對邊長度。每個頂點的權重是它的對邊。直角邊沿着坐標軸時，$(r,\\,r)$ 更快，也比較不容易和重心混淆。",
    },
  },
  {
    id: "cen-altitude",
    topicId: "centres",
    difficulty: "exam",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(4,\\,6)$, $B(-2,\\,2)$ and $C(4,\\,-2)$. The equation of the altitude from $A$ to $BC$ is",
      zh: "$\\triangle ABC$ 的頂點是 $A(4,\\,6)$、$B(-2,\\,2)$ 和 $C(4,\\,-2)$。由 $A$ 向 $BC$ 所作的高的方程是",
    },
    figure: {
      type: "coord",
      xMin: -4,
      xMax: 8,
      yMin: -4,
      yMax: 8,
      segments: [
        { x1: 4, y1: 6, x2: -2, y2: 2 },
        { x1: -2, y1: 2, x2: 4, y2: -2, tone: "accent" },
        { x1: 4, y1: -2, x2: 4, y2: 6 },
      ],
      points: [
        { x: 4, y: 6, label: "A", dx: 8, dy: -4 },
        { x: -2, y: 2, label: "B", dx: -16, dy: -4 },
        { x: 4, y: -2, label: "C", dx: 8, dy: 4 },
      ],
    },
    options: [
      { key: "A", text: same("$3x-2y=0$"), value: "3x-2y=0" },
      {
        key: "B",
        text: same("$2x+3y-26=0$"),
        value: "2x+3y-26=0",
        trap: {
          en: "The slope of $BC$ itself, $-\\dfrac{2}{3}$, was used. This line is parallel to $BC$, so it cannot be the perpendicular from $A$ to $BC$.",
          zh: "用了 $BC$ 自己的斜率 $-\\dfrac{2}{3}$。這條線與 $BC$ 平行，不可能是由 $A$ 向 $BC$ 所作的垂線。",
        },
      },
      {
        key: "C",
        text: same("$3x+2y-24=0$"),
        value: "3x+2y-24=0",
        trap: {
          en: "The perpendicular slope $\\dfrac{3}{2}$ was given the wrong sign.",
          zh: "垂直斜率 $\\dfrac{3}{2}$ 的正負號寫反了。",
        },
      },
      {
        key: "D",
        text: same("$2x-y-2=0$"),
        value: "2x-y-2=0",
        trap: {
          en: "This is the median from $A$ to the mid-point $(1,\\,0)$ of $BC$. A median joins a vertex to a mid-point; an altitude is perpendicular to the opposite side.",
          zh: "這是由 $A$ 連到 $BC$ 中點 $(1,\\,0)$ 的中線。中線連接頂點和中點；高要與對邊垂直。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Find the slope of $BC$ first. The altitude has the negative-reciprocal slope and passes through $A$. All four options pass through $A$, so substitution alone will not choose the answer.",
      zh: "先求 $BC$ 的斜率。高的斜率是它的負倒數，並且通過 $A$。四個選項都通過 $A$，所以只代入 $A$ 不能選出答案。",
    },
    steps: [
      {
        en: "The slope of $BC$ is $\\dfrac{-2-2}{4-(-2)}=\\dfrac{-4}{6}=-\\dfrac{2}{3}$.",
        zh: "$BC$ 的斜率是 $\\dfrac{-2-2}{4-(-2)}=\\dfrac{-4}{6}=-\\dfrac{2}{3}$。",
      },
      {
        en: "The altitude is perpendicular to $BC$, so its slope is $\\dfrac{3}{2}$.",
        zh: "高與 $BC$ 垂直，所以斜率是 $\\dfrac{3}{2}$。",
      },
      {
        en: "Through $A(4,\\,6)$: $y-6=\\dfrac{3}{2}(x-4)$.",
        zh: "通過 $A(4,\\,6)$：$y-6=\\dfrac{3}{2}(x-4)$。",
      },
      {
        en: "Multiply by $2$: $2y-12=3x-12$, so $3x-2y=0$.",
        zh: "乘以 $2$：$2y-12=3x-12$，所以 $3x-2y=0$。",
      },
    ],
    examTip: {
      en: "An altitude and a median from the same vertex are different lines unless the triangle is isosceles with the vertex on the axis of symmetry. If every option passes through the vertex, test the slope against the opposite side.",
      zh: "從同一頂點畫出的高和中線，一般是兩條不同的直線，除非三角形等腰而且該頂點在對稱軸上。如果每個選項都通過頂點，就要用對邊來檢驗斜率。",
    },
  },
  {
    id: "cen-bisector",
    topicId: "centres",
    difficulty: "standard",
    stem: {
      en: "The equation of the perpendicular bisector of $A(-1,\\,3)$ and $B(3,\\,1)$ is",
      zh: "$A(-1,\\,3)$ 和 $B(3,\\,1)$ 的垂直平分線的方程是",
    },
    figure: {
      type: "coord",
      xMin: -3,
      xMax: 5,
      yMin: -1,
      yMax: 5,
      segments: [{ x1: -1, y1: 3, x2: 3, y2: 1, tone: "accent" }],
      points: [
        { x: -1, y: 3, label: "A", dx: -16, dy: -4 },
        { x: 3, y: 1, label: "B", dx: 8, dy: 4 },
        { x: 1, y: 2, label: "M", dx: 8, dy: -4 },
      ],
    },
    options: [
      { key: "A", text: same("$2x-y=0$"), value: "2x-y=0" },
      {
        key: "B",
        text: same("$x+2y-5=0$"),
        value: "x+2y-5=0",
        trap: {
          en: "This is the line $AB$ itself. It passes through the mid-point, but it is not perpendicular to $AB$.",
          zh: "這是直線 $AB$ 本身。它通過中點，但並不與 $AB$ 垂直。",
        },
      },
      {
        key: "C",
        text: same("$2x+y-4=0$"),
        value: "2x+y-4=0",
        trap: {
          en: "The perpendicular slope $2$ was given the wrong sign. The product with the slope of $AB$ is $+1$, not $-1$.",
          zh: "垂直斜率 $2$ 的正負號寫反了。它和 $AB$ 的斜率之積是 $+1$，不是 $-1$。",
        },
      },
      {
        key: "D",
        text: same("$y-2=0$"),
        value: "y-2=0",
        trap: {
          en: "A horizontal line through the mid-point was used. $AB$ is not vertical, so its perpendicular bisector is not horizontal.",
          zh: "用了通過中點的水平線。$AB$ 不是鉛垂線，所以它的垂直平分線不是水平的。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Find the mid-point and the slope of $AB$. The required line passes through the mid-point and its slope is the negative reciprocal of the slope of $AB$.",
      zh: "先求中點和 $AB$ 的斜率。所求直線通過中點，斜率是 $AB$ 的斜率的負倒數。",
    },
    steps: [
      {
        en: "The mid-point is $M=\\left(\\dfrac{-1+3}{2},\\,\\dfrac{3+1}{2}\\right)=(1,\\,2)$.",
        zh: "中點是 $M=\\left(\\dfrac{-1+3}{2},\\,\\dfrac{3+1}{2}\\right)=(1,\\,2)$。",
      },
      {
        en: "The slope of $AB$ is $\\dfrac{1-3}{3-(-1)}=\\dfrac{-2}{4}=-\\dfrac{1}{2}$.",
        zh: "$AB$ 的斜率是 $\\dfrac{1-3}{3-(-1)}=\\dfrac{-2}{4}=-\\dfrac{1}{2}$。",
      },
      {
        en: "The perpendicular slope is $2$. The line through $(1,\\,2)$ is $y-2=2(x-1)$.",
        zh: "垂直斜率是 $2$。通過 $(1,\\,2)$ 的直線是 $y-2=2(x-1)$。",
      },
      {
        en: "Hence $y=2x$, or $2x-y=0$. It passes through $M$, and $2\\times\\left(-\\dfrac{1}{2}\\right)=-1$.",
        zh: "因此 $y=2x$，即 $2x-y=0$。它通過 $M$，而且 $2\\times\\left(-\\dfrac{1}{2}\\right)=-1$。",
      },
    ],
    examTip: {
      en: "A perpendicular bisector has two conditions: through the mid-point, and perpendicular to the segment. The line of the segment satisfies only the first. The negative reciprocal with the wrong sign still passes through the mid-point, but the slopes no longer multiply to $-1$.",
      zh: "垂直平分線有兩個條件：通過中點，並且與線段垂直。線段所在的直線只滿足第一個。負倒數的正負號如果寫反，垂直這個條件就不成立。",
    },
  },
  {
    id: "cen-ortho-iso",
    topicId: "centres",
    difficulty: "exam",
    stem: {
      en: "The vertices of $\\triangle ABC$ are $A(2,\\,1)$, $B(6,\\,1)$ and $C(4,\\,5)$. The orthocentre is",
      zh: "$\\triangle ABC$ 的頂點是 $A(2,\\,1)$、$B(6,\\,1)$ 和 $C(4,\\,5)$。垂心是",
    },
    figure: {
      type: "coord",
      xMin: 0,
      xMax: 8,
      yMin: -1,
      yMax: 6,
      segments: [
        { x1: 2, y1: 1, x2: 6, y2: 1 },
        { x1: 6, y1: 1, x2: 4, y2: 5 },
        { x1: 4, y1: 5, x2: 2, y2: 1 },
      ],
      points: [
        { x: 2, y: 1, label: "A", dx: -16, dy: 12 },
        { x: 6, y: 1, label: "B", dx: 8, dy: 12 },
        { x: 4, y: 5, label: "C", dx: 8, dy: -4 },
      ],
    },
    options: [
      { key: "A", text: same("$(4,\\,2)$"), value: "(4, 2)" },
      {
        key: "B",
        text: same("$\\left(4,\\,\\dfrac{7}{3}\\right)$"),
        value: "(4, 7/3)",
        trap: {
          en: "This is the centroid $\\left(\\dfrac{2+6+4}{3},\\,\\dfrac{1+1+5}{3}\\right)$.",
          zh: "這是重心 $\\left(\\dfrac{2+6+4}{3},\\,\\dfrac{1+1+5}{3}\\right)$。",
        },
      },
      {
        key: "C",
        text: same("$\\left(4,\\,\\dfrac{5}{2}\\right)$"),
        value: "(4, 5/2)",
        trap: {
          en: "This is the circumcentre. On the axis of symmetry $x=4$, the perpendicular bisector of $AC$ meets it at $y=\\dfrac{5}{2}$.",
          zh: "這是外心。在對稱軸 $x=4$ 上，$AC$ 的垂直平分線與它交於 $y=\\dfrac{5}{2}$。",
        },
      },
      {
        key: "D",
        text: same("$(4,\\,1)$"),
        value: "(4, 1)",
        trap: {
          en: "This is the mid-point of $AB$, the foot of the altitude from $C$. The orthocentre lies on that altitude, but it is not the foot unless another altitude also passes through the foot.",
          zh: "這是 $AB$ 的中點，即由 $C$ 所作的高的垂足。垂心在這條高上，但另一條高一般不通過這個垂足。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "The triangle is isosceles with $AB$ horizontal, so the altitude from $C$ is the vertical line $x=4$. Find where a second altitude meets $x=4$.",
      zh: "三角形等腰，而且 $AB$ 是水平的，所以由 $C$ 所作的高是鉛垂線 $x=4$。再求另一條高與 $x=4$ 的交點。",
    },
    steps: [
      {
        en: "$AB$ is horizontal. The altitude from $C(4,\\,5)$ to $AB$ is the vertical line $x=4$.",
        zh: "$AB$ 是水平的。由 $C(4,\\,5)$ 向 $AB$ 所作的高是鉛垂線 $x=4$。",
      },
      {
        en: "The slope of $AC$ is $\\dfrac{5-1}{4-2}=2$. The altitude from $B$ to $AC$ has slope $-\\dfrac{1}{2}$.",
        zh: "$AC$ 的斜率是 $\\dfrac{5-1}{4-2}=2$。由 $B$ 向 $AC$ 所作的高，斜率是 $-\\dfrac{1}{2}$。",
      },
      {
        en: "Through $B(6,\\,1)$: $y-1=-\\dfrac{1}{2}(x-6)$, so $x+2y-8=0$.",
        zh: "通過 $B(6,\\,1)$：$y-1=-\\dfrac{1}{2}(x-6)$，即 $x+2y-8=0$。",
      },
      {
        en: "Put $x=4$: $4+2y-8=0$, so $y=2$. The orthocentre is $(4,\\,2)$.",
        zh: "代入 $x=4$：$4+2y-8=0$，所以 $y=2$。垂心是 $(4,\\,2)$。",
      },
    ],
    examTip: {
      en: "On an isosceles triangle the centroid, orthocentre and circumcentre all lie on the axis of symmetry, so they share an x-coordinate. The y-coordinates are different. Do not choose a point on $x=4$ until you know which centre it is.",
      zh: "等腰三角形的重心、垂心和外心都在對稱軸上，所以 x 坐標相同。y 坐標並不相同。在確定是哪一個心之前，不要看見 $x=4$ 就選一個點。",
    },
  },
];
