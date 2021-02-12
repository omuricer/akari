import { Model } from "./";
export interface News extends Model {
  image: string;
  date: Date;
  text: string;
  more: {
    url: string;
    text: string;
  };
}
