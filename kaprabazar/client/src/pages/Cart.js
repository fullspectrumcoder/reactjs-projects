import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  checkoutItems,
  deleteCartItem,
} from "../redux-store/actions/all-actions/PackageAction";

const Cart = () => {
  let dispatch = useDispatch();
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  const allPackages = useSelector(({ PackageState }) => PackageState.data);
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState();

  const fetchUserCart = () => {
    let filterCartItems = allPackages?.filter((e) => e._id === authUser._id);
    setCartData(filterCartItems);
    console.log(filterCartItems);

    if (filterCartItems.length > 0) {
      let amount = 0;
      filterCartItems.forEach((element) => {
        amount += element.newPrice;
      });
      setTotalAmount(amount);
    }
  };

  const deleteItem = (item) => {
    if (allPackages.length > 0) {
      let filterCart = allPackages.filter(
        (e) => (e._id, e.id) !== (item._id, item.id)
      );

      if (filterCart) {
        dispatch(deleteCartItem(filterCart));
      }
    }
  };

  const checkout = () => {
    if (cartData.length > 0) {
      let newData = [];
      for (let i = 0; i < cartData.length; i++) {
        let data = {
          id: cartData[i].id,
          title: cartData[i].title,
          price: cartData[i].newPrice,
        };

        // console.log(data);

        newData.slice(0);
        newData.push(data);
      }
      if (newData.length > 0) {
        dispatch(checkoutItems(newData, authUser._id));
      }
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, [allPackages]);

  return (
    <>
      <Breadcrumbs title="Cart" />
      <MDBContainer>
        {cartData.length > 0 ? (
          <MDBRow>
            <MDBCol lg={8}>
              <div className="cart_items_table">
                <MDBTable align="middle">
                  <MDBTableHead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Package Name</th>
                      <th scope="col">Package Expire</th>
                      <th scope="col">Price</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {cartData.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.img}
                                alt=""
                                style={{ width: "55px", height: "55px" }}
                                className="rounded-2"
                              />
                            </div>
                          </td>
                          <td className="fw-normal">{item.title}</td>
                          <td>{item.expiry} Days</td>
                          <td>${item.newPrice}</td>
                          <td className="text-center">
                            <Link
                              className="delete_icon"
                              onClick={() => deleteItem(item)}
                            >
                              <MdClose />
                              <span>Remove</span>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </MDBTableBody>
                </MDBTable>
              </div>
            </MDBCol>
            <MDBCol lg={4}>
              <div className="cart_totals">
                <h3>Cart Summary</h3>
                <div className="body_cart">
                  <p>
                    Total: <span>${totalAmount}</span>
                  </p>
                  <MDBBtn onClick={checkout}>Proceed To Checkout</MDBBtn>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        ) : (
          <p className="pasts_slide">Empty Cart</p>
        )}
      </MDBContainer>
    </>
  );
};

export default Cart;
