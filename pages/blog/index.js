import React from "react";
import { Banner } from "../components/CommonBanner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import axios from "axios";
import renderHTML from "react-render-html";
import Link from "next/link";
import Head from "next/head";

export const Blog = ({ items }) => {
  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="../../cms/includes/tnfp1sj8jm9.2203240648002.css"
          data-require='["cms","cms-behave"]'
        />
      </Head> */}
      <Header />
      <Banner title="BLOG" />

      <section
        className="two-column-layout light-bg col-66-33 vertical-padding items-spaced flow-reverse"
        id="TwoColumnLayout"
      >
        <div className="main flex-spaced-between-block-1024-margined item-spacing item-widths flex-direction">
          <div className="content-zone" id="ContentZone">
            <ul
              className="blog-list flex-grid-wrap-center-max-3-auto-size-break-800-block-500 close-gap-500 ui-repeater"
              id="BlogV3List"
            >
              {items &&
                items.length &&
                items.map((element, index) => {
                  return (
                    <li
                      className="flex- fit blog-post"
                      style={{ width: "45%", margin: "10px 20px 40px 20px" }}
                      data-item="i"
                      data-key="1365288"
                      key={element.id}
                    >
                      <Link
                        className="flex-column full border-radius-item scaling-img-item bg-box relative"
                        href={`/blog/${element.slug}`}
                      >
                        <div
                          className="flex-column-top side-padding-large  full auto"
                         
                        >
                          <div className="fit full bottom-margin-tiny">
                            <span className="blog-time-style full">
                              <time content="Sep 10, 2022">{element.date}</time>
                            </span>
                            <Link
                              href={`/blog/${element.slug}`}
                              className="title-style-4 title-color-4"
                            >
                              {element.title.rendered}
                            </Link>
                            {renderHTML(
                              `${element.excerpt.rendered.slice(0, 118)}...`
                            )}
                          </div>
                          <span className="fit">read more</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
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
                  <Link href="../">
                    <h5>MOST POPULAR</h5>
                  </Link>
                </header>
                <ul className="" data-role="panel">
                  <li className="level-1 ">
                    <Link className="auto" href="" target="">
                      Car Accident Injury
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="../../patient-info/" target="">
                      Worker's Compensation
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="../sports-injury/" target="">
                      Sports Injury
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="../back-pain/" target="">
                      Back Pain
                    </Link>
                  </li>
                </ul>
              </nav>
            </aside>
            <aside
              className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
              id="SideNavV1"
              data-onvisible="show"
              data-slider="true"
              data-closing="false"
            >
              <nav>
                <header className="text-left">
                  <Link href="../">
                    <h5>CATEGORIES</h5>
                  </Link>
                </header>
                <ul className="" data-role="panel">
                  <li className="level-1  ">
                    <Link className="auto" href="../neck-pain/" target="">
                      Neck Pain
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="../joint-pain/" target="">
                      Joint Pain
                    </Link>
                  </li>
                  <li className="level-1  ">
                    <Link className="auto" href="../treatments/" target="">
                      Treatments
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
                          href="../../blog/2022/september/cbd-may-be-effective-for-pain-management-after-c/"
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
                          href="../../blog/2022/september/6-ways-to-prevent-knee-pain-when-walking-upstair/"
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
                          href="../../blog/2022/september/7-reasons-of-knee-pain-when-riding-a-bike/"
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
                      <use href="../../includes/flair.svg#arrow-left"></use>
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
                      <use href="../../includes/flair.svg#arrow-right"></use>
                    </svg>
                  </Link>
                </div>
                <div id="SideBlogV1BtnCon">
                  <div className="top-margin-small text-center">
                    <Link
                      className="btn v1"
                      href="../blog/"
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

      <Footer />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const posts = await axios.get(
    "https://www.mypremierpain.com/wp-json/wp/v2/posts/?per_page=30"
  );
  const data = await posts.data;

  return {
    props: {
      items: data,
    }, // will be passed to the page component as props
  };
};
