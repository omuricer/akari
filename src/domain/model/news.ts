import { Model } from "./";
export interface News extends Model {
  image: string;
  date: string;
  text: string;
  more: {
    url: string;
    text: string;
  };
}
