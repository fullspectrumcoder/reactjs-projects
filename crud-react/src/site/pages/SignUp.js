import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiImageAlt } from "react-icons/bi";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");

  setTimeout(() => {
    setError();
  }, 5000);

  const clearForm = () => {
    setName("");
    setEmail("");
    setImgUrl("");
    setPassword("");
  };

  useEffect(() => {
    let db = localStorage.getItem("User");
    db = JSON.parse(db);
    setUserList(db);
    if (db === null) {
      let emptyStr = JSON.stringify([]);
      localStorage.setItem("User", emptyStr);
    }
  }, []);

  const submitUserInfo = () => {
    let userData = {
      name,
      email,
      imgUrl,
      password,
    };

    let duplicateFound = false;

    if (
      (userData.name !== "",
      userData.email !== "",
      userData.imgUrl !== "",
      userData.password.length > 3)
    ) {
      for (let i = 0; i < userList?.length; i++) {
        if (userList[i].email === userData.email) {
          duplicateFound = true;
          setError("Duplicate Found!");
          break;
        }
      }

      if (!duplicateFound) {
        let userListClone = userList.slice(0);
        userListClone.push(userData);
        setUserList(userListClone);
        let newUser = JSON.stringify(userListClone);
        localStorage.setItem("User", newUser);
        setError("User has been added!");
        clearForm();
      }
    }else if(userData.password.length !== 4){
      setError("Password must be greater than 3 letters!");
    } 
    else {
      setError("Please add correct user details!");
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
            <InputField
              icon={<BiImageAlt />}
              type="text"
              placeholder="User Image Url"
              value={imgUrl}
              changeValue={(e) => setImgUrl(e.target.value)}
            />
            <button className="submit-data" onClick={submitUserInfo}>
              Sign Up
            </button>
          </div>
          <hr className="border" />
          <p>
            Already have an account?{" "}
            <a href={"/crud-react/"} title="Login">
              Login
            </a>
          </p>
          <p className="error">{error}</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
