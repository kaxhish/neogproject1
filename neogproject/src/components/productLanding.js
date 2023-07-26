import React from "react"
import {products} from "../backend/db/products"
import { useState,useEffect,useContext} from "react"
import { cartContext } from "../contexts/cartContext"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillHeart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import { useNavigate,Link } from "react-router-dom";


export default function ProductLandingPage({isNavigateLogCl}){
  
    const [isData,setIsData] = useState([])
    const [filteredData,setsflteredData] = useState(isData)
    const navigate=useNavigate()
    const {handleCarts,handleWishes,isWish,handleremoveWishes,isTitle,handleProductDetails} = useContext(cartContext)


    useEffect(() =>{
        setIsData(products)
        setsflteredData(products)

    },[])
   
    let handleFilters=(category) =>{
        setsflteredData(category==="all" ? isData :  isData.filter(({categoryName}) => categoryName===category))
    }
    let handleRatings=(inputRating) =>{
        setsflteredData(isData.filter(({rating}) => rating>=Number(inputRating)))
    }
    let handlePrices=(prices) =>{
        setsflteredData(prices==="low to high" ? isData.sort((a,b)=> a.price-b.price) : isData.sort((a,b) => b.price-a.price))
    }

    return(
       <div className="productPageStyle">

<div className="options">
        {/* category filters */}
        <div className="filters">
            <h2>Category</h2>
        <h3> <input type="checkbox" value="fiction" onChange={(e) => handleFilters(e.target.value)}/>fiction</h3>
           <h3> <input type="checkbox" value="non-fiction" onChange={(e) => handleFilters(e.target.value)}/>non-fiction</h3>
           <h3> <input type="checkbox" value="self-help" onChange={(e) => handleFilters(e.target.value)}/>self-help</h3>
           <h3> <input type="checkbox" value="all" onChange={(e) => handleFilters(e.target.value)}/>all</h3>
        </div>
    {/* rating filters */}
    <div className="ratings">
        <h2>Ratings</h2>
<h3><input type="radio" value="1" onChange={(e) => handleRatings(e.target.value)}/>1 stars and above</h3>
<h3><input type="radio" value="2" onChange={(e) => handleRatings(e.target.value)}/>2 stars and above</h3>
<h3><input type="radio" value="3" onChange={(e) => handleRatings(e.target.value)}/>3 stars and above</h3>
<h3><input type="radio" value="4" onChange={(e) => handleRatings(e.target.value)}/>4 stars and above</h3>
    </div>
        {/* prices */}
        <div className="prices">
            <h2>Sort by Price</h2>
<h3><input type="radio" value="low to high" onChange={(e) => handlePrices(e.target.value)}/>Low to High</h3>
<h3><input type="radio" value="high to Low" onChange={(e) => handlePrices(e.target.value)}/>High to Low</h3>
        </div>
        </div>
           <div className="allCards">
            {filteredData.map((item) =>{
                let {id,title,author,price,rating,image} = item
                
    const inWishlist = isWish.find(
        (litm) => litm._id === item._id
      );
      const isProductInCart = isTitle.find(
        (cartitem) => cartitem._id === item._id
      );

                return(
                    <div  key={id}>
                        <div className="innerAllCards">
                    
                        <div className="forWishList">
                      <p>
                        <Link to="/productdetails" onClick={() => handleProductDetails(item)}>
                        <img src={image} alt="df" className="cartImage"/>
                        </Link>
                       
                          </p> 

                      {inWishlist ? (
              <AiFillHeart
                className="add-to-wishlist-icon .icon-fill"
                onClick={() =>  handleremoveWishes(item)}
              />
            ) : (
              <AiOutlineHeart
                className="add-to-wishlist-icon"
                onClick={() => isNavigateLogCl ? handleWishes(item) : navigate("/login")
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
                    ? handleCarts(item)
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
                )
            })}
               </div>
            </div>
     
    )
}