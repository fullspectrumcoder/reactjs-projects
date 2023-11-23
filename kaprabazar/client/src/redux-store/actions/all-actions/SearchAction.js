const searchPost = (title, navigate) => {
  return async (dispatch) => {
    if (title === "") {
      navigate("/search-results/all");
      dispatch({
        type: "SEARCH_POSTS",
        payload: "all",
      });
    } else {
      navigate(
        `/search-results/${title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")}`
      );
      dispatch({
        type: "SEARCH_POSTS",
        payload: title,
      });
    }
  };
};

const removeSearch = (title, navigate) => {
  return async (dispatch) => {
    if (title === "all") {
      navigate("/search-results/all");
      dispatch({
        type: "SEARCH_REMOVE",
        payload: "all",
      });
    }
  };
};

export { searchPost, removeSearch };
