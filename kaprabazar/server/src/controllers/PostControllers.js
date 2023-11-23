const PostModel = require("../models/PostStructure");

const postCreate = async (req, res) => {
  let {
    title,
    category,
    link,
    condition,
    qty,
    tags,
    priceType,
    price,
    discount,
    description,
    v_id,
    name,
    profileImage,
    number,
    state,
    address,
    files,
    featured,
    timeStamp,
  } = req.body;

  let newPost = new PostModel({
    title: title,
    category: category,
    link: link,
    condition: condition,
    qty: qty,
    tags: tags,
    priceType: priceType,
    price: price,
    discount: discount,
    description: description,
    v_id: v_id,
    name: name,
    profileImage: profileImage,
    number: number,
    state: state,
    address: address,
    files: files,
    featured: featured,
    timeStamp: timeStamp,
  });

  newPost
    .save()
    .then((success) => {
      if (success) {
        return res.status(200).send({
          status: true,
          message: "Your post has been created successfully.",
          data: newPost,
        });
      }
    })
    .catch((dbError) => {
      console.log(dbError);
      return res.status(500).send({
        status: false,
        message: dbError,
      });
    });
};

const fetchPosts = (req, res) => {
  PostModel.find({}, (err, posts) => {
    if (!err) {
      return res.status(200).send({
        status: true,
        data: posts,
      });
    }

    return res.status(500).send({
      status: false,
      message: "Server Issues",
    });
  });
};

module.exports = { postCreate, fetchPosts };
