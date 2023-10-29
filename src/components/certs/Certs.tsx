import React, { useState } from "react";
import "./Certs.scss";
import cloudPractitioner from "../../assets/AWSCP.png";
import ibmCert from "../../assets/IBMPC.png";
import ibmPython from "../../assets/IBMPY.png";
import associateDeveloper from "../../assets/AWSDA.png";

export default function Certs() {
  const [cert1Clicked, setCert1Clicked] = useState(false);
  const [cert2Clicked, setCert2Clicked] = useState(false);
  const [cert3Clicked, setCert3Clicked] = useState(false);
  const [cert4Clicked, setCert4Clicked] = useState(false);

  const handleCert1Click = () => {
    setCert1Clicked(!cert1Clicked);
  };
  const handleCert2Click = () => {
    setCert2Clicked(!cert2Clicked);
  };
  const handleCert3Click = () => {
    setCert3Clicked(!cert3Clicked);
  };
  const handleCert4Click = () => {
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
            src={associateDeveloper}
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
            src={cloudPractitioner}
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
            src={ibmCert}
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
          <img className="cert-icon" src={ibmPython} alt="IBM Python" />
        </div>
      </div>
    </div>
  );
}
