import axios from "axios";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
import {IComment} from "../models/IComment";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getUsers = async (): Promise<IUser[]> => {
    const response = await axiosInstance.get<IUser[]>('/users')
    return response.data
}

export const getPosts = async ():Promise<IPost[]> => {
    const response = await axiosInstance.get<IPost[]>('/posts')
    return response.data
}

export const getComments = async ():Promise<IComment[]> => {
    const response = await axiosInstance.get<IComment[]>('/comments')
    return response.data
}

