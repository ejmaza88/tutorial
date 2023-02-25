const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
  };

  const delToken = () => {
    localStorage.removeItem("token")
  }

  return {
    getToken: getToken,
    saveToken: saveToken,
    delToken: delToken,
  }

}


export default useToken
