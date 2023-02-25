import {Navigate} from 'react-router-dom';
import useToken from "../hooks/useToken";


const LoginRequired = ({ children }) => {
  const {getToken} = useToken()
  const token = getToken()

  if (!token?.access) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children
}


export default LoginRequired
