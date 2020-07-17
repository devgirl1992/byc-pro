import React, { Component } from 'react';
import "./Nav.css";



const Navbar = () => {
    return ( 
       <div className="toolbar">
<div>
<ul className="list">
               <li>
                   <a href="#">Furnishing</a>
               </li>
               <li>
                   <a href="#">Fender</a>
               </li>
               <li>
                   <a href="#">Frame Color</a>
               </li>
               <li>
                   <a href="#">Saddle</a>
               </li>
               <li>
                   <a href="#">Handles</a>
               </li>
           </ul>

</div>

      

       </div>
     );
}
 
export default Navbar;