import React from 'react';
import axios from 'axios';



export default function App() {
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



