import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20' />
<Carousel 
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={5000}
>



<div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/7162KHTuDhL._SX3000_.jpg" alt=""/>
</div>

<div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/6110ZCTyr0L._SX3000_.jpg" alt=""/>
</div>

<div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/71SnvcmmGlL._SX3000_.jpg" alt=""/> 
</div>

<div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg" alt=""/> 
</div>

<div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/610Q56vDdSL._SX3000_.jpg" alt=""/>
</div>


<div>
    <img loading="lazy" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt=""/> 
</div>

</Carousel>
    </div>
  );
}

export default Banner;