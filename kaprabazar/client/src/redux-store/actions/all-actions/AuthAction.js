import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../components/constant/Constant";

const loginUser = (user) => {
  return async (dispatch) => {
    try {
      let apiUrl = `${BASE_URL}/api/login-user`;

      let response = await axios({
        method: "POST",
        url: apiUrl,
        data: user,
      });

      if (response) {
        let userData = response.data.data;
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
        dispatch({
          type: "LOGIN_USER",
          payload: userData,
        });
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status !== 500 && error?.response?.status !== 501) {
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
      } else if (error.response.status === 500) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (error.response.status === 501) {
        toast.error(error.response.data.message, {
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
    }
  };
};

const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_USER",
    });

    toast.success("You logged out..!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
};

const updateUser = (user) => {
  return async (dispatch) => {
    try {
      let apiUrl = `${BASE_URL}/api/update-user`;
      let response = await axios({
        method: "PUT",
        url: apiUrl,
        data: user,
      });

      if (response) {
        let userData = response.data.data;
        dispatch({
          type: "UPDATE_USER",
          payload: userData,
        });
        console.log(response);
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
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 500) {
        toast.warn(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
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
    }
  };
};

export { loginUser, logoutUser, updateUser };
