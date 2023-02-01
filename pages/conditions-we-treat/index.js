import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Banner } from "../components/CommonBanner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Link from "next/link";
import axios from "axios";

export const ConditionsWeTreat = () => {
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
          href="../cms/includes/kj8qzlk26h6.2203240648002.css"
          data-require='["cms","cms-behave"]'
        />
      </Head> */}

      <Header />

      <main id="MainZone">
        <form id="Form_MainstageV6" onSubmit={HandleForm}>
          <input type="hidden" name="_m_" value="MainstageV6" />
          <section
            className="mainstage v6s bg-image dark-bg vertical-middle col-50-50 no-padding no-padding flow-reverse text-center bg-box-unlike bg-bottom-left"
            id="MainstageV6"
            data-onvisible="show"
          >
            <picture className="img-bg bg-position" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcset="/assets/mainstages/mainstage-v6-bg-mobile.jpg"
                data-src="/assets/mainstages/mainstage-v6-bg-mobile.jpg"
              />
              <source
                media="(max-width: 800px)"
                srcset="/assets/mainstages/mainstage-v6-bg-tablet.jpg"
                data-src="/assets/mainstages/mainstage-v6-bg-tablet.jpg"
              />
              <Image
                layout="fill"
                src="/assets/mainstages/mainstage-v6-bg.jpg"
                alt=""
                data-src="/assets/mainstages/mainstage-v6-bg.jpg"
              />
            </picture>
            <div className="main">
              <div className="flex-auto-responsive-margined flex-direction align-items item-widths">
                <div
                  className="info text-align center-800 side-padding-small"
                  id="MainstageV6Info"
                >
                  <span className="title-font title">
                    <strong className="title-color-1">
                      The Conditions We Treat
                    </strong>
                  </span>
                  <em className="title-color-2 subtitle">
                    You Will See We Care
                  </em>
                  <svg className="header-flair">
                    <use href="../includes/flair.svg#header"></use>
                  </svg>
                  <p className="no-bottom-margin description">
                    If you are feeling pain throughout your body, call our
                    specialists at (469) 562-4188 or fill out the contact form
                    to reach out team.
                  </p>
                </div>
                <div className="vertical-padding-small side-padding-small bg-box box-flair border-radius">
                  <div className="flair-border">
                    <span className="flair-1"></span>
                    <span className="flair-2"></span>
                    <header className="text-center" id="MainstageV6FormHeader">
                      <h4>SCHEDULE AN APPOINTMENT</h4>
                      <strong>The Next Steps to Living Pain Free</strong>
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
                                <option value="I'm neither.">
                                  I'm neither.
                                </option>
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
            </div>
          </section>
        </form>
        <section
          className="services-parent v1 light-bg text-center bg-box-unlike bg-image"
          id="ServicesParentV1"
          data-onvisible="show"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcset="/assets/services/services-parent-v1-bg-mobile.jpg"
              data-src="/assets/services/services-parent-v1-bg-mobile.jpg"
            />
            <Image
              layout="fill"
              src="/assets/services/services-parent-v1-bg.jpg"
              alt=""
              data-src="/assets/services/services-parent-v1-bg.jpg"
            />
          </picture>
          <div className="main thin text-align">
            <header
              className="center-800 no-pad bottom-margin-tiny"
              id="ServicesParentV1Header"
            >
              <h1>Conditions We Treat</h1>
              <svg className="header-flair">
                <use href="../includes/flair.svg#header"></use>
              </svg>
            </header>
            <div
              className="content-style relative"
              id="ServicesParentV1Content"
            >
              <h2>Professional Pain Relief</h2>
              <p>
                At Premier Pain Centers, we can treat a wide range of
                conditions, ailments, and injuries. All our patients in
                Richardson, Fort Worth, and the surrounding areas are treated by
                board-certified physicians. We are passionate about what we do,
                and we make sure you are always well-informed when you&rsquo;re
                faced with an accident or illness. Needless to say, we will make
                sure you have all the resources necessary to make the best
                decision for your health and get on the road to recovery as soon
                as possible.
              </p>
              <p className="text-highlight v9 flex-between-middle border-all side-padding-medium vertical-padding-tiny">
                <b>
                  For additional questions on services we offer, you can
                  <Link href="../contact-locations/">contact us online</Link> or
                  call us at
                  <Link href="tel:(469) 562-4188">(469) 562-4188 </Link>. We are
                  happy to address any concerns you may have.
                </b>
              </p>
            </div>
          </div>
          <div className="main top-margin">
            <ul
              className="services-list flex-wrap-grid-auto-size-max-4-break-1024-block-500 close-gap-500 ui-repeater"
              id="ServicesParentV1Services"
            >
              <li className="flex-" data-item="i" data-key="75436">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="car-accident-injury/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="/conditions-we-treat/car-accident-injury/car-accident-injury 500max.jpg"
                      data-src="/conditions-we-treat/car-accident-injury/car-accident-injury 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/car-accident-injury.jpg"
                      alt="Car Accident Injuries Image"
                      data-src="/conditions-we-treat/car-accident-injury/car-accident-injury.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">
                    Car Accident Injuries
                  </span>
                </Link>
              </li>
              <li className="flex-" data-item="i" data-key="75437">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="../patient-info/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/conditions-we-treat/sports-injury/sports-injury 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/sports-injury.jpg"
                      alt="Worker's Compensation Image"
                      data-src="/conditions-we-treat/sports-injury/sports-injury.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">
                    Worker's Compensation
                  </span>
                </Link>
              </li>
              <li className="flex-" data-item="i" data-key="75438">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="back-pain/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/conditions-we-treat/back-pain/back-pain 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/back-pain.jpg"
                      alt="Back Pain Image"
                      data-src="/conditions-we-treat/back-pain/back-pain.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">Back Pain</span>
                </Link>
              </li>
              <li className="flex-" data-item="i" data-key="75439">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="knee-pain/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/conditions-we-treat/knee-pain/knee-pain 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/knee-pain.jpg"
                      alt="Knee Pain Image"
                      data-src="/conditions-we-treat/knee-pain/knee-pain.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">Knee Pain</span>
                </Link>
              </li>
              <li className="flex-" data-item="i" data-key="75440">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="headaches/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/conditions-we-treat/headaches/headaches 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/headaches.jpg"
                      alt="Headaches Image"
                      data-src="/conditions-we-treat/headaches/headaches.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">Headaches</span>
                </Link>
              </li>
              <li className="flex-" data-item="i" data-key="75441">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="neck-pain/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/conditions-we-treat/neck-pain/neck-pain 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/neck-pain.jpg"
                      alt="Neck Pain Image"
                      data-src="/conditions-we-treat/neck-pain/neck-pain.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">Neck Pain</span>
                </Link>
              </li>
              <li className="flex-" data-item="i" data-key="75442">
                <Link
                  className="flex-column-center-middle auto scaling-img-item  relative full bg-box text-center side-padding-large vertical-padding-medium border-radius-item"
                  href="joint-pain/"
                >
                  <picture className="img-bg">
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/conditions-we-treat/joint-pain/joint-pain 500max.jpg"
                    />
                    <Image
                      layout="fill"
                      src="/assets/New-folder/joint-pain.jpg"
                      alt="Joint Pain Image"
                      data-src="/conditions-we-treat/joint-pain/joint-pain.jpg"
                    />
                  </picture>
                  <span className="relative btn-style">Joint Pain</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <script
          id="Process_ServicesParentV1"
          type="text/javascript"
          style={{ display: "none" }}
        >
          window.Process&&Process.Page(['Process_ServicesParentV1','ServicesParentV1_1','ServicesParentV1_2']);
        </script>
        <section
          className="panel-group v1 relative no-padding dark-bg bg-image"
          id="PanelGroupV6"
        >
          <picture className="img-bg bg-position" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/panel-groups/panel-group-v6-bg-mobile.jpg"
            />
            <source
              media="(max-width: 1024px)"
              srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/panel-groups/panel-group-v6-bg-tablet.jpg"
            />
            <img
              src="/assets/panel-groups/panel-group-v6-bg.jpg"
              alt=""
              loading="lazy"
              data-src="/assets/panel-groups/panel-group-v6-bg.jpg"
            />
          </picture>
          <div className="box" id="PanelGroupV6Zone">
            <section
              className="content v3 duplicate text-left col-50-50 flow-reverse dark-bg bg-image vertical-middle items-touching bg-box-stylized"
              id="ContentV3Duplicate"
              data-onvisible="show"
            >
              <picture className="img-bg" data-role="picture">
                <source
                  media="(max-width: 500px)"
                  srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="/assets/content/content-v3-duplicate-bg-mobile.jpg"
                />
                <source
                  media="(max-width: 800px)"
                  srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="/assets/content/content-v3-duplicate-bg-tablet.jpg"
                />
                <Image
                  layout="fill"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  alt=""
                  data-src="/assets/content/content-v3-duplicate-bg.jpg"
                />
              </picture>
              <div className="main">
                <div className="flex-spaced-between-auto-responsive-margined flex-direction align-items item-spacing item-widths">
                  <div className="text-align bg-box side-padding under-item vertical-padding-small box-flair border-radius reviewsBorder">
                    <div className="flair-border" data-content="true">
                      <span className="flair-1"></span>
                      <span className="flair-2"></span>
                      <div className="overlap-padding">
                        <header
                          className="no-pad bottom-margin-tiny"
                          id="ContentV3DuplicateHeader"
                        >
                          <h2>Common Conditions &amp; Symptoms</h2>
                        </header>
                        <div
                          className="content-style"
                          id="ContentV3DuplicateMainContent"
                        >
                          <p>
                            We are dedicated to providing comprehensive pain
                            treatment to our patients. Whether you are
                            experiencing acute pain caused by a specific
                            incident or are a long-time chronic pain sufferer,
                            we can help. We work with each of our patients to
                            develop individualized paths for pain management.
                          </p>
                          <p>
                            <b>
                              We offer treatments for a variety of conditions,
                              including but not limited to:
                            </b>
                          </p>
                          <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                            <li>
                              <Link href="car-accident-injury/">
                                Car accident injury
                              </Link>
                            </li>
                            <li>
                              <Link href="sports-injury/">Sports injury</Link>
                            </li>
                            <li>
                              <Link href="back-pain/">Back pain</Link>
                            </li>
                            <li>
                              <Link href="knee-pain/">Knee pain</Link>
                            </li>
                            <li>
                              <Link href="joint-pain/">Joint pain</Link>
                            </li>
                            <li>
                              <Link href="headaches/">Headaches</Link>
                            </li>
                            <li>
                              <Link href="neck-pain/">Neck pain</Link>
                            </li>
                          </ul>
                        </div>
                        <div id="ContentV3DuplicateBtnCon"></div>
                      </div>
                    </div>
                  </div>
                  <picture
                    className="over-item img bg-position pad-height-75 box-flair-offset border-radius"
                    data-role="picture"
                  >
                    <source
                      media="(max-width: 500px)"
                      srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      data-src="/assets/content/content-v4-img-mobile.jpg"
                    />
                    <Image
                      layout="fill"
                      src="https://www.mypremierpain.com/assets/content/content-v4-img.jpg"
                      alt=""
                      data-src="/assets/content/content-v4-img.jpg"
                    />
                  </picture>
                </div>
              </div>
            </section>
            <section
              className="content v2 vertical-middle text-left col-50-50 items-touching bg-box-none medium-padding dark-bg"
              id="ContentV2B"
              data-onvisible="show"
              data-role="scroller"
            >
              <div className="main">
                <div className="flex-between-auto-responsive item-widths item-spacing align-items flex-direction">
                  <div className="text-align bg-box side-padding under-item vertical-padding-small border-radius">
                    <div className="overlap-padding" data-content="true">
                      <header
                        className="no-pad bottom-margin-tiny"
                        id="ContentV2BHeader"
                      >
                        <h3>Benefits of Pain Management</h3>
                      </header>
                      <div className="content-style" id="ContentV2BMainContent">
                        <p>
                          Through our pain management solutions, you can begin
                          to experience the benefits of a more comfortable,
                          fulfilling life. Living in pain is not living the life
                          you truly deserve.
                        </p>
                        <p>
                          <b>Our patients often report advantages such as:</b>
                        </p>
                        <ul className="bullt-list v1 split flex-wrap-spaced-between-block-800">
                          <li>Decreased pain</li>
                          <li>Minimized inflammation</li>
                          <li>Improved mobility &amp; flexibility</li>
                          <li>Increased quality of life</li>
                        </ul>
                        <h2>Schedule a Same-Day Appointment</h2>
                        <p>
                          Are you ready to begin living a life free of pain? Our
                          team is here to help you get started on managing your
                          symptoms and achieving your goals. With same-day
                          appointments available, your path to recovery can
                          start as soon as possible. Just pick up the phone to
                          speak to our experienced professionals and begin your
                          journey toward a healthier, more satisfying, pain-free
                          life.
                        </p>
                      </div>
                      <div id="ContentV2BtnConNew"></div>
                    </div>
                  </div>
                  <div
                    className="bg-box unlike-bg text-center flex-middle over-item vertical-padding-small box-flair border-radius"
                    data-role="container"
                  >
                    <div className="flair-border full">
                      <span className="flair-1"></span>
                      <span className="flair-2"></span>
                      <ul
                        className="flex-middle ui-repeater"
                        id="ContentV2BReview"
                        data-role="list"
                      >
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3172114"
                        >
                          <blockquote className="side-padding-medium">
                            <p className="title-style-4 title-color-4 no-top-margin">
                              &ldquo;I came to see Dr. Ali for a consultation
                              for low back pain from years of doing gymnastics.
                              He was able to make a care plan to treat my low
                              back pain and his plan has helped reduce my pain
                              tremendously.&rdquo;
                            </p>
                            <strong>- Mikey D.</strong>
                            <svg className="bottom-flair absolute">
                              <use href="../includes/flair.svg#bottom"></use>
                            </svg>
                          </blockquote>
                        </li>
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3172118"
                        >
                          <blockquote className="side-padding-medium">
                            <p className="title-style-4 title-color-4 no-top-margin">
                              &ldquo;I'm finally feeling what quality of life
                              feels like. I am very thankful I found Dr. Ali. He
                              will always be my pain management doctor. He is a
                              very good doctor that knows how to fix your pain
                              and he really cares about his patients.&rdquo;
                            </p>
                            <strong>- Ricky C.</strong>
                            <svg className="bottom-flair absolute">
                              <use href="../includes/flair.svg#bottom"></use>
                            </svg>
                          </blockquote>
                        </li>
                        <li
                          className="full"
                          data-role="item"
                          data-item="i"
                          data-key="3160510"
                        >
                          <blockquote className="side-padding-medium">
                            <p className="title-style-4 title-color-4 no-top-margin">
                              &ldquo;Dr. Ali cares about his patients he doesn't
                              give up on his patients he keeps working with them
                              to get the pain down to at least 90-95%. Dr. Ali
                              walked my CNA step by step on how to take the wire
                              out no pain at all he stayed on the phone the
                              whole time.&rdquo;
                            </p>
                            <strong>- Shannon S.</strong>
                            <svg className="bottom-flair absolute">
                              <use href="../includes/flair.svg#bottom"></use>
                            </svg>
                          </blockquote>
                        </li>
                      </ul>
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section
          className="values v8 light-bg bg-box-none large-padding vertical-middle col-50-50 items-spaced text-left bg-image flow-reverse"
          id="ValuesV8"
          data-onvisible="show"
        >
          <picture className="img-bg" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/values/values-v8-bg-mobile.jpg"
            />
            <Image
              layout="fill"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt=""
              data-src="/assets/values/values-v8-bg.jpg"
            />
          </picture>
          <div className="main">
            <div className="flex-margined-auto-responsive-block-1024 item-spacing item-widths align-items flex-direction box-flair">
              <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
                <div className="flair-border">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <header className="text-align center-800" id="ValuesV8Header">
                    <h4>HOW WE STAND OUT</h4>
                    <strong>Nothing But the Best Care</strong>
                    <svg className="header-flair">
                      <use href="../includes/flair.svg#header"></use>
                    </svg>
                  </header>
                  <ul className="values-list ui-repeater" id="ValuesV7Feed">
                    <li
                      className="flex-block-500 center-500 auto top-margin-small"
                      data-item="i"
                      data-key="22954"
                    >
                      <span className="ico-con">
                        <svg
                          viewBox="0 0 24 24"
                          className="values-icon"
                          data-use="cms/svg/site/ephleesdski.24.svg#education"
                        >
                          <path d="M20.811 23.287C17.904 23.769 14.945 24 12.001 24c-2.944 0-5.902-0.231-8.81-0.713c-0.582-0.097-0.989-0.622-0.936-1.209c0.178-1.957 0.501-5.24 1.093-6.025c0.374-0.497 1.086-0.939 1.93-1.346c-0.113 0.29-0.189 0.601-0.226 0.928c-0.135 1.197 0.27 2.456 1.015 3.554c-0.382 0.738 0.15 1.639 0.999 1.639c0.622 0 1.125-0.503 1.125-1.123c0-0.728-0.682-1.26-1.387-1.092c-0.597-0.895-0.931-1.916-0.823-2.874c0.09-0.802 0.494-1.474 1.165-1.826c0.322-0.127 0.642-0.249 0.953-0.37c0.49 1.503 1.543 4.18 2.637 6.162c0.074-0.973 0.225-1.466 0.521-2.893c-0.213-0.432-0.468-0.681-0.538-1.194c-0.14-1.019 2.699-1.019 2.558 0c-0.07 0.514-0.324 0.762-0.538 1.194c0.296 1.427 0.447 1.92 0.521 2.891c1.094-1.981 2.148-4.658 2.637-6.16c0.314 0.122 0.638 0.247 0.962 0.373c0.759 0.378 0.908 0.7 0.769 1.56c-1.122-0.038-2.062 0.642-2.334 1.824l-0.412 1.787c-0.153 0.663 0.142 1.343 0.708 1.687c0.252 0.577 1.102 0.499 1.241-0.118c0.113-0.506-0.38-0.932-0.86-0.76c-0.163-0.16-0.23-0.376-0.178-0.599l0.412-1.787c0.099-0.433 0.32-0.727 0.594-0.898c0.879-0.551 2.499 0.051 2.177 1.521l-0.393 1.792c-0.05 0.225-0.199 0.39-0.416 0.464c-0.362-0.36-0.989-0.186-1.102 0.321c-0.08 0.352 0.143 0.703 0.497 0.783c0.212 0.048 0.423-0.013 0.575-0.145c0.035-0.004 0.069-0.008 0.104-0.014c0.623-0.109 1.125-0.594 1.259-1.21l0.393-1.792c0.261-1.19-0.309-2.213-1.35-2.652c0.067-0.395 0.083-0.735 0.041-1.034c0.904 0.425 1.673 0.889 2.067 1.412c0.592 0.786 0.915 4.07 1.093 6.025C21.8 22.663 21.393 23.189 20.811 23.287zM6.239 7.425c-0.185-0.82-0.125-1.828 0.767-2.198C6.588 2.48 8.185 0 11.986 0c3.802 0 5.478 2.47 4.995 5.222c0.905 0.361 0.969 1.377 0.783 2.204c-0.186 0.821-0.691 1.744-1.17 2.204c-0.661 2.055-2.28 3.916-4.592 3.916c-2.313 0-3.931-1.861-4.592-3.916C6.93 9.17 6.424 8.246 6.239 7.425zM7.443 7.091c0.373 1.811 1.204 1.358 1.342 1.93c0.436 1.473 1.518 3.027 3.217 3.027c1.713 0 2.797-1.577 3.227-3.062c0.157-0.54 0.929-0.104 1.298-1.896c0.116-0.562-0.155-0.714-0.472-0.632c-0.195 0.43-0.297 0.926-0.348 1.162c-0.083 0.025-0.238 0.082-0.327 0.105c0.147-0.859 0.081-1.287-0.114-2.04c-0.067-0.259-0.143-0.57-0.218-0.991c-0.372 0.258-2.417 1.606-4.615 1.822c0.869-0.618 1.232-1.039 1.553-1.568c-0.802 0.432-1.953 1.109-3.319 0.955c0.004 0.666-0.24 0.705-0.068 1.822c-0.089-0.023-0.251-0.08-0.335-0.105c-0.051-0.235-0.153-0.731-0.347-1.162C7.6 6.376 7.327 6.528 7.443 7.091z"></path>
                        </svg>
                      </span>

                      <div className="info">
                        <strong className="title-style-4 title-color-4">
                          We Provide Patient Education Through Every Step
                        </strong>
                      </div>
                    </li>
                    <li
                      className="flex-block-500 center-500 auto top-margin-small"
                      data-item="i"
                      data-key="22951"
                    >
                      <span className="ico-con">
                        <svg
                          viewBox="0 0 24 24"
                          className="values-icon"
                          data-use="cms/svg/site/ephleesdski.24.svg#appointment"
                        >
                          <path d="M23.058 4.9V3.522c0-0.241-0.196-0.437-0.437-0.437h-0.708V2.192c0-0.241-0.196-0.437-0.437-0.437H1.744c-0.241 0-0.437 0.196-0.437 0.437v3.579h0.874V2.629h18.858v0.456H2.889c-0.241 0-0.437 0.196-0.437 0.437v2.249h0.874V3.96h18.858v0.94H17.66L15.841 6.506H0.872H0.618C0.278 6.506 0 6.784 0 7.124v14.503c0 0.34 0.278 0.618 0.618 0.618H23.38c0.34 0 0.618-0.278 0.618-0.618V7.652l0.002 0V4.9H23.058zM9.16 16.023H6.854v2.349H4.342v-2.349H2.036v-2.426h2.306V11.248h2.512v2.349H9.16V16.023z"></path>
                        </svg>
                      </span>

                      <div className="info">
                        <strong className="title-style-4 title-color-4">
                          We Can Schedule An Appointment Within 24 Hours
                        </strong>
                      </div>
                    </li>
                    <li
                      className="flex-block-500 center-500 auto top-margin-small"
                      data-item="i"
                      data-key="22950"
                    >
                      <span className="ico-con">
                        <svg
                          viewBox="0 0 24 24"
                          className="values-icon"
                          data-use="cms/svg/site/ephleesdski.24.svg#treatments"
                        >
                          <path d="M7.634 18.387c0.282 0.816 0.299 2.02 0.232 3.087H3.544c0.111-0.863 0.181-1.933-0.068-2.384c-0.409-0.739-3.318-3.749-3.47-5.486c-0.153-1.738 3.156-7.219 3.55-7.809c0.394-0.588 0.849-1.048 1.321-0.652c0.472 0.396-0.309 1.863-0.309 1.863s0.505-0.493 0.721-0.233c0.343 0.414-0.227 1.615-0.227 1.615s0.241-0.201 0.462 0.156c0.306 0.495-1.039 2.729-1.039 2.729s-0.08-0.317-0.436-0.731c-0.509-0.589-1.557-0.425-2.034 0.414c-0.415 0.727-0.58 2.167 0.05 3.879c0.344 0.934 1.104 2.097 1.448 2.292c0.39 0.222 0.846-0.15 0.283-0.704c-0.79-0.778-1.496-2.812-1.464-4.032c0.033-1.219 0.609-1.606 1.102-1.416c0.765 0.294 0.562 0.917 0.825 2.42C4.521 14.901 7.016 16.601 7.634 18.387zM23.996 13.207c0.141-1.739-3.205-7.198-3.602-7.785c-0.397-0.587-0.855-1.043-1.326-0.643c-0.469 0.399 0.322 1.861 0.322 1.861s-0.508-0.49-0.722-0.228c-0.34 0.416 0.238 1.614 0.238 1.614s-0.243-0.199-0.461 0.158c-0.303 0.497 1.058 2.723 1.058 2.723s0.077-0.318 0.431-0.733c0.505-0.592 1.554-0.436 2.037 0.4c0.42 0.724 0.595 2.163-0.024 3.879c-0.338 0.936-1.091 2.103-1.432 2.302c-0.388 0.225-0.848-0.144-0.288-0.702c0.785-0.782 1.476-2.822 1.436-4.042c-0.04-1.219-0.619-1.601-1.112-1.408c-0.763 0.3-0.555 0.921-0.808 2.425c-0.253 1.505-2.738 3.221-3.344 5.011c-0.307 0.907-0.283 2.29-0.185 3.433h4.352c-0.141-0.898-0.286-2.237-0.003-2.757C20.966 17.975 23.856 14.946 23.996 13.207zM8.364 8.259C8.27 8.264 8.021 8.278 8.364 8.259C8.412 8.256 8.399 8.257 8.364 8.259c0.17-0.01 0.334-0.071 0.469-0.174c-0.033 0.277-0.045 0.557-0.059 0.835c1.036 0.017 2.071 0.036 3.107 0.053c0.101 0.002 0.202 0.004 0.302 0.005c0.004-0.584 0.043-1.161 0.116-1.74c0.007-0.055 0.085-0.468 0.057-0.473c-0.057-0.012-0.113-0.023-0.169-0.036c-0.587-0.122-1.173-0.243-1.76-0.365c-0.339-0.07-0.679-0.14-1.018-0.211c-0.069-0.014-0.139-0.029-0.208-0.043c-0.027-0.006-0.177 0.732-0.19 0.801c-0.38-0.535-1.222-0.444-1.481 0.156C7.282 7.642 7.741 8.295 8.364 8.259zM10.837 15.935c0.015 0.035 0.153 0.393 0.181 0.382c0.05-0.019 0.1-0.038 0.15-0.058c0.233-0.09 0.466-0.18 0.699-0.27c0.606-0.234 1.212-0.468 1.817-0.702c0.128-0.049 0.255-0.099 0.383-0.148c0.024-0.01 0.047-0.018 0.071-0.028c0.007-0.003-0.084-0.231-0.089-0.247c-0.297-0.777-0.668-1.513-1.055-2.247c-0.914 0.492-1.828 0.985-2.742 1.476c-0.103 0.056-0.205 0.11-0.308 0.166c0.072 0.131 0.143 0.263 0.217 0.393c-0.646-0.046-1.116 0.645-0.828 1.229C9.628 16.481 10.499 16.512 10.837 15.935zM10.837 15.935C10.698 16.173 10.848 15.958 10.837 15.935L10.837 15.935zM14.499 16.266c-0.989 0.28-1.979 0.56-2.967 0.839c-0.066 0.018-0.132 0.037-0.199 0.057c0.035 0.109 0.071 0.219 0.104 0.329c-0.507-0.21-1.093 0.123-1.172 0.665c-0.076 0.527 0.363 1.007 0.895 0.976c-0.107 0.006-0.308 0.018 0.001 0c0.084-0.005 0.056-0.003 0.001 0c0.236-0.014 0.459-0.129 0.609-0.311c0.009 0.049 0.076 0.51 0.096 0.508c0.055-0.005 0.11-0.01 0.165-0.014c0.259-0.022 0.519-0.044 0.779-0.067c0.619-0.053 1.239-0.107 1.859-0.159c0.08-0.007 0.158-0.013 0.238-0.02c0.038-0.003-0.018-0.547-0.024-0.61C14.817 17.718 14.678 16.988 14.499 16.266zM9.244 4.263C9.157 4.246 8.928 4.198 9.244 4.263C9.289 4.273 9.277 4.27 9.244 4.263c0.157 0.033 0.322 0.017 0.47-0.043c-0.098 0.245-0.178 0.496-0.258 0.747c0.94 0.27 1.88 0.54 2.82 0.808c0.091 0.026 0.183 0.053 0.275 0.079c0.146-0.532 0.324-1.047 0.532-1.558c0.019-0.048 0.193-0.405 0.168-0.418c-0.049-0.025-0.097-0.049-0.146-0.074c-0.505-0.254-1.01-0.509-1.515-0.763c-0.292-0.147-0.584-0.294-0.876-0.442c-0.06-0.03-0.12-0.06-0.18-0.09c-0.023-0.012-0.341 0.624-0.37 0.684c-0.215-0.58-1.005-0.705-1.389-0.22C8.409 3.437 8.667 4.144 9.244 4.263zM9.371 12.95c0.014 0.041 0.029 0.082 0.043 0.123c0.976-0.359 1.952-0.717 2.928-1.076c0.083-0.031 0.165-0.06 0.249-0.091c0.012-0.005 0.085-0.02 0.091-0.034c0.01-0.02-0.037-0.109-0.046-0.133c-0.024-0.067-0.046-0.134-0.067-0.204c-0.047-0.151-0.096-0.303-0.129-0.458c-0.07-0.299-0.125-0.598-0.172-0.901c-0.011-0.067-0.016-0.135-0.024-0.204c-0.002-0.017 0-0.126-0.014-0.135c-0.004-0.003-0.023 0.002-0.027 0.003c-0.063 0.006-0.127 0.012-0.19 0.018c-0.257 0.025-0.516 0.05-0.773 0.075c-0.609 0.06-1.218 0.118-1.827 0.178c-0.184 0.018-0.369 0.036-0.553 0.054c-0.052 0.005-0.064-0.01-0.06 0.047c0.024 0.283 0.055 0.565 0.097 0.847c-0.287-0.252-0.72-0.282-1.038-0.07c-0.293 0.196-0.439 0.561-0.359 0.904c0.078 0.339 0.365 0.603 0.709 0.653c0.367 0.053 0.735-0.144 0.895-0.478c0.079 0.291 0.168 0.576 0.262 0.862C9.362 12.925 9.363 12.929 9.371 12.95zM11.952 20.237c0.005 0.106 0.01 0.212 0.015 0.318c0.001 0.014 0.002 0.036 0.003 0.064c0.002 0.055 0.004 0.109 0.006 0.164c-0.41-0.33-1.034-0.204-1.284 0.255c-0.031 0.056-0.176 0.452-0.079 0.452c0.109 0 0.219 0 0.327 0c0.411 0 0.821 0 1.232 0c0.615 0 1.232 0 1.847 0c0.233 0 0.466 0 0.698 0c0.021 0 0.042 0 0.064 0c0.037 0 0.032-0.136 0.036-0.167c0.039-0.296 0.064-0.592 0.086-0.89c0.004-0.055 0.009-0.109 0.012-0.164c-0.977-0.011-1.955-0.022-2.932-0.033C11.974 20.237 11.962 20.237 11.952 20.237zM11.97 20.62c-0.001-0.021-0.002-0.043-0.003-0.064C11.962 20.457 11.972 20.663 11.97 20.62z"></path>
                        </svg>
                      </span>

                      <div className="info">
                        <strong className="title-style-4 title-color-4">
                          One-Stop-Shop for All Pain Management Treatments
                        </strong>
                      </div>
                    </li>
                    <li
                      className="flex-block-500 center-500 auto top-margin-small"
                      data-item="i"
                      data-key="22949"
                    >
                      <span className="ico-con">
                        <svg
                          viewBox="0 0 24 24"
                          className="values-icon"
                          data-use="cms/svg/site/ephleesdski.24.svg#procedure"
                        >
                          <path d="M24 8.491c0 5.415-7.593 12.162-12 14.418c-3.334-1.707-8.49-5.983-10.804-10.31h2.623c0.241 0 0.435-0.151 0.542-0.35l0.869-1.618l1.403 3.969c0.2 0.568 0.977 0.494 1.141-0.077L9.39 8.926l1.707 8.427c0.128 0.632 1.029 0.628 1.161 0.004l1.602-7.575l1.206 2.48c0.103 0.211 0.314 0.335 0.535 0.336l1.645 0.001c0.238 0.61 0.831 1.042 1.525 1.042c0.903 0 1.636-0.733 1.636-1.636c0-0.903-0.733-1.636-1.636-1.636c-0.694 0-1.286 0.431-1.524 1.041h-1.274l-1.796-3.694c-0.255-0.524-1.003-0.422-1.119 0.13l-1.366 6.465l-1.618-7.987c-0.122-0.602-0.978-0.643-1.15-0.047l-1.784 6.186L5.903 8.97c-0.169-0.478-0.837-0.542-1.083-0.083l-1.356 2.523H0.634C0.23 10.417 0 9.434 0 8.491C0 1.98 7.636-2.054 12 4.244C16.364-2.02 24 1.98 24 8.491z"></path>
                        </svg>
                      </span>

                      <div className="info">
                        <strong className="title-style-4 title-color-4">
                          Our Doctor Has Performed Over 20,000 Procedures
                        </strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex-column-end">
                <picture
                  className="img pad-height- bg-position border-radius"
                  data-role="picture"
                >
                  <source
                    media="(max-width: 500px)"
                    srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                    data-src="/assets/values/values-v8-img-mobile.jpg"
                  />
                  <Image
                    layout="fill"
                    src="https://www.mypremierpain.com/assets/values/values-v8-img.jpg"
                    alt=""
                    data-src="/assets/values/values-v8-img.jpg"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <section
          className="blog v3 dark-bg bg-image text-center large-padding bg-box-stylized"
          id="BlogV3"
          data-onvisible="show"
        >
          <picture className="img-bg" data-role="picture">
            <source
              media="(max-width: 500px)"
              srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              data-src="/assets/blogs/blog-v3-bg-mobile.jpg"
            />
            <img
              src="/assets/blogs/blog-v3-bg.jpg"
              alt=""
              data-src="/assets/blogs/blog-v3-bg.jpg"
            />
          </picture>
          <div className="main">
            <header className="center-800 text-align" id="BlogV3Header">
              <h4>Our Medical Blogs &amp; News</h4>
              <strong>Stay Up to Date With the Latest Articles</strong>
              <svg className="header-flair">
                <use href="../includes/flair.svg#header"></use>
              </svg>
            </header>
            <ul
              className="blog-list flex-grid-wrap-center-max-3-auto-size-break-800-block-500 close-gap-500 ui-repeater"
              id="BlogV3List"
            >
              <li className="flex- fit" data-item="i" data-key="1365288">
                <Link
                  className="flex-column full border-radius-item scaling-img-item bg-box relative"
                  href="/blog/health-tips/epidural-steroid-injections-for-pain-likely-have-limited-efficacy-among-older-adults/"
                >
                  <div className="img pad-height-50 fit full">
                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="news"
                      data-src="/wp-content/uploads/2022/09/500-max-Epidural-1.png"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="fit full bottom-margin-tiny">
                      <span className="blog-time-style full">
                        <time content="Sep 10, 2022">Sep 10</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Epidural Steroid Injections for Pain Likely Have Limited
                        Efficacy Among Older Adults
                      </strong>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li className="flex- fit" data-item="i" data-key="1365287">
                <Link
                  className="flex-column full border-radius-item scaling-img-item bg-box relative"
                  href="/blog/neck-pain/4-causes-of-eustachian-tube-neck-pain-2/"
                >
                  <div className="img pad-height-50 fit full">
                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="knee pain when waling upstairs"
                      data-src="/wp-content/uploads/2022/09/4-causes-of-eustachian-tube-neck-pain-max-500.png"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="fit full bottom-margin-tiny">
                      <span className="blog-time-style full">
                        <time content="Sep 10, 2022">Sep 10</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        4 causes of eustachian tube neck pain
                      </strong>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
              <li className="flex- fit" data-item="i" data-key="1365286">
                <Link
                  className="flex-column full border-radius-item scaling-img-item bg-box relative"
                  href="/blog/neck-pain/can-neck-pain-cause-dizziness/"
                >
                  <div className="img pad-height-50 fit full">
                    <Image
                      layout="fill"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt="knee pain when riding a bike"
                      data-src="/wp-content/uploads/2022/09/neck-pain-and-dizziness-1.png"
                    />
                  </div>
                  <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                    <div className="fit full bottom-margin-tiny">
                      <span className="blog-time-style full">
                        <time content="Sep 10, 2022">Sep 10</time>
                      </span>
                      <strong className="title-style-4 title-color-4">
                        Can neck pain cause dizziness?
                      </strong>
                    </div>
                    <span className="fit btn v2">View Article</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div id="BlogV3BtnCon">
              <div className="top-margin text-center">
                <Link
                  className="btn v1"
                  href="/blog/"
                  aria-labelledby="BlogV3Header"
                >
                  All Blogs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ConditionsWeTreat;
