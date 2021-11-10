import React from 'react';
import axios from "axios";
import DisplayAnalysis from "./displayAnalysis";
import { useEffect, useState } from "react";


function Analysis() {
    const [analysis, setAnalysis] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get(
                "http://app.mycoinfolio/api/v1/analysis"
            );
            setAnalysis(res.data);
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
            <div className="row">
                <div className="col-3 ml-0 pl-0">
                    
                </div>

                <DisplayAnalysis analysis={analysis}/>
            </div>
        </div>
    );
}

export default Analysis;