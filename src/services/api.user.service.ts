import {IUser} from "../models/IUser";
import {axiosInstance} from "./axios.service";

export const getUsers = async (): Promise<IUser[]> => {
    const response =  await axiosInstance.get('users')
    return response.data
}
