import { SecureStoreTool } from "../../utils/SecureStoreTool";


import axios from "axios";

axios.interceptors.request.use(async request => {
    const token = await SecureStoreTool.getItem("token");
    const userId = await SecureStoreTool.getItem("user_id");
    if (request.headers.requiresAuth) {
        request.headers.Authorization = 'Bearer ' + token;
    }
    if (request.url?.includes(':userId') && userId) {
        request.url = request.url.replace(':userId', userId.toString())
    }
    return request;
    }
)