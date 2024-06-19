import React from "react";
import { useQuery } from "@tanstack/react-query";

const retrievePosts = async () => {
    console.log("Calling api");
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  return response.json();
};

const FetchingDataWithReactQuery = () => {
  const {data, error, isLoading} = useQuery({ queryKey: ['commentsData'], queryFn: retrievePosts, staleTime:300000, cacheTime:600000 });

  if (isLoading) return <h4>Loading ...</h4>;
  if (error) return <h4>Error in fetching data...{error.message}</h4>;
  return (
    <div style={{width:"450px", height:"600px", border:"1px solid red", overflow: "scroll"}}>
      <h1>Fetching data with React Query</h1>
      {data?.map((_, index) => {
        return (
          <div key={index} style={{marginBottom:"20px"}}>
            {_.body}
          </div>
        );
      })}
    </div>
  );
};

export default FetchingDataWithReactQuery;
