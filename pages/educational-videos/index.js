import Head from "next/head";
import React, { useState } from "react";
import { Banner } from "../components/CommonBanner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Link from "next/link";
import axios from "axios";

export const EducationalVideos = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [patientType, setPatientType] = useState("");
  const [message, setMessage] = useState("");

  const HandleForm = (e) => {
    e.preventDefault();

    var formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("your-number", PhoneNumber);
    formData.append("your-email", email);
    formData.append("patientType", patientType);
    formData.append("your-message", message);

    axios({
      method: "post",
      url: "https://www.mypremierpain.com/wp-json/contact-form-7/v1/contact-forms/4657/feedback",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="../cms/includes/zjkh7t9a672.2203240648002.css"
          data-require='["cms","cms-behave"]'
        />
      </Head> */}

      <Header />
      <Banner
        title="EDUCATIONAL VIDEOS"
        bg="/assets/sub-banners/sub-banner-v1-bg.jpg"
      />

      <section
        className="content v12 light-bg large-padding col-50-50 items-spaced vertical-top text-left"
        id="ContentV12"
        data-onvisible="show"
      >
        <div className="main" data-content="true">
          <header
            className="text-align no-pad bottom-margin-tiny"
            id="Contentv12Header"
          >
            <h1>Educational Videos</h1>
          </header>
          <div className="flex-spaced-between-block-1024-margined item-widths item-spacing">
            <div className="half">
              <div className="content-style" id="Contentv12Content">
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_1f2e41b7&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_1e0d0bde&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_7f0ca2cb&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_1babedf6&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_a6d812f1&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_628939fe&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_ecbe21e8&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_66effcf5&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_543ec6a2&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div style={{ width: "100%", maxWidth: "720px" }}>
                  <div style={{ paddingTop: "56.25%", position: "relative" }}>
                    <br />
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        border: "solid #dedede 1px",
                      }}
                      src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_918ee823&amp;fsmode=on"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      referrerpolicy="unsafe-url"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="half content-style" id="Contentv12ContentB">
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_87c88b91&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_b05c625e&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_eb20c472&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_48582b8c&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_b56cf304&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_2aaf4d4d&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_55eef6db&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_3643d6a9&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_93fc11e6&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_54d34718&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "720px" }}>
                <div style={{ paddingTop: "56.25%", position: "relative" }}>
                  <iframe
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      border: "solid #dedede 1px",
                    }}
                    src="https://viewmedica.com/vm/viewmedica/embed/?client=8297&amp;lang=en&amp;openthis=A_1e8f6f8c&amp;fsmode=on"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerpolicy="unsafe-url"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="full text-align" id="ContentV12BtnCon"></div>
        </div>
      </section>
      <form id="Form_ContactV10" onSubmit={HandleForm}>
        <input type="hidden" name="_m_" value="ContactV10" />
        <section
          className="contact v10 col-50-50 items-spaced vertical-middle text-left flow-reverse dark-bg bg-image large-padding bg-box-unlike bg-center-center"
          id="ContactV10"
          data-onvisible="show"
        >
          <picture className="img-bg" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/contact/contact-v10-bg-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/contact/contact-v10-bg-tablet.jpg"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt=""
              data-src="/assets/contact/contact-v10-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="flex-auto-responsive-margined-block-1024 align-items item-widths item-spacing flex-direction">
              <div>
                <header
                  className="text-align center-800"
                  id="ContactV10ReviewsHeader"
                >
                  <h4>PATIENT REVIEWS</h4>
                  <svg className="header-flair">
                    <use href="../includes/flair.svg#header"></use>
                  </svg>
                </header>
                <div className="flex-column border-radius">
                  <picture
                    className="img pad-height- bg-position fit"
                    data-role="picture"
                  >
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/assets/contact/contact-v10-img-mobile.jpg"
                    />
                    <source
                      media="(max-width: 1024px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/assets/contact/contact-v10-img-tablet.jpg"
                    />
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt=""
                      data-src="/assets/contact/contact-v10-img.jpg"
                    />
                  </picture>
                  <div
                    className="bg-box no-shadow side-padding vertical-padding-small box-flair flex- auto"
                    data-role="scroller"
                  >
                    <div className="flair-border">
                      <span className="flair-1"></span>
                      <span className="flair-2"></span>
                      <div
                        id="ContactV10ReviewsFeed"
                        className="ui-repeater"
                        data-role="container"
                      >
                        <ul className="flex-middle" data-role="list">
                          <li
                            className="full text-align center-800"
                            data-role="item"
                            data-item="i"
                            data-key="3172114"
                          >
                            <blockquote>
                              <div className="rating-icons full bottom-margin-small">
                                <ul
                                  className="stars rating5 flex-grid-small-center text-align full"
                                  title="5 Star Rating"
                                >
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate1">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate2">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate3">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate4">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate5">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                </ul>
                              </div>
                              <strong className="title-style-2 title-color-2">
                                His Plan Helped Reduce My Pain
                              </strong>
                              <p className="caption">
                                &ldquo;I came to see Dr. Ali for a consultation
                                for low back pain from years of doing
                                gymnastics. He was able to make a care plan to
                                treat my low back pain and his plan has helped
                                reduce my pain tremendously.&rdquo;
                              </p>
                              <strong className="author">- Mikey D.</strong>
                            </blockquote>
                          </li>
                          <li
                            className="full text-align center-800"
                            data-role="item"
                            data-item="i"
                            data-key="3172118"
                          >
                            <blockquote>
                              <div className="rating-icons full bottom-margin-small">
                                <ul
                                  className="stars rating5 flex-grid-small-center text-align full"
                                  title="5 Star Rating"
                                >
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate1">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate2">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate3">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate4">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate5">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                </ul>
                              </div>
                              <strong className="title-style-2 title-color-2">
                                Knows How to Fix Your Pain
                              </strong>
                              <p className="caption">
                                &ldquo;I'm finally feeling what quality of life
                                feels like. I am very thankful I found Dr. Ali.
                                He will always be my pain management doctor. He
                                is a very good doctor that knows how to fix your
                                pain and he really cares about his
                                patients.&rdquo;
                              </p>
                              <strong className="author">- Ricky C.</strong>
                            </blockquote>
                          </li>
                          <li
                            className="full text-align center-800"
                            data-role="item"
                            data-item="i"
                            data-key="3160510"
                          >
                            <blockquote>
                              <div className="rating-icons full bottom-margin-small">
                                <ul
                                  className="stars rating5 flex-grid-small-center text-align full"
                                  title="5 Star Rating"
                                >
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate1">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate2">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate3">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate4">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate5">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                </ul>
                              </div>
                              <strong className="title-style-2 title-color-2">
                                Dr. Ali Cares About His Patients
                              </strong>
                              <p className="caption">
                                &ldquo;Dr. Ali cares about his patients he
                                doesn't give up on his patients he keeps working
                                with them to get the pain down to at least
                                90-95%. Dr. Ali walked my CNA step by step on
                                how to take the wire out no pain at all he
                                stayed on the phone the whole time.&rdquo;
                              </p>
                              <strong className="author">- Shannon S.</strong>
                            </blockquote>
                          </li>
                          <li
                            className="full text-align center-800"
                            data-role="item"
                            data-item="i"
                            data-key="3172119"
                          >
                            <blockquote>
                              <div className="rating-icons full bottom-margin-small">
                                <ul
                                  className="stars rating5 flex-grid-small-center text-align full"
                                  title="5 Star Rating"
                                >
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate1">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate2">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate3">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate4">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate5">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                </ul>
                              </div>
                              <strong className="title-style-2 title-color-2">
                                Knowledge, Professionalism & Compassion
                              </strong>
                              <p className="caption">
                                &ldquo;Dr. Ali!. His balanced mix of knowledge,
                                professionalism &amp; compassion is second to
                                none while working with patients who suffer from
                                pain on a daily basis. He helps me understand
                                the reasons for the particular medications &amp;
                                the doses he prescribes.&rdquo;
                              </p>
                              <strong className="author">- Benjamin D.</strong>
                            </blockquote>
                          </li>
                          <li
                            className="full text-align center-800"
                            data-role="item"
                            data-item="i"
                            data-key="3160514"
                          >
                            <blockquote>
                              <div className="rating-icons full bottom-margin-small">
                                <ul
                                  className="stars rating5 flex-grid-small-center text-align full"
                                  title="5 Star Rating"
                                >
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate1">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate2">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate3">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate4">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                  <li className="fit flex-middle-center">
                                    <svg viewBox="0 0 24 24" className="rate5">
                                      <use data-href="../cms/svg/admin/nwaq7y41pf5.24.svg#rating_star"></use>
                                    </svg>
                                  </li>
                                </ul>
                              </div>
                              <strong className="title-style-2 title-color-2">
                                A Godsend
                              </strong>
                              <p className="caption">
                                &ldquo;Dr. Ali has been a godsend for me. I have
                                seen several pain management Drs but he is the
                                first that has made a significant difference in
                                my pain level.&rdquo;
                              </p>
                              <strong className="author">- Nancy M.</strong>
                            </blockquote>
                          </li>
                        </ul>
                        <div
                          className="scrolling-list-nav top-margin-small center-800 horizontal flex-middle text-align relative"
                          data-role="arrows"
                        >
                          <Link
                            href="javascript:void(0)"
                            title="View previous item"
                            aria-label="View previous item"
                            data-action="Prev"
                          >
                            <svg className="site-arrow">
                              <use href="../includes/flair.svg#arrow-left"></use>
                            </svg>
                          </Link>
                          <span className="paging" data-role="paging">
                            <span data-role="page-active"></span> /{" "}
                            <span data-role="page-total"></span>
                          </span>
                          <Link
                            href="javascript:void(0)"
                            title="View next item"
                            aria-label="View next item"
                            data-action="Next"
                          >
                            <svg className="site-arrow">
                              <use href="../includes/flair.svg#arrow-right"></use>
                            </svg>
                          </Link>
                        </div>
                        <div id="ContactV10ReviewsBtnCon">
                          <div className="top-margin text-align center-800">
                            <Link
                              href="../reviews/"
                              aria-labelledby="ContactV10ReviewsHeader"
                              className="btn v1"
                            >
                              All Reviews
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <header className="text-center" id="ContactV10Header">
                  <h4>SCHEDULE AN APPOINTMENT</h4>
                  <strong>Take the Next Step to Living Pain Free</strong>
                  <svg className="header-flair">
                    <use href="../includes/flair.svg#header"></use>
                  </svg>
                </header>
                <div id="ContactV1Form" className="ui-repeater">
                  <fieldset data-item="i" data-key="">
                    <ul className="flex-spaced-between-wrap-block-500">
                      <li className="half">
                        <div className="input-text">
                          <input
                            required="required"
                            type="text"
                            id="ContactV1Form_ITM0_FirstName"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$FirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_FirstName"
                          >
                            First Name
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_FirstName"
                            data-type="valueMissing"
                          >
                            Please enter your first name.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <div className="input-text">
                          <input
                            required="required"
                            type="text"
                            id="ContactV1Form_ITM0_LastName"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$LastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_LastName"
                          >
                            Last Name
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_LastName"
                            data-type="valueMissing"
                          >
                            Please enter your last name.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <div className="input-text">
                          <input
                            id="ContactV1Form_ITM0_Phone"
                            type="tel"
                            pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                            className="phone-mask ui-cms-input"
                            required="required"
                            name="ContactV1Form$ITM0$Phone"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_Phone"
                          >
                            Phone
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_Phone"
                            data-type="valueMissing"
                          >
                            Please enter your phone number.
                          </div>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_Phone"
                            data-type="typeMismatch"
                          >
                            This isn't a valid phone number.
                          </div>
                        </div>
                      </li>
                      <li className="half">
                        <div className="input-text">
                          <input
                            required="required"
                            type="email"
                            id="ContactV1Form_ITM0_EmailAddress"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$EmailAddress"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                          >
                            Email
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                            data-type="valueMissing"
                          >
                            Please enter your email address.
                          </div>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_EmailAddress"
                            data-type="typeMismatch"
                          >
                            This isn't a valid email address.
                          </div>
                        </div>
                      </li>
                      <li className="select">
                        <div className="input-text">
                          <select
                            id="ContactV1Form_ITM0_LeadTypeID"
                            required="required"
                            className="ui-cms-select ui-cms-input"
                            name="ContactV1Form$ITM0$LeadTypeID"
                            value={patientType}
                            onChange={(e) => setPatientType(e.target.value)}
                          >
                            <option value=""></option>
                            <option value="Yes, I am a potential new patient">
                              Yes, I am a potential new patient
                            </option>
                            <option value="No, I'm a current existing patient">
                              No, I'm a current existing patient
                            </option>
                            <option value="I'm neither.">I'm neither.</option>
                          </select>
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_LeadTypeID"
                          >
                            Are you a new patient?
                          </label>
                          <svg className="site-arrow">
                            <use href="../../includes/flair.svg#arrow-down"></use>
                          </svg>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_LeadTypeID"
                            data-type="valueMissing"
                          >
                            Please make a selection.
                          </div>
                        </div>
                      </li>
                      <li className="message">
                        <div className="input-text">
                          <textarea
                            required="required"
                            type="text"
                            id="ContactV1Form_ITM0_Message"
                            className="ui-cms-input"
                            name="ContactV1Form$ITM0$Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                          <label
                            className="hide"
                            htmlFor="ContactV1Form_ITM0_Message"
                          >
                            Message
                          </label>
                          <div
                            className="validation"
                            htmlFor="ContactV1Form_ITM0_Message"
                            data-type="valueMissing"
                          >
                            Please enter a message.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </fieldset>
                  <input
                    id="ContactV1Form_ITM0_FFD6"
                    type="hidden"
                    className="ui-cms-input"
                    name="ContactV1Form$ITM0$FFD6"
                    value
                    data-item="i"
                    data-key=""
                  />
                  <div
                    className="top-margin-tiny text-align"
                    data-item="i"
                    data-key=""
                  >
                    <button
                      className="btn v1"
                      aria-labelledby="ContactV1Header"
                      type="submit"
                      id="ContactV1Form_ITM0_ctl08"
                      name="ContactV1Form$ITM0$ctl08"
                      data-commandname="Update"
                    >
                      Send Information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>

      <Footer />
    </>
  );
};

export default EducationalVideos;
