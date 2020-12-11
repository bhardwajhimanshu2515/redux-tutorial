import axios from 'axios';
import { constants } from "../../config";

export const api = constants.endpoint
export const error = (error) => { return { status: "error", isSuccessful: false, message: error }}
export const success = (data) => { return { status: "success", isSuccessful: true, data: data }}

export const getAuthHeaders = () => { return { 'Authorization': 'Bearer ' + localStorage.getItem('token') }}

export const get = async (url, headers) => {
    try {
        let response = await axios.get(url, { headers })
        return success(response.data)
    }
    catch (e) {
        console.log(e)
        return error(e)
    }
}
export const post = async (url, data, headers) => {
    try {
        let response = await axios.post(url, data, { headers })
        return success(response.data)
    }
    catch (e) {
        console.log(e)
        return error(e)
    }
}

export const download = async (url, data, headers) => {
    try {
        let response = await axios.post(url, data, { headers, responseType: 'blob'})
        return success(response.data)
    }
    catch (e) {
        console.log(e)
        return error(e)
    }
}

export const update = async (url, data, headers) => {
    try {
        let response = await axios.put(url, data, { headers })
        return success(response.data)
    }
    catch (e) {
        console.log(e)
        return error(e)
    }
}

export const del = async (url, headers) => {
    try {
        let response = await axios.delete(url, { headers })
        return success(response.data)
    }
    catch (e) {
        console.log(e)
        return error(e)
    }
}
