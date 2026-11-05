import type { Localized } from "./types";

export type Topic = {
  id: string;
  en: string;
  zh: string;
  blurb: Localized;
  idea: Localized;
};

export const TOPICS: Topic[] = [
  {
    id: "slope",
    en: "Slope & inclination",
    zh: "斜率與傾角",
    blurb: {
      en: "Rise over run, and the angle a line makes with the positive x-axis.",
      zh: "垂直變化除以水平變化，以及直線與正 x 軸所成的角。",
    },
    idea: {
      en: "The slope is $m = \\dfrac{y_2-y_1}{x_2-x_1} = \\tan\\theta$. The inclination $\\theta$ runs from $0^\\circ$ up to, but not including, $180^\\circ$. A negative slope means an obtuse inclination.",
      zh: "斜率 $m = \\dfrac{y_2-y_1}{x_2-x_1} = \\tan\\theta$。傾角 $\\theta$ 由 $0^\\circ$ 起，計至但不包括 $180^\\circ$。斜率是負數時，傾角是鈍角。",
    },
  },
  {
    id: "forms",
    en: "Forms of the equation",
    zh: "直線方程的各種形式",
    blurb: {
      en: "Point-slope, two-point, slope-intercept, intercept and general form.",
      zh: "點斜式、兩點式、斜截式、截距式和一般式。",
    },
    idea: {
      en: "Keep the signs in $y-y_1 = m(x-x_1)$. In $Ax+By+C=0$ the slope is $-\\dfrac{A}{B}$, not $\\dfrac{A}{B}$. A vertical line has no slope-intercept form.",
      zh: "$y-y_1 = m(x-x_1)$ 的正負號要跟着已知點走。在 $Ax+By+C=0$ 中，斜率是 $-\\dfrac{A}{B}$，不是 $\\dfrac{A}{B}$。鉛垂線沒有斜截式。",
    },
  },
  {
    id: "horizontal",
    en: "Horizontal & vertical lines",
    zh: "水平線與鉛垂線",
    blurb: {
      en: "Lines with equal x-coordinates or equal y-coordinates.",
      zh: "x 坐標相同，或 y 坐標相同的直線。",
    },
    idea: {
      en: "Equal y-coordinates: horizontal line $y = k$, slope $0$, inclination $0^\\circ$. Equal x-coordinates: vertical line $x = h$, slope undefined, inclination $90^\\circ$.",
      zh: "y 坐標相同：水平線 $y = k$，斜率 $0$，傾角 $0^\\circ$。x 坐標相同：鉛垂線 $x = h$，斜率無定義，傾角 $90^\\circ$。",
    },
  },
  {
    id: "parallel",
    en: "Parallel & perpendicular",
    zh: "平行與垂直",
    blurb: {
      en: "Same slope, negative reciprocal, and lines through an intersection.",
      zh: "斜率相同、負倒數，以及通過兩線交點的直線。",
    },
    idea: {
      en: "Parallel: $m_1=m_2$, or $\\dfrac{A_1}{A_2}=\\dfrac{B_1}{B_2}$. Perpendicular: $m_1 m_2=-1$, or $A_1A_2+B_1B_2=0$. Changing only the sign of the slope does not make a perpendicular.",
      zh: "平行：$m_1=m_2$，或 $\\dfrac{A_1}{A_2}=\\dfrac{B_1}{B_2}$。垂直：$m_1 m_2=-1$，或 $A_1A_2+B_1B_2=0$。只把斜率變號，並不是垂直。",
    },
  },
  {
    id: "distance",
    en: "Distance",
    zh: "距離",
    blurb: {
      en: "Between two points, from a point to a line, and between parallel lines.",
      zh: "兩點距離、點到直線的距離，以及平行線之間的距離。",
    },
    idea: {
      en: "Use $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ and $\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$. Before subtracting constants of two parallel lines, make the $x$ and $y$ coefficients match.",
      zh: "用 $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ 和 $\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$。兩條平行線相減常數之前，先把 $x$、$y$ 的係數化成一樣。",
    },
  },
  {
    id: "section",
    en: "Mid-point & section formula",
    zh: "中點公式與分點公式",
    blurb: {
      en: "Mid-points, internal division, external division, and the other endpoint.",
      zh: "中點、內分、外分，以及由中點求另一端點。",
    },
    idea: {
      en: "If $P$ divides $AB$ in the ratio $AP:PB=m:n$, then $P=\\left(\\dfrac{nx_1+mx_2}{m+n},\\dfrac{ny_1+my_2}{m+n}\\right)$. The weight $m$ multiplies $B$, not $A$. External division changes the middle signs.",
      zh: "若 $P$ 分 $AB$ 為 $AP:PB=m:n$，則 $P=\\left(\\dfrac{nx_1+mx_2}{m+n},\\dfrac{ny_1+my_2}{m+n}\\right)$。權重 $m$ 乘的是 $B$，不是 $A$。外分要把中間的運算改成相減。",
    },
  },
  {
    id: "area",
    en: "Area & area ratios",
    zh: "面積與面積比",
    blurb: {
      en: "The shoelace formula, collinear points, and when a ratio must be squared.",
      zh: "鞋帶公式、共線，以及甚麼時候才要把比平方。",
    },
    idea: {
      en: "Triangles that share a vertex and stand on the same line have area ratio equal to the base ratio. Do not square it. Square the ratio only when a line parallel to the base makes a similar triangle.",
      zh: "共頂點、而且底邊在同一直線上的三角形，面積比等於底邊比，不要平方。只有平行於底邊、造出相似三角形時，才把對應邊的比平方。",
    },
  },
  {
    id: "centres",
    en: "Four centres of a triangle",
    zh: "三角形的四心",
    blurb: {
      en: "Centroid, orthocentre, circumcentre and incentre, and the lines that locate them.",
      zh: "重心、垂心、外心和內心，以及用來定位它們的直線。",
    },
    idea: {
      en: "Medians meet at the centroid and split $2:1$ from the vertex. Altitudes meet at the orthocentre. Perpendicular bisectors meet at the circumcentre. Angle bisectors meet at the incentre. In a right triangle the orthocentre is the right-angled vertex and the circumcentre is the midpoint of the hypotenuse.",
      zh: "中線交於重心，並由頂點起以 $2:1$ 分割中線。高交於垂心。垂直平分線交於外心。角平分線交於內心。直角三角形的垂心就是直角頂點，外心是斜邊的中點。",
    },
  },
];

export function topicById(id: string): Topic | undefined {
  return TOPICS.find((topic) => topic.id === id);
}
