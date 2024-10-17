import {IComment} from "../models/IComment";
import {axiosInstance} from "./axios.service";

export const getComments = async (): Promise<IComment[]> => {
    const response =  await axiosInstance.get('comments')
    return response.data
}

export const getCommentsByPostsId = async (id: string): Promise<IComment[]> => {
    const response = await axiosInstance.get('comments?postId=' + id)
    return response.data
}