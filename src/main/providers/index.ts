import { appProvider } from "./app.provider";
import { repositoryProvider } from "./repository.provider";
import { useCaseProvider } from "./use-case.provider";

export * from "./app.provider";
export * from "./repository.provider";
export * from "./use-case.provider";

export const providers = [appProvider, repositoryProvider, useCaseProvider];
