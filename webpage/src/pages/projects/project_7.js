import React from "react";
import '../../style.css';

import { useState } from "react";

function Project7() {

    const N = 8;

    function arrayFactorDb(angleDegrees, spacing) {
        const theta = angleDegrees * Math.PI / 180;
        const phaseStep = 2 * Math.PI * spacing * Math.sin(theta);

        let real = 0;
        let imaginary = 0;

        for (let n = 0; n < N; n++) {
            real += Math.cos(n * phaseStep);
            imaginary += Math.sin(n * phaseStep);
        }

        const magnitude = Math.hypot(real, imaginary) / N;
        return Math.max(-40, 20 * Math.log10(Math.max(magnitude, 1e-12)));
    }

    function BeamPattern({ spacing = 0.5 }) {
        const width = 720;
        const height = 320;
        const margin = { left: 60, right: 20, top: 20, bottom: 50 };
      
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;
      
        // Map physical coordinates to SVG pixels; SVG y increases downwards.
        const x = angle => margin.left + ((angle + 90) / 180) * plotWidth;
        const y = db => margin.top + (-db / 40) * plotHeight;
      
        const points = Array.from({ length: 1801 }, (_, i) => {
          const angle = -90 + i * 0.1;
          return `${x(angle)},${y(arrayFactorDb(angle, spacing))}`;
        }).join(" ");
      
        return (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            style={{ width: "100%", maxWidth: width, background: "white" }}
            role="img"
            aria-label={`Array factor for eight elements spaced ${spacing} wavelengths apart`}
          >
            {[-40, -30, -20, -10, 0].map(db => (
              <g key={db}>
                <line
                  x1={x(-90)} x2={x(90)}
                  y1={y(db)} y2={y(db)}
                  stroke="#ddd"
                />
                <text x={margin.left - 10} y={y(db) + 4} textAnchor="end">
                  {db}
                </text>
              </g>
            ))}
      
            {[-90, -60, -30, 0, 30, 60, 90].map(angle => (
              <g key={angle}>
                <line
                  x1={x(angle)} x2={x(angle)}
                  y1={y(0)} y2={y(-40)}
                  stroke="#eee"
                />
                <text x={x(angle)} y={y(-40) + 22} textAnchor="middle">
                  {angle}°
                </text>
              </g>
            ))}
      
            <polyline
              points={points}
              fill="none"
              stroke="#1769aa"
              strokeWidth="2"
              strokeLinejoin="round"
            />
      
            <text x={margin.left + plotWidth / 2} y={height - 5} textAnchor="middle">
              Angle from centre
            </text>
            <text
              transform={`translate(16 ${margin.top + plotHeight / 2}) rotate(-90)`}
              textAnchor="middle"
            >
              Array factor (dB)
            </text>
          </svg>
        );
      }

    const [pitch, setPitch] = useState(0.01035);
    const [frequency, setFrequency] = useState(40000);

    return(
        <div style={{ maxWidth: 720, width: "100%", margin: "0 auto" }}>
            <title>Array factor — first experiment</title>
            <h1>Array factor</h1>
    
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

            <BeamPattern spacing={pitch*frequency/343} />

            
            <label htmlFor="spacing">
                Element spacing d/λ: {(pitch*frequency/343).toFixed(2)} 
            </label>


        </div>
    );

}


export default Project7;