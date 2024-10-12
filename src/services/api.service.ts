import axios from "axios";
import IPost from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
})

export const getUsers = async () => {
    let response = await axiosInstance.get('/users')
    return response.data
}

export const getUserPosts = async (id: number) => {
    let response = await axiosInstance.get('/posts/user/' + id)
    return response.data.posts
}