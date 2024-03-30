import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

export * from "./providers";
export * from "./server.factory";

export default async function main({
  server,
  container,
}: {
  server: InversifyExpressServer;
  container: Container;
}) {
  server
    .build()
    .listen(container.get("port"), () =>
      console.log(
        `Listening in ${container.get("baseUrl")}:${container.get("port")}`
      )
    );
}
