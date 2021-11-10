import React, { useContext } from "react";
import { AnalysisContext } from "./analysisContext";
import AnalysisDetail from "./analysisDetail";

function Analysis(props) {
  const { data } = useContext(AnalysisContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text px-3">Analysis</h1>
      <div className="all__news">
      <div className="row d-flex mx-0">
        {data
          ? data.data.map((analysis) => (
              <AnalysisDetail data={analysis} key={analysis.url} />
            ))
          : "Loading"}
          </div>
      </div>
    </div>
  );
}

export default Analysis;