import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux-store/actions/all-actions/AuthAction";
import { BASE_URL } from "../components/constant/Constant";

const Register = (props) => {
  let dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [errPassword, setErrPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  let clearForm = () => {
    setName("");
    setNumber("");
    setEmail("");
    setPassword("");
  };

  const handleCheckEmail = (value) => {
    setEmail(value);
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (re.test(value) || regex.test(value)) {
      setCheckValidEmail(false);
    } else if (value === "") {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    setPassword(value);
    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isValidLength = /^.{8,16}$/;
    if (!isNonWhiteSpace.test(value)) {
      setCheckValidPassword(true);
      setErrPassword("Password must not contain Whitespaces.");
    } else if (!isContainsUppercase.test(value)) {
      setCheckValidPassword(true);
      setErrPassword("Password must have at least one Uppercase Character.");
    } else if (!isContainsLowercase.test(value)) {
      setCheckValidPassword(true);
      setErrPassword("Password must have at least one Lowercase Character.");
    } else if (!isContainsNumber.test(value)) {
      setCheckValidPassword(true);
      setErrPassword("Password must contain at least one Digit.");
    } else if (!isValidLength.test(value)) {
      setCheckValidPassword(true);
      setErrPassword("Password must be 8-16 Characters Long.");
    } else {
      setCheckValidPassword(false);
      setErrPassword("");
    }
  };

  const signupHandler = async () => {
    let userData = {
      name: name,
      email: email,
      password: password,
      contactNumber: number,
      role: "",
      userType: "",
      socialLinks: {
        facebook: "",
        twitter: "",
        linkedin: "",
      },
      location: "",
      intro: "",
      profileImage: null,
    };
    if (name !== "" && !checkValidEmail && !checkValidPassword) {
      try {
        let apiUrl = `${BASE_URL}/api/user-create`;
        let response = await axios({
          method: "POST",
          url: apiUrl,
          data: userData,
        });

        if (response) {
          console.log(response);
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          clearForm();
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 501) {
          toast.warn(error.response.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } else {
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleSuccess = async (data) => {
    let decode = jwtDecode(data.credential);
    console.log(decode.picture);
    let userData = {
      name: decode.name,
      email: decode.email,
      password: password,
      contactNumber: number,
      role: "",
      userType: "",
      socialLinks: {
        facebook: "",
        twitter: "",
        linkedin: "",
      },
      location: "",
      intro: "",
      profileImage: decode.picture,
    };
    try {
      let apiUrl = `${BASE_URL}/api/google-signup`;
      let response = await axios({
        method: "POST",
        url: apiUrl,
        data: userData,
      });

      if (response) {
        dispatch(loginUser(userData));
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 501) {
        toast.warn(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const handleFailure = (error) => {
    console.error("Error signing in: ", error);
  };

  return (
    <>
      <div className="form_bg">
        <Link to={"/"}>
          <img
            src="https://kaprabazar.com/wp-content/uploads/2017/12/logo-1.png"
            alt=""
            className="logo"
          />
        </Link>
        <div className="formBlock">
          <h3>Register</h3>
          <div className="formGrid">
            <div className="form_group">
              <MDBInput
                type="text"
                id="form3Example1"
                label="Full name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form_group">
              <MDBInput
                type="tel"
                id="form3Example2"
                label="Phone Number"
                required={true}
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </div>
            <div className="form_group">
              <MDBInput
                type="email"
                id="form3Example3"
                label="Email address"
                onChange={(e) => handleCheckEmail(e.target.value)}
                value={email}
              />
              {checkValidEmail === true ? (
                <span className="text-muted txt-error">
                  Please enter your valid email
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="form_group">
              <MDBInput
                type={seePassword ? "text" : "password"}
                id="form3Example4"
                label="Password"
                onChange={(e) => checkPasswordValidity(e.target.value)}
                value={password}
              />
              <span
                className="showHide"
                onClick={() => setSeePassword(!seePassword)}
              >
                {seePassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </span>
              {checkValidPassword ? (
                <span className="text-muted txt-error">{errPassword}</span>
              ) : (
                ""
              )}
            </div>
            <p>
              By clicking Sign Up, you agree to our{" "}
              <Link>Terms and Condition</Link> and <Link>Privacy Policy</Link>
            </p>
          </div>
          <MDBBtn
            color="primary"
            className="submitBtn"
            type="submit"
            onClick={signupHandler}
          >
            Register
          </MDBBtn>
          <div className="my-3 text-center mx-auto">
            <GoogleLogin
              clientId={
                "126844737668-27d8g1qop8164vmev2mlulejmoph6n4q.apps.googleusercontent.com"
              }
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              logo_alignment="center"
              useOneTap={false}
              text="continue_with"
              type="standard"
            >
              Sign in with Google
            </GoogleLogin>
          </div>
          {/* <p>{err !== "" ? err : ""}</p> */}
          <Link to={"/login"} className="accLink">
            Already registered, login here.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
