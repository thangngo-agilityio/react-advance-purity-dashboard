import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_KEY } from '../constants';

export class HttpService {
  private readonly baseApi: string;

  constructor(baseUrl: string) {
    this.baseApi = baseUrl;
  }

  private axiosClient = axios.create({
    headers: {
      // 'Content-Type': 'application/json; charset=UTF-8',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: API_KEY,
    },
  });

  getById<T>(
    endpoint: string,
    configs?: AxiosRequestConfig,
    id?: string,
  ): Promise<AxiosResponse<T>> {
    const url = `${this.baseApi}${endpoint}/${id}`;
    return this.axiosClient.get<T>(url, configs);
  }

  get<T>(
    endpoint: string,
    configs?: AxiosRequestConfig,
    searchParam?: string,
  ): Promise<AxiosResponse<T>> {
    const url = `${this.baseApi}${endpoint}${searchParam || ''}`;
    return this.axiosClient.get<T>(url, configs);
  }

  async post<T>(
    endpoint: string,
    body: Object,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const url = `${this.baseApi}${endpoint}`;
    const jsonBody = JSON.stringify(body);
    return await this.axiosClient.post<T>(url, jsonBody, configs);
  }

  async put<T>(
    endpoint: string,
    body: Object,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const url = `${this.baseApi}${endpoint}`;
    const jsonBody = JSON.stringify(body);
    return await this.axiosClient.put<T>(url, jsonBody, configs);
  }
}
