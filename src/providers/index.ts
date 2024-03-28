import { Container } from "inversify";
import { QuizRepository } from "../data/quiz.repository";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../infra/prisma";

const appProvider = (container: Container) => {
  container.bind<PrismaClient>("PrismaClient").toConstantValue(prisma);
  container.bind<QuizRepository>("QuizRepository").to(QuizRepository);
};

export const providers = [appProvider];
