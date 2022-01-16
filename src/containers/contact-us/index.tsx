// import { Social } from "@components/container/contact-us/social";
import React from "react";
import { connect } from "react-redux";
import toast from "@components/toast";
import { IProps, IState } from "./types";
import { arrowDown, envelope, loadingIcon, whiteDots } from "@utils/svgIcons";
import RippleButton from "@components/button";
// import Request from "@api/request";
// import URLS from "@api/endpoints";
// import SocialNetworks from "@components/markets/SocialNetworks";
// import {
//   FACEBOOK,
//   INSTAGRAM,
//   LINKEDIN,
//   SNAPCHAT,
//   TIKTOK,
//   TWITTER,
// } from "@components/markets/const";
// import SeoHeadInformation from "@components/head-information";

class ContactUs extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      storeName: "",
      email: "",
      phone: "",
      message: "",
      loading: false,
      showUserTypes: false,
      user: "select ...",
      fullName: "",
    };
  }
  handleSubmitForm = async (e: any) => {
    e.preventDefault();
    const { email, message, name, phone } = this.state;
    if (name.trim() === "") {
      toast("error", "Please enter Your name");
    } else if (email.trim() === "") {
      toast("error", "Please enter Your email");
    } else if (phone.trim() === "") {
      toast("error", "Please enter Your phone");
    } else if (message.trim() === "") {
      toast("error", "Please enter Your Message");
    } else {
      this.setState({ loading: true });
    }
  };
  handleSelectUserType = (item: any) => {
    this.setState({ showUserTypes: false, user: item });
  };
  handleContactUs = async (e: any) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="main-container">
        <div className="px-4 md:px-16 py-8 ">
          <h1 className="text-gray-900 text-2xl mb-3 font-bold z-30 relative">
            Contact us
          </h1>
          <p className="text-sm text-gray-400 z-30 relative">
            Get in touch with the Stage team & let us know how we can help.
          </p>
          <div className=" flex flex-col sm:flex-row justify-start items-start flex-wrap my-6">
            <div className="text-box rounded-md py-10 pl-12 px-4 sm:p-8 sm:pl-12 w-full sm:w-1/3 relative">
              <span className="text-box-right z-10 ">{whiteDots}</span>
              <span className="text-box-left z-10 ">{whiteDots}</span>
              <h2 className="text-white text-2xl font-bold text-box-title relative pb-2 mb-3 z-30">
                We're listening!
              </h2>
              <p className="text-white text-base mb-7 z-30">
                Fill out this form if you need more information.
                <br />
                We will contact you as soon as possible.
              </p>
              <div className="flex justify-start items-center z-30 border-b border-white border-opacity-50 pb-10 mr-8">
                <span className="mr-3">{envelope}</span>
                <a
                  href={`mailto:support@Tfap.co`}
                  className="text-white text-sm block w-full break-words"
                >
                  support@Tfap.co
                </a>
              </div>
              <div className="text-box-social pt-3 ">
                <div className="flex justify-center">
                  <figure
                    className={`flex justify-center md:justify-start items-start`}
                  >
                    <a
                      className="footer-icon mr-1 my-2"
                      href="#"
                      target="_blank"
                    >
                      <img
                        className="object-contain"
                        src="/assets/images/insta.svg"
                        alt="logo_insta"
                      />
                    </a>
                    <a
                      className="footer-icon mx-1 md:mx-2 my-2"
                      href="#"
                      target="_blank"
                    >
                      <img
                        className="object-contain"
                        src="/assets/images/linkedin.svg"
                        alt="logo_linkedin"
                      />
                    </a>

                    <a
                      className="footer-icon mx-1 md:mx-2 my-2"
                      href="#"
                      target="_blank"
                    >
                      <img
                        className="object-contain"
                        src="/assets/images/facebook.svg"
                        alt="logo_facebook"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <form
              onSubmit={this.handleContactUs}
              className="rounded-md py-4 sm:p-8 w-full sm:w-2/3 relative sm:pl-6"
            >
              <div className="w-full mb-3">
                <p className="text-base text-gray-500">Full Name</p>
                <input
                  value={this.state.name}
                  className="h-9 w-full py-3 px-3 text-xs w-full input-box relative mt-2"
                  placeholder=""
                  type="text"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="flex justify-start items-center flex-wrap mb-3">
                <div className="w-1/2 pr-1 z-50 relative">
                  <p className="text-base text-gray-500">Email Id</p>
                  <input
                    value={this.state.email}
                    className="h-9 w-full py-3 px-3 text-xs w-full input-box relative mt-2"
                    placeholder=""
                    type="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="w-1/2 pl-1">
                  <p className="text-base text-gray-500">Phone Number</p>
                  <input
                    value={this.state.phone}
                    className="h-9 w-full py-3 px-3 text-xs w-full input-box relative mt-2"
                    placeholder=""
                    type="tel"
                    onChange={(e) => this.setState({ phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-start items-center flex-wrap mb-3">
                <div className={` z-50 relative w-full`}>
                  <p className="text-base text-gray-500">
                    How did you hear about us?
                  </p>
                  <div className="relative w-full mt-2">
                    <span
                      className="flex capitalize  justify-start items-center text-gray-600 px-3 w-full input-box relative cursor-pointer"
                      onClick={() =>
                        this.setState((prev) => ({
                          showUserTypes: !prev?.showUserTypes,
                        }))
                      }
                    >
                      {this.state.user}
                      <span className="absolute right-3 top-3">
                        {arrowDown}
                      </span>
                    </span>
                    <ul
                      className={`absolute top-0 left-0 w-full bg-white shadow-lg user-type capitalize ${
                        this.state.showUserTypes ? "show" : ""
                      }`}
                    >
                      <li
                        className="cursor-pointer text-gray-600 text-sm p-3"
                        onClick={() =>
                          this.handleSelectUserType("internet search")
                        }
                      >
                        internet search
                      </li>
                      <li
                        className="cursor-pointer text-gray-600 text-sm p-3"
                        onClick={() =>
                          this.handleSelectUserType("recommendation")
                        }
                      >
                        recommendation
                      </li>
                      <li
                        className="cursor-pointer text-gray-600 text-sm p-3"
                        onClick={() =>
                          this.handleSelectUserType("media report")
                        }
                      >
                        media report
                      </li>
                      <li
                        className="cursor-pointer text-gray-600 text-sm p-3"
                        onClick={() =>
                          this.handleSelectUserType(`"I know you already"`)
                        }
                      >
                        "i know you already"
                      </li>
                      <li
                        className="cursor-pointer text-gray-600 text-sm p-3"
                        onClick={() => this.handleSelectUserType(`no data`)}
                      >
                        no data
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full mb-3">
                <p className="text-base text-gray-500">
                  What Can We Do For You?
                </p>
                <textarea
                  className="w-full h-20 p-3 text-xs textarea-box mt-2"
                  onChange={(e) => this.setState({ message: e.target.value })}
                ></textarea>
              </div>
              <div>
                <RippleButton
                  type="submit"
                  loading={this.state.loading}
                  classes={`contact-btn bg-primary px-12 py-2 rounded-md font-bold text-base relative text-white`}
                >
                  Submit
                </RippleButton>
              </div>
            </form>
          </div>

          <style jsx>
            {`
              .user-type {
                max-height: 0;
                overflow: hidden;
              }
              .user-type.show {
                max-height: 250px;
              }
              .text-box {
                // background: linear-gradient(
                //   110.8deg,
                //   #876cfe 4.62%,
                //   #6476f5 53.79%,
                //   #4b92db 91.22%
                // );
                background-color: #000000;
                background-image: linear-gradient(
                  147deg,
                  #000000 0%,
                  #04619f 74%
                );
                border-radius: 20px;
              }
              .input-box {
                border: 1px solid #626982;
                box-sizing: border-box;
                border-radius: 4px;
                height: 40px;
              }
              .textarea-box {
                border: 1px solid #626982;
                box-sizing: border-box;
                border-radius: 4px;
                resize: none;
              }
              .text-box-right,
              .text-box-left {
                content: "";
                width: 30px;
                height: 170px;
                position: absolute;
                right: 0px;
                bottom: 10px;
              }
              .text-box-left {
                right: auto;
                left: 5px;
                bottom: auto;
                top: 10px;
              }
              .text-box-title:before {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 25%;
                height: 2px;
                background: #fff;
              }
            `}
          </style>
        </div>
      </div>
    );
  }
}

export default ContactUs;
