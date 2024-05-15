import axios, { AxiosResponse, AxiosError } from 'axios';

type RequestType = 'GET' | 'POST' | 'PUT' | 'DELETE';

const BASE_URL = 'http://94.229.79.27:4136/api/v1/organization';
interface ResponseData {
  type : 'success' | 'error',
  data: any
}

export default async function makeRequest(
  type: RequestType,
  endpoint: string,
  token?: string | null,
  body?: any
): Promise<ResponseData> {
  try {
    const config = {
      method: type,
      url: BASE_URL + endpoint,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      data: body,
    };

    const response: AxiosResponse = await axios(config);
    const successResponse: ResponseData = {type : 'success', data : response.data} as ResponseData;
    console.log('success: ', successResponse);
    return successResponse;
  } catch (error) {
    
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        console.error('Error:', axiosError.response.status);
        console.error('Data:', axiosError.response.data);
      } else if (axiosError.request) {
        console.error('Error:', axiosError.request);
      } else {
        console.error('Error:', axiosError.message);
      }
    } else {
      console.error('Error:', error);
    }
    const errorResponse: ResponseData = {type : 'error', data : error} as ResponseData;
    return errorResponse
  }
}
