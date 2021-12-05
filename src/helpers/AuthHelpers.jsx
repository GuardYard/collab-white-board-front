import axios from "axios";
let a = document.location.hostname
const AUTH_API_BASE_URL = a.concat(":4000").concat("/api/")

export const register = (username, password, color) => {
    return axios.post(AUTH_API_BASE_URL + "register", { username: username, password: password, color: color });
}

export const authenticate =  (userUsername, userPassword) => {
    return axios.post(AUTH_API_BASE_URL + "login", { username: userUsername, password: userPassword });
}
