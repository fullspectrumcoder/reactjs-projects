const mongoose = require("mongoose");

let postSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    link: String,
    condition: String,
    qty: String,
    tags: String,
    priceType: String,
    price: String,
    discount: String,
    description: String,
    v_id: String,
    name: String,
    profileImage: String,
    number: String,
    state: String,
    address: String,
    files: Array,
    featured: Boolean,
    timeStamp: String,
  },
  { collection: "posts" }
);

let PostModel = mongoose.model("posts", postSchema);

module.exports = PostModel;
