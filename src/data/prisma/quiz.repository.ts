import { inject, injectable } from "inversify";
import type { Quiz } from "../../domain";
import { PrismaClient } from "@prisma/client";

@injectable()
export class PrismaQuizRepository {
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
      id: quiz.id,
      title: quiz.title,
      icon: quiz.icon,
      questions: quiz.questions.map((question) => ({
        id: question.id,
        question: question.question,
        options: question.options.map((option) => option.content),
        answer: question.answer?.content ?? "",
      })),
    }));
  }

  async find(id: number): Promise<Quiz | null> {
    const source = await this.prisma.quiz.findFirst({
      where: { id },
      include: {
        questions: {
          include: {
            answer: true,
            options: true,
          },
        },
      },
    });

    if (!source) return null;

    return {
      id: source.id,
      title: source.title,
      icon: source.icon,
      questions: source.questions.map((question) => ({
        id: question.id,
        question: question.question,
        options: question.options.map((option) => option.content),
        answer: question.answer?.content ?? "",
      })),
    };
  }
}
