// Express
import path from "path";
import express from "express";
import cors from "cors";

// IoC Container
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { providers } from "@/main/providers";

export const createServer = () => {
  // App Setup
  const container = new Container();
  const server = new InversifyExpressServer(container);
  providers.forEach((provider) => provider(container));

  server.setConfig((app) => {
    app.use(
      cors(),
      express.static(path.join(__dirname, "../../public")),
      express.urlencoded({ extended: true }),
      express.json()
    );
  });

  return { server, container };
};
