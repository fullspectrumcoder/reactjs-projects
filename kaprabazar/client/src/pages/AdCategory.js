import { MDBContainer } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { CategoryPosts, RecentPosts } from "../components/CustomPost";
import { fetchPosts } from "../redux-store/actions/all-actions/PostAction";
import Img1 from "./../assets/imgs/img1.jpg";
import BagsCategory from "./sub-category/BagsCategory";
import FootwearCategory from "./sub-category/FootwearCategory";
import KidsBabiesCategory from "./sub-category/KidsBabiesCategory";
import MenCategory from "./sub-category/MenCategory";
import WomenCategory from "./sub-category/WomenCategory";

const AdCategory = () => {
  let dispatch = useDispatch();

  let allPosts = useSelector(({ PostState }) => PostState.posts);
  let state = useSelector(({ CategoryState }) => CategoryState.title);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Breadcrumbs title={state} />
      <MDBContainer>
        {state !== "All Categories" ? (
          <CategoryPosts allPosts={allPosts} cat={state} Img1={Img1} num={0} />
        ) : (
          <RecentPosts allPosts={allPosts} Img1={Img1} num={0} />
        )}

        {state === "Womens Clothing" ? <WomenCategory /> : ""}
        {state === "Mens Clothing" ? <MenCategory /> : ""}
        {state === "Kids & Babies" ? <KidsBabiesCategory /> : ""}
        {state === "Bags" ? <BagsCategory /> : ""}
        {state === "Footwear" ? <FootwearCategory /> : ""}
      </MDBContainer>
    </>
  );
};

export default AdCategory;
