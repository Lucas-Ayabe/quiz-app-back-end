import * as Express from "express";
import { inject } from "inversify";
import { controller, httpGet, response } from "inversify-express-utils";
import { QuizRepository } from "../data/quiz.repository";

@controller("")
export class QuizController {
  constructor(
    @inject("QuizRepository") private quizRepository: QuizRepository
  ) {}

  @httpGet("/quizzes")
  async index(@response() res: Express.Response) {
    return res.json(await this.quizRepository.list());
  }
}
