export type MainPageType = {
  id: string;
  className: string;
  headerText?: string;
  component: React.FC;
};
export type SpeedbumpProps = {
  url: string;
  appName: string;
};
export type PortfolioItemType = {
  url: string;
  appName: string;
  icon: {
    src: any;
    className: string;
  };
  coverImage: {
    src: any;
    className: string;
  };
};
export type SkillType = {
  text: string;
};
export type EmailJsError = {
  status: number;
  text: string;
};

export type TimelineItemType = {
  icon: any;
  companyName: string;
  position: string;
  timeFrame: string;
  skills: SkillType[];
  bodyText: string;
};

export type CertificationType = {
  image: any;
  certificateName: string;
};
