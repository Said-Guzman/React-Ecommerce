import React from "react"
import {Link} from "react-router-dom"



function Homage(){
    return(  <>
        <nav class="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="./product">Product</Link>
            </li>
            <li>
              <Link to="./contact">ContactUs</Link>
            </li>
          </ul>
        </nav>
      <body>
        <h1>Produce page</h1>
        <h2>sample text</h2>
        </body>
        <footer>
          
        
        <h1>test</h1>
        
        
        </footer>
      </>
        
    )
}





export default Homage








