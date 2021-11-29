import React, { useContext } from "react";
import { EventsContext } from "../contexts/eventsContext";
import EventsDetail from "./eventsDetail";

function Events(props) {
  const { data } = useContext(EventsContext);
  

  return (
    <div>
      <h1 className="head__text px-3">Events</h1>
      <div className="all__news">
      <div className="row d-flex mx-0">
        {data
          ? data.data.map((events) => (
              <EventsDetail data={events} key={events.url} />
            ))
          : "Loading"}
          </div>
      </div>
    </div>
  );
}

export default Events;