import axios from 'axios';
import qs from 'qs';
import {myUrl} from "./url";

const server = axios.create({
  baseURL: myUrl,
  headers: {
    common: {
      ContentType: 'application/json',
      Accept: 'shortener.api.v1'
    }
  }
});

server.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, {encode: false});
};

server.interceptors.response.use((response) => {
  return (response)
}, error => {
  return (error.response)
});

export default server;