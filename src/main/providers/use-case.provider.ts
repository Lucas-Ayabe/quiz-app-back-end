import { Container } from "inversify";
import { LoadQuizzes, RegisterResult } from "@/domain/use-cases";

export const useCaseProvider = (container: Container) => {
  container.bind<LoadQuizzes>("LoadQuizzes").to(LoadQuizzes);
  container.bind<RegisterResult>("RegisterResult").to(RegisterResult);
};
