// /** @format */

// import axios from "axios";
// import Cookies from "js-cookie";
// import errorHandler from "./errorHandler";

// const AuthRequest = axios.create();
// AuthRequest.defaults.baseURL = process.env.BASE_URL;
// AuthRequest.defaults.timeout = 200000;
// AuthRequest.interceptors.request.use(
//   async (config) => {
//     const token = Cookies.get("stage-token");
//     if (token !== null && token !== 'null') {
//       config.headers.Authorization = "Bearer " + token;
//     }
//     config.headers.Accept = "application/json";
//     config.withCredentials = false;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// AuthRequest.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error && error.config && error.response && error.config.noToast) {
//       return;
//     }

//     errorHandler(error);
//   }
// );
// export default AuthRequest;

// const NoAuthRequest = axios.create();
// NoAuthRequest.defaults.baseURL = process.env.BASE_URL;
// NoAuthRequest.defaults.timeout = 200000;
// NoAuthRequest.interceptors.request.use((request) => {
//   request.headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   };
//   return request;
// });
// NoAuthRequest.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     errorHandler(error);
//     throw error;
//   }
// );
// export { NoAuthRequest };

export default {};
