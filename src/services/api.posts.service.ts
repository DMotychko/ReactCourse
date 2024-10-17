import {IPost} from "../models/IPost";
import {axiosInstance} from "./axios.service";

export const getPosts = async (): Promise<IPost[]> => {
    const response =  await axiosInstance.get('posts')
    return response.data
}

export const getPostsByUserId = async (id: string):Promise<IPost[]> => {
    const response = await axiosInstance.get('posts?userId=' + id)
    return response.data
}