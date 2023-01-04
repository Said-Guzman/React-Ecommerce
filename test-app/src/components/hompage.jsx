import React from "react";
import {Link} from "react-router-dom";
import "./homepage.css";
// import "./dropdown.js"
import {Navigation, Pagination, Scrollbar, A11y, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';





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
              <Link to="/" className="nav-link" onClick={refreshPage}>Home</Link>
            </li>
            <li class="nav-item">
              <Link to="./product" className="nav-link" >Product</Link>
            </li>
            <li class="nav-item">
              <Link to="./contact" className="nav-link" >ContactUs</Link>
            </li>
          </ul>


          <div class="dropdown" >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </header>
      
      <body>
        <div class="hi">

<video autoPlay muted loop src='/videos/color.mp4' type="video/mp4"></video>

          <div class="ht">
            <Link to="/" onClick={refreshPage}><h1 id="logo-middle">exe.Sliced</h1></Link>
            <br />
            <p id="middle-text">Welcome to the place to get your videos Sliced professionally.</p>
            <br />
            <a href="./product"><button>Buy Here</button></a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------ */}
        <div><h2 id="slider">Some Examples Of My Work</h2></div>
        <div id="container">
          {/* <!-- Slider main container --> */}
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
      spaceBetween={50}
      slidesPerView={1}
      Navigation
      keyboard = {{enabled: true, onlyInViewport: false,}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><iframe width="1440" height="900" src="https://www.youtube.com/embed/Ji7TiVkq9fA" title="SpiderVerse" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="1440" height="900" src="https://www.youtube.com/embed/ViIYwhgxBNg" title="I Love You So - AMV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="1440" height="900" src="https://www.youtube.com/embed/yGWX30idkiw?start=92" title="Killa X Lazerbeam - AMV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
      <SwiperSlide><iframe width="1440" height="900" src="https://www.youtube.com/embed/uf0vuyohi5w" title="Toyota Supra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></SwiperSlide>
    </Swiper>
          </div>
      </body>    
      <footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" class="fa fa-twitter"></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiFi9fb7NT6AhWBGVkFHfRlA64QFnoECA8QAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz" target="_blank" rel="noreferrer" class="fa fa-facebook"></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://www.google.com/search?q=instagram&client=opera&hs=pK9&ei=1qJDY4XIH4Gz5NoP9MuN8Ao&oq=ins&gs_lcp=Cgdnd3Mtd2l6EAEYADIKCAAQsQMQgwEQQzIRCC4QgAQQsQMQgwEQxwEQ0QMyBAgAEEMyBAguEEMyBAgAEEMyBAgAEEMyCggAELEDEIMBEEMyCwguEIAEEMcBENEDMgoIABCxAxCDARBDMggIABCABBCxAzoICC4QjwEQ6gI6CAgAEI8BEOoCOgsIABCABBCxAxCDAToFCAAQgAQ6CAgAELEDEIMBOggILhCxAxCDAUoECEEYAEoECEYYAFAAWKgLYLkYaAFwAXgAgAFbiAH0AZIBATOYAQCgAQGwAQrAAQE&sclient=gws-wiz" target="_blank" rel="noreferrer" class="fa fa-instagram"></a>
         {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://www.youtube.com/channel/UCboY9iaF3O_1hdBuWDK2rqg" class="fa fa-youtube" rel="noreferrer" />
    </footer>
        </>
    )
}




export default Homage








