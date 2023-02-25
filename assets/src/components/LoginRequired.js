import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext";


const LoginRequired = ({ children }) => {
  const location = useLocation()
  const {getToken} = useAuth()
  const token = getToken()

  if (!token?.access) {
    return <Navigate to="/auth/login" replace={true} state={{ from: location }} />;
  }

  return children
}


export default LoginRequired
