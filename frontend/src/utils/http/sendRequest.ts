import axios, { AxiosRequestConfig } from "axios";
import { ApiParams, FailedResult, SuccessResult } from "../../const/http";
import { refreshUrl } from "../../const/http/API_URLS";

export async function sendRequest<Result, Error>(
    options: ApiParams & AxiosRequestConfig = {},
): Promise<SuccessResult<Result> | FailedResult<Error>> {

    const axiosInstance = axios.create({ ...options });


    try {
        const response = await axiosInstance.request({ ...options });
        return response.data.success;
    } catch (err: any) {
        const originalRequest = err.config;
        if (err.response.status === 401 && err.config && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            try {
                await axios.request({ ...refreshUrl });
                const response = await axiosInstance.request(originalRequest);
                return response.data.success;
            } catch (e: any) {
                throw e?.response?.data?.errors;
            }

        }
        throw err?.response?.data?.errors;
    }
}
