import { Result } from "../result";

export type ResultRepository = {
  register(result: Omit<Result, "id">): Promise<Result>;
};
