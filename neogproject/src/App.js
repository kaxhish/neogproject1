import React from 'react'
import {Routes,Route} from "react-router-dom"
import {useState} from "react"
import HomePage from "./components/home";
import NavBar from "./components/nav"
import ProductLandingPage from './components/productLanding';
import DisplayWishList from './components/wishlist';
import DisplayCart from './components/cart';
import DisplayLoginPage from './components/loginPage';
import RequiredAuth from './components/RequiredAuth';
import DisplaySingleProduct from './components/singleproductPage';
import ProfileManagement from './components/profile';


function App() {
  let [isClick,setIsClick] = useState(false)

  return (
    <div>
      <header>
        <NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductLandingPage/>}/>
        <Route path="/cart" element={<RequiredAuth isState={isClick}>
          <DisplayCart/>
        </RequiredAuth>}/>
        <Route path="/wishlist" element={<RequiredAuth isState={isClick}>
              <DisplayWishList/>
            </RequiredAuth>}/>
            <Route path="/login" element={<DisplayLoginPage setIsClick={setIsClick} isclick={isClick}/>}/>
            <Route path='/eachProduct' element={<DisplaySingleProduct/>}/>
            <Route path='/profile' element={<ProfileManagement/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
