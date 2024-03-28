import * as Express from "express";
import { inject } from "inversify";
import {
  controller,
  httpPost,
  requestBody,
  response,
} from "inversify-express-utils";
import { RegisterResult } from "@/domain/use-cases";

@controller("/results")
export class ResultController {
  constructor(
    @inject("RegisterResult") private registerResult: RegisterResult
  ) {}

  @httpPost("")
  async register(
    @requestBody() body: { quizId?: string; score?: string },
    @response() res: Express.Response
  ) {
    const { quizId, score } = body;

    if (!quizId || !score) {
      return res.status(400).json({
        error: "quizId and score are required",
      });
    }

    const { status, payload } = await this.registerResult
      .execute({ quizId: +quizId, score: +score })
      .then((payload) => ({
        status: 200,
        payload,
      }))
      .catch((error) => ({
        status: 400,
        payload: {
          error: error?.message ?? "",
        },
      }));

    return res.status(status).json(payload);
  }
}
