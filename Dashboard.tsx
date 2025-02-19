import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const data = {
    labels: ["User1", "User2"],
    datasets: [{ data: [65, 59], backgroundColor: ["#3e95cd", "#8e5ea2"] }],
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="chart-container">
        <Bar data={data} />
      </div>
    </div>
  );
}
