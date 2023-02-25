import {Navigate, useLocation} from 'react-router-dom';
import useToken from "../hooks/useToken";


const LoginRequired = ({ children }) => {
  const location = useLocation()
  const {getToken} = useToken()
  const token = getToken()

  if (!token?.access) {
    return <Navigate to="/auth/login" replace={true} state={{ from: location }} />;
  }

  return children
}


export default LoginRequired
