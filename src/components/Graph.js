import React, { useState, useEffect } from "react";
import moment from "moment";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Graph({ graphData }) {
  console.log("graph", graphData);
  const [showEthGraph, setShowEthGraph] = useState(true);
  const [chartData, setChartData] = useState({
    eth: {
      labels: [],
      datasets: [
        {
          label: "Price(Eth)",
          data: [],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    usd: {
      labels: [],
      datasets: [
        {
          label: "Price($USD)",
          data: [],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  });

  useEffect(() => {
    let nftDataEth = graphData.nftDataEth;
    let nftDataUSD = graphData.nftDataUSD;

    const ethData = {
      labels: [],
      datasets: [
        {
          label: "Price(Eth)",
          data: [],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const usdData = {
      labels: [],
      datasets: [
        {
          label: "Price($USD)",
          data: [],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    nftDataEth.forEach((item) => {
      ethData.labels.push(moment(item.time).format("YYYY-MM-DD"));
      ethData.datasets[0].data.push(item.price);
    });

    nftDataUSD.forEach((item) => {
      usdData.labels.push(moment(item.time).format("YYYY-MM-DD"));
      usdData.datasets[0].data.push(item.price);
    });

    setChartData({ eth: ethData, usd: usdData });
  }, [graphData]);

  const options = {
    
  };

  const handleToggleChange = () => {
    setShowEthGraph(!showEthGraph);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={!showEthGraph}
          onChange={handleToggleChange}
        />
        Show in USD
      </label>
      {showEthGraph ? (
        <Line options={options} data={chartData.eth} />
      ) : (
        <Line options={options} data={chartData.usd} />
      )}
    </div>
  );
}
export default Graph;
