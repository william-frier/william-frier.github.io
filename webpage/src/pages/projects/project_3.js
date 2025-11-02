import React from "react";
import '../../style.css';

import {
    Button
  } from 'reactstrap';



function Project3() {

    const handleVibrate = () => {
        if ("vibrate" in navigator) {
          navigator.vibrate(200);
        } else {
          alert("Vibration API not supported on this device.");
        }
      };
    
 
    return(
        <div>
            <h1>Project 3 - Haptics</h1>

            <h5><em>Test with Android</em></h5>
            <Button onClick={handleVibrate}>200ms</Button>


        </div>
    );
}

export default Project3;