import React from "react";
import { createContext,useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export let cartContext = createContext()

export default function CartContextProvider({children}){
    let [isTitle,setIsTitle] = useState([])
    let [isWish,setIsWish] = useState([])
let [isProductDet,setProductDetails] = useState({})
let [isSignDisplay,setIsDisplay] = useState(false)
let [isSignClose,setIsSignClose] = useState(false)

    let handleremoveWishes=(item) =>{
        toast.success("item removed from wishlist")
    }

    let handleCarts=(item) =>{
        
setIsTitle([...isTitle,item])
toast.success("item added to cart")
    }
    let handleWishes=(item) =>{
   
        setIsWish([...isWish,item])
        toast.success("added to wishlist")
            }

    let handleProductDetails=(item) =>{
        setProductDetails(item)
    }
            let handleSIgnDisplay=() =>{
                setIsDisplay(!isSignDisplay)
            }
           
                    let handleSignClose=() =>{
                        setIsSignClose(!isSignClose)
                    }
        
let handleSearchBar=(searchTitle) =>{

}

    return(
        <div>
            <cartContext.Provider value={{isSignDisplay,handleSIgnDisplay,isSignClose, handleSignClose,handleCarts,isTitle,handleWishes,isProductDet,isWish,handleremoveWishes,handleProductDetails}}>
                {children}
            </cartContext.Provider>
        </div>
    )
}