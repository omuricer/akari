import { injectable } from "inversify";
import "reflect-metadata";
import { Repository as IRepository } from "domain/repository";
import { Model } from "domain/model";
import { ContentfulModel, MapperConstructor } from "../model/index";
import { EntryCollection } from "contentful";
import { client } from "../handler";

@injectable()
export abstract class Repository<T extends Model, U extends ContentfulModel>
  implements IRepository<T> {
  protected client = client;
  abstract all(): Promise<T[]>;

  abstract mapper(): MapperConstructor<T, U>;

  async getEntries(query?: any) {
    return this.convertContentfulToModel(
      await this.client.getEntries<U>(query)
    );
  }

  convertContentfulToModel(contentfulEntries: EntryCollection<U>): T[] {
    let mapper = new (this.mapper())();
    return contentfulEntries.items.map(mapper.map);
  }
}
