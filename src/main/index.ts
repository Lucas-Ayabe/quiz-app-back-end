import { InversifyExpressServer } from "inversify-express-utils";

export * from "./providers";
export * from "./server.factory";

export default async function main(server: InversifyExpressServer) {
  server
    .build()
    .listen(3000, () => console.log("Listening in http://localhost:3000"));
}
