import React from 'react'
import LoginRequired from "../components/LoginRequired";


const Dashboard = () => {
  return (
    <>
      <LoginRequired>
        <h1>Dashboard</h1>
      </LoginRequired>
    </>
  )
}

export default Dashboard
