import React from "react"

import { Navigate } from "react-router-dom"
export default function RequiredAuth({children,isState}){
   
return isState ? children : <Navigate to="/login"/>
   
}