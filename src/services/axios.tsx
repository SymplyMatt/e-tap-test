import axios, { AxiosResponse, AxiosError } from 'axios';

type RequestType = 'GET' | 'POST' | 'PUT' | 'DELETE';

const BASE_URL = 'http://localhost:1234';

export default async function makeRequest(
  type: RequestType,
  endpoint: string,
  token?: string | null,
  body?: any
) {
  try {
    const config = {
      method: type,
      url: BASE_URL + endpoint,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      data: body,
      // Ensure cookies are included
      withCredentials: true,
    };

    const response: AxiosResponse = await axios(config);
    return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
}
