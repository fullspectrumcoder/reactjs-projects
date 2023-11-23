import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../components/constant/Constant";

const addPackageData = (item, navigate) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_PACKAGE",
      payload: item,
    });
    toast.success("Your package has been added in your cart.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };
};

const fetchPackage = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_PACKAGE",
    });
  };
};

const deleteCartItem = (item) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
    toast.success("Your package has removed.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
};

const checkoutItems = (cartItems, userId) => {
  return async (dispatch) => {
    try {
      let apiUrl = `${BASE_URL}/api/create-checkout-session`;

      let response = await axios({
        method: "POST",
        url: apiUrl,
        data: { cartItems, userId },
      });

      if (response.status === 200) {
        window.location = response.data.url;
      } else {
        console.log(response);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
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

const verifyPayment = (id, userId, allPackages) => {
  return async (dispatch) => {
    try {
      let apiUrl = `${BASE_URL}/api/verify-payment/${id}`;

      let response = await axios({
        method: "GET",
        url: apiUrl,
      });

      if (response.status === 200) {
        console.log(response);
        let filterCartItems = allPackages.filter((e) => e._id !== userId);
        dispatch({
          type: "PAYMENT_SUCCESS",
          payload: {
            filterCartItems: filterCartItems,
            data: response.data.data,
            secretID: response.data.secretID,
          },
        });
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
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
export {
  addPackageData,
  fetchPackage,
  deleteCartItem,
  checkoutItems,
  verifyPayment,
};
