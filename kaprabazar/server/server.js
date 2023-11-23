require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
let port = process.env.PORT || 3030;
const dbUrl = process.env.DATABASE;

mongoose
  .connect(dbUrl, { dbName: "kaprabazar" })
  .then(() => console.log("Database connect successfully..."))
  .catch((dbError) => console.log("Error Found...", dbError));

app.use(express.json({ limit: "25mb" }));
app.use(cors());
app.use(morgan("short"));

app.use((req, res, next) => {
  console.log("A request came: ", req.body);
  // console.log("HTTP Method: ", req.method + " , URL: " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Mern Stack Project Of KapraBazar.");
});

app.use(require("./src/routes/UserRoutes"));

app.use(require("./src/routes/PostRoutes"));

app.use(require("./src/routes/PaymentRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
