import { inject, injectable } from "inversify";
import { GetBaseUrlService } from "./get-base-url.service";

@injectable()
export class AppGetBaseUrlService implements GetBaseUrlService {
  constructor(
    @inject("baseUrl") private baseUrl: string,
    @inject("port") private port: number
  ) {}

  toBaseUrlString(): string {
    return `${this.baseUrl}:${this.port}`;
  }
}
