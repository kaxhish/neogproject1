import React from 'react'
import {Routes,Route} from "react-router-dom"
import {useState,useEffect} from "react"
import HomePage from "./components/home";
import NavBar from "./components/nav"
import ProductLandingPage from './components/productLanding';
import DisplayWishList from './components/wishlist';
import DisplayCart from './components/cart';
import DisplayLoginPage from './components/loginPage';
import RequiredAuth from './components/RequiredAuth';
import DisplaySingleProduct from './components/singleproductPage';
import ProfileManagement from './components/profile';
import ProductDetails from './components/productdetails';
import SignUpPagee from './components/signuppage';


function App() {
  let [isClick,setIsClick] = useState(false)
  useEffect(() => {
   
    setIsClick(false);
  }, []);

  return (
    <div>
      <header>
        <NavBar/>

      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductLandingPage isNavigateLogCl={isClick}/>}/>

        <Route path="/cart" element={<RequiredAuth isState={isClick}>
          <DisplayCart/>
        </RequiredAuth>}/>

        <Route path="/wishlist" element={<RequiredAuth isState={isClick}>
              <DisplayWishList/>
            </RequiredAuth>}/>
            <Route path="/login" element={<DisplayLoginPage setIsClick={setIsClick} isclick={isClick}/>}/>
            <Route path='/eachProduct' element={<DisplaySingleProduct/>}/>
            <Route path='/profile' element={<ProfileManagement/>}/>
            <Route path='productdetails' element={<ProductDetails  isNavigateLogCl={isClick}/>}/>
            <Route path="/signin" element={<SignUpPagee setIsClick={setIsClick} isclick={isClick}/>}/>
      </Routes>

      </header>
    </div>
  );
}

export default App;
