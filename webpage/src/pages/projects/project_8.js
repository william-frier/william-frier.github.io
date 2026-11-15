import React from "react";
import '../../style.css';

import { useEffect, useRef, useState } from "react";

    // Input: frequency in Hz
    // Output: absorption in dB/metre
    // Conditions: 20°C, 50% relative humidity, 101.325 kPa
    function airAbsorptionDbPerMetre(frequency) {
        const T = 293.15; // kelvin
        const h = 1.153; // water vapour molar concentration, expressed as %
    
        // Oxygen and nitrogen relaxation frequencies, in Hz
        const fO = 24 + 4.04e4 * h * (0.02 + h) / (0.391 + h);
        const fN = 9 + 280 * h;
    
        return 8.686 * frequency ** 2 * (
        1.84e-11 +
        0.01275 * Math.exp(-2239.1 / T) /
            (fO + frequency ** 2 / fO) +
        0.1068 * Math.exp(-3352 / T) /
            (fN + frequency ** 2 / fN)
        );
    }

    // Bessel J1 power series; suitable for the modest arguments used here.
    function besselJ1(x) {
        let term = x / 2;
        let sum = term;
    
        for (let m = 1; m < 100; m++) {
        term *= -(x * x / 4) / (m * (m + 1));
        sum += term;
        if (Math.abs(term) < 1e-14) break;
        }
    
        return sum;
    }
    
    function pistonDirectivity(argument) {
        if (Math.abs(argument) < 1e-4) {
        return 1 - argument * argument / 8;
        }
        return 2 * besselJ1(argument) / argument;
    }    

    function PressureMap({ pitch, focus_height, wavelength, absorptionDbPerMetre}) {
        const canvasRef = useRef(null);
      
        useEffect(() => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          const { width, height } = canvas;
          const image = ctx.createImageData(width, height);
      
          const N = 8;
          const pistonRadius = pitch / 2;

          const k = 2 * Math.PI / wavelength;

          const focusX = 0;
          const focusY = 0;
          const focusZ = focus_height; 


          const xMin = -0.1, xMax = 0.1; //in meter
          const zMin = 0.005, zMax = 0.205; // in meter
      
          const referenceDistance = 1; // meter
          const reference = N * N / referenceDistance;
      
          for (let row = 0; row < height; row++) {
            // Larger z at the top; the array lies below the image.
            const z = zMax - row / (height - 1) * (zMax - zMin);
      
            for (let col = 0; col < width; col++) {
              const x = xMin + col / (width - 1) * (xMax - xMin);
              let real = 0;
              let imaginary = 0;
      
              for (let nx = 0; nx < N; nx++) {
                const xn = (nx - (N - 1) / 2) * pitch;
                
                for (let ny = 0; ny < N; ny++) {
                    const yn = (ny - (N - 1) / 2) * pitch;

                    const distance = Math.hypot(x - xn, yn, z);
        
                    
                    
                    const focusDistance = Math.hypot(focusX - xn, focusY - yn, focusZ);
                    const phase = k * (distance - focusDistance);


                    const absorption = 10 ** (-absorptionDbPerMetre * distance / 20);

                    const lateralDistance = Math.hypot(x - xn, yn);
                    const sinTheta = lateralDistance / distance;

                    const directivity = pistonDirectivity(
                    k * (pitch / 2) * sinTheta
                    );

                    const amplitude = directivity * absorption / distance;

                    real += amplitude * Math.cos(phase);
                    imaginary -= amplitude * Math.sin(phase);
                }                  
            }
              
      
            const magnitude = Math.hypot(real, imaginary);
            const db = 20 * Math.log10(Math.max(magnitude / reference, 1e-12));
                
            const dbMin = -30;
            const dbMax = 20;
            const t = Math.max(0, Math.min(1, (db - dbMin) / (dbMax - dbMin)));
      
            // Dark blue → cyan → yellow.
            const offset = 4 * (row * width + col);
            image.data[offset] = 255 * Math.max(0, 2 * t - 1);
            image.data[offset + 1] = 255 * t;
            image.data[offset + 2] = 255 * (1 - t);
            image.data[offset + 3] = 255;
            }
          }
      
          ctx.putImageData(image, 0, 0);
        }, [pitch, focus_height, wavelength, absorptionDbPerMetre]);
      
        return (
          <figure style={{ margin: 0 }}>
            <div style={{ textAlign: "center" }}>z = 205mm</div>
            <canvas
              ref={canvasRef}
              width={200}
              height={200}
              role="img"
              aria-label="Pressure magnitude in front of a 64-element acoustic array"
              style={{ display: "block", width: "100%" }}
            />
            <figcaption style={{ textAlign: "center" }}>
              x: −100 mm to +100 mm · Bottom: z = 5mm
              <br />
              Colour: −30 dB (blue) to 20 dB (yellow)
            </figcaption>
          </figure>
        );
      }

function Project8() {
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

            <PressureMap 
                pitch={pitch} 
                focus_height={z_focus}
                wavelength={343 / frequency}
                absorptionDbPerMetre={airAbsorptionDbPerMetre(frequency)}
            />

            
            <label htmlFor="spacing">
                Element pitch: {(pitch).toFixed(2)} 
            </label>
            <br/>
            <label htmlFor="zfocus">
                Focus height: {z_focus} m 
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