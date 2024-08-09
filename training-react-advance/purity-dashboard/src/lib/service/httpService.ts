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

  get<T>(
    endpoint: string,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const url = `${this.baseApi}${endpoint}`;
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

  async patch<TRequestBody, T>(
    endpoint: string,
    body: TRequestBody,
    configs?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const url = `${this.baseApi}${endpoint}`;
      const res = await this.axiosClient.patch(url, body, configs);

      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<TRequestBody, T>(path: string, body: TRequestBody): Promise<T> {
    try {
      const url = `${this.baseApi}${path}`;
      const res = await this.axiosClient.post(url, body);

      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
