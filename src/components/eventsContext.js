import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const EventsContext = createContext();

export const EventsContextProvider = (props) => {
  const [data, setData] = useState();
  

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/events`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

  }, []);

  return (
    <EventsContext.Provider value={{ data }}>
      {props.children}
    </EventsContext.Provider>
  );
};