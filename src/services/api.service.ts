import axios from "axios";
import {IUser} from "../models/IUser";
import {IPosts} from "../models/IPosts";
import {IComments} from "../models/IComments";


const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getData = {
    getAllUsers: async ():Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>('/users')
        return response.data
    },
    getAllPosts: async ():Promise<IPosts[]> => {
        const response = await axiosInstance.get<IPosts[]>('/posts')
        return response.data
    },
    getAllComments: async ():Promise<IComments[]> => {
        const response = await axiosInstance.get<IComments[]>('/comments')
        return response.data
    }
}