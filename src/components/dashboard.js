import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: true,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: true
  };
  if (price === "0.00") {
    return <h4 className="mt-2 text-dark">Please select a currency pair</h4>;
  }
  return (
    <div className="dashboard">
      <h2 className="mt-2">{`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
    
  );
  
}

export default Dashboard;