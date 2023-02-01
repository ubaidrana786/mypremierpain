import { Footer } from "@/pages/components/Footer/Footer";
import { Header } from "@/pages/components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const RaoKAli = () => {
  return (
    <>
      <Header />

      <main id="MainZone">
        <form
          id="Form_StaffProfileV2"
          method="post"
          encType="multipart/form-data"
          action="https://www.mypremierpain.com/meet-our-team/rao-k-ali/"
        >
          <input type="hidden" name="_m_" value="StaffProfileV2" />
          <input
            type="hidden"
            className="ui-cms-input"
            id="StaffProfileV2__edit_"
            name="StaffProfileV2$_edit_"
          />
          <input
            type="hidden"
            className="ui-cms-input"
            id="StaffProfileV2__command_"
            name="StaffProfileV2$_command_"
          />
          <section
            className="staff-profile v1 light-bg bg-box-like vertical-top text-left el-tab-box ui-repeater ui-ajax"
            id="StaffProfileV2"
            data-showhide="true"
            data-onvisible="show"
            data-siblings="false"
            data-class-name="open"
          >
            <div className="main" data-item="i" data-key="27955">
              <div className="flex-spaced-between-block-1024-margined flex-direction align-items">
                <div className="third">
                  <div className="center-800 aside">
                    <div className="img staff-img pad-height-100 bottom-margin-small border-radius-item">
                      <Image layout="fill"
                        src="/cms/thumbnails/34/400x400/images/dr-ali.jpg"
                        alt="Rao Ali Photo"
                        title="Rao Ali Photo"
                        data-bg="/cms/thumbnails/34/400x400/images/dr-ali.jpg"
                      />
                    </div>

                    <div className="info">
                      <header className="no-pad text-left center-800">
                        <h1>Rao K. Ali</h1>

                        <strong>M.D.</strong>

                        <svg className="header-flair"   >
                          <use href="../../includes/flair.svg#header"></use>
                        </svg>
                      </header>
                    </div>
                  </div>
                </div>
                <div className="two-thirds bg-box vertical-padding-small side-padding border-radius">
                  {/* <div className="tab-list pseudo-before">
                    <ul className="flex- ui-scroll">
                      <li
                        className="flex-middle el-tab fit active"
                        data-tab="Profile"
                      >
                        <span className="title-font pseudo-after">Profile</span>
                      </li>
                    </ul>
                  </div> */}
                  <div className="tab-panels">
                    <div
                      className="bio section el-panel top-margin active"
                      data-tab="Profile"
                    >
                      <div id="StaffProfileV2BioTitle">
                        <strong className="title-style-3 bottom-margin-tiny top-margin-small">
                          Bio
                        </strong>
                      </div>
                      <div className="content-style">
                        Dr. Rao Ali is a dual fellowship-trained, double
                        board-certified Physiatrist and Interventional Pain
                        Management physician who runs the state of art
                        interventional pain management practice for over eight
                        years. Dr. Ali Completed his medical school in 2000 and
                        General Surgery Internship in 2006, Physical Medicine
                        and Rehabilitation Residency in 2009 at the prestigious
                        Montefiore Medical Center NY, Interventional Spine
                        Fellowship in 2010, and Anesthesia-based Pain Medicine
                        Fellowship at Case Western University Hospitals in 2011.
                        He is an expert in interventional pain procedures
                        including Epidurals, Nerve Blocks, Radio-frequency
                        Ablation, Joint Injections, Kyphoplasty, Discectomy,
                        Spinal cord stimulator trial, and implantation and
                        Intrathecal pumps. He has presented over 20 posters and
                        publications nationally as well as internationally. He
                        has run CME programs and has trained physicians in
                        workshops nationally and internationally. He is past
                        president of Richland County Medical Society and is an
                        active member of ASIPP, NANS, and Texas Pain Society. He
                        is a sociopolitical activist. He loves traveling and
                        spending time with his family and friends.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
        <form
          id="Form_ContactV1"
          method="post"
          encType="multipart/form-data"
          action="https://www.mypremierpain.com/meet-our-team/rao-k-ali/"
        >
          <input type="hidden" name="_m_" value="ContactV1" />
          <section
            className="contact v1 dark-bg bg-image bg-box-none text-center"
            id="ContactV1"
            data-onvisible="show"
          >
            {/* <Link name="contactAnchor"></Link> */}
            <picture
              className="img-bg bg-position"
                
              data-role="picture"
            >
              <source
                media="(max-width: 500px)"
                srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/assets/contact/contact-v10-bg-mobile.jpg"
              />
              <source
                media="(max-width: 800px)"
                srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                data-src="/assets/contact/contact-v10-bg-tablet.jpg"
              />
              <img
                src="/assets/contact/contact-v10-bg.jpg"
                alt=""
                data-src="/assets/contact/contact-v10-bg.jpg"
              />
            </picture>
            <div className="main">
              <div className="bg-box border-radius side-padding vertical-padding-small box-flair">
                <div className="flair-border">
                  <span className="flair-1"></span>
                  <span className="flair-2"></span>
                  <header className="text-align center-800" id="ContactV1Header">
                    <h4>SCHEDULE AN APPOINTMENT</h4>

                    <strong>The Next Steps to Living Pain Free</strong>

                    <svg    className="header-flair">
                      <use href="../../includes/flair.svg#header"></use>
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
                            />
                            <label className="hide" htmlFor="ContactV1Form_ITM0_Phone">
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
                            >
                              <option value=""></option>
                              <option value="1">
                                Yes, I am a potential new patient
                              </option>
                              <option value="11">
                                No, I'm a current existing patient
                              </option>
                              <option value="13">I'm neither.</option>
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
      </main>

      <Footer />
    </>
  );
};

export default RaoKAli;
