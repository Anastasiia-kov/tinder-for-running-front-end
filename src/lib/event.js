import axios from "axios"
import {getAuthConfig, BaseUrl} from './api'

export async function createEvent (userId, notify) {
    const response = axios.post(`${BaseUrl}/notify/${userId}`, notify)
    return response
}