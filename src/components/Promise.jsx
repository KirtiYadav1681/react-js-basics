import React, { useState } from 'react'

const PromiseComponent = () => {
    const [fetchedData, setFetchedData] = useState("Fetched data will appear here...");

    function fetchData () {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                const data = "Response Data Fetched";
                resolve(data);
            },1000);
        })
    }

    const handleClick = () => {
        fetchData()
            .then((data)=> setFetchedData(data))
            .catch((error) => alert("error in fetching data"));
    }
    
  return (
    <div style={{border:"1px solid red"}}>
        <h2>Promises</h2>
        <h3>{fetchedData}</h3>
        <button onClick={handleClick}>Click to Fetch Data</button>
    </div>
  )
}

export default PromiseComponent;
