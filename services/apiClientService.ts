import axios from 'axios';
import { Match } from '@/types'

const API_BASE_URL = 'https://app.ftoyd.com/fronttemp-service';


interface FetchMatchesResponse {
  ok: boolean;
  data: {
    matches: Match[];
  };
}

export const fetchMatches = async (): Promise<Match[]> => {
  try {
    const response = await axios.get<FetchMatchesResponse>(`${API_BASE_URL}/fronttemp`);
    if (response.data.ok) {
      return response.data.data.matches;
    }
    throw new Error('Ошибка в API');
  } catch (error) {
    console.error('Ошибка при получении списка матчей:', error);
    throw error;
  }
};
