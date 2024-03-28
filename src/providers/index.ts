import { Container } from "inversify";
import { PrismaClient } from "@prisma/client";
import { prisma } from "@/infra/prisma";
import { PrismaQuizRepository, PrismaResultRepository } from "@/data/prisma";
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
