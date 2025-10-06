import React from "react";
import '../style.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Doughnut , Bar} from 'react-chartjs-2';


ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend,  LinearScale, BarElement);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
      data: [9, 16, 25],
      label: ' Quantity',
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
      maxBarWidth:100,
    },
  ],
};


function Project2() {
    return(
        <div>
            <h1>Project 2 - Charts</h1>
            <div>
                <p>
                Let's try the React components <a href="https://react-chartjs-2.js.org" target="_blank"> react-chartjs-2</a>.
                </p>
                <p>We will start with 3 data points: 9, 16, and 25</p>
            </div>
            
            
            <h2>Here we display them using a doughnut graph</h2>

            <div>
                <Doughnut data={data} width={300} height={300} options={{ maintainAspectRatio:false}}/>
            </div>

            <h2>Here we display them using a bar graph</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Bar data={data} width={300}  height={300} options={{ maintainAspectRatio:false, responsive:false}}/>
            </div>


        </div>
        
    );
}

export default Project2;