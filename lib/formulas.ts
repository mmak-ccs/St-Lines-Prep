import type { Localized } from "./types";

export type FormulaRow = {
  name: Localized;
  math: string;
  when: Localized;
  trap: Localized;
};

export type FormulaSection = {
  id: string;
  title: Localized;
  rows: FormulaRow[];
};

export const formulaSections: FormulaSection[] = [
  {
    id: "slope",
    title: { en: "Slope and inclination", zh: "斜率與傾角" },
    rows: [
      {
        name: { en: "Slope", zh: "斜率" },
        math: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$",
        when: {
          en: "Two points are given. Keep the same point first in both the numerator and the denominator.",
          zh: "已知兩點時使用。分子和分母要以同一點為先。",
        },
        trap: {
          en: "Writing run over rise, or changing the sign of only one coordinate.",
          zh: "把水平變化寫到分子，或只把一個坐標變號。",
        },
      },
      {
        name: { en: "Inclination", zh: "傾角" },
        math: "$m=\\tan\\theta,\\quad 0^\\circ\\le\\theta<180^\\circ$",
        when: {
          en: "The question asks for the angle with the positive x-axis, or gives that angle and asks for the slope.",
          zh: "題目問與正 x 軸的夾角，或給了這個角而要斜率。",
        },
        trap: {
          en: "A positive slope is an acute inclination. $\\tan 120^\\circ=-\\sqrt{3}$, not $\\sqrt{3}$.",
          zh: "斜率是正數時，傾角是銳角。$\\tan 120^\\circ=-\\sqrt{3}$，不是 $\\sqrt{3}$。",
        },
      },
    ],
  },
  {
    id: "forms",
    title: { en: "Five forms of a straight line", zh: "直線方程的五種形式" },
    rows: [
      {
        name: { en: "Point-slope form", zh: "點斜式" },
        math: "$y-y_1=m(x-x_1)$",
        when: {
          en: "One point and the slope are known.",
          zh: "已知一點和斜率。",
        },
        trap: {
          en: "A negative coordinate produces a plus sign: $x-(-2)=x+2$.",
          zh: "負坐標會寫出加號：$x-(-2)=x+2$。",
        },
      },
      {
        name: { en: "Two-point form", zh: "兩點式" },
        math: "$\\dfrac{y-y_1}{x-x_1}=\\dfrac{y_2-y_1}{x_2-x_1}$",
        when: {
          en: "Two points are known and the slope has not been given.",
          zh: "已知兩點，而斜率沒有直接給出。",
        },
        trap: {
          en: "Substitute both points at the end. A sign error often still passes through one of them.",
          zh: "最後要把兩點都代回去。正負號錯誤的直線往往仍然通過其中一點。",
        },
      },
      {
        name: { en: "Slope-intercept form", zh: "斜截式" },
        math: "$y=mx+c$",
        when: {
          en: "The slope and the y-intercept are known. It cannot describe a vertical line.",
          zh: "已知斜率和 y 截距。它不能表示鉛垂線。",
        },
        trap: {
          en: "When you move $c$ to the other side, its sign changes.",
          zh: "把 $c$ 移項時，它的正負號會改變。",
        },
      },
      {
        name: { en: "Intercept form", zh: "截距式" },
        math: "$\\dfrac{x}{a}+\\dfrac{y}{b}=1$",
        when: {
          en: "Both intercepts are known and neither is zero. $a$ is the x-intercept.",
          zh: "兩個截距都已知，而且都不是零。$a$ 是 x 截距。",
        },
        trap: {
          en: "A negative intercept stays in the denominator. Do not swap $a$ and $b$.",
          zh: "負的截距留在分母。不要把 $a$ 和 $b$ 對調。",
        },
      },
      {
        name: { en: "General form", zh: "一般式" },
        math: "$Ax+By+C=0,\\quad m=-\\dfrac{A}{B}$",
        when: {
          en: "You need integer coefficients, or you are comparing two lines.",
          zh: "需要整數係數，或要比較兩條直線。",
        },
        trap: {
          en: "In $4x-2y+5=0$, $B=-2$. The slope is $-\\dfrac{4}{-2}=2$, not $-2$.",
          zh: "在 $4x-2y+5=0$ 中，$B=-2$。斜率是 $-\\dfrac{4}{-2}=2$，不是 $-2$。",
        },
      },
    ],
  },
  {
    id: "horizontal",
    title: { en: "Horizontal and vertical lines", zh: "水平線與鉛垂線" },
    rows: [
      {
        name: { en: "Horizontal line", zh: "水平線" },
        math: "$y=k,\\quad m=0,\\quad \\theta=0^\\circ$",
        when: {
          en: "The y-coordinates of two points are equal, or the line is parallel to the x-axis.",
          zh: "兩點的 y 坐標相同，或直線與 x 軸平行。",
        },
        trap: {
          en: "Do not write $x=k$ for a horizontal line. The fixed coordinate is $y$.",
          zh: "水平線不要寫成 $x=k$。被固定的是 $y$。",
        },
      },
      {
        name: { en: "Vertical line", zh: "鉛垂線" },
        math: "$x=h,\\quad m\\text{ undefined},\\quad \\theta=90^\\circ$",
        when: {
          en: "The x-coordinates are equal. The slope formula has denominator zero.",
          zh: "x 坐標相同。斜率公式的分母是零。",
        },
        trap: {
          en: "Undefined is not the same as zero. Slope $0$ belongs to $y=k$.",
          zh: "無定義不是零。斜率 $0$ 屬於 $y=k$。",
        },
      },
    ],
  },
  {
    id: "parallel",
    title: { en: "Parallel and perpendicular lines", zh: "平行與垂直" },
    rows: [
      {
        name: { en: "Parallel", zh: "平行" },
        math: "$m_1=m_2$ or $\\dfrac{A_1}{A_2}=\\dfrac{B_1}{B_2}$",
        when: {
          en: "The lines do not meet. If the constant terms are in the same ratio as well, the lines are coincident.",
          zh: "兩線不相交。如果常數項的比也相同，兩式表示同一條直線。",
        },
        trap: {
          en: "Checking only $A$ and $B$, then calling the lines the same line.",
          zh: "只檢查 $A$ 和 $B$，就說它們是同一條直線。",
        },
      },
      {
        name: { en: "Perpendicular", zh: "垂直" },
        math: "$m_1m_2=-1$ or $A_1A_2+B_1B_2=0$",
        when: {
          en: "The lines meet at a right angle. Neither line may be vertical if you use the product of slopes.",
          zh: "兩線相交成直角。若用斜率之積，兩線都不能是鉛垂線。",
        },
        trap: {
          en: "Changing only the sign of the slope, or using the complement of the inclination. The product must be $-1$, not $+1$.",
          zh: "只把斜率變號，或用傾角的餘角。積必須是 $-1$，不是 $+1$。",
        },
      },
      {
        name: { en: "Family through an intersection", zh: "通過交點的直線族" },
        math: "$L_1+\\lambda L_2=0$",
        when: {
          en: "The line must pass through the intersection of two known lines, plus one extra condition.",
          zh: "直線要通過兩條已知直線的交點，另外還有一個條件。",
        },
        trap: {
          en: "The extra condition may say parallel or perpendicular. Both lines usually appear as options.",
          zh: "附加條件可能是平行，也可能是垂直。兩條線通常都在選項裏。",
        },
      },
    ],
  },
  {
    id: "distance",
    title: { en: "Distance", zh: "距離" },
    rows: [
      {
        name: { en: "Two points", zh: "兩點距離" },
        math: "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$",
        when: {
          en: "The length of a segment is required.",
          zh: "要求一條線段的長度。",
        },
        trap: {
          en: "Adding the changes, or forgetting the square root. $6$ and $8$ give $10$, not $14$ and not $100$.",
          zh: "把變化量相加，或忘記開方。$6$ 和 $8$ 得到 $10$，不是 $14$，也不是 $100$。",
        },
      },
      {
        name: { en: "Point to a line", zh: "點到直線" },
        math: "$\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$",
        when: {
          en: "The line is in general form and the perpendicular distance is required.",
          zh: "直線是一般式，而且要求垂直距離。",
        },
        trap: {
          en: "Leaving out the denominator, or using $|A|+|B|$ instead of the square root.",
          zh: "漏掉分母，或用 $|A|+|B|$ 代替開方。",
        },
      },
      {
        name: { en: "Parallel lines", zh: "平行線距離" },
        math: "$\\dfrac{|c_1-c_2|}{\\sqrt{A^2+B^2}}$",
        when: {
          en: "Both lines have been written with the same $A$ and the same $B$.",
          zh: "兩條直線已經寫成相同的 $A$ 和相同的 $B$。",
        },
        trap: {
          en: "Subtracting the constants before dividing an equation such as $6x-8y-18=0$ by $2$.",
          zh: "在把 $6x-8y-18=0$ 除以 $2$ 之前，就拿常數相減。",
        },
      },
    ],
  },
  {
    id: "section",
    title: { en: "Mid-point and section formula", zh: "中點公式與分點公式" },
    rows: [
      {
        name: { en: "Mid-point", zh: "中點" },
        math: "$\\left(\\dfrac{x_1+x_2}{2},\\,\\dfrac{y_1+y_2}{2}\\right)$",
        when: {
          en: "The point is halfway, or a perpendicular bisector needs the mid-point first.",
          zh: "分點在正中，或垂直平分線要先用中點。",
        },
        trap: {
          en: "Forgetting to divide by $2$, or turning a negative coordinate positive.",
          zh: "忘記除以 $2$，或把負坐標變成正數。",
        },
      },
      {
        name: { en: "Internal division", zh: "內分" },
        math: "$AP:PB=m:n,\\quad \\left(\\dfrac{nx_1+mx_2}{m+n},\\,\\dfrac{ny_1+my_2}{m+n}\\right)$",
        when: {
          en: "$P$ lies between $A$ and $B$. The weight $m$ multiplies $B$.",
          zh: "$P$ 在 $A$ 與 $B$ 之間。權重 $m$ 乘的是 $B$。",
        },
        trap: {
          en: "Reversing $m:n$. If $m<n$, the point is closer to $A$.",
          zh: "把 $m:n$ 寫反。若 $m<n$，分點比較靠近 $A$。",
        },
      },
      {
        name: { en: "External division", zh: "外分" },
        math: "$\\left(\\dfrac{mx_2-nx_1}{m-n},\\,\\dfrac{my_2-ny_1}{m-n}\\right)$",
        when: {
          en: "$P$ is not between $A$ and $B$. The directed segments point in opposite directions.",
          zh: "$P$ 不在 $A$ 與 $B$ 之間。有向線段的方向相反。",
        },
        trap: {
          en: "Using the internal formula, or swapping $m$ and $n$ inside the external formula.",
          zh: "用了內分公式，或在外分公式裏把 $m$ 和 $n$ 對調。",
        },
      },
      {
        name: { en: "Other endpoint", zh: "另一端點" },
        math: "$B=2M-A$",
        when: {
          en: "The mid-point and one endpoint are known.",
          zh: "已知中點和其中一個端點。",
        },
        trap: {
          en: "Stopping at $M-A$. The factor $2$ means that difference is added to $M$ again.",
          zh: "停在 $M-A$。那個 $2$ 表示這個差還要再加到 $M$ 上。",
        },
      },
    ],
  },
  {
    id: "area",
    title: { en: "Area and area ratios", zh: "面積與面積比" },
    rows: [
      {
        name: { en: "Area of a triangle", zh: "三角形面積" },
        math: "$\\dfrac{1}{2}\\bigl|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\bigr|$",
        when: {
          en: "Three vertices are known. The area is zero exactly when the points are collinear.",
          zh: "已知三個頂點。面積剛好是零時，三點共線。",
        },
        trap: {
          en: "Forgetting $\\dfrac{1}{2}$, or dropping the absolute value when the area is given and a coordinate is unknown.",
          zh: "忘記 $\\dfrac{1}{2}$，或在已知面積、要求未知坐標時去掉絕對值。",
        },
      },
      {
        name: { en: "Same height", zh: "同高" },
        math: "$\\text{area ratio}=\\text{base ratio}$",
        when: {
          en: "Two triangles share a vertex and their bases lie on the same straight line.",
          zh: "兩個三角形共頂點，而且底邊在同一直線上。",
        },
        trap: {
          en: "Squaring the ratio. A point on the base does not make the triangles similar.",
          zh: "把比平方。底邊上的分點不會使三角形相似。",
        },
      },
      {
        name: { en: "Line parallel to the base", zh: "平行於底邊" },
        math: "$\\text{area ratio}=(\\text{side ratio})^2$",
        when: {
          en: "$DE\\parallel BC$. First rewrite $AD:DB$ as $AD:AB$, then square.",
          zh: "$DE\\parallel BC$。先把 $AD:DB$ 改寫成 $AD:AB$，再平方。",
        },
        trap: {
          en: "Using $1:2$ instead of $1:3$, or forgetting to square. The trapezium is the whole triangle minus the small one: $9-1=8$.",
          zh: "用了 $1:2$ 而不是 $1:3$，或忘記平方。梯形是整個三角形減去小三角形：$9-1=8$。",
        },
      },
    ],
  },
  {
    id: "centres",
    title: { en: "Four centres of a triangle", zh: "三角形的四心" },
    rows: [
      {
        name: { en: "Centroid", zh: "重心" },
        math: "$G=\\left(\\dfrac{x_1+x_2+x_3}{3},\\,\\dfrac{y_1+y_2+y_3}{3}\\right),\\quad AG:GM=2:1$",
        when: {
          en: "The medians, or the average of the vertices. The longer part of the median is on the vertex side.",
          zh: "用中線，或把三個頂點平均。中線較長的一段在頂點一側。",
        },
        trap: {
          en: "Writing $1:2$, or stopping at the mid-point of a side.",
          zh: "寫成 $1:2$，或停在某一邊的中點。",
        },
      },
      {
        name: { en: "Orthocentre", zh: "垂心" },
        math: "$\\text{intersection of altitudes}$",
        when: {
          en: "The altitude from a vertex is perpendicular to the opposite side. In a right triangle it is the right-angled vertex.",
          zh: "由頂點向對邊作垂線。直角三角形的垂心就是直角頂點。",
        },
        trap: {
          en: "Confusing it with the median from the same vertex. Both pass through the vertex, so test the slope.",
          zh: "和同一頂點的中線混淆。兩條線都通過頂點，所以要檢驗斜率。",
        },
      },
      {
        name: { en: "Circumcentre", zh: "外心" },
        math: "$\\text{intersection of perpendicular bisectors}$",
        when: {
          en: "The circle through the three vertices. In a right triangle it is the mid-point of the hypotenuse.",
          zh: "通過三個頂點的圓。直角三角形的外心是斜邊的中點。",
        },
        trap: {
          en: "Averaging the vertices. That gives the centroid, not the circumcentre.",
          zh: "把頂點平均。那是重心，不是外心。",
        },
      },
      {
        name: { en: "Incentre", zh: "內心" },
        math: "$I=\\left(\\dfrac{ax_1+bx_2+cx_3}{a+b+c},\\,\\dfrac{ay_1+by_2+cy_3}{a+b+c}\\right)$",
        when: {
          en: "The angle bisectors. $a$, $b$ and $c$ are the side lengths opposite $A$, $B$ and $C$. For a right triangle on the axes, $I=(r,\\,r)$ with $r=\\dfrac{a+b-c}{2}$.",
          zh: "用角平分線。$a$、$b$、$c$ 是 $A$、$B$、$C$ 的對邊。直角邊沿着坐標軸時，$I=(r,\\,r)$，其中 $r=\\dfrac{a+b-c}{2}$。",
        },
        trap: {
          en: "Using the mid-point of the hypotenuse, which is the circumcentre, or weighting a vertex by an adjacent side.",
          zh: "用了斜邊中點，那是外心；或用鄰邊而不是對邊作為頂點的權重。",
        },
      },
    ],
  },
];

