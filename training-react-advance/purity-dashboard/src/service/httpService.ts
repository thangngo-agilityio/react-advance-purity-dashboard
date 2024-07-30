import axios, { AxiosResponse } from 'axios';

// Types
import { QueryOptions } from '@/types';

export class HttpService {
  private readonly baseApi: string;

  constructor(baseUrl: string) {
    this.baseApi = baseUrl;
  }

  private axiosClient = axios.create({
    headers: {
      accept: 'application/json',
      Authorization:
        'patQFREcxs3kTvjRL.839079ebbcd462c630be99563ab8bb575f69e22ca4ff8f73b698cdbbea82603f',
    },
  });

  get<T>({
    path,
    configs,
    page,
    limit,
  }: Omit<QueryOptions, 'data'>): Promise<AxiosResponse<T>> {
    const endpointParts = [path, page, limit]
      .filter((part) => part !== undefined && part !== '')
      .join('/');
    const endpoint = `${endpointParts}`;

    return this.axiosClient.get<T>(`${this.baseApi}${endpoint}`, configs);
  }

  post<T>({ path, data, configs }: QueryOptions): Promise<AxiosResponse<T>> {
    return this.axiosClient.post<T>(`${this.baseApi}${path}`, data, configs);
  }

  put<T>({ path, data, configs }: QueryOptions): Promise<AxiosResponse<T>> {
    return this.axiosClient.put<T>(`${this.baseApi}${path}`, data, configs);
  }

  patch<T>({ path, data }: QueryOptions): Promise<AxiosResponse<T>> {
    return this.axiosClient.patch<T>(`${this.baseApi}${path}`, data);
  }

  delete<T>({ path, data }: QueryOptions): Promise<AxiosResponse<T>> {
    return this.axiosClient.delete<T>(`${this.baseApi}${path}`, data);
  }
}
