import React from 'react'
import LoginRequired from "../components/LoginRequired";
import useDocumentTitle from "../hooks/useDocumentTitle";


const Dashboard = () => {
  useDocumentTitle("Dashboard")

  return (
    <>
      <LoginRequired>
        <h1>Dashboard</h1>
      </LoginRequired>
    </>
  )
}

export default Dashboard
