import { api, getAuthHeaders, get, post, update, del } from "./services.common";
export const loginAPI = async (userlogin) => {
    let url = `${api}/users/login`
    let authHeader = getAuthHeaders()
    return await post(url, userlogin, { ...authHeader })
}
