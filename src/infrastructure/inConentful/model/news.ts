import { Entry, Asset } from "contentful";
import { News } from "domain/model/news";
import { ContentfulModel, Mapper } from "./index";

export interface ContentfulNews extends ContentfulModel {
  postAt: Date;
  text: string;
  moreUrl: string;
  moreText: string;
  image: Asset;
}

export class NewsMapper implements Mapper<News, ContentfulNews> {
  map(entry: Entry<ContentfulNews>): News {
    return {
      image: entry.fields.image.fields.file.url,
      date: entry.fields.postAt,
      text: entry.fields.text,
      more: {
        url: entry.fields.moreUrl,
        text: entry.fields.moreText,
      },
    };
  }
}
