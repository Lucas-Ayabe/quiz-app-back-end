import { inject, injectable } from "inversify";
import { Quiz } from "@/domain/quiz";

export type LoadQuizzesRepository = {
  list(): Promise<Quiz[]>;
};

@injectable()
export class LoadQuizzes {
  constructor(
    @inject("QuizRepository") private repository: LoadQuizzesRepository
  ) {}

  async execute(): Promise<Quiz[]> {
    return this.repository.list();
  }
}
