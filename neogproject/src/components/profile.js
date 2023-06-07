import React from "react"
import { useState } from "react"

export default function ProfileManagement(){
let [isDisplay,setIsDisplay] = useState(false)
let [isSave,setIsSaveDisplay] = useState(true)
    let [isName,setIsName] = useState("kashish garg")
let [isHouseINfo,setIsHouseInfo] = useState("123,Ram Road,kulwant nagar")
let [isCity,setIsCity] = useState("kaithal")
let [isState,setIsState] = useState("haryana")
let [isCountry,setIsCountry] = useState("India")
let [isMobileNo,setIsMobileNo] = useState("123456")

    return(
        <div className="profilepage">
<div className="address" style={{display: isDisplay && isSave  ? "none" : "block"}}>Address</div>
            <div className="addresspg" style={{display: isDisplay && isSave  ? "none" : "block"}}>
<h1 className="addresshead">My Addresses</h1>
<div className="infodata">
    <div className="name">{isName}</div>
    <div className="houseinfo">{isHouseINfo}{isCity},{isState}</div>
    <div className="country">{isCountry}</div>
    <div className="phno">Phone NUmber:{isMobileNo}</div>
</div>

<div className="addNewAdd" onClick={() => setIsDisplay(!isDisplay)}>+ Add New Address</div>
            </div>

            <div className="newChangesAddress" style={{display:isDisplay && isSave ? "block" : "none" }}>
                <div className="newAdrsHead">Add new Adderess</div>
                <div className="newAdrsINputs">
                    <input type="text" placeholder="Enter name" onChange={(e) => setIsName(e.target.value)}/>
                    <input type="text" placeholder="Enter House no. ,Road,Colony" onChange={(e) => setIsHouseInfo(e.target.value)}/>
                    <input type="text" placeholder="Enter City" onChange={(e) => setIsCity(e.target.value)}/>
                    <input type="text" placeholder="Enter state" onChange={(e) => setIsState(e.target.value)}/>
                    <input type="text" placeholder="Enter Country" onChange={(e) => setIsCountry(e.target.value)}/>
                    <input type="text" placeholder="Enter Mobile No" onChange={(e) => setIsMobileNo(e.target.value)}/>
                </div>
                <div>
                    <button onClick={() => setIsSaveDisplay(!isSave)}>Save</button>
                </div>
            </div>
        </div>
    )
}