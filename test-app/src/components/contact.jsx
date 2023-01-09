import React from "react"
import {Link} from "react-router-dom"
import './contact.css' 


function ContactUs(){

    function refreshPage(){
        window.location.reload(false)
      }
      function validation(e){
        if (document.getElementById("info-text").value === ""){
          alert ('Please make sure to fill everything out')
          return;
        }
      }

    return(
        <>
        <header>
<nav class="navbar">
    <Link to="/" class="logo">exe.Sliced</Link>
<ul class='nav-menu'>


    <li class='nav-item'>
        <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/product">Product</Link>
    </li>
    <li className="nav-item">
    <Link to="#" className="nav-link" onClick={refreshPage}>ContactUs</Link>
    </li>
</ul>
</nav>
</header>
<body>
<div class="container">
    <div class="contain">
            <div class="info-top"><h2 id="tb">Get In Touch With Us</h2></div>
        </div>
        <div class="info">
        <form id="experience" action="#" onsubmit="return validation()"> 

            <label for="Fname">First Name:</label><br />
            <input id="info-text" for='Fname' type="text" name="Fname" placeholder="First Name Here" /><br />
            <label for="Lname">Last Name:</label><br />
            <input id="info-text2" for="Lname" type="text" placeholder="Last Name Here" /><br />
            <label for="Phone">Phone:</label><br />
            <input id="info-text2" type="text" name="Phone" placeholder="Number" /><br />
            <label for="email">Email:</label><br />
            <input id="info-text" type="email" name="email" placeholder="Email Here" /><br />
            <label for="Comment">Feedback:</label>
            <input id="info-text2" type="text" placeholder="Always Appreciated :)" /><br />
            <input id="info-submit" type="submit" name="submit" onClick={validation} />
        </form>
            
    </div>
</div>
</body>


<footer>

</footer>
 </>
   )
}
        





export default ContactUs