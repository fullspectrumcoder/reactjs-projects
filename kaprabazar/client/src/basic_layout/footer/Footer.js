import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Link, NavLink, useLocation } from "react-router-dom";
import { footer_navigation } from "./Navigation";
import Logo from "../../assets/imgs/logo-white.png";

const Footer = () => {
  const [hideFooter, setHideFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/buy-ad-packages" ||
      location.pathname === "/post-ad"
    ) {
      setHideFooter(true);
    } else {
      setHideFooter(false);
    }
  }, [location]);

  if (hideFooter) {
    return null
  }
  return (
    <>
      {!hideFooter ? (
        <>
          <div className="back-top">
            <Link onClick={backToTop}>Back to top</Link>
          </div>
          <div className="footer_top">
            <MDBContainer>
              <MDBRow>
                {footer_navigation.map((menu, index) => {
                  return (
                    <MDBCol lg={2} md={4} key={index}>
                      <div className="ftr_box">
                        <ul>
                          {menu.link.map((link, index) => {
                            return (
                              <li key={index}>
                                {link.navigator ? (
                                  <NavLink
                                    to={link.navigator}
                                    state={link.text}
                                  >
                                    {link.text}
                                  </NavLink>
                                ) : (
                                  <p> {link.text}</p>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </MDBCol>
                  );
                })}
              </MDBRow>
            </MDBContainer>
          </div>
          <div className="_bgfooter">
            <MDBContainer>
              <div className="footer_bottom">
                <div className="logo">
                  <img src={Logo} alt="KapraBazar" />
                </div>
                <div className="ftr-text">
                  <h6>DISCLAIMER</h6>
                  <p>
                    KapraBazar was founded on the principle that all of its
                    property, including the source code, software and web
                    design, should be proprietary and protected by copyright &
                    trademark laws.
                  </p>
                  <p>
                    KapraBazar does not take any responsibility for the content,
                    photographs, or visuals that are posted by any individual,
                    brand, or business in our site. We advise all buyers to be
                    careful, as we won't be liable for any issues that arise
                    from purchases made with us.
                  </p>

                  <p>
                    &copy; KapraBazar.com. All Rights Reserved.{" "}
                    <Link>Privacy Policy</Link> .{" "}
                    <Link>Terms and Conditions</Link>
                  </p>
                </div>
              </div>
            </MDBContainer>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Footer;
