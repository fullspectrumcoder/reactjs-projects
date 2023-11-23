import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

const Pricing = (props) => {
  let { submitPackage, item } = props;

  return (
    <>
      <div className={item.priceClass}>
        <div className="header">
          <div className="saleTag">{item.tag}</div>
          <div className="flexHdr">
            <img src={item.img} alt="" />
            <div className="title_price">
              <h5>{item.title}</h5>
              <h3>
                ${item.newPrice}{" "}
                <span className="old-price">${item.oldPrice}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="body">
          <ul>
            <li>Validity: {item.expiry} Days</li>
            <li>Simple Ads: {item.simpleAds}</li>
            <li>Featured Ads: {item.featuredAds}</li>
            <li>Bump-up Ads: {item.bumpAds}</li>
          </ul>
        </div>
        <div className="footer">
          <MDBBtn color="primary" onClick={() => submitPackage(item)}>
            Select Plan
          </MDBBtn>
        </div>
      </div>
    </>
  );
};

export default Pricing;
