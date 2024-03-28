import * as Express from "express";
import { inject } from "inversify";
import { controller, httpGet, response } from "inversify-express-utils";
import { LoadQuizzes } from "@/domain/use-cases/quizzes";

@controller("/quizzes")
export class QuizController {
  constructor(@inject("LoadQuizzes") private loadQuizzes: LoadQuizzes) {}

  @httpGet("")
  async index(@response() res: Express.Response) {
    return res.json(await this.loadQuizzes.execute().catch(() => []));
  }
}
