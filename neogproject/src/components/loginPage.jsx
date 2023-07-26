import React, { useState } from "react"
import {NavLink} from "react-router-dom"
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DisplayLoginPage({setIsClick,isclick}){
let [emailVal,setEmail] = useState("")
let [password,setPassWord] = useState("")

    let handleLoginEvnt=() =>{
        if (emailVal.trim() === '' || password.trim() === '') {
            alert('Please fill in all the inputs');
          } else {
              setIsClick(true)&&  toast.success("you are logged in succesfully")
        }
    
    };
  
return(
    <div className="signupPage">
        <div>
        <h1 className="signInHead">Login In</h1>
        </div>

        <div className="emailbox">
        <p className="emailHead">Email Address</p>
        <input type="email" value={emailVal} placeholder="example@gmail.com" className="emailInput" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="passwordbox">
            <p className="passwordHead">Password</p>
            <input type="password" value={password} placeholder="example1234" className="passwordInput" onChange={(e) => setPassWord(e.target.value)}/>
        </div>

        <div className="btnBox">
            <button className="loginBtn" onClick={() => handleLoginEvnt()}>
                Login here
            </button>
           <br/>
            <NavLink to="/signin">create a new account</NavLink>
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
}