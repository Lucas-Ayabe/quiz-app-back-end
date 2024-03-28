import { Quiz } from "../quiz";

export type QuizRepository = {
  list(): Promise<Quiz[]>;
  find(id: number): Promise<Quiz | null>;
};
