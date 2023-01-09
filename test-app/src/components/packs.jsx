import React from 'react';
import axios from 'axios';




export default function Packs() {
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
        <video autoPlay muted loop src='/videos/packs.mp4' type="video/mp4"></video>
        <h3>{post[3].name}</h3>
        <p>{post[3].description}</p>
        <p>{post[3].price}</p>
        </div>
        <div>
        <video autoPlay muted loop src='/videos/packs_1.mp4' type="video/mp4"></video>
        <h3>{post[4].name}</h3>
        <p>{post[4].description}</p>
        <p>{post[4].price}</p>
        </div>
        <div>
        <video autoPlay muted loop src='/videos/packs_2.mp4' type="video/mp4"></video>
        <h3>{post[5].name}</h3>
        <p>{post[5].description}</p>
        <p>{post[5].price}</p>
        </div>
        <div>
        <video autoPlay muted loop src='/videos/packs_3.mp4' type="video/mp4"></video>
        <h3>{post[6].name}</h3>
        <p>{post[6].description}</p>
        <p>{post[6].price}</p>
        </div>
        <div>
        <video autoPlay muted loop src='/videos/packs_4.mp4' type="video/mp4"></video>
        <h3>{post[7].name}</h3>
        <p>{post[7].description}</p>
        <p>{post[7].price}</p>
        </div>
        <div>
        <video autoPlay muted loop src='/videos/packs_5.mp4' type="video/mp4"></video>
        <h3>{post[8].name}</h3>
        <p>{post[8].description}</p>
        <p>{post[8].price}</p>
        </div>
        
    </>
    );
  }