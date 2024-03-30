import * as Express from "express";
import { inject } from "inversify";
import { controller, httpGet, response } from "inversify-express-utils";
import { LoadQuizzes } from "@/domain/use-cases/quizzes";
import { Quiz } from "@/domain";
import { GetBaseUrlService } from "@/adapters/infrastructure";

@controller("/quizzes")
export class QuizController {
  constructor(
    @inject("LoadQuizzes") private loadQuizzes: LoadQuizzes,
    @inject("GetBaseUrlService") private getBaseUrl: GetBaseUrlService
  ) {
    this.toViewModel = this.toViewModel.bind(this);
  }

  private toViewModel(quizzes: Quiz[]) {
    return quizzes.map((quiz) => ({
      ...quiz,
      icon: `${this.getBaseUrl.toBaseUrlString()}/assets/${quiz.icon}`,
    }));
  }

  @httpGet("")
  async index(@response() res: Express.Response) {
    return res.json(
      await this.loadQuizzes
        .execute()
        .then(this.toViewModel)
        .catch(() => [])
    );
  }
}
