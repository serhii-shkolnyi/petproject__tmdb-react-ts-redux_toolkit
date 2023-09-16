import axios from "axios";

import {accessToken, baseURL} from "../configs";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
})

export {
    apiService
};
