import axios from "axios"
import {getAuthConfig, BaseUrl} from './api'
import {
    decodeToken
} from "react-jwt";

export async function createEvent (notify, token) {
    const response = axios.post(`${BaseUrl}/notify`, notify, getAuthConfig(token))
    return response
}

export async function getAllEventsFromDB () {
    const response = axios.get(`${BaseUrl}/notify`)
    return response
}

export async function getAllEventsOfUser (token) {
    const myDecodedToken = decodeToken(token);
    const response = axios.get(`${BaseUrl}/notify/${myDecodedToken.uid}`, getAuthConfig(token))
    return response
}