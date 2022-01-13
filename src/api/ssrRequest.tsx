/** @format */
import axios from "axios";

class Request {
  ServerAxios = axios.create();
  constructor() {
    this.ServerAxios.defaults.baseURL = process.env.BASE_URL;
    this.ServerAxios.defaults.timeout = 200000;
  }

  setTokenForAxios = (token) => {
    this.ServerAxios.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = "Bearer " + token; //localStorage.getItem("stage-token");
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  get = (api_route: string, config = {}) => {
    return this.ServerAxios.get(api_route, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };

  post = (api_route: string, data = {}, config = {}) => {
    return this.ServerAxios.post(api_route, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };
  put = (api_route: string, data = {}, config = {}) => {
    return this.ServerAxios.put(api_route, data, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };

  delete = async (api_route: string, config = {}) => {
    return this.ServerAxios.delete(api_route, config)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  };
}

const SSRRequest = new Request();
export default SSRRequest;
