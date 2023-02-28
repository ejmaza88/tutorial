import React, {createContext, useContext} from 'react';
import useToken from "../hooks/useToken";
import { useNavigate, useLocation } from "react-router-dom";
import {useNetwork} from "../utils/Network";


const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const {loginUser} = useNetwork()
  const location = useLocation()
  const navigate = useNavigate()

  const {getTokenPair, saveToken, delToken, tokenPayload} = useToken()

  const handleLogin = async (event) => {
    event.preventDefault()

    const credentials = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    const token = await loginUser(credentials)
    saveToken(token)

    const origin = location.state?.from?.pathname || '/dashboard'
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
