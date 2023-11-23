import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyPayment } from "../redux-store/actions/all-actions/PackageAction";

const SuccessPayment = () => {
  const [params] = useSearchParams();
  let id = params.get("session_id");
  let navigate = useNavigate();

  let dispatch = useDispatch();
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  const allPackages = useSelector(({ PackageState }) => PackageState.data);
  const data = useSelector(
    ({ PackageState }) => PackageState.successPaymentDetail
  );

  useEffect(() => {
    if (id) {
      dispatch(verifyPayment(id, authUser._id, allPackages));
    }
  }, []);

  return (
    <>
      <MDBContainer className="py-5 my-5 text-center">
        <h2 className="mb-3">
          Thanks you <strong>{data?.name}</strong>.
        </h2>
        <p>Your order might take some time to process.</p>
        <p>
          Check your order status with this email <strong>{data?.email}</strong>{" "}
          at your profile after about 10mins.
        </p>
        <p className="mb-5">
          Incase of any inqueries contact the support at{" "}
          <strong>m.reactdev@gmail.com</strong>
        </p>
        <MDBBtn onClick={() => navigate("/buy-ad-packages")}>
          Buy Packages
        </MDBBtn>{" "}
        <MDBBtn onClick={() => navigate("/profile")}>View Profile</MDBBtn>
      </MDBContainer>
    </>
  );
};

export default SuccessPayment;
