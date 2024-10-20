import {IQuote} from "./IQuote";

export interface IResponseFnGetQuotes{
    quotes: IQuote[],
    flag: boolean
}