import {
  localStorageGetTokenPair,
  localStorageSaveTokenPair,
  localStorageRemoveTokenPair,
  localStorageTokenPayload,
} from "../token/token";


const useToken = () => {

  const getTokenPair = () => {
    return localStorageGetTokenPair()
  }

  const saveToken = tokenPair => {
    localStorageSaveTokenPair(tokenPair)
  };

  const delToken = () => {
    localStorageRemoveTokenPair()
  }

  const tokenPayload = () => {
    return localStorageTokenPayload()
  }

  return {
    getTokenPair: getTokenPair,
    saveToken: saveToken,
    delToken: delToken,
    tokenPayload: tokenPayload
  }

}


export default useToken
