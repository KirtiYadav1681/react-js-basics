import React from 'react';
import LazyLoad from 'react-lazyload';

const LazyLoadedImage = () => {
  return (
    <div style={{border:"1px solid red"}}>
    <h2>Image Lazy Loading</h2>
    <LazyLoad height={100} offset={10}>
        <img src='https://www.bearing-news.com/wp-content/uploads/2017/07/skf25062017web.jpg' alt='random' />
    </LazyLoad>
    {/* LAZY LOADED IMAGE */}
    <img src='https://www.bearing-news.com/wp-content/uploads/2017/07/skf25062017web.jpg' alt='random' />
    </div>
  )
}

export default LazyLoadedImage