import "./CustomTimeline.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import JPMCIcon from "../../assets/jpmc-icon.png";
import STNIcon from "../../assets/stantec-icon.png";
import UKYIcon from "../../assets/kentucky-logo.webp";
import OneStopIcon from "../../assets/one-stop-logo.png";

const CustomTimeline = () => {
  return (
    <div className="timeline-container">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: "white" }}>
              <div className="timeline-icon">
                <img src={OneStopIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">Content</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: "white" }}>
              <div className="timeline-icon">
                <img src={UKYIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">Content</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: "white" }}>
              <div className="timeline-icon">
                <img src={STNIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">Content</div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: "white" }}>
              <div className="timeline-icon">
                <img src={JPMCIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">Content</div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
