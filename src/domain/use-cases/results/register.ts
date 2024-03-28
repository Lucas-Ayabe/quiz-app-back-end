import { inject, injectable } from "inversify";
import { Result } from "@/domain/result";
import { Quiz } from "@/domain/quiz";

export interface RegisterResultRepository {
  register(result: Omit<Result, "id">): Promise<Result>;
}

export interface FindQuizRepository {
  find(id: number): Promise<Quiz | undefined | null>;
}

export type RegisterResultRequest = {
  quizId: number;
  score: number;
};

@injectable()
export class RegisterResult {
  constructor(
    @inject("ResultRepository") private results: RegisterResultRepository,
    @inject("QuizRepository") private quizzes: FindQuizRepository
  ) {}

  async execute(result: RegisterResultRequest): Promise<Result> {
    if (result.score < 0) {
      throw new Error("Score cannot be negative");
    }

    const quiz = await this.quizzes.find(result.quizId);

    if (!quiz) {
      throw new Error("Quiz not found");
    }

    return this.results.register({
      quiz,
      score: result.score,
    });
  }
}
