const PackageModel = require("../models/OrderStructure");
const UserModel = require("../models/UserStructure");
const STRIPE_SECRET_KEY =
  "sk_test_51MRhQOErzEoFwSBAjvjn9yEJf6CsRDQQFZGNk8k7VvtJfhZVsfHxucMZMlqMZaIWgnsedgcM8tpgamFVKli9mNuL002whQzdlO";
const stripe = require("stripe")(STRIPE_SECRET_KEY);
let URL = process.env.BASE_URL;

const checkout = async (req, res) => {
  let { cartItems, userId } = req.body;
  try {
    let hasUserEmailExist = await UserModel.findOne({ _id: userId });

    if (!hasUserEmailExist) {
      return res.status(404).send({
        status: false,
        message: "User not found.",
      });
    }

    const line_items = cartItems.map((item) => {
      let actualPrice = item.price * 100;
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            metadata: {
              id: item.id,
            },
          },
          unit_amount: actualPrice,
        },
        quantity: 1,
      };
    });

    const customer = await stripe.customers.create({
      metadata: {
        user_id: userId,
        order_id: "16254",
        customer_email: hasUserEmailExist.email,
        cart: JSON.stringify(cartItems),
        customer_name: hasUserEmailExist.name,
        site_url: "https://kaprabazar.com",
      },
    });

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ["card"],
      shipping_address_collection: { allowed_countries: ["US", "CA", "PK"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      line_items,
      mode: "payment",
      success_url: `${URL}/success-payment?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${URL}/cart`,
    });

    if (session) {
      return res.status(200).send({
        status: true,
        message: "Go to checkout.",
        url: session.url,
      });
    }
  } catch (error) {
    if (error) {
      console.log("Something went wrong to place order ", error);
      return res.status(500).send({
        status: false,
        message: "Something went wrong to place order.",
      });
    }
  }
};

let createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);

  const products = Items.map((item) => {
    return {
      productId: item.id,
      quantity: 1,
      title: item.title,
      price: item.price,
    };
  });

  const newPackage = new PackageModel({
    user_id: customer.metadata.user_id,
    order_id: customer.metadata.order_id,
    name: customer.metadata.customer_name,
    email: customer.metadata.customer_email,
    site_url: customer.metadata.site_url,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    items: products,
    currency: data.currency,
    subTotal: data.amount_subtotal / 100,
    amountTotal: data.amount_total / 100,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  newPackage
    .save()
    .then((success) => {
      console.log("DB: ", success);
    })
    .catch((dbError) => {
      console.log("Something went wrong to place order. ", dbError);
    });
};

const paymentWebhook = async (req, res) => {
  let data;
  let eventType;
  let endpointSecret;
  // "whsec_982f7102f27b9085b07b3d1d2110641286e719feee86ee2d03eb93ab465acdd0";

  if (endpointSecret) {
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers["stripe-signature"],
        endpointSecret
      );
      console.log("Webhook Verified.");
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then(async (customer) => {
        try {
          if (customer) {
            createOrder(customer, data);
            console.log("Customer ", customer);
            console.log("Data ", data);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => console.log(err.message));
  }

  res.status(200).end();
};

const verifyPayment = async (req, res) => {
  let { id } = req.params;
  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    if (session) {
      console.log("session ", session);
      return res.status(200).send({
        status: session.payment_status,
        message: "Your payment has verfied successfully",
        secretID: session.payment_intent,
        data: session.customer_details,
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Server Error",
    });
  }
};

module.exports = { checkout, paymentWebhook, verifyPayment };
