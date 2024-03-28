import type { Question } from "./question";

export type Quiz = {
  title: string;
  icon: string;
  questions: Question[];
};
