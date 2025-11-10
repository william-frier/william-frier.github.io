import React from "react";
import '../../style.css';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

function sketch(p) {
    let x = 0;
    let dir = 0;
    let i = 0;

    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(220);
        p.colorMode(p.HSB);
    };
  
    p.draw = function() {
        p.background(120);
        p.noStroke();

        p.fill(i*20,100,100)
        p.circle(x, p.height/2, 20);


        if(dir == 0) x = x + 5;
        else x = x - 5;

        if( x > p.width-10 && dir == 0 )  
        {
            dir = 1;
            i +=1 ;
        }
        if( x < 10 && dir == 1) 
        {
            dir = 0;
            i +=1;
        }

        i = i%18;
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
  
    return <div ref={containerRef} />;
}

export default Project4;