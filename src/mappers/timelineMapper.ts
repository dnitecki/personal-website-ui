import { SkillType, TimelineItemType } from "../types/types";
import JPMCIcon from "../assets/jpmc-icon.png";
import STNIcon from "../assets/stantec-icon.png";
import UKYIcon from "../assets/uky-icon.png";
import OneStopIcon from "../assets/one-stop-icon.png";

const SKILLS: Record<any, SkillType> = {
  PYTHON: { text: "Python", color: "#7B1E83", fontColor: "#FFFFFF" },
  UI: { text: "UI/UX", color: "#612081", fontColor: "#FFFFFF" },
  ML: { text: "Machine Learning", color: "#3B247E", fontColor: "#FFFFFF" },
  TYPE_SCRIPT: { text: "TypeScript", color: "#22277C", fontColor: "#FFFFFF" },
  ANGULAR: { text: "Angular", color: "#7B1E83", fontColor: "#FFFFFF" },
  AWS: { text: "AWS", color: "#612081", fontColor: "#FFFFFF" },
  REACT: { text: "React", color: "#3B247E", fontColor: "#FFFFFF" },
  BUS_DEV: {
    text: "Business Development",
    color: "#22277C",
    fontColor: "#FFFFFF",
  },
  GRAPHIC_DESIGN: {
    text: "Graphic Design",
    color: "#7B1E83",
    fontColor: "#FFFFFF",
  },
  MARKETING: { text: "Marketing", color: "#612081", fontColor: "#FFFFFF" },
  ILLUSTRATOR: { text: "Illustrator", color: "#3B247E", fontColor: "#FFFFFF" },
  TABLEAU: { text: "Tableau", color: "#22277C", fontColor: "#FFFFFF" },
  INVESTMENTS: { text: "Investments", color: "#7B1E83", fontColor: "#FFFFFF" },
  DATA_ANALYTICS: {
    text: "Data Analytics",
    color: "#612081",
    fontColor: "#FFFFFF",
  },
  DATA_MODELING: {
    text: "Data Modeling",
    color: "#3B247E",
    fontColor: "#FFFFFF",
  },
  PUBLIC_SPEAKING: {
    text: "Public Speaking",
    color: "#22277C",
    fontColor: "#FFFFFF",
  },
  C_SHARP: { text: "C#", color: "#7B1E83", fontColor: "#FFFFFF" },
  SQL: { text: "SQL", color: "#612081", fontColor: "#FFFFFF" },
  POWER_BI: { text: "Power BI", color: "#3B247E", fontColor: "#FFFFFF" },
  AGILE: { text: "Agile", color: "#22277C", fontColor: "#FFFFFF" },
  JEST: { text: "Jest", color: "#7B1E83", fontColor: "#FFFFFF" },
  CYPRESS: { text: "Cypress", color: "#612081", fontColor: "#FFFFFF" },
  STORY_BOOK: { text: "Storybook", color: "#3B247E", fontColor: "#FFFFFF" },
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
