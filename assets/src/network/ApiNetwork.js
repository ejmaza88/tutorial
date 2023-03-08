import axios from "axios";
import {
  localStorageGetTokenPair,
  refreshTokenIfNeeded,
} from "../token/token";


const baseURL = "http://localhost:8000/"


// Main instance
const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorageGetTokenPair()?.access}`
  }
})


// Config
axiosInstance.interceptors.request.use(async req => {
  await refreshTokenIfNeeded(baseURL)
  req.headers.Authorization = `Bearer ${localStorageGetTokenPair()?.access}`
  return req

}, (error) => {
  return Promise.reject(error);
})


// Network calls
const userLogin = async (credentials) => {
  try {
    const resp = await axiosInstance.post(
      "auth/token/",
      credentials,
    )
    return resp.data

  } catch (e) {
    return {err: true, ...e.response.data}
  }
}

const userList = async () => {
  const resp = await axiosInstance.get(
    "users/",
  )
  return resp.data
}

const categories = async () => {
  const resp = await axiosInstance.get(
    "categories/",
  )
  return resp.data
}

const categoryAdd = async (newCategoryData) => {
  const resp = await axiosInstance.post(
    "category/",
    newCategoryData,
  )
  return resp.data
}

const diaperChoices = async () => {
    const resp = await axiosInstance.get(
    "diaper/choices/",
  )
  return resp.data
}


export default {
  userLogin,
  userList,
  categories,
  categoryAdd,
  diaperChoices,
}
