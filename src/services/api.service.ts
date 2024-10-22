import axios from "axios";
import {IForm} from "../models/IForm";


const axiosResponse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const sendPostToPlaceholder = async (post: IForm) => {
    try {
        const response = await axiosResponse.post('/posts', post);
        console.log('Response:', response.status);
    } catch (error) {
        console.error('Error sending post:', error);
    }
}