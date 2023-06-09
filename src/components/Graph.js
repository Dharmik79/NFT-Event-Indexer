import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Graph.css"
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
const options = {
  responsive: true,

};

function Graph({ graphData }) {
 
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

  const handleToggleChange = () => {
    setShowEthGraph(!showEthGraph);
  };

  return (
    <div>
    <div className="toggle-container">
    <span className="toggle-label">ETH</span>
    <label className="switch">
      <input
        type="checkbox"
        checked={!showEthGraph}
        onChange={handleToggleChange}
      />
      <span className="slider round" />

    </label>
    <span className="toggle-label">USD</span>

  </div>
      {showEthGraph ? (
        <Line options={options} data={chartData.eth}  height={"100%"} />
      ) : (
        <Line options={options} data={chartData.usd}  height={"100%"} />
      )}
    </div>
  );
}
export default Graph;
