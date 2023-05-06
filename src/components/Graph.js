import React from 'react'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: [],
  datasets: [
    {
      label: 'Price',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};
const options = {

   
  
}

function Graph({graphData}) {
console.log("graphData",graphData)

graphData.forEach((item) => {
  data.labels.push(item.time);
  data.datasets[0].data.push(item.price);
});

  return (
    <Line options={options} data={data} />
  )
}
export default Graph