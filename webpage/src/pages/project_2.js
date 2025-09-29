import React from "react";
import '../style.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, layouts, Scale, scales } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Quantity',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 0,
      spacing: 2,
    },
  ],
};


function Project2() {
    return(
        <div>
            <h1>Hello Project 2!!!</h1>
            <div>
                <Doughnut data={data} width={300} height={300} options={{ maintainAspectRatio: false}}/>
            </div>
        </div>
        
    );
}

export default Project2;