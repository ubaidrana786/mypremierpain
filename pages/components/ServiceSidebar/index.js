import React from "react";
import Link from "next/link";

export const ServiceSidebar = () => {
  return (
    <>
      <div className="side-zone" id="SideZone">
        <form id="Form_ContactV6" method="post" encType="multipart/form-data">
          <input type="hidden" name="_m_" value="ContactV1" />
          <div
            style={{ border: "1px solid #286db0", padding: "25px 10px" }}
            id="ContactV6Form"
            className="ui-repeater"
          >
            <header className="text-align center-800" id="ContactV1Header">
              <h4 style={{ fontSize: "30px", textAlign: "center" }}>
                SCHEDULE AN APPOINTMENT
              </h4>
            </header>
            <fieldset data-item="i" data-key="">
              <ul className="flex-spaced-between-wrap-block-500">
                <li className="half">
                  <div className="input-text">
                    <input
                      required="required"
                      type="text"
                      id="first_name"
                      className="ui-cms-input"
                      name="first_name"
                      value
                    />
                    <label className="hide" htmlFor="first_name">
                      First Name
                    </label>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_FirstName"
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
                      id="last_name"
                      className="ui-cms-input"
                      name="last_name"
                      value
                    />
                    <label className="hide" htmlFor="last_name">
                      Last Name
                    </label>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_LastName"
                      data-type="valueMissing"
                    >
                      Please enter your last name.
                    </div>
                  </div>
                </li>
                <li className="half">
                  <div className="input-text">
                    <input
                      id="phone_number"
                      type="tel"
                      pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                      className="phone-mask ui-cms-input"
                      required="required"
                      name="phone_number"
                      value
                    />
                    <label className="hide" htmlFor="phone_number">
                      Phone
                    </label>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_Phone"
                      data-type="valueMissing"
                    >
                      Please enter your phone number.
                    </div>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_Phone"
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
                      id="email"
                      className="ui-cms-input"
                      name="email"
                      value
                    />
                    <label
                      className="hide"
                      htmlFor="ContactV6Form_ITM0_EmailAddress"
                    >
                      Email
                    </label>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_EmailAddress"
                      data-type="valueMissing"
                    >
                      Please enter your email address.
                    </div>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_EmailAddress"
                      data-type="typeMismatch"
                    >
                      This isn't a valid email address.
                    </div>
                  </div>
                </li>
                <li className="select">
                  <div className="input-text">
                    <select
                      id="patient_type"
                      required="required"
                      className="ui-cms-select ui-cms-input"
                      name="patient_type"
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
                      htmlFor="ContactV6Form_ITM0_LeadTypeID"
                    >
                      Are you a new patient?
                    </label>
                    <svg className="site-arrow">
                      <use href="includes/flair.svg#arrow-down"></use>
                    </svg>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_LeadTypeID"
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
                      id="message"
                      className="ui-cms-input"
                      name="message"
                    ></textarea>
                    <label
                      className="hide"
                      htmlFor="ContactV6Form_ITM0_Message"
                    >
                      Message
                    </label>
                    <div
                      className="validation"
                      htmlFor="ContactV6Form_ITM0_Message"
                      data-type="valueMissing"
                    >
                      Please enter a message.
                    </div>
                  </div>
                </li>
              </ul>
            </fieldset>
            <input
              id="ContactV6Form_ITM0_FFD6"
              type="hidden"
              className="ui-cms-input"
              name="ContactV6Form$ITM0$FFD6"
              value
              data-item="i"
              data-key=""
            />
            <div
              className="top-margin-tiny text-center"
              data-item="i"
              data-key=""
            >
              <button
                className="btn v1"
                aria-labelledby="ContactV6Header"
                type="submit"
                id="ContactV6Form_ITM0_ctl08"
                name="ContactV6Form$ITM0$ctl08"
                data-commandname="Update"
              >
                Send Information
              </button>
            </div>
          </div>
        </form>
        <aside
          className="side-nav v1 light-bg border-radius-item box-shadow el-tab-box"
          id="SideNavV1"
          data-onvisible="show"
          data-slider="true"
          data-closing="false"
        >
          <nav>
            <header className="text-left">
              <h5>Conditions We Treat</h5>
            </header>
            <ul className="" data-role="panel">
              <li className="level-1  ">
                <Link className="auto" href="../car-accident-injury/">
                  Car Accident Injury
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../../patient-info/">
                  Worker's Compensation
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../sports-injury/">
                  Sports Injury
                </Link>
              </li>
              <li className="level-1 selected ">
                <Link className="auto" href="">
                  Back Pain
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../knee-pain/">
                  Knee Pain
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../headaches/">
                  Headaches
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../neck-pain/">
                  Neck Pain
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../joint-pain/">
                  Joint Pain
                </Link>
              </li>
              <li className="level-1  ">
                <Link className="auto" href="../treatments/">
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
                            6 ways to prevent knee pain when walking upstairs
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
                  href="..//blog/"
                  aria-labelledby="SideBlogV1Header"
                >
                  All Blogs
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ServiceSidebar;
