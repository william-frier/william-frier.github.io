import React from "react";
import '../../style.css';

import { useEffect, useRef, useState } from "react";

function Project8() {

    const N = 8;

    function PressureMap({ spacing, focus_height }) {
        const canvasRef = useRef(null);
      
        useEffect(() => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          const { width, height } = canvas;
          const image = ctx.createImageData(width, height);
      
          const N = 8;
          // All distances are in wavelengths, so k = 2π.
          const k = 2 * Math.PI;
          const xMin = -10, xMax = 10;
          const zMin = 0.5, zMax = 20;
      
          // Fixed reference: N coherent unit sources at a distance of 1λ.
          const reference = N;
      
          for (let row = 0; row < height; row++) {
            // Larger z at the top; the array lies below the image.
            const z = zMax - row / (height - 1) * (zMax - zMin);
      
            for (let col = 0; col < width; col++) {
              const x = xMin + col / (width - 1) * (xMax - xMin);
              let real = 0;
              let imaginary = 0;
      
              for (let n = 0; n < N; n++) {
                const xn = (n - (N - 1) / 2) * spacing;
                const distance = Math.hypot(x - xn, z);
      
                const focusX = 0;
                const focusZ = focus_height; // wavelengths
                const focusDistance = Math.hypot(focusX - xn, focusZ);
                const phase = k * (distance - focusDistance);

                real += Math.cos(phase) / distance;
                imaginary -= Math.sin(phase) / distance;
                                
              }
      
              const magnitude = Math.hypot(real, imaginary);
              const db = 20 * Math.log10(Math.max(magnitude / reference, 1e-12));
              const t = Math.max(0, Math.min(1, (db + 40) / 40));
      
              // Dark blue → cyan → yellow.
              const offset = 4 * (row * width + col);
              image.data[offset] = 255 * Math.max(0, 2 * t - 1);
              image.data[offset + 1] = 255 * t;
              image.data[offset + 2] = 255 * (1 - t);
              image.data[offset + 3] = 255;
            }
          }
      
          ctx.putImageData(image, 0, 0);
        }, [spacing]);
      
        return (
          <figure style={{ margin: 0 }}>
            <div style={{ textAlign: "center" }}>z = 20λ</div>
            <canvas
              ref={canvasRef}
              width={400}
              height={390}
              role="img"
              aria-label="Pressure magnitude in front of an eight-element acoustic array"
              style={{ display: "block", width: "100%" }}
            />
            <figcaption style={{ textAlign: "center" }}>
              x: −10λ to +10λ · Bottom: z = 0.5λ
              <br />
              Colour: −40 dB (blue) to 0 dB (yellow)
            </figcaption>
          </figure>
        );
      }

    const [pitch, setPitch] = useState(0.01035);
    const [frequency, setFrequency] = useState(40000);
    const [z_focus, setZFocus] = useState(0.1);

    return(
        <div style={{ maxWidth: 720, width: "100%", margin: "0 auto" }}>
            <title>Array Sim</title>
            <h1>Array Sim</h1>
    
            <label htmlFor="pitch">
                Element pitch: {(pitch*1000).toFixed(2)} mm
            </label>

            <input
                id="pitch"
                type="range"
                min="0.0001"
                max="0.02"
                step="0.00005"
                value={pitch}
                onChange={event => setPitch(Number(event.target.value))}
                style={{ display: "block", width: "100%", maxWidth: 360, margin: "0 auto" }}
            />

            <label htmlFor="frequency">
                Element frequency: {frequency} Hz
            </label>

            <input
                id="frequency"
                type="range"
                min="20000"
                max="200000"
                step="1000"
                value={frequency}
                onChange={event => setFrequency(Number(event.target.value))}
                style={{ display: "block", width: "100%", maxWidth: 360, margin: "0 auto" }}
            />

            <PressureMap spacing={pitch*frequency/343} focus_height={z_focus*frequency/343}/>

            
            <label htmlFor="spacing">
                Element spacing d/λ: {(pitch*frequency/343).toFixed(2)} 
            </label>
            <br/>
            <label htmlFor="height">
                Focus height: {z_focus} m or {(z_focus*frequency/343).toFixed(2)} λ
            </label>
            
            <input
                id="zfocus"
                type="range"
                min="0.01"
                max="0.2"
                step="0.005"
                value={z_focus}
                onChange={event => setZFocus(Number(event.target.value))}
                style={{ display: "block", width: "100%", maxWidth: 360, margin: "0 auto" }}
            />




        </div>
    );




}


export default Project8;