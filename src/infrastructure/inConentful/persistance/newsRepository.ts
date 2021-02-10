import { injectable } from "inversify";
import "reflect-metadata";
import { NewsRepository as INewsRepository } from "domain/repository/newsRepository";
import { News } from "domain/model/news";
import { client } from "../handler";

@injectable()
export class NewsRepository implements INewsRepository {
  async all() {
    return this.convertContentfulToModel(
      await client.getEntries({
        content_type: "news",
      })
    );
  }

  convertContentfulToModel(contentfulEntries: any): News[] {
    return contentfulEntries.items.map((item) => {
      return {
        image: item.fields.image.fields.file.url,
        date: item.fields.postAt,
        text: item.fields.text,
        more: {
          url: item.fields.moreUrl,
          text: item.fields.moreText,
        },
      };
    });
  }
}
