import axios from "axios";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getComments = async (): Promise<IComment[]> => {
    const response =  await axiosInstance.get('comments')
    return response.data
}
