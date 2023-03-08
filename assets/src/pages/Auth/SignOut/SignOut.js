import React, { useEffect } from "react";


const SignOut = () => {

  useEffect(() => {
    localStorage.removeItem("token")
  }, [])

  return <></>
}

export default SignOut