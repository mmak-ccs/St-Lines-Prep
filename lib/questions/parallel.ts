import { same } from "../same";
import type { Question } from "../types";

export const parallelQuestions: Question[] = [
  {
    id: "pp-parallel",
    topicId: "parallel",
    difficulty: "standard",
    stem: {
      en: "The equation of the straight line which passes through $(1,\\,-2)$ and is parallel to $3x-4y+7=0$ is",
      zh: "通過 $(1,\\,-2)$ 且與 $3x-4y+7=0$ 平行的直線方程是",
    },
    options: [
      { key: "A", text: same("$3x-4y-11=0$"), value: "3x-4y-11=0" },
      {
        key: "B",
        text: same("$3x+4y+5=0$"),
        value: "3x+4y+5=0",
        trap: {
          en: "Only the sign of the slope was changed, from $\\dfrac{3}{4}$ to $-\\dfrac{3}{4}$. That is not the negative reciprocal.",
          zh: "只把斜率由 $\\dfrac{3}{4}$ 變號成 $-\\dfrac{3}{4}$。這不是負倒數。",
        },
      },
      {
        key: "C",
        text: same("$4x+3y+2=0$"),
        value: "4x+3y+2=0",
        trap: {
          en: "This is the perpendicular through the same point. Its slope is $-\\dfrac{4}{3}$, and $\\dfrac{3}{4}\\times\\left(-\\dfrac{4}{3}\\right)=-1$.",
          zh: "這是通過同一點的垂線。斜率是 $-\\dfrac{4}{3}$，而且 $\\dfrac{3}{4}\\times\\left(-\\dfrac{4}{3}\\right)=-1$。",
        },
      },
      {
        key: "D",
        text: same("$3x-4y+7=0$"),
        value: "3x-4y+7=0",
        trap: {
          en: "The original line was copied. It is parallel to itself, but $3(1)-4(-2)+7=18\\ne 0$, so it does not pass through $(1,\\,-2)$.",
          zh: "把原來的直線照抄了。它與自己平行，但 $3(1)-4(-2)+7=18\\ne 0$，所以不通過 $(1,\\,-2)$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Parallel lines can share the coefficients of $x$ and $y$. Write $3x-4y+k=0$ and choose $k$ so that $(1,\\,-2)$ lies on it.",
      zh: "平行線可以共用 $x$ 和 $y$ 的係數。寫成 $3x-4y+k=0$，再選 $k$ 使 $(1,\\,-2)$ 在直線上。",
    },
    steps: [
      {
        en: "From $3x-4y+7=0$, the slope is $-\\dfrac{3}{-4}=\\dfrac{3}{4}$.",
        zh: "由 $3x-4y+7=0$，斜率是 $-\\dfrac{3}{-4}=\\dfrac{3}{4}$。",
      },
      {
        en: "A parallel line has the same slope, so it can be written $3x-4y+k=0$.",
        zh: "平行線的斜率相同，所以可寫成 $3x-4y+k=0$。",
      },
      {
        en: "Substitute $(1,\\,-2)$: $3(1)-4(-2)+k=0$, so $11+k=0$ and $k=-11$.",
        zh: "代入 $(1,\\,-2)$：$3(1)-4(-2)+k=0$，即 $11+k=0$，$k=-11$。",
      },
      {
        en: "The required line is $3x-4y-11=0$.",
        zh: "所求直線是 $3x-4y-11=0$。",
      },
    ],
    examTip: {
      en: "The option $4x+3y+2=0$ also passes through the given point, so a substitution check does not reveal it. You still have to decide whether the question asked for parallel or perpendicular.",
      zh: "選項 $4x+3y+2=0$ 同樣通過已知點，所以只代入一點不能把它排除。仍要分清題目要的是平行還是垂直。",
    },
  },
  {
    id: "pp-perpendicular",
    topicId: "parallel",
    difficulty: "standard",
    stem: {
      en: "The equation of the straight line which passes through $(3,\\,1)$ and is perpendicular to $2x+5y-1=0$ is",
      zh: "通過 $(3,\\,1)$ 且與 $2x+5y-1=0$ 垂直的直線方程是",
    },
    options: [
      { key: "A", text: same("$5x-2y-13=0$"), value: "5x-2y-13=0" },
      {
        key: "B",
        text: same("$2x+5y-11=0$"),
        value: "2x+5y-11=0",
        trap: {
          en: "This line is parallel to $2x+5y-1=0$. The coefficients of $x$ and $y$ were left unchanged.",
          zh: "這條直線與 $2x+5y-1=0$ 平行。$x$ 和 $y$ 的係數沒有改動。",
        },
      },
      {
        key: "C",
        text: same("$5x+2y-17=0$"),
        value: "5x+2y-17=0",
        trap: {
          en: "The reciprocal $\\dfrac{5}{2}$ was given the wrong sign. The product of the slopes is $+1$, not $-1$.",
          zh: "倒數 $\\dfrac{5}{2}$ 的正負號寫反了。兩斜率的積是 $+1$，不是 $-1$。",
        },
      },
      {
        key: "D",
        text: same("$2x-5y-1=0$"),
        value: "2x-5y-1=0",
        trap: {
          en: "Only the sign of the original slope was changed. The new slope is $\\dfrac{2}{5}$, and $\\left(-\\dfrac{2}{5}\\right)\\times\\dfrac{2}{5}\\ne -1$.",
          zh: "只把原來的斜率變號。新斜率是 $\\dfrac{2}{5}$，而 $\\left(-\\dfrac{2}{5}\\right)\\times\\dfrac{2}{5}\\ne -1$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "The given slope is $-\\dfrac{2}{5}$. The perpendicular slope is its negative reciprocal, $\\dfrac{5}{2}$. Then use the point $(3,\\,1)$.",
      zh: "已知斜率是 $-\\dfrac{2}{5}$。垂直斜率是它的負倒數 $\\dfrac{5}{2}$。再用點 $(3,\\,1)$。",
    },
    steps: [
      {
        en: "From $2x+5y-1=0$, $y=-\\dfrac{2}{5}x+\\dfrac{1}{5}$. The slope is $-\\dfrac{2}{5}$.",
        zh: "由 $2x+5y-1=0$，$y=-\\dfrac{2}{5}x+\\dfrac{1}{5}$。斜率是 $-\\dfrac{2}{5}$。",
      },
      {
        en: "The perpendicular slope is $\\dfrac{5}{2}$, because $\\left(-\\dfrac{2}{5}\\right)\\times\\dfrac{5}{2}=-1$.",
        zh: "垂直斜率是 $\\dfrac{5}{2}$，因為 $\\left(-\\dfrac{2}{5}\\right)\\times\\dfrac{5}{2}=-1$。",
      },
      {
        en: "Point-slope form: $y-1=\\dfrac{5}{2}(x-3)$. Multiply by $2$: $2y-2=5x-15$.",
        zh: "點斜式：$y-1=\\dfrac{5}{2}(x-3)$。乘以 $2$：$2y-2=5x-15$。",
      },
      {
        en: "Hence $5x-2y-13=0$. Substituting $(3,\\,1)$ gives $15-2-13=0$.",
        zh: "因此 $5x-2y-13=0$。代入 $(3,\\,1)$ 得 $15-2-13=0$。",
      },
    ],
    examTip: {
      en: "For $Ax+By+C=0$, a perpendicular line has coefficient pattern $Bx-Ay+k=0$, up to a common sign. Swapping $2$ and $5$ and changing one sign is the fast route; swapping them without the sign change is the trap in option C.",
      zh: "對於 $Ax+By+C=0$，垂線可以寫成 $Bx-Ay+k=0$（整體變號亦可）。把 $2$ 和 $5$ 對調並改變一個正負號，是快捷寫法；只對調、不變號，就是選項 C 的陷阱。",
    },
  },
  {
    id: "pp-find-a",
    topicId: "parallel",
    difficulty: "exam",
    stem: {
      en: "The straight lines $ax+2y+3=0$ and $4x-y+1=0$ are perpendicular. Then $a=$",
      zh: "直線 $ax+2y+3=0$ 與 $4x-y+1=0$ 互相垂直。則 $a=$",
    },
    options: [
      {
        key: "A",
        text: same("$-8$"),
        value: "-8",
        trap: {
          en: "The parallel condition $\\dfrac{a}{4}=\\dfrac{2}{-1}$ was used. That gives a line of slope $4$, the same slope as the second line.",
          zh: "用了平行條件 $\\dfrac{a}{4}=\\dfrac{2}{-1}$。得出來的直線斜率是 $4$，和第二條直線相同。",
        },
      },
      {
        key: "B",
        text: same("$8$"),
        value: "8",
        trap: {
          en: "The parallel condition was used, and the sign of $B$ in the second line was dropped: $\\dfrac{a}{4}=\\dfrac{2}{1}$.",
          zh: "用了平行條件，而且漏了第二條直線 $B$ 的正負號：$\\dfrac{a}{4}=\\dfrac{2}{1}$。",
        },
      },
      { key: "C", text: same("$\\dfrac{1}{2}$"), value: "1/2" },
      {
        key: "D",
        text: same("$-\\dfrac{1}{2}$"),
        value: "-1/2",
        trap: {
          en: "The product of the slopes was set equal to $+1$ instead of $-1$.",
          zh: "把兩斜率的積設成 $+1$，而不是 $-1$。",
        },
      },
    ],
    answer: "C",
    hint: {
      en: "For $A_1x+B_1y+C_1=0$ and $A_2x+B_2y+C_2=0$, the lines are perpendicular when $A_1A_2+B_1B_2=0$. The constant terms are not used.",
      zh: "對於 $A_1x+B_1y+C_1=0$ 和 $A_2x+B_2y+C_2=0$，當 $A_1A_2+B_1B_2=0$ 時兩線垂直。常數項不會用到。",
    },
    steps: [
      {
        en: "The perpendicular condition is $A_1A_2+B_1B_2=0$.",
        zh: "垂直條件是 $A_1A_2+B_1B_2=0$。",
      },
      {
        en: "Here $a(4)+2(-1)=0$, so $4a-2=0$.",
        zh: "這裏 $a(4)+2(-1)=0$，即 $4a-2=0$。",
      },
      {
        en: "Thus $a=\\dfrac{1}{2}$.",
        zh: "因此 $a=\\dfrac{1}{2}$。",
      },
      {
        en: "Check by slopes. The second slope is $-\\dfrac{4}{-1}=4$. The first slope is $-\\dfrac{a}{2}=-\\dfrac{1}{4}$. The product is $4\\times\\left(-\\dfrac{1}{4}\\right)=-1$.",
        zh: "用斜率覆核。第二條的斜率是 $-\\dfrac{4}{-1}=4$。第一條的斜率是 $-\\dfrac{a}{2}=-\\dfrac{1}{4}$。積是 $4\\times\\left(-\\dfrac{1}{4}\\right)=-1$。",
      },
    ],
    examTip: {
      en: "Option A is the parallel answer for the same pair of equations. Read the word “perpendicular” once more before you shade, because both conditions were probably on the same revision page.",
      zh: "選項 A 是同一對方程的平行答案。填答前再讀一次「垂直」，因為這兩個條件通常印在同一頁筆記上。",
    },
  },
  {
    id: "pp-parallel-distinct",
    topicId: "parallel",
    difficulty: "standard",
    stem: {
      en: "The straight lines $2x+3y-6=0$ and $4x+6y+1=0$",
      zh: "直線 $2x+3y-6=0$ 和 $4x+6y+1=0$",
    },
    options: [
      {
        key: "A",
        text: {
          en: "are coincident.",
          zh: "是同一條直線。",
        },
        value: "coincident",
        trap: {
          en: "$\\dfrac{2}{4}=\\dfrac{3}{6}$, but $\\dfrac{-6}{1}$ is not equal to $\\dfrac{1}{2}$. The constant terms are not in the same ratio, so the lines are not the same line.",
          zh: "$\\dfrac{2}{4}=\\dfrac{3}{6}$，但 $\\dfrac{-6}{1}$ 不等於 $\\dfrac{1}{2}$。常數項的比不相同，所以不是同一條直線。",
        },
      },
      {
        key: "B",
        text: {
          en: "are parallel and distinct.",
          zh: "平行且相異。",
        },
        value: "parallel-distinct",
      },
      {
        key: "C",
        text: {
          en: "are perpendicular.",
          zh: "互相垂直。",
        },
        value: "perpendicular",
        trap: {
          en: "$2(4)+3(6)=26\\ne 0$. The coefficient test for perpendicular lines fails.",
          zh: "$2(4)+3(6)=26\\ne 0$。垂直的係數檢驗不成立。",
        },
      },
      {
        key: "D",
        text: {
          en: "intersect at exactly one point and are not perpendicular.",
          zh: "相交於一點，而且並不垂直。",
        },
        value: "intersect-oblique",
        trap: {
          en: "This describes two lines that are not parallel. These two lines have the same slope $-\\dfrac{2}{3}$, so they do not meet.",
          zh: "這是用來描述不平行的兩線。這兩條直線的斜率都是 $-\\dfrac{2}{3}$，所以不會相交。",
        },
      },
    ],
    answer: "B",
    hint: {
      en: "Compare $\\dfrac{A_1}{A_2}$, $\\dfrac{B_1}{B_2}$ and $\\dfrac{C_1}{C_2}$. Equal $A$ and $B$ ratios mean parallel. The $C$ ratio decides whether they are the same line.",
      zh: "比較 $\\dfrac{A_1}{A_2}$、$\\dfrac{B_1}{B_2}$ 和 $\\dfrac{C_1}{C_2}$。$A$、$B$ 的比相等就表示平行。$C$ 的比決定它們是不是同一條直線。",
    },
    steps: [
      {
        en: "$\\dfrac{2}{4}=\\dfrac{3}{6}=\\dfrac{1}{2}$, so the coefficients of $x$ and $y$ are proportional. The slopes are both $-\\dfrac{2}{3}$.",
        zh: "$\\dfrac{2}{4}=\\dfrac{3}{6}=\\dfrac{1}{2}$，所以 $x$ 和 $y$ 的係數成比例。兩條直線的斜率都是 $-\\dfrac{2}{3}$。",
      },
      {
        en: "The constant terms are $-6$ and $1$. Since $\\dfrac{-6}{1}\\ne\\dfrac{1}{2}$, the equations are not multiples of each other.",
        zh: "常數項是 $-6$ 和 $1$。因為 $\\dfrac{-6}{1}\\ne\\dfrac{1}{2}$，兩個方程不是倍數關係。",
      },
      {
        en: "The lines are parallel and distinct. They have no point of intersection.",
        zh: "兩線平行且相異。它們沒有交點。",
      },
    ],
    examTip: {
      en: "“The first two pairs of coefficients are proportional” is not enough for coincident lines. Check the constant term as well. This is the three-way test: intersecting, parallel and distinct, or the same line.",
      zh: "「前兩組係數成比例」並不足夠判定為同一直線。常數項也要檢查。這是三選一：相交、平行且相異，或同一條直線。",
    },
  },
  {
    id: "pp-k-parallel",
    topicId: "parallel",
    difficulty: "exam",
    stem: {
      en: "The straight line $x+ky-4=0$ is parallel to the line passing through $A(1,\\,2)$ and $B(4,\\,-4)$. Then $k=$",
      zh: "直線 $x+ky-4=0$ 與通過 $A(1,\\,2)$ 和 $B(4,\\,-4)$ 的直線平行。則 $k=$",
    },
    options: [
      { key: "A", text: same("$\\dfrac{1}{2}$"), value: "1/2" },
      {
        key: "B",
        text: same("$-\\dfrac{1}{2}$"),
        value: "-1/2",
        trap: {
          en: "The slope of the given family was set equal to $+2$ instead of $-2$, so $-\\dfrac{1}{k}=2$.",
          zh: "把這族直線的斜率設成 $+2$ 而不是 $-2$，於是 $-\\dfrac{1}{k}=2$。",
        },
      },
      {
        key: "C",
        text: same("$2$"),
        value: "2",
        trap: {
          en: "The slope of $AB$ was inverted to $-\\dfrac{1}{2}$, and then $-\\dfrac{1}{k}$ was set equal to that value.",
          zh: "把 $AB$ 的斜率上下顛倒成 $-\\dfrac{1}{2}$，再令 $-\\dfrac{1}{k}$ 等於這個值。",
        },
      },
      {
        key: "D",
        text: same("$-2$"),
        value: "-2",
        trap: {
          en: "The value of $k$ was taken to be the slope itself. In $x+ky-4=0$ the slope is $-\\dfrac{1}{k}$, not $k$.",
          zh: "把 $k$ 本身當成了斜率。在 $x+ky-4=0$ 中，斜率是 $-\\dfrac{1}{k}$，不是 $k$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Find the slope of $AB$ first. Then write the slope of $x+ky-4=0$ as $-\\dfrac{1}{k}$, provided $k\\ne 0$, and equate the two slopes.",
      zh: "先求 $AB$ 的斜率。再把 $x+ky-4=0$ 的斜率寫成 $-\\dfrac{1}{k}$（$k\\ne 0$），令兩者相等。",
    },
    steps: [
      {
        en: "The slope of $AB$ is $\\dfrac{-4-2}{4-1}=\\dfrac{-6}{3}=-2$.",
        zh: "$AB$ 的斜率是 $\\dfrac{-4-2}{4-1}=\\dfrac{-6}{3}=-2$。",
      },
      {
        en: "For $x+ky-4=0$ with $k\\ne 0$, the slope is $-\\dfrac{1}{k}$.",
        zh: "對於 $x+ky-4=0$（$k\\ne 0$），斜率是 $-\\dfrac{1}{k}$。",
      },
      {
        en: "Parallel lines have equal slopes: $-\\dfrac{1}{k}=-2$, so $k=\\dfrac{1}{2}$.",
        zh: "平行線的斜率相等：$-\\dfrac{1}{k}=-2$，所以 $k=\\dfrac{1}{2}$。",
      },
      {
        en: "If $k=0$, the line would be $x=4$, which is vertical and not parallel to a line of slope $-2$. So $k=\\dfrac{1}{2}$ is the only solution.",
        zh: "若 $k=0$，直線變成 $x=4$，是鉛垂線，不會與斜率 $-2$ 的直線平行。因此只有 $k=\\dfrac{1}{2}$。",
      },
    ],
    examTip: {
      en: "A parameter sitting in front of $y$ is not the slope. Make $y$ the subject, or use $-\\dfrac{A}{B}$, before you form the equation in $k$.",
      zh: "放在 $y$ 前面的參數不是斜率。先把 $y$ 寫成主項，或先用 $-\\dfrac{A}{B}$，再列關於 $k$ 的方程。",
    },
  },
  {
    id: "pp-origin",
    topicId: "parallel",
    difficulty: "exam",
    stem: {
      en: "The equation of the straight line which passes through the origin and through the point of intersection of $x+y-3=0$ and $2x-y-3=0$ is",
      zh: "通過原點，並且通過 $x+y-3=0$ 與 $2x-y-3=0$ 的交點的直線方程是",
    },
    options: [
      { key: "A", text: same("$x-2y=0$"), value: "x-2y=0" },
      {
        key: "B",
        text: same("$2x-y=0$"),
        value: "2x-y=0",
        trap: {
          en: "The slope was inverted. The intersection is $(2,\\,1)$, so the slope through the origin is $\\dfrac{1}{2}$, not $2$.",
          zh: "斜率上下顛倒了。交點是 $(2,\\,1)$，所以通過原點的斜率是 $\\dfrac{1}{2}$，不是 $2$。",
        },
      },
      {
        key: "C",
        text: same("$x+2y=0$"),
        value: "x+2y=0",
        trap: {
          en: "The slope $\\dfrac{1}{2}$ was given the wrong sign.",
          zh: "斜率 $\\dfrac{1}{2}$ 的正負號寫反了。",
        },
      },
      {
        key: "D",
        text: same("$x-y=0$"),
        value: "x-y=0",
        trap: {
          en: "The line $y=x$ was chosen because it passes through the origin. It does not pass through the intersection $(2,\\,1)$.",
          zh: "因為 $y=x$ 通過原點就選了它。它並不通過交點 $(2,\\,1)$。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "Add the two equations to remove $y$, or use the family $(x+y-3)+\\lambda(2x-y-3)=0$ and make it pass through $(0,\\,0)$.",
      zh: "把兩式相加消去 $y$，或使用直線族 $(x+y-3)+\\lambda(2x-y-3)=0$，再令它通過 $(0,\\,0)$。",
    },
    steps: [
      {
        en: "Add $x+y-3=0$ and $2x-y-3=0$: $3x-6=0$, so $x=2$. Then $y=3-x=1$. The intersection is $(2,\\,1)$.",
        zh: "把 $x+y-3=0$ 與 $2x-y-3=0$ 相加：$3x-6=0$，所以 $x=2$。然後 $y=3-x=1$。交點是 $(2,\\,1)$。",
      },
      {
        en: "The line through $(0,\\,0)$ and $(2,\\,1)$ has slope $\\dfrac{1}{2}$. Its equation is $y=\\dfrac{1}{2}x$, or $x-2y=0$.",
        zh: "通過 $(0,\\,0)$ 和 $(2,\\,1)$ 的直線斜率是 $\\dfrac{1}{2}$。方程是 $y=\\dfrac{1}{2}x$，即 $x-2y=0$。",
      },
      {
        en: "By the family method, $(x+y-3)+\\lambda(2x-y-3)=0$ passes through $(0,\\,0)$ when $-3-3\\lambda=0$, so $\\lambda=-1$.",
        zh: "用直線族：$(x+y-3)+\\lambda(2x-y-3)=0$ 通過 $(0,\\,0)$ 時，$-3-3\\lambda=0$，所以 $\\lambda=-1$。",
      },
      {
        en: "Substitute $\\lambda=-1$: $(x+y-3)-(2x-y-3)=0$, which simplifies to $-x+2y=0$, or $x-2y=0$.",
        zh: "代入 $\\lambda=-1$：$(x+y-3)-(2x-y-3)=0$，化簡得 $-x+2y=0$，即 $x-2y=0$。",
      },
    ],
    examTip: {
      en: "Every member of $L_1+\\lambda L_2=0$ passes through the intersection of $L_1$ and $L_2$, except the case that cancels both equations. One extra condition, such as passing through the origin, is enough to find $\\lambda$.",
      zh: "$L_1+\\lambda L_2=0$ 的每一條成員都通過 $L_1$ 與 $L_2$ 的交點（兩式互相抵消的情形除外）。再加一個條件，例如通過原點，就可以求出 $\\lambda$。",
    },
  },
  {
    id: "pp-family",
    topicId: "parallel",
    difficulty: "exam",
    stem: {
      en: "Find the equation of the straight line which passes through the point of intersection of $x-2y+3=0$ and $2x+y-4=0$, and is parallel to $3x+y=0$.",
      zh: "求通過 $x-2y+3=0$ 與 $2x+y-4=0$ 的交點，並且與 $3x+y=0$ 平行的直線方程。",
    },
    options: [
      { key: "A", text: same("$3x+y-5=0$"), value: "3x+y-5=0" },
      {
        key: "B",
        text: same("$x-3y+5=0$"),
        value: "x-3y+5=0",
        trap: {
          en: "This is the perpendicular through the intersection. Its slope is $\\dfrac{1}{3}$, and $\\left(-3\\right)\\times\\dfrac{1}{3}=-1$.",
          zh: "這是通過交點的垂線。斜率是 $\\dfrac{1}{3}$，而且 $(-3)\\times\\dfrac{1}{3}=-1$。",
        },
      },
      {
        key: "C",
        text: same("$3x-y-1=0$"),
        value: "3x-y-1=0",
        trap: {
          en: "The slope $-3$ was replaced by $+3$. The line passes through the intersection, but it is not parallel to $3x+y=0$.",
          zh: "把斜率 $-3$ 換成了 $+3$。直線通過交點，但並不與 $3x+y=0$ 平行。",
        },
      },
      {
        key: "D",
        text: same("$x+3y-7=0$"),
        value: "x+3y-7=0",
        trap: {
          en: "The reciprocal $-\\dfrac{1}{3}$ was used without the extra minus that perpendicular lines need, and the line is not parallel to the given line either.",
          zh: "用了倒數 $-\\dfrac{1}{3}$，卻沒有再加上垂直所需的那個負號；這條線與已知直線也不平行。",
        },
      },
    ],
    answer: "A",
    hint: {
      en: "The target slope is the slope of $3x+y=0$, which is $-3$. Find the intersection, then use the point-slope form. Do not build the perpendicular by habit.",
      zh: "目標斜率是 $3x+y=0$ 的斜率，即 $-3$。先求交點，再用點斜式。不要習慣性地去做垂線。",
    },
    steps: [
      {
        en: "Solve $x-2y+3=0$ and $2x+y-4=0$. From the second equation, $y=4-2x$.",
        zh: "解 $x-2y+3=0$ 和 $2x+y-4=0$。由第二式，$y=4-2x$。",
      },
      {
        en: "Substitute: $x-2(4-2x)+3=0$, so $x-8+4x+3=0$, $5x=5$ and $x=1$. Then $y=2$. The intersection is $(1,\\,2)$.",
        zh: "代入：$x-2(4-2x)+3=0$，即 $x-8+4x+3=0$，$5x=5$，$x=1$。然後 $y=2$。交點是 $(1,\\,2)$。",
      },
      {
        en: "The line $3x+y=0$ has slope $-3$. A parallel line through $(1,\\,2)$ is $y-2=-3(x-1)$.",
        zh: "直線 $3x+y=0$ 的斜率是 $-3$。通過 $(1,\\,2)$ 的平行線是 $y-2=-3(x-1)$。",
      },
      {
        en: "Expand: $y-2=-3x+3$, so $3x+y-5=0$.",
        zh: "展開：$y-2=-3x+3$，所以 $3x+y-5=0$。",
      },
    ],
    examTip: {
      en: "In a family-of-lines question, underline the extra condition. “Parallel to” and “perpendicular to” produce different members of the same family, and both usually appear among the options.",
      zh: "做直線族的題目時，把附加條件畫出來。「與某線平行」和「與某線垂直」會得到同一族裏不同的成員，而兩個答案通常都在選項中。",
    },
  },
];
