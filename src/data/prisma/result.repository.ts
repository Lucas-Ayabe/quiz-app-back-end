import { inject, injectable } from "inversify";
import { PrismaClient } from "@prisma/client";
import type { Result } from "../../domain";

@injectable()
export class PrismaResultRepository {
  constructor(@inject("PrismaClient") private prisma: PrismaClient) {}

  async register(result: Omit<Result, "id">): Promise<Result> {
    const createdResult = await this.prisma.result.create({
      data: {
        score: result.score,
        quizId: result.quiz.id,
      },
    });

    return {
      id: createdResult.id,
      score: createdResult.score,
      quiz: result.quiz,
    };
  }
}
