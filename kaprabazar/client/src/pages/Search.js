import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { SearchPosts } from "../components/CustomPost";
import { fetchPosts } from "../redux-store/actions/all-actions/PostAction";
import Img1 from "./../assets/imgs/img1.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { removeSearch } from "../redux-store/actions/all-actions/SearchAction";

const Search = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let allPosts = useSelector(({ PostState }) => PostState.posts);
  let state = useSelector(({ SearchState }) => SearchState.title);

  console.log(allPosts);

  const searchDelete = () => {
    dispatch(removeSearch("all", navigate));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [allPosts]);

  return (
    <>
      <Breadcrumbs title="Search" />
      <MDBContainer>
        {state === "all" ? null : (
          <MDBBtn onClick={searchDelete} className="removeSearch">
            <span>Keyword</span>
            <AiOutlineCloseCircle />
          </MDBBtn>
        )}
        <SearchPosts allPosts={allPosts} Img1={Img1} title={state} />
      </MDBContainer>
    </>
  );
};

export default Search;
