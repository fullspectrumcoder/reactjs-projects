import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);

  let uniqueId = uuidv4();

  const getUserData = () => {
    let fetchUser = localStorage.getItem("Users");
    fetchUser = JSON.parse(fetchUser);
    setUserList(fetchUser);
    if (fetchUser === null) {
      let dataInStr = JSON.stringify([]);
      localStorage.setItem("Users", dataInStr);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const onSignupHandler = () => {
    let userData = {
      name,
      password,
      id: uniqueId,
    };

    if (userData.name !== "" && userData.password.length > 3) {
      let userListClone = userList.slice(0);
      userListClone.push(userData);
      setUserList(userListClone);
      setName("");
      setPassword("");

      let dataInStr = JSON.stringify(userListClone);
      localStorage.setItem("Users", dataInStr);
      alert("User has been Added!");
    }else{
        alert("Error")
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
            <h2>Sign Up</h2>
            <InputField
              icon={<FaRegUser />}
              type="text"
              placeholder="User Name"
              value={name}
              changeValue={(e) => setName(e.target.value)}
            />
            <InputField
              icon={<HiOutlineLockClosed />}
              type="password"
              placeholder="User Password"
              value={password}
              changeValue={(e) => setPassword(e.target.value)}
            />
            <button className="submit-data" onClick={onSignupHandler}>
              Sign Up
            </button>
          </div>
          <hr className="border" />
          <p>
            Already have an account?{" "}
            <a href={"/crud-react/login"} title="Login">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
