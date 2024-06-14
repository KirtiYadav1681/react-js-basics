import React, {useEffect} from 'react';
import { throttle } from 'lodash';

const ThrottleScroll = () => {

  // creating a throttle function that ensures a particular task is done after a fixed time period(here after every one second)
  const throttlescroll = throttle(() => {
    console.log("Throttle scroll log...")
  },1000);

  useEffect(() => {
    // add a throttle scroll event when the component mounts
    window.addEventListener("scroll",throttlescroll);

    return () => {
      // remove the throttle scroll event when the component unmounts
      window.removeEventListener("scroll", throttlescroll);
      throttlescroll.cancel(); // cancel any pending calls on cleanup
    }
  },[throttlescroll]);

  return (
    <div style={{border:"1px solid red"}}>
      <h1>Throttle Scroll</h1>
      <p>Scroll several times and see the log to see the throttle effect.</p>
    </div>

  )
}

export default ThrottleScroll