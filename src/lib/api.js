import axios from "axios"
import {
    decodeToken
} from "react-jwt";

export const BaseUrl = "http://127.0.0.1:8080"

export function getAuthConfig(token) {
    return {
        headers: { 
            authorization: 'Bearer ' + token,
        }
    }
}

export async function signup(first_name, last_name, email, password, confirmPassword, telephone, speed, distance, location) { 
    const response = await axios.post(`${BaseUrl}/signUp`, {
        user: {
            first_name,
            last_name,
            email,
            password,
            confirmPassword,
            telephone,
            sports: [{
                running: {
                    speed,
                    distance,
                    location
                }
            }]
        }
    })
    return response.data
}

export async function login(email, password) {
    const response = await axios.post(`${BaseUrl}/logIn`, {
        user: {
            email,
            password
        }
    })
    return response.data;

}

