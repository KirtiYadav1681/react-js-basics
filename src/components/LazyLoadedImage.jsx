import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyImage = ({src, alt}) => (
  <LazyLoad height={200} offset={100} placeholder={<img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png" alt="loading..."/>}>
        <img src={src} alt={alt}/>
    </LazyLoad>
)

const LazyLoadedImage = () => {
  return (
    <div style={{border:"1px solid red"}}>
      <h2>Image Lazy Loading</h2>
      <LazyImage src='https://www.bearing-news.com/wp-content/uploads/2017/07/skf25062017web.jpg' alt='random' />
      <img src='https://www.bearing-news.com/wp-content/uploads/2017/07/skf25062017web.jpg' alt='random' />
    </div>
  )
}

export default LazyLoadedImage