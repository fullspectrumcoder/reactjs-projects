const mongoose = require("mongoose");

let packageSchema = new mongoose.Schema(
  {
    user_id: String,
    order_id: String,
    name: String,
    email: String,
    site_url: String,
    customerId: String,
    paymentIntentId: String,
    items: [
      {
        productId: Number,
        quantity: Number,
        title: String,
        price: Number,
      },
    ],
    currency: String,
    subTotal: Number,
    amountTotal: Number,
    shipping: Object,
    delivery_status: { type: String, default: "Success" },
    payment_status: String,
  },
  { timestamps: true, collection: "packages" }
);

let PackageModel = mongoose.model("packages", packageSchema);

module.exports = PackageModel;
