import { SkillType, TimelineItemType } from "../types/types";
import JPMCIcon from "@assets/jpmc-icon.png";
import STNIcon from "@assets/stantec-icon.png";
import UKYIcon from "@assets/uky-icon.png";
import OneStopIcon from "@assets/one-stop-icon.png";

const SKILLS: Record<any, SkillType> = {
  PYTHON: { text: "Python" },
  UI: { text: "UI/UX" },
  ML: { text: "Machine Learning" },
  TYPE_SCRIPT: { text: "TypeScript" },
  ANGULAR: { text: "Angular" },
  AWS: { text: "AWS" },
  REACT: { text: "React" },
  BUS_DEV: {
    text: "Business Development",
  },
  GRAPHIC_DESIGN: {
    text: "Graphic Design",
  },
  MARKETING: { text: "Marketing" },
  ILLUSTRATOR: { text: "Illustrator" },
  TABLEAU: { text: "Tableau" },
  INVESTMENTS: { text: "Investments" },
  DATA_ANALYTICS: {
    text: "Data Analytics",
  },
  DATA_MODELING: {
    text: "Data Modeling",
  },
  PUBLIC_SPEAKING: {
    text: "Public Speaking",
  },
  C_SHARP: { text: "C#" },
  SQL: { text: "SQL" },
  POWER_BI: { text: "Power BI" },
  AGILE: { text: "Agile" },
  JEST: { text: "Jest" },
  CYPRESS: { text: "Cypress" },
  STORY_BOOK: { text: "Storybook" },
};
export const TimelineItems: TimelineItemType[] = [
  {
    icon: OneStopIcon,
    companyName: "One Stop Insurance",
    position: "Web Developer",
    timeFrame: "2017-2019",
    skills: [
      SKILLS.UI,
      SKILLS.BUS_DEV,
      SKILLS.GRAPHIC_DESIGN,
      SKILLS.MARKETING,
      SKILLS.ILLUSTRATOR,
    ],
    bodyText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Litora aptent placerat nostra eget augue justo justo adipiscing. Primis orci sollicitudin libero; sit egestas at feugiat suscipit.",
  },
  {
    icon: UKYIcon,
    companyName: "University of Kentucky",
    position: "Masters of Finance",
    timeFrame: "2019-2020",
    skills: [
      SKILLS.PYTHON,
      SKILLS.ML,
      SKILLS.TABLEAU,
      SKILLS.INVESTMENTS,
      SKILLS.DATA_ANALYTICS,
      SKILLS.DATA_MODELING,
      SKILLS.PUBLIC_SPEAKING,
    ],
    bodyText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Litora aptent placerat nostra eget augue justo justo adipiscing. Primis orci sollicitudin libero; sit egestas at feugiat suscipit.",
  },
  {
    icon: STNIcon,
    companyName: "Stantec Consulting",
    position: "Application Developer",
    timeFrame: "2020-2022",
    skills: [
      SKILLS.PYTHON,
      SKILLS.ML,
      SKILLS.UI,
      SKILLS.ANGULAR,
      SKILLS.C_SHARP,
      SKILLS.SQL,
      SKILLS.POWER_BI,
      SKILLS.AGILE,
    ],
    bodyText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Litora aptent placerat nostra eget augue justo justo adipiscing. Primis orci sollicitudin libero; sit egestas at feugiat suscipit.",
  },
  {
    icon: JPMCIcon,
    companyName: "JPMorganChase",
    position: "Software Engineer III",
    timeFrame: "2022-Present",
    skills: [
      SKILLS.REACT,
      SKILLS.AWS,
      SKILLS.UI,
      SKILLS.TYPE_SCRIPT,
      SKILLS.JEST,
      SKILLS.CYPRESS,
      SKILLS.STORY_BOOK,
      SKILLS.AGILE,
    ],
    bodyText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Litora aptent placerat nostra eget augue justo justo adipiscing. Primis orci sollicitudin libero; sit egestas at feugiat suscipit.",
  },
];
