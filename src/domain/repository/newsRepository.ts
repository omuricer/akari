import { Repository } from "./index";
import { News } from "domain/model/news";

export interface NewsRepository extends Repository<News> {}
