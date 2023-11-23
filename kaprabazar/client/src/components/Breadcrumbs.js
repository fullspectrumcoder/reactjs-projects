import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = (props) => {
  let { title } = props;
  return (
    <>
      <div className="bg_crumbs">
        <MDBContainer>
          <div className="header-page">
            <h4>{title}</h4>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
                <span className="caret">
                  <IoIosArrowForward />
                </span>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </MDBContainer>
      </div>
    </>
  );
};

export default Breadcrumbs;
