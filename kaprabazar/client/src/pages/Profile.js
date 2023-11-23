import React, { useState } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Select from "react-select";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import dp from "../assets/imgs/frontend_webdeveloper-1.jpg";
import { typeOptions } from "../data/Options";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux-store/actions/all-actions/AuthAction";

const Profile = () => {
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  const secretID = useSelector(({ PackageState }) => PackageState.secretID);
  console.log(secretID);
  let dispatch = useDispatch();
  const [error, setError] = useState("");
  const [editable, setEditable] = useState(false);
  const [updateName, setUpdateName] = useState(authUser.name);
  const [updateEmail, setUpdateEmail] = useState(authUser.email);
  const [updateNumber, setUpdateNumber] = useState(authUser.contactNumber);
  const [selectedType, setSelectedType] = useState(
    authUser.userType
      ? {
          value: authUser.userType,
          label: authUser.userType,
        }
      : null
  );
  const [updateFB, setUpdateFB] = useState(authUser.socialLinks.facebook);
  const [updateLocation, setUpdateLocation] = useState(authUser.location);
  const [updateIntro, setUpdateIntro] = useState(authUser.intro);
  const [updateImage, setUpdateImage] = useState(
    authUser.profileImage ? authUser.profileImage : null
  );
  const [updateTwitter, setUpdateTwitter] = useState(
    authUser.socialLinks.twitter
  );
  const [updateLinkedin, setUpdateLinkedin] = useState(
    authUser.socialLinks.linkedin
  );

  const handleUpdate = () => {
    setEditable(true);
  };

  const cancelUpdate = () => {
    setEditable(false);
  };

  const updateProfile = async () => {
    let updateData = {
      id: authUser._id,
      name: updateName,
      email: authUser.email,
      password: authUser.password,
      contactNumber: updateNumber,
      role: authUser.role,
      userType: selectedType?.value,
      socialLinks: {
        facebook: updateFB,
        twitter: updateTwitter,
        linkedin: updateLinkedin,
      },
      location: updateLocation,
      intro: updateIntro,
      profileImage: updateImage,
    };

    if (updateName && updateLocation && selectedType !== null) {
      dispatch(updateUser(updateData));
      setError("");
    } else {
      setError("This field is required.");
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const imageChange = async (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    let newUrl = await toBase64(file);
    setUpdateImage(newUrl);
  };

  return (
    <>
      <div className="bg_gray">
        <MDBContainer>
          <div className="card_box">
            <div className="user_details">
              <div className="user_info">
                <ul className="social-links">
                  <li>
                    {authUser.socialLinks.facebook !== "" ? (
                      <Link>
                        <FaFacebookF />
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {authUser.socialLinks.twitter !== "" ? (
                      <Link>
                        <FaTwitter />
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {authUser.socialLinks.linkedin !== "" ? (
                      <Link>
                        <FaLinkedinIn />
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
                {authUser.profileImage !== null ? (
                  <div className="user_dp">
                    <img src={authUser.profileImage} alt="" />
                  </div>
                ) : (
                  <span className="profileImageBox">
                    {authUser.name.charAt(0)}
                  </span>
                )}
                <div className="info">
                  <h4>{authUser.name}</h4>
                  <p className="edit_profile">
                    <Link onClick={handleUpdate}>
                      <FiEdit /> Edit Profile
                    </Link>
                  </p>
                  <p className="address">{authUser.location}</p>
                  <p className="lastSeen">Last active: 1 min Ago</p>
                  <div className="type">
                    <span className="paid">Paid</span>
                    {authUser.userType !== "" ? (
                      <span className="individual">{authUser.userType}</span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="post_info">
                <ul>
                  <li>
                    <span className="num">1</span>
                    <span className="title">Ad Sold</span>
                  </li>
                  <li>
                    <span className="num">4</span>
                    <span className="title">Total Listing</span>
                  </li>
                  <li>
                    <span className="num">0</span>
                    <span className="title">Inactive Ads</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card_box">
            {editable ? (
              <>
                <div className="user-update">
                  <h3>Manage Your Security Settings</h3>
                  <p>Manage Your Account</p>

                  <div className="changePassword">
                    <Link>Change Password</Link>
                  </div>

                  <div className="formUpdate">
                    <div className="formGrid">
                      <MDBRow>
                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>Your name</label>
                            <MDBInput
                              type="text"
                              onChange={(e) => setUpdateName(e.target.value)}
                              value={updateName}
                            />
                            {updateName !== "" ? "" : <span>{error}</span>}
                          </div>
                        </MDBCol>
                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>
                              Email Address <sup>*</sup>
                            </label>
                            <MDBInput
                              type="email"
                              onChange={(e) => setUpdateEmail(e.target.value)}
                              value={updateEmail}
                              readOnly
                            />
                          </div>
                        </MDBCol>
                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>Contact Number</label>
                            <MDBInput
                              type="tel"
                              onChange={(e) => setUpdateNumber(e.target.value)}
                              value={updateNumber}
                            />
                          </div>
                        </MDBCol>

                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>
                              I am <sup>*</sup>
                            </label>
                            <Select
                              isClearable={true}
                              defaultValue={selectedType}
                              onChange={setSelectedType}
                              options={typeOptions}
                              theme={(theme) => ({
                                ...theme,
                                colors: {
                                  ...theme.colors,
                                  primary25: "rgb(255 69 0 / 7%)",
                                  primary: "#ff4500",
                                },
                              })}
                            />
                            {selectedType !== null ? "" : <span>{error}</span>}
                          </div>
                        </MDBCol>

                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>Facebook</label>
                            <MDBInput
                              type="text"
                              onChange={(e) => setUpdateFB(e.target.value)}
                              value={updateFB}
                            />
                          </div>
                        </MDBCol>
                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>Twitter</label>
                            <MDBInput
                              type="text"
                              onChange={(e) => setUpdateTwitter(e.target.value)}
                              value={updateTwitter}
                            />
                          </div>
                        </MDBCol>
                        <MDBCol lg={6}>
                          <div className="form_group">
                            <label>Linkedin</label>
                            <MDBInput
                              type="text"
                              onChange={(e) =>
                                setUpdateLinkedin(e.target.value)
                              }
                              value={updateLinkedin}
                            />
                          </div>
                        </MDBCol>
                        <MDBCol lg={12}>
                          <div className="form_group">
                            <label>
                              Location <sup>*</sup>
                            </label>
                            <MDBInput
                              type="text"
                              onChange={(e) =>
                                setUpdateLocation(e.target.value)
                              }
                              value={updateLocation}
                            />
                            {updateLocation !== "" ? "" : <span>{error}</span>}
                          </div>
                        </MDBCol>
                        <MDBCol lg={12}>
                          <div className="form_group">
                            <label>Introduction</label>
                            <MDBTextArea
                              onChange={(e) => setUpdateIntro(e.target.value)}
                              value={updateIntro}
                            ></MDBTextArea>
                          </div>
                        </MDBCol>
                        <MDBCol lg={12}>
                          <div className="form_group">
                            {updateImage ? (
                              <div className="updateDp">
                                <img src={updateImage} />
                              </div>
                            ) : null}
                            <input
                              type="file"
                              id="image"
                              accept="/image/*"
                              onChange={imageChange}
                              className="hiddenInput"
                            />
                            <label
                              htmlFor="image"
                              className="imageUploadLabel btn btn-primary"
                              // onClick={imageHandle}
                            >
                              Change Profile Picture
                            </label>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </div>

                  <div className="bottomBtns">
                    <MDBBtn onClick={cancelUpdate}>Cancel</MDBBtn>{" "}
                    <MDBBtn onClick={updateProfile}>Update Profile</MDBBtn>
                  </div>
                </div>
              </>
            ) : (
              <div className="show-user-info">
                <h3>Manage Your Profile</h3>
                <MDBTable>
                  <MDBTableBody>
                    <tr>
                      <td>Your name</td>
                      <td>{authUser.name}</td>
                    </tr>
                    <tr>
                      <td>Email Address</td>
                      <td>{authUser.email}</td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>
                        {authUser.contactNumber !== ""
                          ? authUser.contactNumber
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td>You are a(n)</td>
                      <td>
                        {authUser.userType !== null ? authUser.userType : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>
                        {authUser.location !== "" ? authUser.location : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td>Package Type</td>
                      <td>Business</td>
                    </tr>
                    <tr>
                      <td>Package Expiry</td>
                      <td>2023-02-02</td>
                    </tr>
                    <tr>
                      <td>Free Ads Remaining</td>
                      <td>250</td>
                    </tr>
                    <tr>
                      <td>Featured Ads Remaining</td>
                      <td>81</td>
                    </tr>
                    <tr>
                      <td>Bump-up Ads Remaining</td>
                      <td>246</td>
                    </tr>
                    <tr>
                      <td>Allowed Video link</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Allowed Tags</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Allowed Bidding</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Allowed Images</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Categories</td>
                      <td>-</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            )}
          </div>
        </MDBContainer>
      </div>
    </>
  );
};

export default Profile;
