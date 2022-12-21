import {Link} from "react-router-dom"
import React from "react"
import './product.css'


function Produce(){


  function refreshPage(){
    window.location.reload(false)
  }

   return (
  <>
  <header>
 
  <nav class="navbar">
     <Link to="/" onClick={refreshPage} class="logo">exe.Sliced</Link>
    <ul className="nav-menu">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">ContactUs</Link>
      </li>
    </ul>
  </nav>
</header>
<body>
  
  
  </body>
  <footer>
    
  </footer>
</>
    
   )
}

export default Produce