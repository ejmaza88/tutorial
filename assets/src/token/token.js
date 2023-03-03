import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";


const TOKEN = "token"
const REFRESH_TOKEN_ENDPOINT = "auth/token/refresh/"


const localStorageGetTokenPair = () => {
  // return token pair (access and refresh)
  const tokenString = localStorage.getItem(TOKEN)
  return JSON.parse(tokenString)
}

const localStorageSaveTokenPair = (tokenPair) => {
  localStorage.setItem('token', JSON.stringify(tokenPair))
}

const localStorageRemoveTokenPair = () => {
  localStorage.removeItem(TOKEN)
}

const localStorageTokenPayload = () => {
  const token = localStorageGetTokenPair()
  const access = token?.access
  if (access) {
    return jwt_decode(access)
  }
  return
}

const refreshTokenIfNeeded = async (baseURL) => {
  const tokenExpired = localStorageTokenPayload()?.exp <= dayjs().unix()
  if (tokenExpired) {
    // using global axios instance to prevent infinite loop
    const resp = await axios.post(`${baseURL}${REFRESH_TOKEN_ENDPOINT}`,
      {refresh: localStorageGetTokenPair()?.refresh}
    )
    localStorageSaveTokenPair() // delete existing token
    localStorageSaveTokenPair(resp.data)  //save new token
  }
}


export {
  localStorageGetTokenPair,
  localStorageSaveTokenPair,
  localStorageRemoveTokenPair,
  localStorageTokenPayload,
  refreshTokenIfNeeded,
}
