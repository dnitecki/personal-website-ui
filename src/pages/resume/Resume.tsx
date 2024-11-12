import Certifications from "../../components/certifications/Certifications";
import CustomTimeline from "../../components/customTimeline/CustomTimeline";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <div className="resume-content">
        <CustomTimeline />
        <Certifications />
      </div>
    </div>
  );
};

export default Resume;
