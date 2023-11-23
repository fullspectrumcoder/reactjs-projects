const INIT_STATE = {
  posts: [],
};

const PostReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      let allPosts = action.payload;
      // console.log(allPosts);

      return {
        ...state,
        posts: allPosts,
      };

    default:
      return state;
  }
};

export { PostReducer };
