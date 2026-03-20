import axios from "axios";

let showLoader: () => void;
let hideLoader: () => void;

export const injectLoader = (handlers: {
  show: () => void;
  hide: () => void;
}) => {
  showLoader = handlers.show;
  hideLoader = handlers.hide;
};

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

// REQUEST
api.interceptors.request.use((config) => {
  showLoader?.();
  return config;
});

// RESPONSE
api.interceptors.response.use(
  (response) => {
    hideLoader?.();
    return response;
  },
  (error) => {
    hideLoader?.();
    return Promise.reject(error);
  },
);
