import axios from "axios";

let a = document.location.toString().split(':')
const USER_API_BASE_URL = a[0].concat(":4000").concat("/api/users/")

export const getAllUsers = () => {
    return axios.get(USER_API_BASE_URL);
}

export const getUserById = (userId) => {
    return axios.get(USER_API_BASE_URL + userId);
}

export const getRecipeFromUserById = (userId) => {
    return axios.get(USER_API_BASE_URL + userId + "/receipes")
}

export const getExercicesFromUserById = (userId) => {
    return axios.get(USER_API_BASE_URL + userId + "/exercises")
}

export const updateUser = (user) => {
    return axios.put(USER_API_BASE_URL, user);
}

export const deleteUserById = (userId) => {
    return axios.delete(USER_API_BASE_URL + userId)
}



