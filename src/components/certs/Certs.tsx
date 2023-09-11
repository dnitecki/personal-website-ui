import React from "react";
import "./Certs.scss";
import cloudPractitioner from "../../assets/AWSCP.png";
import ibmCert from "../../assets/IBMPC.png";
import ibmPython from "../../assets/IBMPY.png";

export default function Certs() {
  return (
    <div className="cert-container">
      <div className="glass cert">
        <img
          className="cert-icon"
          src={cloudPractitioner}
          alt="AWS Cloud Practitioner"
        />
      </div>
      <div className="glass cert">
        <img className="cert-icon" src={ibmCert} alt="AWS Cloud Practitioner" />
      </div>
      <div className="glass cert">
        <img
          className="cert-icon"
          src={ibmPython}
          alt="AWS Cloud Practitioner"
        />
      </div>
    </div>
  );
}
