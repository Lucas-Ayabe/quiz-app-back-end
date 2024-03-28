import { Container } from "inversify";

import { prisma } from "@/adapters/data";
import { PrismaClient } from "@prisma/client";

export const appProvider = (container: Container) => {
  container.bind<PrismaClient>("PrismaClient").toConstantValue(prisma);
};
