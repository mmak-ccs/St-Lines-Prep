import type { Metadata } from "next";
import { FormulaView } from "@/components/formula-view";

export const metadata: Metadata = {
  title: "Formulae",
};

export default function FormulasPage() {
  return <FormulaView />;
}
