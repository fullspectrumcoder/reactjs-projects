import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../data/Package";
import Pricing from "../components/Pricing";
import { MDBContainer } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import {
  addPackageData,
  fetchPackage,
} from "../redux-store/actions/all-actions/PackageAction";
import { toast } from "react-toastify";

const BuyAdPackages = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  const allPackages = useSelector(({ PackageState }) => PackageState.data);
  console.log(allPackages);

  const submitPackage = (item) => {
    if (authUser === null) {
      toast.error("You need to be logged in.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } else {
      let data = {
        id: item.id,
        title: item.title,
        sale: item.sale,
        oldPrice: item.oldPrice,
        newPrice: item.newPrice,
        img: item.img,
        priceClass: item.priceClass,
        expiry: item.expiry,
        simpleAds: item.simpleAds,
        featuredAds: item.featuredAds,
        bumpAds: item.bumpAds,
        allowBidding: item.allowBidding,
        images: item.images,
        allowTags: item.allowTags,
        allowVideoLinks: item.allowVideoLinks,
        allowCategories: item.allowCategories,
        _id: authUser._id,
      };
      if (allPackages.length > 0) {
        let duplicate = false;
        for (let i = 0; i < allPackages.length; i++) {
          if (
            data._id === allPackages[i]._id &&
            data.id === allPackages[i].id
          ) {
            duplicate = true;
            break;
          }
        }

        if (!duplicate) {
          dispatch(addPackageData(data, navigate));
        } else {
          toast.warn("This package has alredy add in your cart.", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        dispatch(addPackageData(data, navigate));
      }
    }
  };

  useEffect(() => {
    dispatch(fetchPackage());
  }, []);

  return (
    <>
      <div className="post_bg">
        <MDBContainer>
          <Link to={"/"}>
            <img
              src="https://kaprabazar.com/wp-content/uploads/2017/12/logo-1.png"
              alt=""
              className="logo"
            />
          </Link>

          <div className="post_hd">
            <h1>PLANS THAT BEST SUIT YOUR BUSINESS REQUIREMENTS</h1>
            <p>KapraBazar was built to scale with your business as it grows.</p>
          </div>

          <div className="pricing_block">
            {data.map((item, index) => {
              return (
                <Pricing
                  key={index}
                  submitPackage={submitPackage}
                  item={item}
                />
              );
            })}
          </div>
        </MDBContainer>
      </div>
    </>
  );
};

export default BuyAdPackages;
