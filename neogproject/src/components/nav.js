import React from 'react'
import "./all.css"


import {NavLink} from "react-router-dom"


export default function NavBar(){
 
    return(
        <div className="navbar">
            <h1 className="appNameNav">ReadEra</h1>
            <input type="text" placeholder="search for books" className="serachBar"  />
            <div className="navCartWishStyle">
                <NavLink to="/"><img alt="home" src="https://www.freepnglogos.com/uploads/logo-home-png/home-transparent-home-images-10.png"  width="20px" className='navCart'/></NavLink>
       <NavLink to="/cart"><img alt="cart" src="https://cdn.onlinewebfonts.com/svg/img_225646.png"  className='navCart' width="20px"/></NavLink>
       <NavLink to="/wishlist"><img alt="wishlist" src="https://cdn.onlinewebfonts.com/svg/img_327030.png"  className='navCart' width="20px"/></NavLink>
       <NavLink to="/profile"><img alt="profile" src="https://cdn.onlinewebfonts.com/svg/img_364496.png"  className='navCart' width="20px"/></NavLink>
       </div>
        </div>
            
    )
}