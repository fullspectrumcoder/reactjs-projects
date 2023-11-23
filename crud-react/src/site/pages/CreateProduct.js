import React, { useEffect, useState } from "react";
import DataCreateModal from "../components/ModalPops/DataCreateModal";

const CreateProduct = (props) => {
  let { user } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    let fetchList = localStorage.getItem("List");
    fetchList = JSON.parse(fetchList);
    setDataList(fetchList);
    if (fetchList === null) {
      let emptyStr = JSON.stringify([]);
      localStorage.setItem("List", emptyStr);
    }
  }, []);

  const clearForm = () => {
    setName("");
    setDescription("");
    setPrice("");
  };

  const addProductHandler = () => {
    let productData = {
      name: name,
      description: description,
      price: price,
      email: user.email,
      userName: user.name,
      timeStamp: new Date().toLocaleTimeString(),
    };

    if (name !== "" || description !== "" || price !== "") {
      let dataListClone = dataList.slice(0);
      dataListClone.push(productData);
      setDataList(dataListClone);
      let newList = JSON.stringify(dataListClone);
      localStorage.setItem("List", newList);
      clearForm();
      setSuccessModal(true);
    } else {
      setFailModal(true);
    }
  };

  const closeSuccessModal = () => {
    if (successModal === true) {
      setSuccessModal(false);
    }
  };

  const closeFailModal = () => {
    if (failModal === true) {
      setFailModal(false);
    }
  };

  return (
    <>
      <h2>Create Product</h2>
      <div className="form">
        <div className="form-group">
          <input
            type={"text"}
            className="input"
            placeholder="Plaese enter your product name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type={"text"}
            className="input"
            placeholder="Plaese enter your product description... "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type={"number"}
            className="input"
            placeholder="Plaese enter your product price..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="addBtn" onClick={addProductHandler}>
          Add Product
        </button>
      </div>

      <DataCreateModal
        successModal={successModal}
        failModal={failModal}
        closeSuccessModal={closeSuccessModal}
        closeFailModal={closeFailModal}
      />
    </>
  );
};

export default CreateProduct;
