import React from 'react';
import axios from "axios";
import TableCoins from "./tableCoins";
import { useEffect, useState } from "react";


function Coins() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const getData = async () => {
        try {
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            );
            setCoins(res.data);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div id="table-coin" className="row">
                <div className="col-3 ml-0 pl-0">
                    <input type="text" placeholder="Search a Coin"
                           className="form-control bg-dark text-light border-0 mt-4 text-center"
                           autoFocus
                           onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <TableCoins coins={coins} search={search} />
            </div>
        </div>
    );
}

export default Coins;