import React from "react";
import CoinRow from "./coinRow";

const titles = ["#", "Coin", "Price", "Price Change","24h Volume"];

const TableCoins = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!coins) return <div>no coins</div>

    return (
        <table id="table-coin" className="table table-dark mt-4 table-hover">
            <thead className="text-bold">
            <tr>
                {titles.map((title, i) => (
                    <td id={"td"+i} key={i}>{title}</td>
                ))}
            </tr>
            </thead>
            <tbody>
            {filteredCoins.map((coin, index) => (
                <CoinRow id={"tdb"+index} key={coin.id} coin={coin} index={index + 1} />
            ))}
            </tbody>
        </table>
    );
};

export default TableCoins;