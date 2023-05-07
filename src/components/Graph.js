import React ,{useEffect}from 'react'
import moment from "moment"

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
      label: 'Price($ USD)',
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

useEffect(() => {
  data.labels=[]
  data.datasets[0].data=[]
  graphData.forEach((item) => {
    data.labels.push(moment(item.time).format("YYYY-MM-DD"));
    data.datasets[0].data.push(item.price);
  });
}, [graphData])

  return (
    <Line options={options} data={data} />
  )
}
export default Graph