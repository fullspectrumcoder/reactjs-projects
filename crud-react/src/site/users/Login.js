import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { FaRegUser } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [name, setName] = useState("");
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

  const onLoginHandler = () => {
    let userData = {
      name,
      id: uniqueId,
    };

    let matched = false;

    if (userData.name !== "") {
      setUserList(userData);
      let dataInStr = JSON.stringify(userData);
      localStorage.setItem("User", dataInStr);
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
              icon={<FaRegUser />}
              type="text"
              placeholder="User Name"
              value={name}
              changeValue={(e) => setName(e.target.value)}
            />
            <button className="submit-data" onClick={onLoginHandler}>
              Login
            </button>
          </div>
          <hr className="border" />
          <p>
            Already have an account?{" "}
            <a href={"/crud-react/"} title="Signup">
              Signup
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
