import type { Metadata } from "next";
import { PracticeIndex } from "@/components/practice-view";

export const metadata: Metadata = {
  title: "Practice",
};

export default function PracticePage() {
  return <PracticeIndex />;
}
