import React from "react"
import "./all.css"
import { useContext } from "react"
import { cartContext } from "../contexts/cartContext"


export default function DisplayWishList(){
    
    const {isWish} = useContext(cartContext)
    
    
    return(
        <div>
          
            {isWish.map(({id,title,author,price,rating,image}) =>{
                return(
                    <div  key={id}>
                        <div className="innerAllCards">
                      <p> <img src={image} alt="df" className="cartImage"/> </p> 
                      <p className="titleAndRating">
                        <p className="cartTitle">{title}</p>
                        <p className="cartRating">{rating}</p>
                        </p>
                        <p className="cartAuthor">{author}</p>
                        <p className="cartPrice">${price}</p>

                     
                      </div>
                        </div>
                )
            })}
        </div>
    )
}