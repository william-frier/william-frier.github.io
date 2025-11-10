import React from "react";
import '../../../style.css';

import { useEffect, useRef } from 'react';
import p5 from 'p5';

class Perlin_noise_3D {
    constructor(width, height, depth, nodes_w, nodes_h, nodes_d){
        this.width = width;
        this.height = height;
        this.depth = depth;
  
        this.nodes_w = nodes_w;
        this.nodes_h = nodes_h;
        this.nodes_d = nodes_d;
  
        this.grid = [];
  
        this.generate_grid();
    }
  
    //methods
    get_value(w,h,d){
  
        let x = w*(this.nodes_w)/this.width;
        let y = h*(this.nodes_h)/this.height;
        let z = d*(this.nodes_d)/this.depth;
        
        let vx = Math.floor(x);
        let vy = Math.floor(y);
        let vz = Math.floor(z);
  
        //t = top, l = left, b = bottom, r = right, c = current, f = future,
  
  
        let ctl = this.dot_prod_vec3(x,y,z, vx, vy, vz);
        let ctr = this.dot_prod_vec3(x,y,z, vx+1, vy, vz);
  
        let cbl = this.dot_prod_vec3(x,y,z, vx, vy+1, vz);
        let cbr = this.dot_prod_vec3(x,y,z, vx+1, vy+1, vz);
  
        let ftl = this.dot_prod_vec3(x,y,z, vx, vy, vz+1);
        let ftr = this.dot_prod_vec3(x,y,z, vx+1, vy, vz+1);
  
        let fbl = this.dot_prod_vec3(x,y,z, vx, vy+1, vz+1);
        let fbr = this.dot_prod_vec3(x,y,z, vx+1, vy+1, vz+1);
  
        let ct = this.smooth_1d(ctl, ctr, x-vx);
        let cb = this.smooth_1d(cbl, cbr, x-vx);
        
        let ft = this.smooth_1d(ftl, ftr, x-vx);
        let fb = this.smooth_1d(fbl, fbr, x-vx);
  
        let c = this.smooth_1d(ct,cb, y-vy);
        let f = this.smooth_1d(ft,fb, y-vy);
  
        let v = this.smooth_1d(c,f, z-vz);
  
        return v;
    }
  
    // return a random 2D vector of norm 1 
    random_unit_vec3(){
        let theta = Math.random() * 2 * Math.PI;
        let phi = Math.random() * 2 * Math.PI;
        return { x: Math.sin(phi)*Math.cos(theta), y:Math.sin(phi)*Math.sin(theta), z:Math.cos(phi)};
    }
  
    dot_prod_vec3(x,y,z, vx, vy, vz){
        let dx = x - vx;
        let dy = y - vy;
        let dz = z - vz;
  
        let gx = this.grid[vx][vy][vz].x;
        let gy = this.grid[vx][vy][vz].y;
        let gz = this.grid[vx][vy][vz].z;
  
        return dx*gx - dy*gy + dz*gz;
    }
  
    smooth_1d(a,b,x){
        let tmp = 6*x*x*x*x*x - 15*x*x*x*x + 10*x*x*x;
        return a + tmp*(b-a);
    }
  
  
    generate_grid(){
        this.grid = []; //empty any existing grid
        for(let i=0; i<=this.nodes_w; i++){
            let column = []; // create a new row 
            for(let j=0; j<=this.nodes_h; j++){
                let row = []
                for(let k= 0; k<=this.nodes_d; k++){
                    row.push(this.random_unit_vec3());
                }
                column.push(row);
            }
            this.grid.push(column);
        }
  
        //make sure we can tile the space or wrap around the tile
        for(let k =0; k<this.nodes_d; k++){
  
            for(let i=0; i<=this.nodes_w; i++) this.grid[i][this.nodes_w][k] = this.grid[i][0][k];
            for(let j=0; j<=this.nodes_h; j++) this.grid[this.nodes_h][j][k] = this.grid[0][j][k];
        }
        for(let i =0; i<=this.nodes_w; i++){
          for(let j=0; j<=this.nodes_h; j++){
            this.grid[i][j][this.nodes_d] = this.grid[i][j][0];
          }
        }
    }
  }

function sketch(p) {
    let x = 0;
    let y = 0;
    let z = 0;
    let v = 0;
    let r = 0;
    let noise;

    p.setup = function() {
        p.createCanvas(256, 256);
        p.background(0);
        noise = new Perlin_noise_3D(p.width, p.height,100, 8, 8, 8);
        z = 0;
    };
  
    p.draw = function() {
        p.background(0);

        p.strokeWeight(1);
        p.noFill();

        
        z = (z+0.2)%100; 
        for(let j = 0; j < p.height; j+=4)
        {
          p.beginShape(); // change the coulour of each iteration
          p.stroke(j%120, 200-(j%100), 0); // change the colour of each iteration
          for(let i = 1; i < p.width; i++)
          {
      
            let theta = i*2*Math.PI/p.width;
      
            v = noise.get_value(i,j,z);
            r = v*j/8 + j/2;
      
            x = r * Math.cos(theta) + p.width/2;
            y = r * Math.sin(theta) + p.height/2;
            p.vertex(x,y);
          }
          p.endShape(p.CLOSE);
        }
          

    };
  }
  
function Project5() {
    const containerRef = useRef();

    useEffect(() => {
      const p5Instance = new p5(sketch, containerRef.current);
  
      return () => {
        p5Instance.remove();
      };
    }, []);
  
    return <div ref={containerRef} />;
}

export default Project5;