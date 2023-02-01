import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner } from "../components/CommonBanner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const MeetOurTeam = () => {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" type="text/css" href="../cms/includes/2bz5pv3z3xe.2203240648002.css" data-require='["cms","cms-behave"]'/> */}
      </Head>

      <Header />
      <Banner
        title="MEET OUR TEAM"
        bg="/assets/sub-banners/exercising-banner-6.jpg"
      />

      <main id="MainZone">
        <section
          className="staff-parent v1 light-bg bg-box-unlike text-center"
          id="StaffParentV1"
          data-onvisible="show"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcset="/assets/staff/staff-parent-v1-bg-mobile.jpg"
              data-src="/assets/staff/staff-parent-v1-bg-mobile.jpg"
            />
            <Image
              layout="fill"
              src="/assets/staff/staff-parent-v1-bg.jpg"
              alt=""
              data-src="/assets/staff/staff-parent-v1-bg.jpg"
            />
          </picture>
          <div className="main thin text-align">
            <header
              className="no-pad bottom-margin-tiny center-800"
              id="StaffParentV1Header"
            >
              <h1>The Premier Pain Centers Team</h1>
              <svg className="header-flair">
                <use href="../includes/flair.svg#header"></use>
              </svg>
            </header>
          </div>
          <div className="main top-margin">
            <ul
              className="flex-grid-center-wrap-auto-size-max-4-break-1024-block-500 staff-item close-gap-500 ui-repeater"
              id="StaffParentV1List"
            >
              <li className="flex- fourth" data-item="i" data-key="27955">
                <Link
                  className="relative flex-column full scaling-img-item bg-box border-radius-item"
                  href="/meet-our-team/rao-k-ali"
                >
                  <div className="pad-height-100 img full  ">
                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Rao K. Ali Photo"
                      title="Rao K. Ali Photo"
                      className=""
                      style={{
                        backgroundImage:
                          "url(https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/dr-ali.jpg)",
                      }}
                    />

                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Rao K. Ali Photo"
                      title="Rao K. Ali Photo"
                      className=""
                      style={{
                        backgroundImage:
                          "url(https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/dr-ali.jpg)",
                      }}
                    />
                  </div>
                  <div className="side-padding-medium vertical-padding-tiny auto auto   full flex-column-center">
                    <strong className="title-style-5 title-color-5 full">
                      Rao K. Ali
                    </strong>
                    <p className="no-top-margin no-bottom-margin note-style full">
                      M.D.
                    </p>
                  </div>
                </Link>
              </li>
              <li className="flex- fourth" data-item="i" data-key="32141">
                <Link
                  className="relative flex-column full scaling-img-item bg-box border-radius-item"
                  href="/meet-our-team/dr-muhammad-zulqarnain-dr-z-"
                >
                  <div className="pad-height-100 img full  ">
                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Dr. Muhammad  Zulqarnain (Dr. Z) Photo"
                      title="Dr. Muhammad  Zulqarnain (Dr. Z) Photo"
                      className=""
                      style={{
                        backgroundImage:
                          "url(https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/dr-muhammed.jpg)",
                      }}
                    />

                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Dr. Muhammad  Zulqarnain (Dr. Z) Photo"
                      title="Dr. Muhammad  Zulqarnain (Dr. Z) Photo"
                      className=""
                      style={{
                        backgroundImage:
                          "url(https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/dr-muhammed.jpg",
                      }}
                    />
                  </div>
                  <div className="side-padding-medium vertical-padding-tiny auto auto   full flex-column-center">
                    <strong className="title-style-5 title-color-5 full">
                      Dr. Muhammad Zulqarnain (Dr. Z)
                    </strong>
                    <p className="no-top-margin no-bottom-margin note-style full">
                      M.D.
                    </p>
                  </div>
                </Link>
              </li>

              <li className="flex- fourth" data-item="i" data-key="37606">
                <Link
                  className="relative flex-column full scaling-img-item bg-box border-radius-item"
                  href="/meet-our-team/ranjit-sandhu"
                >
                  <div className="pad-height-100 img full  ">
                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Ranjit  Sandhu Photo"
                      title="Ranjit  Sandhu Photo"
                      className=""
                      style={{
                        backgroundImage:
                          "url(https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/Randjit-Sandhu-Updated.jpg",
                      }}
                    />

                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="Ranjit  Sandhu Photo"
                      title="Ranjit  Sandhu Photo"
                      className=""
                      style={{
                        backgroundImage:
                          "url(https://www.mypremierpain.com/cms/thumbnails/34/400x400/images/Randjit-Sandhu-Updated.jpg",
                      }}
                    />
                  </div>
                  <div className="side-padding-medium vertical-padding-tiny auto auto   full flex-column-center">
                    <strong className="title-style-5 title-color-5 full">
                      Ranjit Sandhu
                    </strong>
                    <p className="no-top-margin no-bottom-margin note-style full">
                      M.D.
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MeetOurTeam;
