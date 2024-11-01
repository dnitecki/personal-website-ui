import "./CustomTimeline.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import JPMCIcon from "../../assets/jpmc-icon.png";
import STNIcon from "../../assets/stantec-icon.png";
import UKYIcon from "../../assets/uky-icon.png";
import OneStopIcon from "../../assets/one-stop-icon.png";
import { COLORS } from "../../constants/constants";

const CustomTimeline = () => {
  return (
    <div className="timeline-container">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: COLORS.SECONDARY }}>
              <div className="timeline-icon">
                <img src={OneStopIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">
              <div className="timeline-card">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h2>JPMorganChase</h2>
                    <div className="timeline-chips">
                      <div className="chip">Chip</div>
                      <div className="chip">Chip</div>
                      <div className="chip">Chip</div>
                      <div className="chip">Chip</div>
                      <div className="chip">Chip</div>
                      <div className="chip">Chip</div>
                    </div>
                  </div>
                  <div className="timeline-body">Body</div>
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: COLORS.SECONDARY }}>
              <div className="timeline-icon">
                <img src={UKYIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">
              <div className="timeline-card">Content</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: COLORS.SECONDARY }}>
              <div className="timeline-icon">
                <img src={STNIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">
              <div className="timeline-card">Content</div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ bgcolor: COLORS.SECONDARY }}>
              <div className="timeline-icon">
                <img src={JPMCIcon} />
              </div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="content-container">
              <div className="timeline-card">Content</div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
