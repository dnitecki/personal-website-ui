import { TimelineItemType } from "../types/types";
import JPMCIcon from "../assets/jpmc-icon.png";
import STNIcon from "../assets/stantec-icon.png";
import UKYIcon from "../assets/uky-icon.png";
import OneStopIcon from "../assets/one-stop-icon.png";

export const TimelineItems: TimelineItemType[] = [
  {
    icon: OneStopIcon,
    companyName: "One Stop Insurance",
    position: "Web Developer",
    timeFrame: "2017-2019",
    skills: [
      { text: "UI/UX" },
      { text: "Business Development" },
      { text: "Graphic Design" },
      { text: "Marketing" },
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
      { text: "Python" },
      { text: "Machine Learning" },
      { text: "Data Analytics" },
      { text: "Investments" },
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
      { text: "Python" },
      { text: "Angular" },
      { text: "Machine Learning" },
      { text: "UI/UX" },
      { text: "C#" },
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
      { text: "React" },
      { text: "AWS" },
      { text: "UI/UX" },
      { text: "TypeScript" },
      { text: "Jest" },
    ],
    bodyText:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Litora aptent placerat nostra eget augue justo justo adipiscing. Primis orci sollicitudin libero; sit egestas at feugiat suscipit.",
  },
];
