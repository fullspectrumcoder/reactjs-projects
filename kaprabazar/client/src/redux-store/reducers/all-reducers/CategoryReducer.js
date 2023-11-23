const INIT_STATE = {
  title: "",
};

const CategoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "OPEN_CATEGORY_TAG":
      let value = action.payload;

      return {
        ...state,
        title: value,
      };

    default:
      return state;
  }
};

export { CategoryReducer };
