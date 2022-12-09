import {Link} from "react-router-dom"
import React from "react"

import './product.css'


function Produce(){
   return (
  <>
  <nav class="navbar">
    <ul>
      <li>
        <Link to="/">Product</Link>
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
    
  </footer>
</>
    
   )
}

export default Produce