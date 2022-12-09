import {Outlet, Link} from "react-router-dom"


import './product.css'


function Produce(){
   return (
      <>
      <nav>
        <ul>
          <li>
            <Link to="./product">Product</Link>
          </li>
          <li>
            <Link to="./contact">ContactUs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
   )
}

export default Produce