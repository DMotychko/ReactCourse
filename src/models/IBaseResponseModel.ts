import {IProducts} from "./IProducts";

export interface IBaseResponseModel {
    total: number,
    skip: number,
    limit: number,
    products?: IProducts[],
    cars?: any,
    users?: any,
}