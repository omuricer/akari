import api from "@/app/libs/api";

class YouTubeApi {
  BASE_URL = "https://www.googleapis.com";
  private apiKey?: string;

  constructor() {}

  init(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Youtube Data APIのsearchをコールし、結果を返却する
   * @param params Youtube Data API searchのリクエストパラメータ
   * @return APIのレスポンス（Youtubeコンポーネントに必要な項目をピックアップ）
   */
  async search(params: SearchRequest): Promise<TSearchResponse> {
    if (!this.apiKey) throw "Un Initted.";
    const url = "/youtube/v3/search";

    const { data } = await api.get(url, {
      baseURL: this.BASE_URL,
      params: {
        ...params,
        key: this.apiKey,
      },
    });
    const response = data as APIResponse;
    if (response.pageInfo.totalResults == 0) return [];
    return response.items.map((item: any) => {
      return {
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.medium,
      };
    });
  }
}

export type TSearchResponse = {
  videoId: string;
  thumbnail: TThumbnail;
}[];

type SearchRequest = {
  part: "snippet" | "";
  type: "video" | "";
  eventType: "live" | "";
  order?: "date" | "";
  maxResults?: number;
  channelId: string;
  q?: string;
  publishedAfter?: string;
};
type APIResponse = {
  pageInfo: {
    totalResults: number;
  };
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      thumbnails: {
        medium: TThumbnail;
      };
    };
  }[];
};
export type TThumbnail = {
  url: string;
  width: number;
  height: number;
};

export default new YouTubeApi();
