import { Container } from "inversify";
import { PrismaClient } from "@prisma/client";

import {
  prisma,
  PrismaQuizRepository,
  PrismaResultRepository,
} from "@/adapters/data/prisma";

import { QuizRepository, ResultRepository } from "@/domain/ports";
import { LoadQuizzes, RegisterResult } from "@/domain/use-cases";

const appProvider = (container: Container) => {
  container.bind<PrismaClient>("PrismaClient").toConstantValue(prisma);

  container.bind<QuizRepository>("QuizRepository").to(PrismaQuizRepository);
  container
    .bind<ResultRepository>("ResultRepository")
    .to(PrismaResultRepository);

  container.bind<LoadQuizzes>("LoadQuizzes").to(LoadQuizzes);
  container.bind<RegisterResult>("RegisterResult").to(RegisterResult);
};

export const providers = [appProvider];
