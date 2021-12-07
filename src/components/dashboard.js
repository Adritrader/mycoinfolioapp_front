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
    return <h4 className="mt-3">Please select a currency pair</h4>;
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
        <div className="dashboard">
          <h2 id="current-price" className="mt-3 mx-5">Current Price: {`$${price}`}</h2>

          <div className="chart-container col-9">
            <Line data={data} options={opts} />
          </div>
          </div>
          </div>
        </div>
    </div>
    
  );
  
}

export default Dashboard;