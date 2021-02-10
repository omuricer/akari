import { Container } from "inversify";
import { TYPES } from "./types";
import { NewsRepository } from "domain/repository/newsRepository";
import { NewsRepository as NewsRepositoryImplement } from "infrastructure/inConentful/persistance/newsRepository";

const DIContainer = new Container();
DIContainer.bind<NewsRepository>(TYPES.NewsRepository).to(
  NewsRepositoryImplement
);

export { DIContainer };
