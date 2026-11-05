import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = {
  title: "Equations of Straight Lines",
};

export default function HomePage() {
  return <HomeView />;
}
