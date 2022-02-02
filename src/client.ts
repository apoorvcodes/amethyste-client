import axios, { AxiosResponse } from "axios";
interface data {
  endpoint: string;
  options: {
    url:string
    avatar?:string
    type?:Number
  };
}
export default class AmiClient {
  token: string;
  base: string;
  constructor(token: string) {
    if (!token) {
      throw new Error("Unknown Token: No Token was provided");
    }
    this.token = token;
    this.base = "https://v1.api.amethyste.moe";
  }

  public async generate(data: data) {
    if (!data.endpoint)
      throw new Error("Unknown Endpoint: No Endpoint was provided");
    try {
      let resp: AxiosResponse<any, any> = await axios.post(
        `${this.base}/generate/${data.endpoint}`,
        data.options,
        {
          responseType: "arraybuffer",
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      return resp.data;
    } catch (err) {
      throw err;
    }
  }

  public async getimage(data: data) {
    if (!data.endpoint)
      throw new Error("Unknown Endpoint: No Endpoint was provided");
    const params = data.options;
    try {
      let img = await axios.get(`${this.base}/image/${data.endpoint}`, {
        params: {
          params,
        },
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return img.data;
    } catch (err) {
      throw err;
    }
  }
}
