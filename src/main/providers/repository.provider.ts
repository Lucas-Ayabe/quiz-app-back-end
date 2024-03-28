import { Container } from "inversify";

import { QuizRepository, ResultRepository } from "@/domain/ports";
import { PrismaQuizRepository, PrismaResultRepository } from "@/adapters/data";

export const repositoryProvider = (container: Container) => {
  container.bind<QuizRepository>("QuizRepository").to(PrismaQuizRepository);
  container
    .bind<ResultRepository>("ResultRepository")
    .to(PrismaResultRepository);
};
