import React, { useContext } from "react";
import { AnalysisContext } from "../contexts/analysisContext";
import AnalysisDetail from "./analysisDetail";

function Analysis(props) {
  const { data } = useContext(AnalysisContext);
  
  
  return (
    <div>
      <h1 className="head__text px-3">Analysis</h1>
      <div className="all__news">
      <div className="row d-flex mx-0">
        {Object
          && Object.values(data).map((analysis) => (
              <AnalysisDetail data={analysis} key={analysis.id} />
            ))
          }

          
          </div>
      </div>
    </div>
  );
}

export default Analysis;