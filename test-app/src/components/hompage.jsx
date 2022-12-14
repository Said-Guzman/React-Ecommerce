import React from "react"
import {Link} from "react-router-dom"
import "./homepage.css"


function Homage(){
    return(  <>
  <header>
    <nav class="navbar">
    <Link to="./product" class="logo">exe.Sliced</Link>
    <ul class="nav-menu">
    <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="./product">Product</Link>
        </li>
        <li class="nav-item">
          <Link to="./contact">ContactUs</Link>
        </li>
      </ul>


      <div class="dropdown">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
      </div>



    </nav>
    </header>


      <body>

        </body>
        <footer>
          
        
        
        </footer>
      </>
        
    )
}





export default Homage








