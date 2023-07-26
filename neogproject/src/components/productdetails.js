import React from "react"
import { useContext } from "react"
import { cartContext } from "../contexts/cartContext"
import "./all.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import { Link,useNavigate } from "react-router-dom";

export default function ProductDetails({isNavigateLogCl}){
    let {isProductDet,handleremoveWishes,inWishlist,handleWishes,isProductInCart,handleCarts} = useContext(cartContext)
    let {id,title,author,price,rating,image}=isProductDet
    const navigate=useNavigate()
  
return(
    <div className="allCards">
   
            <div  key={id}>
                <div className="innerAllCards">
                <div className="forWishList">

              <p>
                <img src={image} alt="df" className="cartImage"/>
                  </p> 

              {inWishlist ? (
      <AiFillHeart
        className="add-to-wishlist-icon .icon-fill"
        onClick={() =>  handleremoveWishes(isProductDet)}
      />
    ) : (
      <AiOutlineHeart
        className="add-to-wishlist-icon"
        onClick={() => isNavigateLogCl ? handleWishes(isProductDet) : navigate("/login")
        }
      />
    )}
              </div>
              <p className="titleAndRating">
                <p className="cartTitle">{title}</p>
                <p className="cartRating">{rating}</p>
                </p>
                <p className="cartAuthor">{author}</p>
                <p className="cartPrice">${price}</p>

                {isProductInCart ? (
      <Link to="/cart" className="goToCart-btn">
        <button className="buttonCartGo">Go To Cart</button>
      </Link>
    ) : (
      <button
        className="buttonccart"
        onClick={() =>
          isNavigateLogCl
            ? handleCarts(isProductDet)
            : navigate("/login")
        }
      >
        Add To Cart
      </button>
    )}
               <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
              </div>
             
                </div>
       
       </div>
)
}