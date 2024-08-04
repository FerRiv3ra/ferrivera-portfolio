import axios, { AxiosInstance, HeadersDefaults } from 'axios';

export interface CustomHeaders extends HeadersDefaults {
  Authorization?: string | null;
}

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const axiosClient: AxiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
