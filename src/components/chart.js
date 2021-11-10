import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./dashboard";
import { formatData } from "./utils";
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';



export default function Chart() {
  const [currencies, setcurrencies] = useState([]);
  const [pair, setpair] = useState("");
  const [price, setprice] = useState("0.00");
  const [pastData, setpastData] = useState({});
  const ws = useRef(null);

  let first = useRef(false);
  const url = "https://api.pro.coinbase.com";

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

    let pairs = [];

    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));
      
      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          return pair;
        }
      });

      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1;
        }
        if (a.base_currency > b.base_currency) {
          return 1;
        }
        return 0;
      });

      //console.log(filtered);
      setcurrencies(filtered);

      first.current = true;
    };

    apiCall();
  }, []);

  useEffect(() => {
    if (!first.current) {
      
      return;
    }

    
    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"]
    };
    let jsonMsg = JSON.stringify(msg);
    ws.current.send(jsonMsg);

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
    const fetchHistoricalData = async () => {
      let dataArr = [];
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data));
      
      let formattedData = formatData(dataArr);
      setpastData(formattedData);
    };

    fetchHistoricalData();

    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);
      if (data.type !== "ticker") {
        return;
      }

      if (data.product_id === pair) {
        setprice(data.price);
      }
    };
  }, [pair]);

  const handleSelect = (e) => {
    let unsubMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"]
    };
    let unsub = JSON.stringify(unsubMsg);

    ws.current.send(unsub);

    setpair(e.target.value);
  };

  
  return (
   
    <div className="container-fluid mt-2">
      {
        <>
        <div className="row">
          <div className="col-12">

            <Breadcrumb>
              <Breadcrumb.Item href="#">News</Breadcrumb.Item>
            </Breadcrumb>

          </div>
        </div>
        
        <div className="container mt-2">
          <div className="row">
            <div className="col-2">
              <select className="mt-3 form-control form-control-sm" name="currency" value={pair} onChange={handleSelect}>
                {currencies.map((cur, idx) => {
                return (
                  <option key={idx} value={cur.id}>
                  {cur.display_name}
                </option>
                );
                })}
              </select>
            </div>
          </div>
        </div>
        </>
      }
      <Dashboard price={price} data={pastData} />
    </div>
  );
  

}