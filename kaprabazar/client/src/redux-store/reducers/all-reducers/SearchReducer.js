const INIT_STATE = {
  title: "",
};

const SearchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SEARCH_POSTS":
      let value = action.payload;

      return {
        ...state,
        title: value,
      };

    case "SEARCH_REMOVE":
      let removeValue = action.payload;

      return {
        ...state,
        title: removeValue,
      };

    default:
      return state;
  }
};

export { SearchReducer };
