import React, {createContext, useContext} from 'react';
import useToken from "../hooks/useToken";
import ApiNetwork from "../network/ApiNetwork";
import { useNavigate, useLocation } from "react-router-dom";
import * as Constants from "../constants/Constants"


const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const location = useLocation()
  const navigate = useNavigate()

  const {getTokenPair, saveToken, delToken, tokenPayload} = useToken()

  const handleLogin = async (event, setError) => {
    event.preventDefault()

    const credentials = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    const token = await ApiNetwork.userLogin(credentials)
    if (token.err) {
      setError(token.detail)
      return
    }
    saveToken(token)

    const origin = location.state?.from?.pathname || `/${Constants.Diaper.path}`
    navigate(origin)
  }

  const handleLogout = () => {
    delToken()
    navigate("/auth/login")
  }


  const value = {
    getTokenPair: getTokenPair,
    tokenPayload: tokenPayload,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}


const useAuth = () => useContext(AuthContext)


export {
  AuthProvider,
  useAuth,
}
