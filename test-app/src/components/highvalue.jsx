import React from 'react';
import axios from 'axios';



export default function HighValue() {
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
        <video autoPlay muted loop src='/videos/sky.mp4' type="video/mp4"></video>
        <h3>{post[0].name}</h3>
        <p>{post[0].description}</p>
        <p>{post[0].price}</p>
        </div>

        <div>
        <video autoPlay muted loop src='/videos/sky_1.mp4' type="video/mp4"></video>
        <h3>{post[1].name}</h3>
        <p>{post[1].description}</p>
        <p>{post[1].price}</p>
        </div>

        <div>
        <video autoPlay muted loop src='/videos/sky_2.mp4' type="video/mp4"></video>
        <h3>{post[2].name}</h3>
        <p className='post2'>{post[2].description}</p>
        <p >{post[2].price}</p>
        </div>
        
    </>
    );
  }









