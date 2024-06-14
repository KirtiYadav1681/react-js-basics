import React, { useEffect } from 'react';
import { debounce } from 'lodash';

const DebouncedScroll = () => {

    // creating a debounce function which ensures that a particular task is done 200ms after its inactivity
    const loadMoreContent = debounce(() => {
        console.log("Debounce scroll log...");
    },200);


    useEffect(() => {
        // Add the debounce scroll event listener when the component mounts
        window.addEventListener("scroll",loadMoreContent);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", loadMoreContent);
            loadMoreContent.cancel(); // cancel any pending call on cleanup
        }
    },[loadMoreContent]);

  return (
    <div style={{border:"1px solid red"}}>
        <h1>Debounce Scroll Example</h1>
        <p>Scroll several times and see the console to understand the debouncing principle</p>
    </div>
  )
}

export default DebouncedScroll