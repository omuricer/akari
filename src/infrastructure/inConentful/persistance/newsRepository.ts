import { Repository } from "./index";
import { NewsRepository as INewsRepository } from "domain/repository/newsRepository";
import { News } from "domain/model/news";
import { ContentfulNews, NewsMapper } from "../model/news";

export class NewsRepository
  extends Repository<News, ContentfulNews>
  implements INewsRepository {
  mapper = () => NewsMapper;
  async all() {
    return this.getEntries({
      content_type: "news",
      order: "-fields.postAt",
    });
  }
}
