import type { Question } from "../types";
import { areaQuestions } from "./area";
import { centresQuestions } from "./centres";
import { distanceQuestions } from "./distance";
import { formsQuestions } from "./forms";
import { horizontalQuestions } from "./horizontal";
import { parallelQuestions } from "./parallel";
import { sectionQuestions } from "./section";
import { slopeQuestions } from "./slope";

export const questions: Question[] = [
  ...slopeQuestions,
  ...formsQuestions,
  ...horizontalQuestions,
  ...parallelQuestions,
  ...distanceQuestions,
  ...sectionQuestions,
  ...areaQuestions,
  ...centresQuestions,
];

const byId = new Map(questions.map((question) => [question.id, question]));

export function questionById(id: string): Question | undefined {
  return byId.get(id);
}

export function questionsByTopic(topicId: string): Question[] {
  return questions.filter((question) => question.topicId === topicId);
}
