import React from "react"
import {Link} from "react-router-dom"
import "./homepage.css"
// import "./dropdown.js"






function Homage(){

function refreshPage(){
  window.location.reload(false)
}

    return( 
       <>
      <header>
        <nav class="navbar">
          <Link to="/" onClick={refreshPage} class="logo">exe.Sliced</Link>
          <ul class="nav-menu">

            <li class="nav-item">
              <Link to="/" onClick={refreshPage}>Home</Link>
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
        <div class="hi">
          <video loop muted autoplay preload="auto"></video>
          {/* <source src="/videos/color.mp4" type="video/mp4" id="vid"></source>*/}
          <div class="ht">
            <Link to="//"><h1 id="logo-middle">exe.Sliced</h1></Link>
            <br />
            <p id="middle-text">Welcome to the place to get your videos Sliced professionally.</p>
            <br />
            <a href="/pages/product.html"><button>Buy Here</button></a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------ */}
        <div><h2 id="slider"> Professional Video Projects (Commissioned)</h2></div>
        <div id="container">
          {/* <!-- Slider main container --> */}
          <div class="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div class="swiper-slide"><iframe width="560" height="815" src="https://www.youtube.com/embed/gyMEx4pru8E?start=133" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="swiper-slide"><iframe width="560" height="815" src="https://www.youtube.com/embed/US0ZNaeIw0Q?start=83" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="swiper-slide"><iframe width="560" height="815" src="https://www.youtube.com/embed/uf0vuyohi5w?start=40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div class="swiper-pagination"></div>
            {/* <!-- If we need navigation buttons --> */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      
      {/* --------------------------------------------------------------- */}
      <br />
      <div><h2 id="slider">Commissioned Projects</h2></div>
      <br />
        <div id="container">
          {/* <!-- Slider main container --> */}
          <div class="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div class="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div class="swiper-slide"><iframe width="560" height="815" src="https://www.youtube.com/embed/IsQ9rGZMSxo?start=76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="swiper-slide"><iframe width="560" height="815" src="https://www.youtube.com/embed/GA80CN3s384?start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="swiper-slide"><iframe width="560" height="815" src="https://www.youtube.com/embed/GL66yJQKrns?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div class="swiper-pagination"></div>

            {/* <!-- If we need navigation buttons --> */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      
      </body>    
      <footer>
        <Link to="https://twitter.com/" class="fa fa-twitter"></Link>
        <Link to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiFi9fb7NT6AhWBGVkFHfRlA64QFnoECA8QAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz" class="fa fa-facebook"></Link>
        <Link to="https://www.google.com/search?q=instagram&client=opera&hs=pK9&ei=1qJDY4XIH4Gz5NoP9MuN8Ao&oq=ins&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCAAQsQMQgwEQQzIRCC4QgAQQsQMQgwEQxwEQ0QMyBAgAEEMyBAguEEMyBAgAEEMyBAgAEEMyCggAELEDEIMBEEMyCwguEIAEEMcBENEDMgoIABCxAxCDARBDMggIABCABBCxAzoICC4QjwEQ6gI6CAgAEI8BEOoCOgsIABCABBCxAxCDAToFCAAQgAQ6CAgAELEDEIMBOggILhCxAxCDAUoECEEYAEoECEYYAFAAWKgLYLkYaAFwAXgAgAFbiAH0AZIBATOYAQCgAQGwAQrAAQE&sclient=gws-wiz" class="fa fa-instagram"></Link>
        <Link to="https://www.youtube.com/channel/UCboY9iaF3O_1hdBuWDK2rqg" class="fa fa-youtube"></Link>
    </footer>
        </>
    )
}





export default Homage








