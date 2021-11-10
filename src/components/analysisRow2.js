import React from "react";

const AnalysisRow = ({ analysis }) => {
    return (
        <tr>
            <td>
            <a href={analysis.title}><img
                    src={analysis.image}
                    alt=""
                    className="img-fluid me-4"
                    style={{ width: "5%" }}
                /></a>
                <a href={analysis.title}><span className="ms-3 text-white text-uppercase"> {analysis.date}</span></a>
            </td>

            <td>{analysis.content}</td>

            <td
                className={
                    analysis.content
                }
            >
                 {analysis.content}
            </td>

            <td>
                $ {analysis.content}
            </td>
        </tr>
        
    );
};

export default AnalysisRow;