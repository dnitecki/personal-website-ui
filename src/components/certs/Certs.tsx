import React, { useState } from "react";
import "./Certs.scss";
import { MEDIA_FILES } from "../../utils/constants";

export default function Certs() {
  const [cert1Clicked, setCert1Clicked] = useState(false);
  const [cert2Clicked, setCert2Clicked] = useState(false);
  const [cert3Clicked, setCert3Clicked] = useState(false);
  const [cert4Clicked, setCert4Clicked] = useState(false);

  const handleCert1Click = () => {
    setCert1Clicked(!cert1Clicked);
    setCert2Clicked(false);
    setCert3Clicked(false);
    setCert4Clicked(false);
  };
  const handleCert2Click = () => {
    setCert1Clicked(false);
    setCert2Clicked(!cert2Clicked);
    setCert3Clicked(false);
    setCert4Clicked(false);
  };
  const handleCert3Click = () => {
    setCert1Clicked(false);
    setCert2Clicked(false);
    setCert3Clicked(!cert3Clicked);
    setCert4Clicked(false);
  };
  const handleCert4Click = () => {
    setCert1Clicked(false);
    setCert2Clicked(false);
    setCert3Clicked(false);
    setCert4Clicked(!cert4Clicked);
  };

  return (
    <div className="cert-container">
      <div className="glass cert" onClick={handleCert1Click}>
        <div
          className={`cert-bg ${cert1Clicked ? "cert-closed" : "cert-open"}`}
        ></div>
        <div className={`cert-front ${cert1Clicked ? "visible" : "hidden"}`}>
          {cert1Clicked && <h2>Add Info</h2>}
        </div>
        <div className="cert-back">
          <img
            className="cert-icon"
            src={MEDIA_FILES.awsDevAssoc}
            alt="AWS Developer Associate"
          />
        </div>
      </div>
      <div className="glass cert" onClick={handleCert2Click}>
        <div
          className={`cert-bg ${cert2Clicked ? "cert-closed" : "cert-open"}`}
        ></div>
        <div className={`cert-front ${cert2Clicked ? "visible" : "hidden"}`}>
          {cert2Clicked && <h2>Add Info</h2>}
        </div>
        <div className="cert-back">
          <img
            className="cert-icon"
            src={MEDIA_FILES.awsCloudPrac}
            alt="AWS Cloud Practitioner"
          />
        </div>
      </div>
      <div className="glass cert" onClick={handleCert3Click}>
        <div
          className={`cert-bg ${cert3Clicked ? "cert-closed" : "cert-open"}`}
        ></div>
        <div className={`cert-front ${cert3Clicked ? "visible" : "hidden"}`}>
          {cert3Clicked && <h2>Add Info</h2>}
        </div>
        <div className="cert-back">
          <img
            className="cert-icon"
            src={MEDIA_FILES.ibmDataScience}
            alt="IBM Data Science Professional"
          />
        </div>
      </div>
      <div className="glass cert" onClick={handleCert4Click}>
        <div
          className={`cert-bg ${cert4Clicked ? "cert-closed" : "cert-open"}`}
        ></div>
        <div className={`cert-front ${cert4Clicked ? "visible" : "hidden"}`}>
          {cert4Clicked && <h2>Add Info</h2>}
        </div>
        <div className="cert-back">
          <img
            className="cert-icon"
            src={MEDIA_FILES.ibmPythonProject}
            alt="IBM Python"
          />
        </div>
      </div>
    </div>
  );
}
