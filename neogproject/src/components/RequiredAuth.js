import React from "react"
import { useEffect } from "react";
import { Navigate, useLocation,useNavigate} from "react-router-dom"

export default function RequiredAuth({children,isState}){
    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (isState) {
        // Navigate to the current location to refresh the route and render the children
        navigate(location.pathname);
      }
    }, [isState, location, navigate]);
  
return isState ? children : <Navigate to="/login" state={{ from: location }}/>
   
}