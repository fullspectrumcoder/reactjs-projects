import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import {
  categoryOptions,
  conditionOptions,
  priceTypeOptions,
  salePercentageOptions,
  stateOptions,
  bagsCategory,
  bedsheetsCategory,
  womensCategory,
  carpetCategory,
  coronavirusCategory,
  coverCategory,
  fashionCategory,
  footwearCategory,
  jewelleryCategory,
  kidsCategory,
  mensCategory,
} from "../data/Options";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux-store/actions/all-actions/PostAction";
import {
  CheckBoxField,
  InputField,
  SelectField,
  TextAreaField,
} from "../components/FormFields";
import swal from "sweetalert";

const AdPost = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const authUser = useSelector(({ AuthState }) => AuthState.user);
  const [basicActive, setBasicActive] = useState("tab1");
  const [basicSelected, setBasicSelected] = useState("");
  const [error, setError] = useState("");
  const [catValue, setCatValue] = useState("Womens Clothing");
  const [subCategoryOptions, setSubCategoryOptions] = useState(womensCategory);
  const [data, setData] = useState({
    title: "",
    category: {
      value: "Womens Clothing",
      label: "Womens Clothing",
    },
    subCategory: null,
    link: "",
    condition: null,
    quantity: "",
    tags: "",
    priceType: null,
    price: "",
    discount: null,
    description: "",
    v_id: authUser._id,
    name: authUser.name,
    number: authUser.contactNumber,
    profileImage: authUser.profileImage,
    state: "",
    address: "",
    files: [],
    featured: false,
  });

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const reduce_image_file_size = async (
    base64Str,
    MAX_WIDTH = 450,
    MAX_HEIGHT = 450
  ) => {
    let resized_base64 = await new Promise((resolve) => {
      let img = new Image();
      img.src = base64Str;
      img.onload = () => {
        let canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
    });
    return resized_base64;
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: async (acceptedFiles) => {
      let imageData = [];
      for (let i = 0; i < acceptedFiles.length; i++) {
        let res = await toBase64(acceptedFiles[i]);

        if (res) {
          const resized = await reduce_image_file_size(res);
          let data = { preview: resized };
          imageData.push(data);
        } else {
          console.log("return err");
        }
      }
      if (imageData) {
        setData((prevState) => ({
          ...prevState,
          files: imageData,
        }));
      }
    },
  });

  let {
    title,
    category,
    subCategory,
    link,
    condition,
    quantity,
    tags,
    priceType,
    price,
    discount,
    description,
    v_id,
    name,
    number,
    profileImage,
    state,
    address,
    files,
    featured,
  } = data;

  const thumbs = files.map((file, index) => (
    <div className="thumb" key={index}>
      <div className="thumbInner">
        <img src={file.preview} alt="" />
      </div>
    </div>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePreviousStep = (value) => {
    if (value !== basicActive) {
      setBasicActive(value);
      setBasicSelected(value);
    }
  };

  const handleStep2 = (value) => {
    if (title !== "" && category !== null) {
      if (value !== basicActive) {
        setBasicActive(value);
        setBasicSelected(basicActive);
        setError("");
      }
    } else {
      setError("This field is required.");
    }
  };

  const handleStep3 = (value) => {
    if (priceType !== null && price !== "") {
      if (value !== basicActive) {
        setBasicActive(value);
        setBasicSelected(basicActive);
        setError("");
      }
    } else {
      setError("This field is required.");
    }

    if (priceType?.value === "Price on call") {
      if (value !== basicActive) {
        setBasicActive(value);
        setBasicSelected(basicActive);
        setError("");
      }
    } else {
      setError("This field is required.");
    }
  };

  const handleFeatured = (e) => {
    if (e.target.checked === true) {
      swal({
        title: "Featured Ads",
        text: "Please see our packages for Featured Ads..!",
        icon: "success",
        buttons: ["Close"],
        type: "Buy Ad Package",
      });
    }

    setData((prevState) => ({
      ...prevState,
      featured: e.target.checked,
    }));
  };

  const handleCategory = (val) => {
    if (val === "Bags") {
      setCatValue(val);
      setSubCategoryOptions(bagsCategory);
    } else if (val === "Bed Sheets") {
      setCatValue(val);
      setSubCategoryOptions(bedsheetsCategory);
    } else if (val === "Carpet") {
      setCatValue(val);
      setSubCategoryOptions(carpetCategory);
    } else if (val === "Coronavirus") {
      setCatValue(val);
      setSubCategoryOptions(coronavirusCategory);
    } else if (val === "Covers") {
      setCatValue(val);
      setSubCategoryOptions(coverCategory);
    } else if (val === "Fashion") {
      setCatValue(val);
      setSubCategoryOptions(fashionCategory);
    } else if (val === "Footwear") {
      setCatValue(val);
      setSubCategoryOptions(footwearCategory);
    } else if (val === "Jewellery") {
      setCatValue(val);
      setSubCategoryOptions(jewelleryCategory);
    } else if (val === "Kids & Babies") {
      setCatValue(val);
      setSubCategoryOptions(kidsCategory);
    } else if (val === "Mens Clothing") {
      setCatValue(val);
      setSubCategoryOptions(mensCategory);
    } else if (val === "Womens Clothing") {
      setCatValue(val);
      setSubCategoryOptions(womensCategory);
    } else {
      setCatValue("");
      setSubCategoryOptions(null);
    }
  };

  useEffect(() => {
    handleCategory(category.value);
  }, [category]);

  const handleSubmit = () => {
    let postData = {
      title,
      category: category.value,
      subCategory: subCategory ? subCategory.value : null,
      link,
      condition: condition ? condition.value : null,
      quantity,
      tags,
      priceType: priceType.value,
      price,
      discount: discount ? discount.value : null,
      description,
      v_id,
      name,
      number,
      profileImage,
      state: state ? state.value : null,
      address,
      files,
      featured,
      timeStamp: new Date().toLocaleDateString(),
    };
    if (name !== "" && address !== null) {
      dispatch(addPost(postData, navigate));
      console.log(postData);
      setError("");
    } else {
      setError("This field is required.");
    }
  };

  return (
    <>
      <div className="post_bg">
        <Link to={"/"}>
          <img
            src="https://kaprabazar.com/wp-content/uploads/2017/12/logo-1.png"
            alt=""
            className="logo"
          />
        </Link>

        <div className="post_hd">
          <h1>Sell Your Product</h1>
          <p>Place your product and get found by countless potential buyers.</p>
        </div>

        <div className="post_form_block">
          <MDBTabs className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink
                active={basicActive === "tab1"}
                className={
                  basicSelected === "tab1" || basicSelected === "tab2"
                    ? "selected"
                    : ""
                }
              >
                <h4>Product</h4>
                <p>Title, Categories</p>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                active={basicActive === "tab2"}
                className={basicSelected === "tab2" ? "selected" : ""}
              >
                <h4>Product Details</h4>
                <p>Picture, Pricing, Details</p>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                active={basicActive === "tab3"}
                className={basicSelected === "tab3" ? "selected" : ""}
              >
                <h4>User Information</h4>
                <p>Person, Contact, Location</p>
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={basicActive === "tab1"}>
              <div className="formTab">
                <MDBRow>
                  <MDBCol lg={12}>
                    <InputField
                      name="title"
                      value={title}
                      handleChange={handleChange}
                      label="What are you selling?"
                      sup="*"
                      error={error}
                    />
                    <SelectField
                      value={category}
                      handleChange={(event) =>
                        setData((prevState) => ({
                          ...prevState,
                          category: event,
                        }))
                      }
                      options={categoryOptions}
                      label="Category"
                      sup="*"
                      text="Select suitable category for your ad"
                      error={error}
                    />
                    {category.value === catValue ? (
                      <SelectField
                        value={subCategory}
                        handleChange={(event) =>
                          setData((prevState) => ({
                            ...prevState,
                            subCategory: event,
                          }))
                        }
                        options={subCategoryOptions}
                      />
                    ) : null}
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="form_footer">
                <MDBBtn onClick={() => handleStep2("tab2")}>Next</MDBBtn>
              </div>
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "tab2"}>
              <div className="formTab">
                <MDBRow>
                  <MDBCol lg={12}>
                    <InputField
                      name="link"
                      value={link}
                      handleChange={handleChange}
                      label="Youtube Video Link"
                    />
                  </MDBCol>
                  <MDBCol lg={6}>
                    <SelectField
                      value={condition}
                      handleChange={(event) =>
                        setData((prevState) => ({
                          ...prevState,
                          condition: event,
                        }))
                      }
                      options={conditionOptions}
                      label="Item Condition"
                    />
                  </MDBCol>
                  <MDBCol lg={6}>
                    <InputField
                      name="quantity"
                      value={quantity}
                      handleChange={handleChange}
                      label="Available Stock (QTY)"
                    />
                  </MDBCol>
                  <MDBCol lg={12}>
                    <InputField
                      name="quantity"
                      value={quantity}
                      handleChange={handleChange}
                      label="Click the box below to ad photos!"
                      sup="*"
                      text="pload only jpg, png and jpeg files with a max file
                      size of 800kb"
                      dropzone={true}
                      getRootProps={getRootProps}
                      getInputProps={getInputProps}
                      files={files}
                      thumbs={thumbs}
                      error={error}
                    />
                    <InputField
                      name="tags"
                      value={tags}
                      handleChange={handleChange}
                      label="Tags"
                      text="Comma(,) separated"
                    />
                    <SelectField
                      value={priceType}
                      handleChange={(event) =>
                        setData((prevState) => ({
                          ...prevState,
                          priceType: event,
                        }))
                      }
                      options={priceTypeOptions}
                      label="Price Type"
                      sup="*"
                      error={error}
                    />
                    {priceType?.value === "Price on call" ? null : (
                      <InputField
                        name="price"
                        value={price}
                        handleChange={handleChange}
                        label="Price"
                        sup="*"
                        text="Rs only"
                        error={error}
                      />
                    )}

                    {priceType?.value === "Sale" ? (
                      <SelectField
                        value={discount}
                        handleChange={(event) =>
                          setData((prevState) => ({
                            ...prevState,
                            discount: event,
                          }))
                        }
                        options={salePercentageOptions}
                        label="Percent Discount"
                      />
                    ) : null}
                    <TextAreaField
                      name="description"
                      value={description}
                      handleChange={handleChange}
                      label="Description"
                      text="Enter long description."
                    />
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="form_footer">
                <MDBBtn onClick={() => handlePreviousStep("tab1")}>
                  Previous
                </MDBBtn>
                <MDBBtn onClick={() => handleStep3("tab3")}>Next</MDBBtn>
              </div>
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "tab3"}>
              <div className="formTab">
                <MDBRow>
                  <MDBCol lg={6}>
                    <InputField
                      name="name"
                      value={name}
                      handleChange={handleChange}
                      label="Your Name"
                      sup="*"
                      error={error}
                    />
                  </MDBCol>
                  <MDBCol lg={6}>
                    <InputField
                      name="number"
                      value={number}
                      handleChange={handleChange}
                      label="+92 Mobile Number"
                    />
                  </MDBCol>
                  <MDBCol lg={12}>
                    <SelectField
                      value={state}
                      handleChange={(event) =>
                        setData((prevState) => ({
                          ...prevState,
                          state: event,
                        }))
                      }
                      options={stateOptions}
                      label="State"
                    />
                    <InputField
                      name="address"
                      value={address}
                      handleChange={handleChange}
                      label="Address"
                      sup="*"
                      error={error}
                    />
                    <CheckBoxField
                      name="flexCheck"
                      value={featured}
                      id="flexCheckDefault"
                      label="Make it featured"
                      handleFeatured={handleFeatured}
                    />
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="form_footer">
                <MDBBtn onClick={() => handlePreviousStep("tab2")}>
                  Previous
                </MDBBtn>
                <MDBBtn onClick={() => handleSubmit()}>Submit</MDBBtn>
              </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </div>
      </div>
    </>
  );
};

export default AdPost;
