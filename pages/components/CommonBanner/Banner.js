import Head from "next/head";
import React from "react";
import Image from "next/image";

export const Banner = ({ bg, title }) => {
  return (
    <>
      <section
        className="sub-banner v1 bg-image dark-bg bg-box-none text-left"
        id="SubBannerV1"
        data-onvisible="show"
      >
        <picture className="img-bg bg-position">
          <source
            media="(max-width: 500px)"
            srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            data-src="/assets/sub-banners/exercising-banner-mobile.jpg"
          />
          <Image
            layout="fill"
            src={bg}
            className="subBanner"
            style={{ opacity: "0.4 !important" }}
            alt=""
            data-src="/assets/sub-banners/exercising-banner.jpg"
          />
        </picture>
        <div className="main">
          <div
            className="bg-box side-padding-medium vertical-padding info text-align center-500 box-flair"
            id="SubBannerV1Info"
          >
            <div className="flair-border">
              <span className="flair-1"></span>
              <span className="flair-2"></span>

              <span className="title-font title-color-1">
                <strong>{title}</strong>
              </span>

              <svg className="header-flair">
                <use href="../includes/flair.svg#header"></use>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
