import React, { useState } from "react"


export default function DisplayLoginPage({setIsClick,isclick}){
let [emailVal,setEmail] = useState("")
let [password,setPassWord] = useState("")
    let handleLoginEvnt=() =>{
   return  emailVal&&password ?  setIsClick(true) && alert("you are logged in") : alert("please fill required values")
    
    };
return(
    <div className="signupPage">
        <div>
        <h1 className="signInHead">Sign In</h1>
        </div>

        <div className="emailbox">
        <p className="emailHead">Email Address</p>
        <input type="text" placeholder="example@gmail.com" className="emailInput" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="passwordbox">
            <p className="passwordHead">Password</p>
            <input type="text" placeholder="example1234" className="passwordInput" onChange={(e) => setPassWord(e.target.value)}/>
        </div>

        <div className="btnBox">
            <button className="loginBtn" onClick={() => handleLoginEvnt()}>
                Login 
            </button>
        </div>
    </div>
)
}