export const checklist: Localized[] = [
  {
    en: "If the x-coordinates are equal, stop. The line is $x=h$ and the slope is undefined.",
    zh: "如果 x 坐標相同，就停下來。直線是 $x=h$，斜率無定義。",
  },
  {
    en: "In $Ax+By+C=0$, read $B$ with its sign before using $m=-\\dfrac{A}{B}$.",
    zh: "在 $Ax+By+C=0$ 中，用 $m=-\\dfrac{A}{B}$ 之前，$B$ 要連同正負號一起讀。",
  },
  {
    en: "Parallel copies $A$ and $B$. Perpendicular swaps them and changes one sign. A sign change alone is not enough.",
    zh: "平行是抄下 $A$ 和 $B$。垂直是把它們對調並改變一個正負號。只變號並不足夠。",
  },
  {
    en: "In the ratio $m:n$, $m$ multiplies the second point. If $m<n$, an internal point is closer to the first point.",
    zh: "在比 $m:n$ 中，$m$ 乘第二點。若 $m<n$，內分點比較靠近第一點。",
  },
  {
    en: "Do not square a ratio unless a line parallel to the base has made a similar triangle.",
    zh: "除非有一條平行於底邊的線造出相似三角形，否則不要把比平方。",
  },
  {
    en: "An absolute value or a squared distance gives two answers unless the diagram rejects one.",
    zh: "絕對值或距離平方會給出兩個答案，除非圖形明確捨去其中一個。",
  },
  {
    en: "Name the lines before naming the centre: medians, altitudes, perpendicular bisectors, angle bisectors.",
    zh: "先說直線，再說是哪一個心：中線、高、垂直平分線、角平分線。",
  },
  {
    en: "On a right triangle, the orthocentre is the right angle and the circumcentre is the mid-point of the hypotenuse.",
    zh: "直角三角形的垂心是直角頂點，外心是斜邊的中點。",
  },
];
