// import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs";
// import { BiArrowBack } from "react-icons/bi";

// const Checkout = () => {
//   const [totalAmount, setTotalAmount] = useState();
//   const packageItems = useSelector(
//     ({ PackageState }) => PackageState.packageItems
//   );
// //   console.log(packageItems);

//   useEffect(() => {
//     if (packageItems.length > 0) {
//       let amount = 0;
//       packageItems.forEach((element) => {
//         amount += element.newPrice;
//       });
//       setTotalAmount(amount);
//     }
//   }, [packageItems]);

//   return (
//     <>
//       <Breadcrumbs title="Checkout" />

//       <MDBContainer>
//         <div className="back_to_cart">
//           <Link to={"/cart"}>
//             <BiArrowBack /> Back to cart
//           </Link>
//         </div>
//         <MDBRow>
//           <MDBCol lg={8}>
//             <div className="checkout_items">{/* <h1>jkkdsnkjds</h1> */}</div>
//           </MDBCol>
//           <MDBCol lg={4}>
//             <div className="checkout_items">
//               <h4>Checkout Summary</h4>
//               <ul>
//                 {packageItems.map((item, index) => {
//                   return (
//                     <li key={index}>
//                       <div className="cart_item">
//                         <div className="d-flex align-items-center justify-content-between">
//                           <p>{item.title}</p>
//                           <p>${item.newPrice}</p>
//                         </div>
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ul>
//               <div className="checkout_amount">
//                 <p className="checkout-total">
//                   Subtotal <span>${totalAmount}</span>
//                 </p>

//                 <p className="checkout-total border-0 p-0">
//                   Totals <span>${totalAmount}</span>
//                 </p>
//               </div>
//             </div>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default Checkout;

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
