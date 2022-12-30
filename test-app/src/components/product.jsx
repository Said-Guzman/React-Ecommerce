import {Link} from "react-router-dom"
import React from "react"
import './product.css'



class Produce extends React.Component {


  // function refreshPage(){
  //   window.location.reload(false)
  // }


  state = {
    name: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => this.setState({ name: data.name }))
  }

  render(){
   return(
  <>
  <header>
 
  <nav class="navbar">
     <Link to="/"  class="logo">exe.Sliced</Link>
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
   <h3>Hello {this.state.name}!</h3>
  
  </body>
  <footer>
    
  </footer>
</>
    
   )
}
}
export default Produce