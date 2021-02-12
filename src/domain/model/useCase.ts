import { Model } from ".";
export interface UseCase extends Model {
  image: string;
  resource: string;
  text: string;
  more: {
    url: string;
    text: string;
  };
}
