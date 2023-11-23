import React, { useEffect, useState } from "react";
import { MDBBtn, MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Logo from "../assets/imgs/logo.png";
import { loginUser } from "../redux-store/actions/all-actions/AuthAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [errPassword, setErrPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  let dispatch = useDispatch();
  let navigate = useNavigate();

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
      setErrPassword("");
      setCheckValidPassword(false);
    }
  };

  const loginHandler = async () => {
    let userData = {
      email: email,
      password: password,
    };

    if (email && !checkValidEmail && password && !checkValidPassword) {
      dispatch(loginUser(userData, navigate));
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

  return (
    <>
      <div className="form_bg">
        <Link to={"/"}>
          <img src={Logo} alt="" className="logo" />
        </Link>
        <div className="formBlock">
          <h3>Login</h3>
          <div className="formGrid">
            <div className="form_group">
              <MDBInput
                type="email"
                id="form1Example1"
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
                id="form1Example2"
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
            <ul className="list">
              <li>
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
              </li>
              <li>
                <Link>Forget Password</Link>
              </li>
            </ul>
            <MDBBtn
              color="primary"
              className="submitBtn"
              type="submit"
              onClick={loginHandler}
            >
              Login
            </MDBBtn>

            {/* <MDBBtn
              color="primary"
              className="submitBtn ms-3"
              type="submit"
              onClick={forgetPassword}
            >
              Forget Password
            </MDBBtn> */}
          </div>

          <Link to={"/register"} className="accLink">
            Sign up for an account.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
