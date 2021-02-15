import { Entry } from "contentful";
import { Model } from "domain/model";

export interface ContentfulModel {}
export interface Mapper<T extends Model, U extends ContentfulModel> {
  map(entry: Entry<U>): T;
}
export interface MapperConstructor<T extends Model, U extends ContentfulModel> {
  new (): Mapper<T, U>;
}
