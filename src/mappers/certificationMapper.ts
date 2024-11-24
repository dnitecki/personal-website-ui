import { CertificationType } from "../types/types";
import AWSPractitioner from "@assets/aws-certified-cloud-practitioner.png";
import AWSDeveloper from "@assets/aws-certified-developer-associate.png";
import AWSArchitect from "@assets/aws-certified-solutions-architect-associate.png";
import IBMDataScience from "@assets/ibm-data-science-professional-certificate.png";
import IBMPython from "@assets/python-project-for-data-science.png";

export const CertificationsList: CertificationType[] = [
  {
    image: AWSDeveloper,
    certificateName: "AWS Developer Associate",
  },
  {
    image: AWSArchitect,
    certificateName: "AWS Solutions Architect",
  },
  {
    image: AWSPractitioner,
    certificateName: "AWS Cloud Practitioner",
  },
  {
    image: IBMPython,
    certificateName: "IBM Python",
  },
  {
    image: IBMDataScience,
    certificateName: "IBM Data Science Professional",
  },
];
