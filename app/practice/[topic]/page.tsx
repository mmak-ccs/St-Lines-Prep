import type { Metadata } from "next";
import { TopicDrill } from "@/components/practice-view";
import { TOPICS } from "@/lib/topics";

export function generateStaticParams() {
  return TOPICS.map((topic) => ({ topic: topic.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const found = TOPICS.find((item) => item.id === topic);
  return { title: found?.en ?? "Practice" };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  return <TopicDrill topicId={topic} />;
}
