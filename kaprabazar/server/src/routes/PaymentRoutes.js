const express = require("express");
const {
  checkout,
  paymentWebhook,
  verifyPayment,
} = require("../controllers/PaymentController");

const router = express.Router();

router.post("/api/create-checkout-session", checkout);
router.post(
  "/api/webhook",
  express.raw({ type: "application/json" }),
  paymentWebhook
);
router.get("/api/verify-payment/:id", verifyPayment);

module.exports = router;
