import React from "react";

const CoinRow = ({ coin, index }) => {
    return (
        <tr>
            <td className="text-muted">{index}</td>
            <td>
            <a href={coin.name}><img
                    src={coin.image}
                    alt=""
                    className="img-fluid me-4"
                    style={{ width: "5%" }}
                /></a>
                <a href={coin.name}><span className="ms-3 text-muted text-uppercase"> {coin.symbol}</span></a>
            </td>

            <td>$ {coin.current_price.toLocaleString()}</td>

            <td
                className={
                    coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
                }
            >
                 {coin.price_change_percentage_24h}
            </td>

            <td>
                $ {coin.total_volume.toLocaleString()}
            </td>
        </tr>
        
    );
};

export default CoinRow;