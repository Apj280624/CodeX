import React, { useState } from "react";
import CredentialInput from "../components/CredentialInput";
import CredentialButton from "../components/CredentialButton";
import PasswordInput from "../components/PasswordInput";
import UserAuth from "../css/user-auth.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// my modules
import {
  validateSignUpCredentials,
  validateEmailAddress,
} from "../utilities/UserAuthUtility.js";
import { SERVER_ORIGIN, routes } from "../utilities/ClientVarsUtility.js";
import Toast, { toastOptions } from "../components/Toast.js";

const axios = require("axios").default;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SignUp() {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    collegeName: "",
    branchName: "",
    graduationYear: "",
    emailAddress: "",
    password: "",
    OTP: "",
  });

  async function updateUserCredentials(updatedField) {
    await setUserCredentials((prevUserCredentials) => ({
      ...prevUserCredentials,
      ...updatedField,
    }));

    // console.log(userCredentials);
  }

  async function requestServerToSendOTP() {
    // console.log(userCredentials.emailAddress);
    const { res, desc } = await validateEmailAddress(
      userCredentials.emailAddress
    );
    if (!res) {
      // show toast
      // console.log(desc);
      toast(desc, toastOptions);
    } else {
      try {
        const response = await axios.put(SERVER_ORIGIN + routes.VOTP, {
          emailAddress: userCredentials.emailAddress,
        });
        // console.log(response.data);
        toast(response.data, toastOptions);
      } catch (error) {
        // console.log(error.response.data);
        // toast(error.response.data, toastOptions);
      }
    }
  }

  async function requestServerToSignUserUp() {
    // console.log(userCredentials);
    // first validate at front end, don't bother the server unnecessarily
    const { res, desc } = await validateSignUpCredentials(userCredentials);
    // console.log(desc);
    if (!res) {
      toast(desc, toastOptions);
    } else {
      console.log(userCredentials);
      // console.log("sign up sent");
      try {
        const response = await axios.post(
          SERVER_ORIGIN + routes.SIGN_UP,
          userCredentials
        );
        // console.log(response);
        toast(response.data, toastOptions);
      } catch (error) {
        console.log(error);
        toast(error.response.data, toastOptions);
      }
    }
  }

  return (
    <div>
      <div className="">
        <p className={UserAuth.heading}>Join CodeX today</p>
        <div className={UserAuth.signUpDiv}>
          <div className={UserAuth.otpDiv}>
            <CredentialInput
              type="text"
              placeholder="First name"
              name="firstName"
              width="49.5%"
              onChange={updateUserCredentials}
            />
            <div className={UserAuth.otpBtnHalfInputDiv}>
              <CredentialInput
                type="text"
                placeholder="Last name"
                name="lastName"
                width="49.5%"
                onChange={updateUserCredentials}
              />
            </div>
          </div>

          <div className={UserAuth.inputDiv}>
            <CredentialInput
              type="text"
              placeholder="College name ( LNCT / LNCTS / LNCTE)"
              name="collegeName"
              width="32%"
              onChange={updateUserCredentials}
            />
          </div>

          <div className={UserAuth.inputDiv}>
            <CredentialInput
              type="text"
              placeholder="Branch name ( e.g. CS / IT / EC )"
              name="branchName"
              width="32%"
              onChange={updateUserCredentials}
            />
          </div>

          <div className={UserAuth.inputDiv}>
            <CredentialInput
              type="text"
              placeholder="Graduation year ( e.g. 2022, 2023 )"
              name="graduationYear"
              width="32%"
              onChange={updateUserCredentials}
            />
          </div>

          <div className={UserAuth.inputDiv}>
            <CredentialInput
              type="email"
              placeholder="Email address"
              name="emailAddress"
              width="32%"
              onChange={updateUserCredentials}
            />
          </div>
          <PasswordInput name="password" onChange={updateUserCredentials} />

          <div className={UserAuth.otpDiv}>
            <CredentialInput
              type="text"
              placeholder="OTP"
              name="OTP"
              width="32%"
              onChange={updateUserCredentials}
            />
            <div className={UserAuth.otpBtnHalfInputDiv}>
              <CredentialButton
                text="Send OTP"
                onClick={requestServerToSendOTP}
                width="67%"
              />
            </div>
          </div>

          <div className={UserAuth.buttonDiv}>
            <CredentialButton
              text="Sign Up"
              onClick={requestServerToSignUserUp}
              width="32%"
            />
          </div>

          <div className={UserAuth.textDiv}>
            <Link to={routes.SIGN_IN} className={UserAuth.fpText}>
              Sign In
            </Link>
          </div>
        </div>
        <Toast />
      </div>
    </div>
  );
}

export default SignUp;
