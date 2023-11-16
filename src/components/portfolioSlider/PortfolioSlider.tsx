import React, { useState } from "react";
import "./PortfolioSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import finfetchMockup from "../../assets/FinfetchMockup.png";
import finfetchIcon from "../../assets/FinFetch-icon.png";
import insuranceMockup from "../../assets/InsuranceMockup.png";
import insuranceIcon from "../../assets/onestop-icon.png";
import { EMPTY_STRING, finfetch, insurance } from "../../utils/constants";
import { SpeedbumpProps } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function PortfolioSlider() {
  const [url, setUrl] = useState(EMPTY_STRING);
  const [appName, setAppName] = useState(EMPTY_STRING);
  const [speedbumpOpen, setSpeedbumpOpen] = useState(false);

  const handleFinfetchClick = () => {
    setUrl(finfetch.url);
    setAppName(finfetch.appName);
    setSpeedbumpOpen(true);
  };

  const handleInsuranceClick = () => {
    setUrl(insurance.url);
    setAppName(insurance.appName);
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
              <FontAwesomeIcon icon={faChevronRight} />
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
            if (clickedIndex === 0) {
              handleFinfetchClick();
            }
            if (clickedIndex === 1) {
              handleInsuranceClick();
            }
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
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-container"
        >
          <SwiperSlide
            style={{ width: "fit-content" }}
            className="swiper-slide"
          >
            <div className="item">
              <div className="portfolio-card glass">
                <div className="portfolio-image-container">
                  <img
                    className="portfolio-logo finfetch-icon"
                    src={finfetchIcon}
                    alt="icon"
                  />
                  <img
                    className="portfolio-image finfetch"
                    src={finfetchMockup}
                    alt="finfetch"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "fit-content" }}
            className="swiper-slide"
          >
            <div className="item">
              <div className="portfolio-card glass">
                <div className="portfolio-image-container">
                  <img
                    className="portfolio-logo insurance-icon"
                    src={insuranceIcon}
                    alt="icon"
                  />
                  <img
                    className="portfolio-image insurance"
                    src={insuranceMockup}
                    alt="onestopinsurance"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <div className="portfolio-card glass"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
