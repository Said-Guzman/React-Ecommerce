import React from "react";
import {Link} from "react-router-dom";
import "./../css/homepage.css";
import {Navigation, Pagination, Scrollbar, A11y, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/bundle';
import Drop from "../dropdown";


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
        <Drop />
          
        </nav>
      </header>
      
      <body>
        <div class="hi">
{/* edited the video twice to accomidate for people with epilepsy definitly worth it since it hurt my eyes*/}
<video autoPlay muted loop src='/videos/fixxedhero.mp4' type="video/mp4"></video>
 
          <div class="ht">
            <Link to="/" onClick={refreshPage}><h1 id="logo-middle">exe.Sliced</h1></Link>
            <br />
            <p id="middle-text">Welcome to the place to get your videos Sliced professionally.</p>
            <br />
            <a href="./product"><button className="middle-button">Buy Here</button></a>
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
        <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s|c|547348909654|e|instagram%20%27|&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1021064%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA8OmdBhAgEiwAShr40-710SV5kPPb1EhdQueGS-g91DlImHaPryn9hbLSpobqaz3hcSpAlRoCyW8QAvD_BwE" target="_blank" rel="noreferrer" class="fa fa-instagram"></a>
         {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a href="https://www.youtube.com/channel/UCboY9iaF3O_1hdBuWDK2rqg" class="fa fa-youtube" rel="noreferrer" />
    </footer>
        </>
    )
}




export default Homage








