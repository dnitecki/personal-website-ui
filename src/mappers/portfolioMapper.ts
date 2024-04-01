import { FINFETCH, INSURANCE, MEDIA_FILES, PHOTOS } from "../utils/constants";
import { PortfolioItemType } from "../utils/types";

export const PortfolioItems: PortfolioItemType[] = [
  {
    icon: {
      src: MEDIA_FILES.finfetchIcon,
      className: "finfetch-icon",
    },
    coverImage: {
      src: MEDIA_FILES.finfetchMockup,
      className: "finfetch",
    },
    url: FINFETCH.url,
    appName: FINFETCH.appName,
  },
  {
    icon: {
      src: MEDIA_FILES.dnLogo,
      className: "finfetch-icon",
    },
    coverImage: {
      src: MEDIA_FILES.photoMockup,
      className: "photo-mock",
    },
    url: PHOTOS.url,
    appName: PHOTOS.appName,
  },
  {
    icon: {
      src: MEDIA_FILES.oneStopIcon,
      className: "insurance-icon",
    },
    coverImage: {
      src: MEDIA_FILES.oneStopMockup,
      className: "insurance",
    },
    url: INSURANCE.url,
    appName: INSURANCE.appName,
  },
];
