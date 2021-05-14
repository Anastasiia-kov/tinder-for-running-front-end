import axios from "axios"
import {getAuthConfig, BaseUrl} from './api'
import {
    decodeToken
} from "react-jwt";

export async function creatChat (token, accepterId) {
    const myDecodedToken = decodeToken(token);
    const response = await axios.post(`${BaseUrl}/chat/createChat/${myDecodedToken.uid}/${accepterId}`, getAuthConfig(token))
    return response
}