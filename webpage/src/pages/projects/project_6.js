import React from "react";
import '../../style.css';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

function sketch(p) {
    let grid = []
    let field_angle = []
    const nodes = 3;

    let particle_x = [];
    let particle_y = [];
    let particle_n = 1000;
    let particle_r = [];

    let phi = 0;


    let res = 5;

    function random_unit_vector(d=2){
        if(d == 2){
          let theta = Math.random() * 2 * Math.PI;
          return { x: Math.cos(theta), y: Math.sin(theta)};
        }
        if(d == 3){
        let theta = Math.random() * 2 * Math.PI;
        let phi = Math.random() * 2 * Math.PI;
        return {x: Math.sin(phi)*Math.cos(theta), 
                y: Math.sin(phi)*Math.sin(theta),
                z: Math.cos(phi)}
      }
    };
    
    function dot_prod(x,y, vx, vy)
    {
      let dx = x - vx;
      let dy = y - vy;
    
      let gx = grid[vx][vy].x;
      let gy = grid[vx][vy].y;
    
      return dx*gx - dy*gy;
    };
    
    function smooth_lerp(a,b,x){
      let tmp = 6*x*x*x*x*x - 15*x*x*x*x + 10*x*x*x;
      return a + tmp*(b-a);
    };
    
    p.setup = function() {
        //p.createCanvas(1248, 720);
        p.createCanvas(256, 256);
        p.background(0);
    
        for (let pi = 0; pi < particle_n; pi++) {
          particle_x.push(Math.random() * p.width);
          particle_y.push(Math.random() * p.height);
          particle_r.push(Math.random()*200);
        }
    };

     
    p.draw = function(){

        for(let i =0; i<=nodes; i++)
        {
      
          let row = [];
          for(let j =0; j<=nodes; j++)
          {
            row.push(random_unit_vector());
          }
          grid.push(row);
        }

        for(let i = 0; i < p.width; i+=res){
      
          let row = [];
          for(let j =0; j< p.height; j+=res) {
            let xf = Math.floor(i*nodes/p.width);
            let yf = Math.floor(j*nodes/p.height);
      
            let x = i*nodes/p.width;
            let y = j*nodes/p.height;
      
            let tl = dot_prod(x,y, xf, yf);
            let tr = dot_prod(x,y, xf+1, yf);
            let bl = dot_prod(x,y, xf, yf+1);
            let br = dot_prod(x,y, xf+1, yf+1);
      
            let t = smooth_lerp(tl,tr, x-xf);
            let b = smooth_lerp(bl, br, x-xf);
      
            let v = smooth_lerp(t,b, y-yf);
      
            row.push(v);
          }

           
          
          field_angle.push(row);
        }


        phi += 0.01*(Math.random()-0.5);
        for(let pi = 0; pi< particle_n; pi++) {
            p.stroke(0,220,0,200);
            p.point(particle_x[pi], particle_y[pi]);

            let i = Math.round(particle_x[pi] /res)
            let j = Math.round(particle_y[pi] /res)

            particle_x[pi] += Math.cos(2*Math.PI*field_angle[i][j] + phi);
            particle_y[pi] += Math.sin(2*Math.PI*field_angle[i][j] + phi);
            particle_r[pi] += 1;
            particle_r[pi] = particle_r[pi] % 250;
        
            
            if (particle_x[pi] > p.width || particle_x[pi] < 0 
                || particle_y[pi] < 0 || particle_y[pi] > p.height) {
            particle_x[pi] = Math.random()*p.width;
            particle_y[pi] = Math.random()*p.height;
            particle_r[pi] = 0;
            }
           
            
        }   
        p.background(0, 0, 0, 10);
        
            
      
    }; 

}
  
function Project6() {
    const containerRef = useRef();

    useEffect(() => {
      const p5Instance = new p5(sketch, containerRef.current);
  
      return () => {
        p5Instance.remove();
      };
    }, []);
  
    return <div ref={containerRef} />;
}

export default Project6;