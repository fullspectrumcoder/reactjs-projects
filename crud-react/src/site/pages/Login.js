import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";

const Login = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userList, setUserList] = useState([]);

  setTimeout(() => {
    setMessage();
  }, 5000);

  useEffect(() => {
    let fetchUser = localStorage.getItem("User");
    fetchUser = JSON.parse(fetchUser);
    setUserList(fetchUser);
    if (fetchUser === null) {
      let emptyStr = JSON.stringify(fetchUser);
      localStorage.setItem("User", emptyStr);
    }
  }, []);

  useEffect(() => {
    if (message === "Successfully Login!") {
      let authenticatedUser = { name, imgUrl, email, password };
      let dataInStr = JSON.stringify(authenticatedUser);
      localStorage.setItem("AuthenticatedUser", dataInStr);
    }
  }, [message]);

  const submitUserInfo = () => {
    let userData = {
      email,
      password,
    };

    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].email === userData.email &&
        userList[i].password === userData.password
      ) {
        setName(userList[i].name);
        setImgUrl(userList[i].imgUrl);
        setMessage("Successfully Login!");
        window.location.reload();
        break;
      } else if (
        userList[i].email === userData.email &&
        userList[i].password !== userData.password
      ) {
        setMessage("Password does not match!");
        break;
      } else {
        setMessage("User does not exit!");
      }
    }

    if (userData.email === "" && userData.password === "") {
      setMessage("Please correct User details!");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="form-container">
          <div className="form-block">
            <div className="user-icon">
              <FaRegUser />
            </div>
            <h2>Login</h2>
            <InputField
              icon={<FaRegEnvelope />}
              type="email"
              placeholder="User Email"
              value={email}
              changeValue={(e) => setEmail(e.target.value)}
            />
            <InputField
              icon={<HiOutlineLockClosed />}
              type="password"
              placeholder="User Password"
              value={password}
              changeValue={(e) => setPassword(e.target.value)}
            />
            <button className="submit-data" onClick={submitUserInfo}>
              Login
            </button>
          </div>
          <hr className="border" />
          <p>
            Don't have an account?
            <a href={"/crud-react/signup"} title="Sign Up">
              Sign Up
            </a>
          </p>
          <p className="error">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
