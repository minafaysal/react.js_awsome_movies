import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRout({children}) {
  return (
    <>

       {sessionStorage.getItem('userToken')? children : <Navigate to='/login'/>}
    </>
  )
}
