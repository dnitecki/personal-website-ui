import React, { useState } from "react";
import "./PortfolioSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import finfetchMockup from "../../assets/FinfetchMockup.png";
import finfetchIcon from "../../assets/FinFetch-icon.png";
import insuranceMockup from "../../assets/InsuranceMockup.png";
import insuranceIcon from "../../assets/onestop-icon.png";
import { EMPTY_STRING, finfetch, insurance } from "../../utils/constants";
import { speedbumpProps } from "../../utils/types";
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

  const SpeedBump = ({ url, appName }: speedbumpProps) => {
    return (
      <div className="speedbump-container">
        <div className="speedbump-text">
          <h3>
            Navigating to <strong>{appName}</strong>
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
    );
  };

  return (
    <div className="slider-container">
      {speedbumpOpen && <SpeedBump url={url} appName={appName} />}
      <Swiper
        effect={"coverflow"}
        centeredSlides={false}
        loop={false}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container"
      >
        <SwiperSlide onClick={handleFinfetchClick}>
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
        <SwiperSlide onClick={handleInsuranceClick}>
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
  );
}
