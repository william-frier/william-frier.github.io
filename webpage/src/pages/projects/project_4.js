import React from "react";
import '../../style.css';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

function sketch(p) {
    let x = 0;
    let dir = 0;

    const colours = [
      "#440154",
      "#414487",
      "#2A788E",
      "#22A884",
      "#7AD151",
      "#FDE725",
      "#7AD151",
      "#22A884",
      "#2A788E",
      "#414487",
    ];

    let colourIndex = 0;

    function triggerHaptic(){
      if("vibrate" in navigator) {
        navigator.vibrate(50);
      }
}

    p.setup = function() {
        p.createCanvas(400, 400);
        p.colorMode(p.HSB, 360, 100, 100);
    };
  
    p.draw = function() {
        p.background(120);
        p.noStroke();

        p.fill(colours[colourIndex]);
        p.circle(x, p.height/2, 20);

        if(dir == 0) x = x + 5;
        else x = x - 5;

        if( x > p.width-10 && dir == 0 )  
        {
            dir = 1;
            colourIndex = (colourIndex + 1) % colours.length;
            triggerHaptic();
        }
        if( x < 10 && dir == 1) 
        {
            dir = 0;
            colourIndex = (colourIndex + 1) % colours.length;
            triggerHaptic();
        }
    };
  }
  
function Project4() {
    const containerRef = useRef();

    useEffect(() => {
      const p5Instance = new p5(sketch, containerRef.current);
  
      return () => {
        p5Instance.remove();
      };
    }, []);
  
    return <div className="sketch-container" ref={containerRef} />;
}



export default Project4;