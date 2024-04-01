import React, { useState } from "react";
import "./PortfolioSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { EMPTY_STRING } from "../../utils/constants";
import { SpeedbumpProps } from "../../utils/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { PortfolioItems } from "../../mappers/portfolioMapper";

export default function PortfolioSlider() {
  const [url, setUrl] = useState(EMPTY_STRING);
  const [appName, setAppName] = useState(EMPTY_STRING);
  const [speedbumpOpen, setSpeedbumpOpen] = useState(false);

  const handlePortfolioClick = (url: string, appName: string) => {
    setUrl(url);
    setAppName(appName);
    setSpeedbumpOpen(true);
  };

  const handleSpeedbumpClose = () => {
    setUrl(EMPTY_STRING);
    setAppName(EMPTY_STRING);
    setSpeedbumpOpen(false);
  };

  const handleSpeedbumpNavigation = (url: string) => {
    window.open(url, "_blank");
    setSpeedbumpOpen(false);
    setUrl(EMPTY_STRING);
    setAppName(EMPTY_STRING);
  };

  const SpeedBump = ({ url, appName }: SpeedbumpProps) => {
    return (
      <div className="speedbump-bg">
        <div className="speedbump-container">
          <div className="speedbump-text">
            <h3>
              Navigate to&nbsp;
              {appName}?
            </h3>
          </div>
          <div className="speedbump-buttons">
            <button className="speedbump-close" onClick={handleSpeedbumpClose}>
              <h3>Close</h3>
            </button>
            <button
              className="speedbump-proceed"
              onClick={() => {
                handleSpeedbumpNavigation(url);
              }}
            >
              <h3>Proceed</h3>
              <ChevronRightIcon fontSize="inherit" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="slider-container">
        {speedbumpOpen && <SpeedBump url={url} appName={appName} />}
        <Swiper
          onClick={(swiper: any) => {
            const clickedIndex = swiper.clickedIndex;
            handlePortfolioClick(
              PortfolioItems[clickedIndex].url,
              PortfolioItems[clickedIndex].appName
            );
          }}
          slidesOffsetBefore={24}
          spaceBetween={24}
          slideToClickedSlide={true}
          updateOnWindowResize={true}
          preventClicks={false}
          preventClicksPropagation={false}
          loop={false}
          slidesPerView={"auto"}
          slidesPerGroupAuto={true}
          style={{ overflow: "visible", width: "100%" }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container"
        >
          {PortfolioItems.map((item) => (
            <SwiperSlide
              style={{ width: "fit-content" }}
              className="swiper-slide"
            >
              <div className="item">
                <div className="portfolio-card glass">
                  <div className="portfolio-image-container">
                    <img
                      className={`portfolio-logo ${item.icon.className}`}
                      src={item.icon.src}
                      alt="icon"
                    />
                    <img
                      className={`portfolio-image ${item.coverImage.className}`}
                      src={item.coverImage.src}
                      alt="finfetch"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
