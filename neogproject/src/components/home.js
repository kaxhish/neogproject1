import React from 'react'
import "./all.css"
import { NavLink } from 'react-router-dom'

export default function HomePage(){
    return(
        <div>
            <div className="imageSection">
                <div className="imageText">
                <h1>Read Best Books:</h1>
                <h3>. Low cost</h3>
                <h3>. Cart feature</h3>
                <h3>. Books with HardCover</h3>
                <h3>. Quick Order</h3>
                <h3 className='projectRouteHead'><NavLink to="/products" className='projectsRouteBtn'>Show Products</NavLink></h3>
                </div>
                <div>
                <img className="headImage" alt="imageOne" src="https://img.graphicsurf.com/2019/12/online-shopping-vector-illustration3.jpg"/>
                </div>
            </div>

            <div className="categoryHeadings">
<h1>ReadEra Books Catogries</h1>
<h2>There are lots of Catogries of books available at ReadEra</h2>
<div className="catogries">
    <div>non-fiction</div>
    <div>fiction</div>
    <div>selp-help</div>
</div>
            </div>
            <div>

            </div>
        </div>
    )
}