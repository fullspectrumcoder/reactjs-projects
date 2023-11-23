import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../components/constant/Constant";

const addPost = (post, navigate) => {
  return async (dispatch) => {
    try {
      let apiUrl = `${BASE_URL}/api/post-create`;

      let response = await axios({
        method: "POST",
        url: apiUrl,
        data: post,
      });

      if (response) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
};

const fetchPosts = () => {
  return async (dispatch) => {
    try {
      let apiUrl = `${BASE_URL}/api/fetch-posts`;

      let response = await axios({
        method: "GET",
        url: apiUrl,
      });

      if (response) {
        let posts = response.data.data;
        dispatch({
          type: "FETCH_POSTS",
          payload: posts,
        });
      } else {
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
};

export { addPost, fetchPosts };
