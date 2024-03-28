// IoC Decorator Metadata
import "reflect-metadata";
import "./adapters/controllers";

// App Setup
import main, { createServer } from "./main";
import { prisma } from "@/adapters/data";

main(createServer())
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
