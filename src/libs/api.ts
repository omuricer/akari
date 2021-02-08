import axiosBase, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

class Api {
  axios: AxiosInstance;
  constructor() {
    let config: AxiosRequestConfig = {};
    this.axios = axiosBase.create(config);
  }

  async get(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any>;
    try {
      response = await this.axios.get(url, config);
    } catch (e) {
      if (e.response.status == 404) {
        window.location.href = "/notfound";
      }
      throw e;
    }
    return response;
  }

  async post(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any>;
    try {
      response = await this.axios.post(url, config);
    } catch (e) {
      if (e.response.status == 404) {
        window.location.href = "/notfound";
      }
      throw e;
    }
    return response;
  }

  async delete(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any>;
    try {
      response = await this.axios.delete(url, config);
    } catch (e) {
      if (e.response.status == 404) {
        window.location.href = "/notfound";
      }
      throw e;
    }
    return response;
  }

  async postMultipartFormData(
    url: string,
    formData: FormData
  ): Promise<AxiosResponse<any>> {
    let response: AxiosResponse<any>;
    try {
      response = await this.axios.post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    } catch (e) {
      if (e.response.status == 404) {
        window.location.href = "/notfound";
      }
      throw e;
    }
    return response;
  }
}
export default new Api();
