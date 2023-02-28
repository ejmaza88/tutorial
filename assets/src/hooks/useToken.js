import jwt_decode from "jwt-decode";

const useToken = () => {

  const getTokenPair = () => {
    // return token pair (access, refresh)
    const tokenString = localStorage.getItem('token');
    return JSON.parse(tokenString);
  }

  const saveToken = tokenPair => {
    localStorage.setItem('token', JSON.stringify(tokenPair));
  };

  const delToken = () => {
    localStorage.removeItem("token")
  }

  const tokenPayload = () => {
    const token = getTokenPair()
    const access = token?.access
    if(access) {
      return jwt_decode(access)
    }
    return
  }

  return {
    getTokenPair: getTokenPair,
    saveToken: saveToken,
    delToken: delToken,
    tokenPayload: tokenPayload
  }

}


export default useToken
