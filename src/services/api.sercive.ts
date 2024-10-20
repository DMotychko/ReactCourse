import axios from "axios";
import {IQuotesResponse} from "../models/IQuotesResponse";
import {IResponseFnGetQuotes} from "../models/IResponseFnGetQuotes";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

export const getAllQuotes = async (page: number): Promise<IResponseFnGetQuotes> => {
    const skip: number = (page - 1) * 150;
    const response = await axiosInstance.get<IQuotesResponse>('/quotes', {
        params: {
            limit: 150,
            skip: skip
        }
    })
    const newResponseObj = {
        quotes: response.data.quotes,
        flag: false
    }
    if (response.data.total === response.data.quotes[response.data.quotes.length - 1].id) {
        newResponseObj.flag = true
    } else {
        newResponseObj.flag = false
    }

    return newResponseObj
}