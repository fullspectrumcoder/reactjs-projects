const openCategoryTag = (title) => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_CATEGORY_TAG",
      payload: title,
    });
  };
};

// const removeSearch = (title, navigate) => {
//   return async (dispatch) => {
//     if (title === "all") {
//       navigate("/search-results/all");
//       dispatch({
//         type: "SEARCH_REMOVE",
//         payload: "all",
//       });
//     }
//   };
// };

export { openCategoryTag };
