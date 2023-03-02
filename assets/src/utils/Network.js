import React from "react";
import axios from "axios";
import useToken from "../hooks/useToken";
import dayjs from "dayjs";


const useNetwork = () => {
  const baseURL = "http://localhost:8000/"
  const {getTokenPair, tokenPayload, saveToken, delToken} = useToken()


  // Main instance
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getTokenPair()?.access}`
    }
  })


  // Config
  axiosInstance.interceptors.request.use(async req => {
    await refreshTokenIfNeeded()
    req.headers.Authorization = `Bearer ${getTokenPair()?.access}`
    return req;

  }, (error) => {
    return Promise.reject(error);
  })

  const refreshTokenIfNeeded = async () => {
    const tokenExpired = tokenPayload()?.exp <= dayjs().unix()
    if (tokenExpired) {
      // using global axios instance to prevent infinite loop
      const resp = await axios.post(`${baseURL}auth/token/refresh/`,
        {refresh: getTokenPair()?.refresh}
      )
      delToken() // delete existing token
      saveToken(resp.data)  //save new token
    }
  }


  // Network calls
  const loginUser = async (credentials) => {
    const resp = await axiosInstance.post(
      "auth/token/",
      credentials,
      // {headers: {'X-Esvin': 'mazariegos'}}
    )
    return resp.data
  }

  // const userList = async () => {
  //   // using global axios to avoid infinite loop
  //   return (await axios.get(`${baseURL}users/`)).data
  // }

  const userList = async () => {
    const resp = await axiosInstance.get(
      "users/",
      // {headers:{"Authorization": `Bearer ${getTokenPair()?.access}`}},
    )
    return resp.data
  }

  const categories = async () => {
    const resp = await axiosInstance.get(
      "categories/",
      // {headers:{"Authorization": `Bearer ${getTokenPair()?.access}`}},
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

  return {
    loginUser,
    userList,
    categories,
    categoryAdd,
  }
}


export {
  useNetwork
}
