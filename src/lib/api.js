import axios from "axios"
import {
    decodeToken
} from "react-jwt";

const BaseUrl = "http://0.0.0.0:5500"

function getAuthConfig(token) {
    return {
        headers: { 
            authorization: 'Bearer ' + token,
        }
    }
}