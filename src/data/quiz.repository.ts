import { inject, injectable } from "inversify";
import type { Quiz } from "../domain";
import { PrismaClient } from "@prisma/client";

@injectable()
export class QuizRepository {
  constructor(@inject("PrismaClient") private prisma: PrismaClient) {}

  async list(): Promise<Quiz[]> {
    const source = await this.prisma.quiz.findMany({
      include: {
        questions: {
          include: {
            answer: true,
            options: true,
          },
        },
      },
    });

    return source.map((quiz) => ({
      title: quiz.title,
      icon: quiz.icon,
      questions: quiz.questions.map((question) => ({
        question: question.question,
        options: question.options.map((option) => option.content),
        answer: question.answer?.content ?? "",
      })),
    }));
  }
}
