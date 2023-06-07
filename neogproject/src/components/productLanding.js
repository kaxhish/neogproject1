import React from "react"
import {products} from "../backend/db/products"
import { useState,useEffect,useContext} from "react"
import { cartContext } from "../contexts/cartContext"



export default function ProductLandingPage(){
    const [isData,setIsData] = useState([])
    const [filteredData,setsflteredData] = useState(isData)
    const {handleCarts,handleWishes} = useContext(cartContext)
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
                return(
                    <div  key={id}>
                        <div className="innerAllCards">
                    
                        <div className="forWishList">
                      <p> <img src={image} alt="df" className="cartImage"/> </p> 
                      <img alt="wishimg" src="https://cdn.onlinewebfonts.com/svg/img_327030.png" style={{margin:"7px", }} width="20px" height="20px" onClick={() => handleWishes(item)} />
                      </div>
                      <p className="titleAndRating">
                        <p className="cartTitle">{title}</p>
                        <p className="cartRating">{rating}</p>
                        </p>
                        <p className="cartAuthor">{author}</p>
                        <p className="cartPrice">${price}</p>

                       <p> <button className="cartButtton" onClick={() => handleCarts(item)}>Add to cart</button></p>
                      
                      </div>
                     
                        </div>
                )
            })}
               </div>
            </div>
     
    )
}