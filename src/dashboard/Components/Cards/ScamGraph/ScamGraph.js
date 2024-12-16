import React from "react";
import Timeline from "react-calendar-timeline";
// import "react-calendar-timeline/lib/Timeline.css"; // Import styles for the timeline

import style from "./ScamGraph.module.css";

// Define the events (scam detections) on the timeline
const events = [
  { id: 1, group: 1, title: "Scam detected", start_time: new Date(2024, 11, 1), end_time: new Date(2024, 11, 1, 1) },
  { id: 2, group: 1, title: "Scam detected", start_time: new Date(2024, 11, 2), end_time: new Date(2024, 11, 2, 1) },
  { id: 3, group: 1, title: "Scam detected", start_time: new Date(2024, 11, 5), end_time: new Date(2024, 11, 5, 1) },
  { id: 4, group: 1, title: "Scam detected", start_time: new Date(2024, 11, 8), end_time: new Date(2024, 11, 8, 1) },
  { id: 5, group: 1, title: "Scam detected", start_time: new Date(2024, 11, 12), end_time: new Date(2024, 11, 12, 1) },
  { id: 6, group: 1, title: "Scam detected", start_time: new Date(2024, 11, 15), end_time: new Date(2024, 11, 15, 1) },
];

const groups = [
  { id: 1, title: "Scam Detection Events" },
];

export default function ScamDetectionTimelineCard() {
  return (
    <div className={style.cardContainer}>
      <h3 className={style.title}>Scam Detection Timeline</h3>
      <p className={style.description}>The timeline below shows when scams were detected over the last few weeks.</p>

      <div style={{ height: "400px", marginTop: "20px" }}>
        <Timeline
          groups={groups}
          items={events}
          defaultTimeStart={new Date(2024, 11, 1)}
          defaultTimeEnd={new Date(2024, 11, 20)}
          itemHeight={30}
          stackItems
        />
      </div>
    </div>
  );
}
