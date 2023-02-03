import React from "react";
import da from "../Assests/da.json";

const Work = () => {
  return (
    <div id="timeline">
      <marquee> <h1>Practice Areas</h1></marquee>
      <div className="timelineBox">
        {da.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.description}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
     
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Work;