import React from "react";
import useFetchWithCache from "../customHook/useFetchwithCache";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";
import SkeletonArticle from "./SkeletonArticle";

const WindowingWithFetchCaching = () => {
  const { data, loading } = useFetchWithCache("https://jsonplaceholder.typicode.com/comments", "cachedData");

  // Each row renderrer
  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {data?.[index].body}
      </div>
    );
  };

  return (
    <div style={{ border: "1px solid red", width:"450px" }}>
      <h2>Windowing / List Viewing and API Integration with Browser caching</h2>
      {loading ? (
        <SkeletonArticle />
      ) : (
        <List
          width={450}
          height={500}
          rowCount={data ? data.length : 0}
          rowHeight={100}
          rowRenderer={rowRenderer}
        />
      )}
    </div>
  );
};

export default WindowingWithFetchCaching;
