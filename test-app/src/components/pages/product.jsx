import {Link} from "react-router-dom"
import React from "react"
import './../css/product.css'
import {Navigation, Pagination, Scrollbar, A11y, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Items from '../items'
import HighValue from "../highvalue";
import Packs from "../packs";
import Producing from "../produce";
import Drop from "../dropdown";



class Produce extends React.Component{




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

    <Drop />
  </nav>
</header>
<body>

  <div id="container">
    {/* <!-- Slider main container --> */}
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
      spaceBetween={1}
      slidesPerView={1}
      Navigation
      keyboard = {{enabled: true, onlyInViewport: false,}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div><h2 id="slider">All Products</h2></div>
        <div className='selling'><Items /></div>
      </SwiperSlide>
      <SwiperSlide>
      <div><h2 id="slider">All Custom Videos</h2></div>
      <div className='selling-alt'> <HighValue /> </div>
     
      </SwiperSlide>
      <SwiperSlide>
      <div><h2 id="slider">All Editing Packs</h2></div>
      <div className='selling'><Packs /></div>
      </SwiperSlide>
      <SwiperSlide>
      <div><h2 id="slider">All Products</h2></div>
      <div className='selling-alt'><Producing /></div>
      </SwiperSlide>
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
}

export default Produce