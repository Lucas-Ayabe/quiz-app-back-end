import { Container } from "inversify";

import { prisma } from "@/adapters/data";
import { PrismaClient } from "@prisma/client";
import {
  AppGetBaseUrlService,
  GetBaseUrlService,
} from "@/adapters/infrastructure";

export const appProvider = (container: Container) => {
  container.bind<PrismaClient>("PrismaClient").toConstantValue(prisma);
  container.bind<number>("port").toConstantValue(+(process.env.PORT ?? 3001));
  container
    .bind<string>("baseUrl")
    .toConstantValue(process.env.BASE_URL ?? "http://localhost");

  container
    .bind<GetBaseUrlService>("GetBaseUrlService")
    .to(AppGetBaseUrlService);
};
