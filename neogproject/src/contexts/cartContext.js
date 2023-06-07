import React from "react";
import { createContext,useState } from "react";

export let cartContext = createContext()

export default function CartContextProvider({children}){
    let [isTitle,setIsTitle] = useState([])
    let [isWish,setIsWish] = useState([])
    let handleCarts=(item) =>{
setIsTitle([...isTitle,item])
    }
    let handleWishes=(item) =>{
        setIsWish([...isWish,item])
            }
    return(
        <div>
            <cartContext.Provider value={{handleCarts,isTitle,handleWishes,isWish}}>
                {children}
            </cartContext.Provider>
        </div>
    )
}