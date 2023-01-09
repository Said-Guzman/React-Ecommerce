import React from 'react';
import axios from 'axios';



export default function Producing() {
    const [post, setPost] = React.useState(null);
  
    React.useEffect(() => {
      axios.get('http://localhost:4000/product').then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
    <>

        <div>
        <img src='/images/exe.webp' alt='Nice looking sweater'/>
        <h3>{post[9].name}</h3>
        <p>{post[9].description}</p>
        <p>{post[9].price}</p>
        </div>
        <div>
        <img src='/images/exe-sticker.webp' alt='cool stickers for anything'/>
        <h3>{post[10].name}</h3>
        <p>{post[10].description}</p>
        <p>{post[10].price}</p>
        <br></br>
        </div>
        
        <div>
        <img src='/images/exe-blanket.webp' alt='the best sweater out there'/>
        <h3>{post[11].name}</h3>
        <p>{post[11].description}</p>
        <p>{post[11].price}</p>
        </div>
    </>
    );
  }