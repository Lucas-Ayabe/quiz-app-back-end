// Decorators Support
import "reflect-metadata";

// Express
import express from "express";
import path from "path";

// IoC Container
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { providers } from "./providers";

// Controllers
import "./controllers";
import { prisma } from "./infra/prisma";

// App Setup
const container = new Container();
const server = new InversifyExpressServer(container);
providers.forEach((provider) => provider(container));

server.setConfig((app) => {
  app.use(
    express.static(path.join(__dirname, "../public")),
    express.urlencoded({ extended: true }),
    express.json()
  );
});

async function main() {
  server
    .build()
    .listen(3000, () => console.log("Listening in http://localhost:3000"));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
