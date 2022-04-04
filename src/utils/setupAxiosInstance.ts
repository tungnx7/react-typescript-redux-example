import axios from "axios";

const TIMEOUT = 1 * 60 * 100000;

let AxiosInstance: any;
const setupAxiosIntansce = (onUnauthenticated: Function) => {
  const promise = new Promise((resolve, reject) => {
    const AxiosInstanceTemp = axios.create({
      timeout: TIMEOUT,
      baseURL: "http://localhost:3000",
    });

    const onRequestSuccess = (config: any) => {
      //run with authen

      // const token = getToken("token");
      // if (token) {
      //     config.headers.Authorization = `Bearer ${token}`;
      // }

      return config;
    };

    const onResponseSuccess = (response: any) => response;

    const onResponseError = (err: any) => {
      //run with authen

      // const status = err.status || (err.response ? err.response.status : 0);
      // if (status === 403 || status === 401) {
      //     clearAll();
      //     store.dispatch(setAuth(false));
      // } else {
      //     store.dispatch(
      //         setErrorBoundry({
      //             show: true,
      //             error: `From: ${err.config.url}\n` + err,
      //         })
      //     );
      // }

      //run without authen

      return Promise.reject(err);
    };
    AxiosInstanceTemp.interceptors.request.use(onRequestSuccess);
    AxiosInstanceTemp.interceptors.response.use(onResponseSuccess, onResponseError);
    AxiosInstance = AxiosInstanceTemp;
    resolve(AxiosInstanceTemp);
  });
};

export { setupAxiosIntansce, AxiosInstance };
