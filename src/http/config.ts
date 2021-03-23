import axios from "axios";
import * as dotenv from "dotenv";
import createAuthRefreshInterceptor, {
    AxiosAuthRefreshOptions,
} from "axios-auth-refresh";
import { RefreshBody } from "./models/Auth";

// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config();

if (process.env.REACT_APP_API_SERVER_URL === undefined) {
    throw new Error("API_SERVER_URL is missing.");
}

if (process.env.REACT_APP_AUTH_SERVER_URL === undefined) {
    throw new Error("AUTH_SERVER_URL is missing.");
}

export const iContributeApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER_URL,
});

export const iContributeAuthInstance = axios.create({
    baseURL: process.env.REACT_APP_AUTH_SERVER_URL,
});

export const configApiRequestToken = (getAccessToken: () => string) => {
    iContributeApiInstance.interceptors.request.use((request) => {
        request.headers["Authorization"] = `Bearer ${getAccessToken()}`;
        return request;
    });
};

export const configAuthToken = (
    getRefreshBody: () => RefreshBody,
    setAccessToken: (token: string) => void,
    options?: AxiosAuthRefreshOptions | undefined
) => {
    const refreshAuthLogic = async (failedRequest: any) =>
        iContributeAuthInstance.post("/token", getRefreshBody()).then((res) => {
            const { accessToken } = res.data;
            console.log(accessToken);

            setAccessToken(accessToken);
            failedRequest.response.config.headers.Authorization = `Bearer ${accessToken}`;
            return Promise.resolve();
        });

    createAuthRefreshInterceptor(
        iContributeApiInstance,
        refreshAuthLogic,
        options
    );
};
