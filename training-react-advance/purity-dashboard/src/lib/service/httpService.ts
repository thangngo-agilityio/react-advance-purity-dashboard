import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_KEY } from '../constants';

export class HttpService {
  private readonly baseApi: string;

  constructor(baseUrl: string) {
    this.baseApi = baseUrl;
  }

  private axiosClient = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: API_KEY,
    },
  });

  async get<T>(
    endpoint: string,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const url = `${this.baseApi}${endpoint}`;
      const res = await this.axiosClient.get(url, {
        ...configs,
      });

      return res;
    } catch (error) {
      throw error;
    }
  }

  async post<TRequestBody, T>(
    path: string,
    body: TRequestBody,
    configs?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const url = `${this.baseApi}${path}`;
      console.log(JSON.stringify(body));
      const res = await this.axiosClient.post(
        url,
        JSON.stringify(body),
        configs,
      );

      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async put<TRequestBody, T>(
    path: string,
    body: TRequestBody,
    configs?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const url = `${this.baseApi}${path}`;
      const res = await this.axiosClient.post(url, body, configs);

      return res.data;
    } catch (error) {
      throw error;
    }
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
