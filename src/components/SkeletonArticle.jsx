import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonArticle = () => {
  return (
    <div>
        {/* <Skeleton height={40} width={500} /> */}
        <Skeleton count={3} baseColor="#ccc" highlightColor="#e0e0e0"/>
        <br />
        <Skeleton count={3} />
        <br />
        <Skeleton count={3} baseColor="#ccc" highlightColor="#e0e0e0"/>
        <br />
        <Skeleton count={3} />
        <br />
        <Skeleton count={3} baseColor="#ccc" highlightColor="#e0e0e0"/>
        <br />
        <Skeleton count={3} />
        <br />
        <Skeleton count={3} baseColor="#ccc" highlightColor="#e0e0e0"/>
        <br />
        {/* <Skeleton count={3} /> */}
    </div>
  )
}

export default SkeletonArticle