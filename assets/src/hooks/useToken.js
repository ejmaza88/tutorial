import jwt_decode from "jwt-decode";

const useToken = () => {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const tokenPair = JSON.parse(tokenString);
    return tokenPair
  }

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
  };

  const delToken = () => {
    localStorage.removeItem("token")
  }

  const tokenPayload = () => {
    const token = getToken().access
    return jwt_decode(token)
  }

  return {
    getToken: getToken,
    saveToken: saveToken,
    delToken: delToken,
    tokenPayload: tokenPayload
  }

}


export default useToken
