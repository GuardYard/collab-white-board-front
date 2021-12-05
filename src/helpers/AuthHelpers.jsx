import axios from "axios";
let a = document.location.toString().split(':')
const AUTH_API_BASE_URL = a[0].concat(":4000").concat("/api/")

export const register = (username, password, color) => {
    return axios.post(AUTH_API_BASE_URL + "register", { username: username, password: password, color: color });
}

export const authenticate =  (userUsername, userPassword) => {
    return axios.post(AUTH_API_BASE_URL + "login", { username: userUsername, password: userPassword });
}
