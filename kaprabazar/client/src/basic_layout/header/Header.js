import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories, tags } from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux-store/actions/all-actions/AuthAction";
import SearchBar from "../../components/SearchBar";
import { openCategoryTag } from "../../redux-store/actions/all-actions/CategoryAction";
import { googleLogout } from "@react-oauth/google";

const Header = () => {
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();

  const sticyHeader = () => {
    if (window.scrollY >= 150) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", sticyHeader);

  const logout = () => {
    dispatch(logoutUser());
    setShowMenu(false);
    googleLogout();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/buy-ad-packages" ||
      location.pathname === "/post-ad"
    ) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [location]);

  if (hideHeader) {
    return null;
  }

  const catTagOpen = (title) => {
    setShowMenu(false);
    dispatch(openCategoryTag(title, navigate));
  };

  return (
    <>
      {!hideHeader ? (
        <div className={isSticky ? "fixed_header bg_header " : "bg_header"}>
          <MDBContainer className=" d-flex align-items-center">
            <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
              <AiOutlineMenuFold size={24} color="#ff4500" />
            </div>
            <div className="logo">
              <a href="/">
                <img
                  src="https://kaprabazar.com/wp-content/uploads/2017/12/logo-1.png"
                  alt="Logo"
                  width={150}
                />
              </a>
            </div>

            <SearchBar />
            <div className="btn_right ms-auto">
              <MDBBtn
                color="primary"
                onClick={() => navigate("/buy-ad-packages")}
                className="mx-2"
              >
                Buy Ad Packages
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={() => navigate(authUser ? "/post-ad" : "/login")}
              >
                Bechdo!
              </MDBBtn>
            </div>

            <div
              className={showMenu === true ? "navabr_nav show" : "navabr_nav"}
            >
              <div className="profileInfo">
                {authUser ? (
                  <>
                    {authUser.profileImage !== null ? (
                      <div className="dp">
                        <img src={authUser.profileImage} alt="" />
                      </div>
                    ) : (
                      <span className="profileBox">
                        {authUser.name.charAt(0)}
                      </span>
                    )}
                    <div className="userInfo">
                      <h4>{authUser.name}</h4>
                      <Link
                        className="view-profile"
                        to={authUser ? "profile" : "/"}
                        onClick={() => setShowMenu(false)}
                      >
                        View Profile
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h5>Profile</h5>
                    <p>Login to start selling and buying in KapraBazar.</p>
                    <div className="btn-auth">
                      <Link
                        to={"/login"}
                        onClick={() => setShowMenu(false)}
                        className="ripple ripple-surface ripple-surface-light btn btn-primary"
                      >
                        Login
                      </Link>
                      <Link
                        to={"/register"}
                        onClick={() => setShowMenu(false)}
                        className="ripple ripple-surface ripple-surface-light btn btn-primary"
                      >
                        SignUp
                      </Link>
                    </div>
                  </>
                )}
              </div>

              <MDBNavbarNav>
                <h5>Categories</h5>
                {categories.map((cat, index) => {
                  return (
                    <MDBNavbarItem key={index}>
                      <Link
                        to={`/ad-category/${cat.slug}`}
                        onClick={() => catTagOpen(cat.title)}
                      >
                        {cat.title}
                      </Link>
                    </MDBNavbarItem>
                  );
                })}
              </MDBNavbarNav>
              <hr className="bg-dark my-0" />
              <MDBNavbarNav>
                <h5>Trending at KB</h5>
                {tags.map((tag, index) => {
                  return (
                    <MDBNavbarItem key={index}>
                      <Link
                        to={`/ad-tag/${tag.title}`}
                        onClick={() => catTagOpen(tag.title)}
                      >
                        #{tag.title}
                      </Link>
                    </MDBNavbarItem>
                  );
                })}
              </MDBNavbarNav>

              {authUser ? (
                <Link className="logout" to={"/"} onClick={() => logout()}>
                  <BiLogOutCircle />
                  Logout
                </Link>
              ) : (
                ""
              )}
            </div>
            {showMenu ? (
              <div
                className="overlaping"
                onClick={() => setShowMenu(!showMenu)}
              ></div>
            ) : (
              ""
            )}
          </MDBContainer>
        </div>
      ) : null}
    </>
  );
};

export default Header;
