import "./CustomTimeline.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent/TimelineOppositeContent";
import { COLORS } from "../../constants/constants";
import { TimelineItems } from "../../mappers/timelineMapper";

const CustomTimeline = () => {
  return (
    <div className="timeline-container">
      <Timeline position="alternate">
        {TimelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <div
                className={`timeline-opposite-content ${
                  index % 2 === 0 && "even"
                }`}
              >
                <h2>{item.timeFrame}</h2>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ bgcolor: COLORS.SECONDARY }}>
                <div className="timeline-icon">
                  <img src={item.icon} alt={item.companyName} />
                </div>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="content-container">
                <div className="timeline-card">
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h2>{item.position}</h2>
                      <h3>{item.companyName}</h3>
                      <div
                        className={`timeline-chips ${index % 2 != 0 && "odd"}`}
                      >
                        {item.skills.map((skill, index) => (
                          <div className="chip" key={index}>
                            <p>{skill.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="timeline-body">{item.bodyText}</div> */}
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
