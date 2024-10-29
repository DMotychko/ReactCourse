import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken";
import {ILoginData} from "../models/ILoginData";
import {retriveLocalStorage} from "../helpers/retriveLocalStorage";
import {ITokenPair} from "../models/ITokenPair";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth'
})

export const login = async ({username, password, expiresInMins}: ILoginData) => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userWithTokens))
}

export const getProductsByToken = async () => {
    let token = retriveLocalStorage<IUserWithToken>('user').accessToken
    const response = await axiosInstance.get('/products', {headers: {Authorization: token}})
    return response.data
}
export const refreshToken = async () => {
    let userWithToken = retriveLocalStorage<IUserWithToken>('user')
    const {data} = await axiosInstance.post<ITokenPair>('refresh', {refreshToken: userWithToken.refreshToken, expiresInMins: 1})
    userWithToken.accessToken = data.accessToken;
    userWithToken.refreshToken = data.refreshToken;
    localStorage.setItem('user', JSON.stringify(userWithToken))
}