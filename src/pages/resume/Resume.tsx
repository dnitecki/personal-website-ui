import Certifications from "../../components/certifications/Certifications";
import CustomTimeline from "../../components/customTimeline/CustomTimeline";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <CustomTimeline />
        <Certifications />
      </div>
    </div>
  );
};

export default Resume;
