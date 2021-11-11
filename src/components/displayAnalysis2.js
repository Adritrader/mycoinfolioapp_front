import React from "react";
import AnalysisRow from "./analysisRow2";

const titles = ["#", "Content", "Price", "Price Change","24h Volume"];

const DisplayAnalysis = ({ analysis }) => {
    
    if (!analysis) return <div>no coins</div>

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead className="text-bold">
            <tr>
                {titles.map((title, i) => (
                    <td key={i}>{title}</td>
                ))}
            </tr>
            </thead>
            <tbody>
            {
                <AnalysisRow key={analysis.id} analysis={analysis} />
            }
            </tbody>
        </table>
    );
};

export default DisplayAnalysis;