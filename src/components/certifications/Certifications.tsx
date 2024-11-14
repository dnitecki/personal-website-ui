import { CertificationsList } from "../../mappers/certificationMapper";
import "./Certifications.scss";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <ul className="certifications-list">
        {CertificationsList.map((item, index) => (
          <li key={index} className="certification-item">
            <div className="certification-image">
              <img src={item.image} alt={item.certificateName} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
