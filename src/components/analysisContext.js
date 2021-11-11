import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AnalysisContext = createContext();

export const AnalysisContextProvider = (props) => {
  const [data, setData] = useState({});
  


  

  useEffect(() => {
    axios
      .get(
        `http://app.mycoinfolio/api/v1/1/analysis`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  

  return (
    <AnalysisContext.Provider value={{ data }}>
      {props.children}
    </AnalysisContext.Provider>
  );
};