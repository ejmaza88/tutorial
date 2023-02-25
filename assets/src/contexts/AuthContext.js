import React, {createContext, useContext} from 'react';
import useToken from "../hooks/useToken";
import { useNavigate, useLocation } from "react-router-dom";


const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

  const location = useLocation()
  const navigate = useNavigate()

  const {getToken, saveToken, delToken, tokenPayload} = useToken()

  const loginRequest = async (credentials) => {
    return fetch('http://localhost:8000/auth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    const credentials = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    const token = await loginRequest(credentials)
    saveToken(token)

    const origin = location.state?.from?.pathname || '/dashboard'
    navigate(origin)
  }

  const handleLogout = () => {
    delToken()
    navigate("/auth/login")
  }


  const value = {
    getToken: getToken,
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
