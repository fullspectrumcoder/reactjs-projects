import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchPost } from "../redux-store/actions/all-actions/SearchAction";

const SearchBar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [value, setValue] = useState("");

  let allPosts = useSelector(({ PostState }) => PostState.posts);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm.trim());
    dispatch(searchPost(searchTerm.trim(), navigate));
  };

  return (
    <div className="search_bar">
      <div className="search_site">
        <input
          type="text"
          className="form-control"
          placeholder="Search Clothing, Textile, Wearable, Fashion and much more..."
          value={value}
          onChange={onChange}
        />
        <MDBBtn color="primary" onClick={() => onSearch(value)}>
          <BiSearch size={18} />
        </MDBBtn>
      </div>

      <div className="search-container">
        <div className="dropdown">
          {allPosts
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const title = item.title.toLowerCase();

              return (
                searchTerm && title.includes(searchTerm) && title !== searchTerm
              );
            })
            .map((item, index) => (
              <div
                onClick={() => onSearch(item.title)}
                className="dropdown-row"
                key={index}
              >
                {item.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
