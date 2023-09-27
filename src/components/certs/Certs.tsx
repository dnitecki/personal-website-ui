import React from "react";
import "./Certs.scss";
import cloudPractitioner from "../../assets/AWSCP.png";
import ibmCert from "../../assets/IBMPC.png";
import ibmPython from "../../assets/IBMPY.png";
import associateDeveloper from "../../assets/AWSDA.png";

export default function Certs() {
  return (
    <div className="cert-container">
      <div className="glass cert">
        <img
          className="cert-icon"
          src={associateDeveloper}
          alt="AWS Developer Associate"
        />
      </div>
      <div className="glass cert">
        <img
          className="cert-icon"
          src={cloudPractitioner}
          alt="AWS Cloud Practitioner"
        />
      </div>
      <div className="glass cert">
        <img
          className="cert-icon"
          src={ibmCert}
          alt="IBM Data Science Professional"
        />
      </div>
      <div className="glass cert">
        <img className="cert-icon" src={ibmPython} alt="IBM Python" />
      </div>
    </div>
  );
}
