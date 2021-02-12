import { injectable } from "inversify";
import "reflect-metadata";
import { NewsRepository as INewsRepository } from "domain/repository/newsRepository";
import { News } from "domain/model/news";
import { client } from "../handler";
import { EntryCollection, Asset } from "contentful";

@injectable()
export class NewsRepository implements INewsRepository {
  async all() {
    return this.convertContentfulToModel(
      await client.getEntries<ContentfulNews>({
        content_type: "news",
        order: "-fields.postAt",
      })
    );
  }

  convertContentfulToModel(
    contentfulEntries: EntryCollection<ContentfulNews>
  ): News[] {
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

interface ContentfulNews {
  postAt: Date;
  text: string;
  moreUrl: string;
  moreText: string;
  image: Asset;
}
