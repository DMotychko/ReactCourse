import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constans/urls";
import {IUserContactModel} from "../models/IUserContactModel";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-type": "application-json"}
})

const usersApiService = {
    getAllUsers: ():Promise<AxiosResponse<IUserContactModel[]>> => {
        return axiosInstance.get<IUserContactModel[]>(urls.users.allUsers)
    }
}

export {
    usersApiService
}