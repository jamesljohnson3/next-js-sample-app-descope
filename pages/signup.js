/* eslint-disable react/no-unknown-property */
import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AuthProvider, useDescope, useSession, useUser } from '@descope/react-sdk';

const deliveryMethod = 'sms';

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const { isAuthenticated, isSessionLoading } = useSession()
  const { user, isUserLoading } = useUser()
  const sdk = useDescope()


  const phone2 = user && user.phone;


  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const resp = await sdk.otp.signUpOrIn[deliveryMethod](phone);

    if (!resp.ok) {
      console.log('Failed to initialize signUpOrIn flow');
      console.log(`Status Code: ${resp.code}`);
      console.log(`Error Code: ${resp.error.errorCode}`);
      console.log(`Error Description: ${resp.error.errorDescription}`);
      console.log(`Error Message: ${resp.error.message}`);
    } else {
      console.log('Successfully initialized signUpOrIn flow');
      setOtpSent(true);
    }
  };

  const handleOtpChange = (event) => {
    setOtpCode(event.target.value);
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();

    const resp = await sdk.otp.verify.sms(phone, otpCode);

    if (!resp.ok) {
      console.log("Failed to verify OTP code");
      console.log("Status Code: " + resp.code);
      console.log("Error Code: " + resp.error.errorCode);
      console.log("Error Description: " + resp.error.errorDescription);
      console.log("Error Message: " + resp.error.message);
    } else {
      console.log("Successfully verified OTP ");
      console.log(resp.data);
    }
  };

  useEffect(() => {
    if (isAuthenticated && !isUserLoading) {
      console.log("User is authenticated!");
      console.log("User ID: " + user.id);
      console.log("User email: " + user.email);
    } else {
      console.log("User is not authenticated.");
    }
  }, [isAuthenticated, isUserLoading]);

  return (
    <>
      <header className="header">
        <div aria-hidden="true" className="div">
          <a
            aria-hidden="true"
            href="https://unlimitpotential.com/"
            className="a"
          >
            <span className="span">
              <span className="span-2" />
              <div className="div-2" lockAspectRatio={false}>
                <picture>
                  <source
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?format=webp&width=52 52w"
                    type="image/webp"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=52"
                    sizes="(max-width: 998px) 6vw, 4vw"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Ffc8480a6998e49d7af4ee889483a2619%2F5de0a4a2e6f04d86863a7a712fd7df61?width=52 52w"
                    className="image"
                  />
                </picture>
                <div className="builder-image-sizer image-sizer" />
              </div>
            </span>
          </a>
          <div className="div-3">
            <nav className="nav">
             
            </nav>
          </div>
          <div className="div-4">
            <label className="label">
              <input type="checkbox" className="input" />
            </label>
          </div>
          <div aria-hidden="true" className="div-5" />
          <a
            aria-hidden="true"
            href="https://dashboard.unlimitpotential.com/account2"
            className="a-8"
          >
            <p>Explore</p>
          </a>
          <button
            aria-label="user-information"
            aria-hidden="true"
            className="button"
          />
        </div>
      </header>
      <nav className="nav-2">
        <div className="div-6">
          <div className="div-7">
            <div className="div-8">
              <a
                aria-label="Logo"
                href="https://unlimitpotential.com/"
                className="a-9"
              >
                <div className="div-9" lockAspectRatio={false}>
                  <picture>
                    <source
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                      className="image"
                    />
                  </picture>
                  <div className="builder-image-sizer image-sizer" />
                </div>
              </a>
              <nav className="nav-3">
                <a className="a-10">Integrations</a>
                <a className="a-11">Extensions</a>
                <a className="a-12">Apps</a>
                <a className="a-13">Partners</a>
                <a className="a-14">Account</a>
              </nav>
            </div>
            <a
              href="https://dashboard.unlimitpotential.com/account2"
              className="a-15"
            >
              Dashboard
            </a>
          </div>
        </div>
      </nav>
      <div className="div-10">
        <section className="section">
          <section data-testid="1234" className="section-2">
            <div
              data-animationappear="off"
              data-record-type="712"
              className="div-11"
            >
              <div bgimgfield="img" className="div-12">
                <div
                  data-content-cover-id="112985622"
                  data-content-cover-bg="https://static.tildacdn.com/tild3734-3164-4234-a364-356238643638/Depositphotos_244394.png"
                  data-content-cover-height="100vh"
                  data-content-cover-parallax=""
                  data-content-cover-updated-height="954px"
                  className="div-13"
                />
                <div className="div-14" />
                <div className="div-15">
                  <div className="div-16">
                    <div data-hook-content="covercontent" className="div-17">
                      <div className="div-18">
                        <div className="div-19">
                          <div field="title" className="div-20">
                            <br />
                            <br />
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="div-21">
                        <div className="box">
                          <div className="div-22">
                            <div
                              data-customstyle="yes"
                              field="title2"
                              className="div-23"
                            >
                              <p>Secure your account</p>
                            </div>
                            <div field="descr2" className="div-24">
                              <div data-customstyle="yes" className="div-25" />
                            </div>
                          </div>
                         <form onSubmit={handleFormSubmit}
      name="form112985622"
      role="form"
      action="https://connect.unlimitednow.site"
      method="POST"
      data-formactiontype="0"
      data-inputbox=".t-input-group"
      data-success-callback="t712_onSuccess"
      className="form"
    >
      <div className="div-26" />
      <div className="div-27">
        <div data-input-lid="1496154096760" className="div-28">
          <div className="div-29">
           <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="+15554441111"

          className="input-2"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
            <div className="div-30" />
          </div>
        </div>
        <div data-input-lid="1561383095793" className="div-31">
          <div className="div-32">
            <input
              type="hidden"
              name="Input"
              value=""
              placeholder="Email"
              className="input-3"
            />
            <div className="div-33" />
          </div>
        </div>
        <div className="div-34">
          <div className="div-35">
            <div className="div-36">
              <p className="p" />
              <p className="p" />
              <p className="p" />
              <p className="p" />
              <p className="p" />
              <p className="p" />
              <p className="p" />
            </div>
          </div>
        </div>
        <div className="div-37">
        <button className="button-2" type="submit">Send OTP</button>
                             <br></br>   <Link href="/access" className="a-16">
                                  <p>Do this step later</p>
                                </Link>
                              </div>
                            </div>{" "}
                            <div className="div-38">
                              <div className="div-39">
                                <div className="div-40">
                                  <p className="p" /> <p className="p" />{" "}
                                  <p className="p" /> <p className="p" />{" "}
                                  <p className="p" /> <p className="p" />{" "}
                                  <p className="p" />
                                </div>
                              </div>
                            </div>{" "}
                            <div className="div-41">
                              <input
                                type="text"
                                name="form-spec-comments"
                                value="auth-phone"
                              />
                            </div>
                            </form>
      {otpSent && (
        <form onSubmit={handleOtpSubmit}>
          <label htmlFor="otpCode">OTP Code:</label>
          <input
            type="text"
            name="otpCode"
            id="otpCode"
            placeholder="Enter 6 digit code"
            value={otpCode}
            onChange={handleOtpChange}
            required
          />
          <button className="button-2" type="submit">Verify OTP</button>
        </form>
      )}
    </div>
                          <div className="div-42" /> {!isAuthenticated ? (
       <></>
      ) : (
        <div><form
        data-hs-cf-bound="true"
        action="https://sso.unlimitpotential.com"
        className="a-8"
      >
        <input
          type="hidden"
          name="sso-2"
          placeholder="Enter your work email"
          value={user.userId}
          className="input"
        />
        <button className="">
          <h1>  Open BID</h1>
        </button>
      </form>
          <p >Hello {phone2}!</p>
          <button onClick={() => sdk.logout()}>Logout</button>
        </div>
      )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
          </section>
        </section>
      </div>{" "}
      <style jsx>{`
        .header {
          background-color: rgb(255, 255, 255);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
          left: 0px;
          position: fixed;
          width: 100%;
          border-color: rgb(35, 38, 47) rgb(35, 38, 47) rgb(230, 232, 236);
          border-left: 0px;
          border-right: 0px;
          border-style: none none solid;
          border-top: 0px;
          padding-bottom: 10px;
          z-index: 20;
          padding-top: 10px;
          top: 35px;
          border-bottom-color: rgb(230, 232, 236);
          border-bottom: 1px solid rgb(230, 232, 236);
          margin-top: -35px;
          display: flex;
        }
        @media (max-width: 991px) {
          .header {
            border-bottom: none;
            border-bottom-color: initial;
            border-bottom-style: none;
            border-bottom-width: initial;
            border-color: rgb(35, 38, 47);
            border-left: none;
            border-right: none;
            border-style: none;
            border-top: none;
            top: 50px;
            margin-top: -55px;
            display: none;
          }
        }
        @media (max-width: 640px) {
          .header {
            margin-top: -50px;
            display: none;
          }
        }
        .div {
          outline: none;
          align-items: center;
          display: flex;
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px;
          padding-left: 80px;
          padding-right: 80px;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div {
            padding-left: 32px;
            padding-right: 32px;
          }
        }
        .a {
          outline: none;
          display: inline-block;
          margin-right: 32px;
          position: relative;
          width: 128px;
          z-index: 12;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(0, 0, 238);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a {
            margin-right: auto;
          }
        }
        .span {
          outline: none;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background: none;
          border: 0px;
          display: flex;
          max-width: 100%;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          position: relative;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .span {
            padding-right: 0px;
            margin-right: 2px;
          }
        }
        @media (max-width: 640px) {
          .span {
            margin-left: -21px;
          }
        }
        .span-2 {
          outline: none;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background: none;
          border: 0px;
          display: block;
          max-width: 100%;
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 6px;
          width: 100%;
          min-width: 40px;
          overflow: hidden;
          margin-left: auto;
          margin-right: auto;
          max-width: 52px;
          margin-bottom: 6px;
        }
        .image {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 106.5%;
          pointer-events: none;
          font-size: 0;
        }
        .div-3 {
          outline: none;
          align-items: center;
          display: flex;
          flex-grow: 1;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-3 {
            align-items: stretch;
            background-color: rgb(252, 252, 253);
            box-shadow: rgba(31, 47, 70, 0.2) 0px 64px 64px;
            flex-direction: column;
            height: 100vh;
            left: 0px;
            opacity: 0;
            padding-bottom: 40px;
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 140px;
            position: absolute;
            right: 0px;
            top: 0px;
            transition: all 0.2s ease 0s;
            transition-duration: 0.2s;
            visibility: hidden;
            flex-grow: 0;
          }
        }
        .nav {
          border-left: 2px solid rgb(230, 232, 236);
          border-left-color: rgb(230, 232, 236);
          border-left-style: solid;
          border-left-width: 2px;
          display: flex;
          margin-right: auto;
          border-bottom: 0px;
          border-color: rgb(35, 38, 47) rgb(35, 38, 47) rgb(35, 38, 47)
            rgb(230, 232, 236);
          border-right: 0px;
          border-style: none none none solid;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .nav {
            border-bottom: none;
            border-color: rgb(35, 38, 47);
            border-left: none;
            border-left-color: initial;
            border-left-style: none;
            border-left-width: initial;
            border-right: none;
            border-style: none;
            border-top: none;
            flex-direction: column;
            margin-bottom: 40px;
            margin-right: 0px;
          }
        }
        .a-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
          outline: none;
          color: rgb(119, 126, 144);
          font-family: "DM Sans", sans-serif;
          line-height: 40px;
          margin-left: 32px;
          transition: color 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: color;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a-2 {
            font-size: 24px;
            line-height: 64px;
            margin-left: 0px;
          }
        }
        .a-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
          outline: none;
          color: rgb(119, 126, 144);
          font-family: "DM Sans", sans-serif;
          line-height: 40px;
          margin-left: 32px;
          transition: color 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: color;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a-3 {
            font-size: 24px;
            line-height: 64px;
            margin-left: 0px;
          }
        }
        .a-4 {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
          outline: none;
          color: rgb(119, 126, 144);
          font-family: "DM Sans", sans-serif;
          line-height: 40px;
          margin-left: 32px;
          transition: color 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: color;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a-4 {
            font-size: 24px;
            line-height: 64px;
            margin-left: 0px;
          }
        }
        .a-5 {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
          outline: none;
          color: rgb(119, 126, 144);
          font-family: "DM Sans", sans-serif;
          line-height: 40px;
          margin-left: 32px;
          transition: color 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: color;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a-5 {
            font-size: 24px;
            line-height: 64px;
            margin-left: 0px;
          }
        }
        .a-6 {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
        }
        .a-7 {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
          outline: none;
          color: rgb(119, 126, 144);
          font-family: "DM Sans", sans-serif;
          line-height: 40px;
          margin-left: 32px;
          transition: color 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: color;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a-7 {
            font-size: 24px;
            line-height: 64px;
            margin-left: 0px;
          }
        }
        .div-4 {
          outline: none;
          margin-right: 8px;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-4 {
            padding-left: 0px;
            margin-left: 3px;
            padding-bottom: 18px;
          }
        }
        @media (max-width: 640px) {
          .div-4 {
            padding-top: 0px;
            padding-left: 38px;
            padding-bottom: 2px;
          }
        }
        .label {
          cursor: pointer;
          display: inline-block;
          font-size: 0px;
          position: relative;
          user-select: none;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 640px) {
          .label {
            display: flex;
            flex-direction: column;
          }
        }
        .input {
          outline: none;
          left: 0px;
          opacity: 0;
          position: absolute;
          top: 0px;
          border-bottom: 0px;
          border-color: rgb(0, 0, 0);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-5 {
          color: rgb(119, 126, 144);
          margin-right: 12px;
          transition: all 0.5s ease-out 0s;
          transition-duration: 0.5s;
          transition-timing-function: ease-out;
          outline: none;
          border-radius: 20px;
          border-top-left-radius: 20px;
          height: 40px;
          padding-left: 16px;
          padding-right: 16px;
          align-items: center;
          display: flex;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          justify-content: center;
          line-height: 1;
          text-align: center;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          pointer-events: auto;
        }
        @media (max-width: 991px) {
          .div-5 {
            display: none;
          }
        }
        .a-8 {
          display: inline-flex;
          flex-direction: column;
          position: relative;
          margin-left: 20px;
          cursor: pointer;
          pointer-events: auto;
          color: rgb(119, 126, 144);
          margin-right: 12px;
          transition: all 0.5s ease-out 0s;
          transition-duration: 0.5s;
          transition-timing-function: ease-out;
          outline: none;
          border-radius: 20px;
          border-top-left-radius: 20px;
          height: 40px;
          padding-left: 16px;
          padding-right: 16px;
          align-items: center;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          justify-content: center;
          line-height: 1;
          text-align: center;
          text-decoration: none;
          border-bottom: 0px;
          border-color: rgb(119, 126, 144);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .a-8 {
            display: none;
          }
        }
        .button {
          outline: none;
          cursor: pointer;
          display: none;
          border-bottom: 0px;
          border-color: rgb(0, 0, 0);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background-color: rgba(0, 0, 0, 0);
        }
        @media (max-width: 991px) {
          .button {
            display: block;
            height: 32px;
            margin-left: 20px;
            position: relative;
            width: 32px;
          }
        }
        .nav-2 {
          display: none;
          flex-direction: column;
          position: sticky;
          background-color: rgb(0, 0, 0);
          top: 0px;
          transition-duration: 0.15s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 40;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .nav-2 {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .nav-2 {
            width: 100vw;
            align-self: stretch;
            margin-left: calc(50% - 50vw);
            display: flex;
          }
        }
        .div-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-left: auto;
          margin-right: auto;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          width: 100vw;
          max-width: 1000px;
        }
        @media (max-width: 991px) {
          .div-6 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        @media (max-width: 640px) {
          .div-6 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        .div-7 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
          justify-content: space-between;
          display: flex;
          position: relative;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .div-7 {
            padding-bottom: 1rem;
            padding-top: 1rem;
          }
        }
        .div-8 {
          align-items: center;
          flex-basis: 0%;
          flex-grow: 1;
          display: flex;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-9 {
          border-radius: 9999px;
          border-top-left-radius: 9999px;
          cursor: pointer;
          transform: none;
          transition-duration: 0.1s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .div-9 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: -3px;
          width: 100%;
          min-height: 45px;
          min-width: 36px;
          overflow: hidden;
        }
        .nav-3 {
          display: block;
          margin-left: 1.5rem;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .nav-3 {
            display: none;
          }
        }
        .a-10 {
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-11 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-12 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-13 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-14 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-15 {
          justify-content: flex-end;
          flex-basis: 0%;
          flex-grow: 1;
          display: flex;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          cursor: pointer;
          pointer-events: auto;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .div-10 {
          border-bottom: 0px;
          border-bottom-color: rgb(34, 34, 34);
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-left-color: rgb(34, 34, 34);
          border-right: 0px;
          border-right-color: rgb(34, 34, 34);
          border-top: 0px;
          border-top-color: rgb(34, 34, 34);
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 18.84px;
          padding-bottom: 24px;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 24px;
          align-items: center;
          border-block-color: rgb(34, 34, 34);
          border-block-end-color: rgb(34, 34, 34);
          border-block-start-color: rgb(34, 34, 34);
          border-inline-color: rgb(34, 34, 34);
          border-inline-end-color: rgb(34, 34, 34);
          border-inline-start-color: rgb(34, 34, 34);
          caret-color: rgb(34, 34, 34);
          color: rgb(34, 34, 34);
          column-rule-color: rgb(34, 34, 34);
          display: flex;
          flex-direction: column;
          outline-color: rgb(34, 34, 34);
          padding: 24px 30px;
          perspective-origin: 562px 744.742px;
          text-decoration: none solid rgb(34, 34, 34);
          text-decoration-color: rgb(34, 34, 34);
          text-size-adjust: 100%;
          transform-origin: 562px 744.742px;
          width: 100vw;
          margin-left: auto;
          max-width: 1800px;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-10 {
            display: flex;
            padding-top: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-10 {
            max-width: 300px;
            padding-left: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-right: 0px;
            margin-left: -8px;
            display: flex;
          }
        }
        .section {
          display: block;
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          height: 100vh;
          perspective-origin: 532px 720.742px;
          transform-origin: 532px 720.742px;
          width: 100vw;
          align-self: center;
          margin-left: calc(50% - 50vw);
        }
        @media (max-width: 640px) {
          .section {
            width: 100vw;
            margin-left: auto;
            margin-right: auto;
            margin-top: auto;
            margin-bottom: auto;
          }
        }
        .section-2 {
          display: block;
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          perspective-origin: 532px 190px;
          transform-origin: 532px 190px;
        }
        @media (max-width: 640px) {
          .section-2 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        .div-11 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-12 {
          background-color: rgba(255, 255, 255, 1);
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 954px;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fe0efc13ce4784d8aa62d01a2a7c9d1a1);
          border-radius: 31px;
        }
        @media (max-width: 991px) {
          .div-12 {
            border-radius: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-12 {
            background-attachment: fixed;
            border-radius: 0;
            background-color: rgba(255, 255, 255, 1);
          }
        }
        .div-13 {
          transform: unset;
          background-position: left center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 954px;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          border-radius: 55px;
        }
        @media (max-width: 640px) {
          .div-13 {
            border-radius: 55px;
          }
        }
        .div-14 {
          height: 954px;
          left: 0px;
          position: absolute;
          top: 0px;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background-color: rgb(0, 0, 0);
          opacity: 0;
        }
        .div-15 {
          bottom: 0px;
          inset: 0px;
          left: 0px;
          position: absolute;
          right: 0px;
          top: 0px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 640px;
          }
        }
        .div-16 {
          display: table-cell;
          height: 954px;
          width: 1200px;
          vertical-align: middle;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          position: relative;
          z-index: 1;
          border-radius: 5px;
        }
        @media (max-width: 991px) {
          .div-16 {
            border-radius: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-16 {
            height: auto;
            flex-grow: 0;
            max-height: 600px;
          }
        }
        .div-17 {
          position: relative;
          text-align: left;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 640px) {
          .div-17 {
            display: flex;
            flex-direction: column;
          }
        }
        .div-18 {
          max-width: 660px;
          display: inline;
          float: left;
          margin-left: 20px;
          margin-right: 20px;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-18 {
            display: block;
            box-sizing: border-box;
            float: none;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 20px;
            padding-right: 20px;
            max-width: 100%;
          }
        }
        .div-19 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-19 {
            margin-bottom: 35px;
          }
        }
        .div-20 {
          font-size: 72px;
          line-height: 1.17;
          font-family: "Open Sans", Arial, sans-serif;
          font-weight: 600;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          max-height: 20px;
        }
        @media (max-width: 991px) {
          .div-20 {
            font-size: 68px;
            max-height: 5px;
          }
        }
        @media (max-width: 640px) {
          .div-20 {
            font-size: 30px;
          }
        }
        .div-21 {
          padding-left: 100px;
          max-width: 360px;
          display: inline;
          float: left;
          margin-left: 20px;
          margin-right: 20px;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-21 {
            display: block;
            box-sizing: border-box;
            float: none;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 20px;
            padding-right: 20px;
            max-width: 100%;
          }
        }
        @media (max-width: 640px) {
          .div-21 {
            margin-left: auto;
            margin-right: auto;
            padding-left: 25px;
          }
        }
        .box {
          padding-bottom: 34px;
          padding-left: 34px;
          padding-right: 34px;
          padding-top: 34px;
          position: relative;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-22 {
          position: relative;
          z-index: 2;
          margin-bottom: 20px;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-23 {
          font-size: 18px;
          font-family: "Open Sans", Arial, sans-serif;
          font-weight: 600;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 640px) {
          .div-23 {
            text-align: center;
          }
        }
        .div-24 {
          font-size: 14px;
          line-height: 1.55;
          font-family: "Open Sans", Arial, sans-serif;
          font-weight: 300;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .div-24 {
            font-size: 12px;
          }
        }
        .div-25 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .form {
          position: relative;
          z-index: 2;
        }
        .div-26 {
          line-height: 1.4;
          background-color: rgb(98, 197, 132);
          color: rgb(255, 255, 255);
          margin-bottom: 20px;
          padding-bottom: 20px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 20px;
          text-align: center;
          font-family: "Open Sans", Arial, sans-serif;
          font-weight: 300;
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          display: none;
        }
        .div-27 {
          max-height: 10000px;
          transition: max-height 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          transition-duration: 0.3s;
          transition-property: max-height;
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-28 {
          margin-bottom: 20px;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-29 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .input-2 {
          background-color: rgb(240, 240, 240);
          height: 50px;
          padding-left: 18px;
          padding-right: 18px;
          border-bottom: 0px none;
          border-left: 0px none;
          border-right: 0px none;
          border-top: 0px none;
          line-height: 1.33;
          outline: 0px;
          width: 100%;
          font-family: "Open Sans", Arial, sans-serif;
          border-radius: 6px;
        }
        .div-30 {
          color: red;
          display: none;
          font-size: 13px;
          margin-top: 5px;
          font-family: "Open Sans", Arial, sans-serif;
          border-bottom: 0px;
          border-color: rgb(255, 0, 0);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-31 {
          margin-bottom: 20px;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-32 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .input-3 {
          background-color: rgb(240, 240, 240);
          height: 50px;
          padding-left: 18px;
          padding-right: 18px;
          border-bottom: 0px none;
          border-left: 0px none;
          border-right: 0px none;
          border-top: 0px none;
          line-height: 1.33;
          outline: 0px;
          width: 100%;
          font-family: "Open Sans", Arial, sans-serif;
        }
        .div-33 {
          color: red;
          display: none;
          font-size: 13px;
          margin-top: 5px;
          font-family: "Open Sans", Arial, sans-serif;
          border-bottom: 0px;
          border-color: rgb(255, 0, 0);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-34 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-35 {
          background-color: rgb(249, 93, 81);
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
          text-align: center;
          font-family: "Open Sans", Arial, sans-serif;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          display: none;
        }
        .div-36 {
          color: rgb(255, 255, 255);
          font-family: "Open Sans", Arial, sans-serif;
          line-height: 1.55;
          font-weight: 300;
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 640px) {
          .div-36 {
            line-height: 1.45;
          }
        }
        .p {
          display: none;
          font-family: "Open Sans", Arial, sans-serif;
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-37 {
          display: flex;
          height: 100%;
          margin-top: 20px;
          text-align: center;
          vertical-align: middle;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          flex-direction: column;
        }
        .button-2 {
          position: relative;
          height: 50px;
          padding-left: 30px;
          padding-right: 30px;
          width: 100%;
          background-color: rgb(0, 0, 0);
          background-position: 0px 0px;
          border-bottom: 0px none;
          border-color: rgb(255, 255, 255);
          border-left: 0px none;
          border-right: 0px none;
          border-top: 0px none;
          cursor: pointer;
          font-weight: 700;
          outline: 0px;
          text-align: center;
          white-space: nowrap;
          font-family: "Open Sans", Arial, sans-serif;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          color: rgb(255, 255, 255);
        }
        @media (max-width: 640px) {
          .button-2 {
            white-space: normal;
          }
        }
        .a-16 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          line-height: normal;
          height: auto;
          cursor: pointer;
          pointer-events: auto;
          margin-left: auto;
          margin-right: auto;
        }
        .div-38 {
          display: none;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-39 {
          background-color: rgb(249, 93, 81);
          margin-bottom: 20px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
          text-align: center;
          font-family: "Open Sans", Arial, sans-serif;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          display: none;
        }
        .div-40 {
          color: rgb(255, 255, 255);
          font-family: "Open Sans", Arial, sans-serif;
          line-height: 1.55;
          font-weight: 300;
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 640px) {
          .div-40 {
            line-height: 1.45;
          }
        }
        .div-41 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          bottom: 0px;
          display: none;
          left: -5000px;
          position: absolute;
        }
        .div-42 {
          background-color: rgb(255, 255, 255);
          bottom: 0px;
          inset: 0px;
          left: 0px;
          position: absolute;
          right: 0px;
          top: 0px;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          box-shadow: 1px 1px 42px -19px rgba(0, 0, 0, 1);
        }
        @media (max-width: 640px) {
          .div-42 {
            left: 5px;
          }
        }
      `}</style>{" "}
    </>
  );
}