import React from "react"
import {Link} from "react-router-dom"
import './../css/contact.css' 
import Drop from "../dropdown";






function ContactUs(){

    function refreshPage(){
        window.location.reload(false)
      }

      function validation(e){
        if (document.getElementById("info-text").value === ""){
          alert ("Please make sure to fill everything out that's underlined pink")
          return;
        }else{
            if (document.getElementById("info-text").value !== ""){
                alert ("Thanks for submitting correctly, Have a Cookie :)")
            return;
            }
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

<Drop />
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





export default ContactUs