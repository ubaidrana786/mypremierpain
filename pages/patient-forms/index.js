import Head from "next/head";
import React from "react";
import { Banner } from "../components/CommonBanner/Banner";
import { CommonFormsSections } from "../components/CommonForms&Sections";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Link from 'next/link'

export const PatientForms = () => {
  return (
    <>
      <Head>
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="../cms/includes/tnfp1sj8jm9.2203240648002.css"
          data-require='["cms","cms-behave"]'
        /> */}
      </Head>

      <Header />
      <Banner
        bg="/assets/sub-banners/exercising-banner.jpg"
        title="PATIENT FORMS"
      />

      <section
        className="two-column-layout light-bg col-66-33 vertical-padding items-spaced flow-reverse"
        id="TwoColumnLayout"
      >
        <div className="main flex-spaced-between-block-1024-margined item-spacing item-widths flex-direction">
          <div className="content-zone" id="ContentZone">
            <div
              className="column-layout-content transparent-bg bg-box-none light-bg"
              id="ColumnLayoutContent"
              data-onvisible="show"
            >
              <div className="bg-box side-padding-medium vertical-padding-small box-flair border-radius">
                <div className="flair-border" data-content="true">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div
                    className="content-style"
                    id="MainContent"
                    data-content="true"
                  >
                    <h1>Premier Pain Patient Forms</h1>
                    <h2>Get A Head Start For Your Next Visit</h2>
                    <ul>
                      <li>
                        <Link
                           rel="noreferrer"
                          href="https://intakeq.com/new/baR6VL"
                        >
                          New Patient Paperwork for All Insurances
                        </Link>
                      </li>
                      <li>
                        <Link
                           rel="noreferrer"
                          href="https://intakeq.com/new/baR6VL"
                        >
                          New Patient Paperwork for Personal Injury Patients
                        </Link>
                      </li>
                      <li>
                        <Link  rel="noreferrer" href="https://intakeq.com/c/1p3Uw2">
                          Consent Form
                        </Link>
                      </li>
                      <li>
                        <Link  rel="noreferrer" href="https://intakeq.com/c/WHaS9V">
                          Agreement of Financial Responsibility
                        </Link>
                      </li>
                      <li>
                        <Link  rel="noreferrer" href="https://intakeq.com/c/4mK6ZG">
                          Authorization for the Use and Disclosure of Protected
                          Heath Information
                        </Link>
                      </li>
                      <li>
                        <Link  rel="noreferrer" href="https://intakeq.com/c/sDTFwr">
                          Notice of Privacy Practices
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-zone" id="SideZone">
            <aside
              className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
              id="SideNavV1"
              data-onvisible="show"
              data-slider="true"
              data-closing="false"
            >
              <nav>
                <header className="text-left">
                  <Link href="../about/">
                    <h5>About</h5>
                  </Link>
                </header>
                <ul className="" data-role="panel">
                  <li className="level-1  ">
                    <Link
                      className="auto"
                      href="../meet-our-team/"
                      target=""
                        
                    >
                      Our Providers
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link
                      className="auto"
                      href="../about/careers/"
                      target=""
                        
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link
                      className="auto"
                      href="../assets/Rao-Ali-AR-1.pdf"
                       rel="noreferrer"
                        
                    >
                      Insurances Accepted
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <aside
              className="side-blog v1 light-bg transparent-bg text-center bg-box-unlike"
              id="SideBlogV1"
              data-onvisible="show"
              data-role="scroller"
            >
              <div className="border-radius bg-box side-padding-medium vertical-padding-tiny box-flair">
                <header
                  className="text-align center-800 no-pad bottom-margin-tiny"
                  id="SideBlogV1Header"
                >
                  <h5>OUR MEDICAL BLOGS&nbsp;</h5>
                </header>
                <div className="flair-border">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <div data-role="container">
                    <ul
                      className="flex- ui-repeater"
                      id="BlogV1Feed"
                      data-role="list"
                    >
                      <li
                        className="flex- full"
                        data-role="item"
                        data-item="i"
                        data-key="1365288"
                      >
                        <Link
                          className="flex- full text-left"
                          href="../blog/2022/september/cbd-may-be-effective-for-pain-management-after-c/"
                        >
                          <div className="flex-column-top full auto">
                            <div className="fit full bottom-margin-tiny">
                              <span className="blog-time-style full">
                                <time content="Sep 3, 2022">Sep 03</time>
                              </span>
                              <strong className="title-style-4 title-color-4">
                                CBD May Be Effective for Pain Management After
                                Certain Surgeries
                              </strong>
                            </div>
                            <span className="fit btn v2">View Article</span>
                          </div>
                        </Link>
                      </li>
                      <li
                        className="flex- full"
                        data-role="item"
                        data-item="i"
                        data-key="1365287"
                      >
                        <Link
                          className="flex- full text-left"
                          href="../blog/2022/september/6-ways-to-prevent-knee-pain-when-walking-upstair/"
                        >
                          <div className="flex-column-top full auto">
                            <div className="fit full bottom-margin-tiny">
                              <span className="blog-time-style full">
                                <time content="Sep 3, 2022">Sep 03</time>
                              </span>
                              <strong className="title-style-4 title-color-4">
                                6 ways to prevent knee pain when walking
                                upstairs
                              </strong>
                            </div>
                            <span className="fit btn v2">View Article</span>
                          </div>
                        </Link>
                      </li>
                      <li
                        className="flex- full"
                        data-role="item"
                        data-item="i"
                        data-key="1365286"
                      >
                        <Link
                          className="flex- full text-left"
                          href="../blog/2022/september/7-reasons-of-knee-pain-when-riding-a-bike/"
                        >
                          <div className="flex-column-top full auto">
                            <div className="fit full bottom-margin-tiny">
                              <span className="blog-time-style full">
                                <time content="Sep 2, 2022">Sep 02</time>
                              </span>
                              <strong className="title-style-4 title-color-4">
                                7 reasons of knee pain when riding a bike
                              </strong>
                            </div>
                            <span className="fit btn v2">View Article</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="scrolling-list-nav horizontal relative flex-middle-center top-margin-tiny"
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
                <div id="SideBlogV1BtnCon">
                  <div className="top-margin-small text-center">
                    <Link
                      className="btn v1"
                      href="/blog/"
                      aria-labelledby="SideBlogV1Header"
                    >
                      All Blogs
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CommonFormsSections />
      <Footer />
    </>
  );
};

export default PatientForms;
