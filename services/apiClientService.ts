import axios from 'axios'

import { Match } from '@/types'


export const handleApiError = (error: unknown): string => {
  let errorMessage = 'Unexpected Error';

  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error('API Error:', error.response.data);
      errorMessage = error.response.data?.message ?? error.response.statusText;
    } else if (error.request) {
      console.error('No response Error:', error.request);
      errorMessage = 'No response from server';
    }
  } else if (error instanceof Error) {
    console.error('Unknown Error:', error.message);
    errorMessage = error.message;
  } else {
    console.error('Unexpected Error:', error);
    errorMessage = 'Unexpected Error';
  }

  return errorMessage;
};

export const instanceAxios = axios.create({
  baseURL: 'https://app.ftoyd.com/fronttemp-service',
});

instanceAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = handleApiError(error);
    return Promise.reject(new Error(errorMessage));
  }
);


interface FetchMatchesResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}

export const fetchMatches = async (): Promise<Match[]> => {
  try {
    const response = await instanceAxios.get<FetchMatchesResponse>('/fronttemp');
    if (response.data.ok) {
      return response.data.data.matches;
    }
    throw new Error('Ошибка в API');
  } catch (error) {
    throw new Error(handleApiError(error))
  }
};
