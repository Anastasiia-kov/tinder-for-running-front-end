import axios from "axios"
import {getAuthConfig, BaseUrl} from './api'

export async function createEvent (notify) {
    const response = axios.post(`${BaseUrl}/notify`, notify)
    return response
}