
import {Link} from "react-router-dom"
import React from "react"
import './product.css'



function Produce(){
  // function refreshPage(){
  //   window.location.reload(false)
  // }

  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {setData(data.message)
        console.log(data.message)});
      
  }, []);

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
  
  <p>{}</p>
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

export default Produce