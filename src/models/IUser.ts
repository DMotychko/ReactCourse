import IUserAddress from "./IUserAddress";

export default interface IUser {
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": number,
    "gender": string,
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "birthDate": string,
    "image": string,
    "bloodGroup": string,
    "height": number,
    "weight": number,
    "eyeColor": string,
    "hair": {
        "color": string,
        "type": string
    },
    "ip": string,
    "address": IUserAddress,
    "macAddress": string,
    "university": string,
    "bank": {
        "cardExpire": string,
        "cardNumber": string,
        "cardType": string,
        "currency": string,
        "iban": string
    },
    "company": {
        "department": string,
        "name": string,
        "title": string,
        "address": IUserAddress
    },
    "ein": string,
    "ssn": string,
    "userAgent": string,
    "crypto": {
        "coin": string,
        "wallet": string,
        "network": string
    },
    "role": string
}