import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline, MdOutlineClose } from "react-icons/md";
import DeleteModal from "../components/ModalPops/DeleteModal";
import EditModal from "../components/ModalPops/EditModal";
import { FiSearch } from "react-icons/fi";

const MyProducts = (props) => {
  let { user } = props;
  const [searchInput, setSearchInput] = useState("");
  const [dataList, setDataList] = useState([]);
  const [productDeleteModal, setProductDeleteModal] = useState(false);
  const [updateName, setUpdateName] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [productEditModal, setProductEditModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [productItem, setProductItem] = useState(null);
  const [productIndex, setProductIndex] = useState(null);

  useEffect(() => {
    let fetchList = localStorage.getItem("List");
    fetchList = JSON.parse(fetchList);
    if (fetchList) {
      setDataList(fetchList);
    } else {
      let emptyStr = JSON.stringify([]);
      localStorage.setItem("List", emptyStr);
    }
  }, []);

  useEffect(() => {
    if (dataList && dataList.length !== 0) {
      for (let i = 0; i < dataList.length; i++) {
        if (user.email !== dataList[i].email) {
          setErrorMessage(true);
        } else {
          setErrorMessage(false);
          break;
        }
      }
    } else if (dataList && dataList.length === 0) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [dataList]);

  const openDeleteModal = (item, index) => {
    setProductItem(item);
    setProductIndex(index);
    setProductDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setProductDeleteModal(false);
  };

  const onDelete = (item, id) => {
    /* Filter Method */
    let deletedItem = dataList.filter((e) => e.timeStamp !== item.timeStamp);
    setDataList(deletedItem);
    setProductDeleteModal(false);
    let newDataList = JSON.stringify(deletedItem);
    localStorage.setItem("List", newDataList);
    setProductDeleteModal(false);

    /* Clone  Method */
    // let dataListClone = dataList.slice(0);
    // dataListClone.splice(id);
    // setDataList(dataListClone);
    // let newDataList = JSON.stringify(dataListClone);
    // localStorage.setItem("List", newDataList);
    // setProductDeleteModal(false);
  };

  const openEditModal = (item, id) => {
    setProductItem(item);
    setProductIndex(id);
    setProductEditModal(true);
    setUpdateName(item.name);
    setUpdateDescription(item.description);
    setUpdatePrice(item.price);
  };

  const closeEditModal = () => {
    setProductEditModal(false);
  };

  const onUpdate = (item, id) => {
    /* Filter Method */
    let filterEdit = dataList.filter((e) => e.timeStamp === item.timeStamp);
    if (filterEdit) {
      item.name = updateName;
      item.description = updateDescription;
      item.price = updatePrice;
      item.timeStamp = new Date().toLocaleTimeString();
    }

    setDataList([...dataList], filterEdit);
    setUpdateName("");
    setUpdateDescription("");
    setUpdatePrice("");
    let newDataList = JSON.stringify(dataList);
    localStorage.setItem("List", newDataList);
    setProductEditModal(false);

    /* Map Method */
    // let updatedList = dataList.map((newItem) => {
    //   if (newItem.timeStamp === item.timeStamp) {
    //     newItem.name = updateName;
    //     newItem.description = updateDescription;
    //     newItem.price = updatePrice;
    //     newItem.timeStamp = new Date().toLocaleTimeString();
    //   }

    //   return newItem;
    // });

    // setDataList(updatedList);
    // setUpdateName("");
    // setUpdateDescription("");
    // setUpdatePrice("");
    // let newDataList = JSON.stringify(updatedList);
    // localStorage.setItem("List", newDataList);
    // setProductEditModal(false);
  };

  return (
    <>
      <div className="flexHead">
        <h2>My Product</h2>
        <div className="inputSearch">
          <input
            type="text"
            placeholder="Search here..."
            className="searchInput"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="searchList">
            <FiSearch />
          </span>
        </div>
      </div>
      <div className="listing">
        <div className="table-responsive">
          <table className="table-block table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>User Name</th>
                <th>User By</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>

            <tbody>
              {dataList
                .sort()
                .filter((list) => {
                  if (searchInput === "") return list;
                  else if (
                    list.name.toLowerCase().includes(searchInput.toLowerCase())
                  )
                    return list;
                  else if (
                    list.description
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                    return list;
                  else if (list.price.includes(searchInput)) return list;
                })
                .filter((e) => e.email === user.email)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <p
                          className="edit"
                          onClick={() => openEditModal(item, index)}
                        >
                          <MdOutlineModeEditOutline />
                        </p>
                        <p
                          className="delete"
                          onClick={() => openDeleteModal(item, index)}
                        >
                          <MdOutlineClose />
                        </p>
                      </td>
                    </tr>
                  );
                })}
              {errorMessage ? (
                <tr>
                  <td colSpan={7}>Data Not Added</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteModal
        productDeleteModal={productDeleteModal}
        closeDeleteModal={closeDeleteModal}
        productItem={productItem}
        productIndex={productIndex}
        onDelete={onDelete}
      />

      <EditModal
        productEditModal={productEditModal}
        closeEditModal={closeEditModal}
        productItem={productItem}
        productIndex={productIndex}
        setUpdateName={setUpdateName}
        updateName={updateName}
        updateDescription={updateDescription}
        setUpdateDescription={setUpdateDescription}
        updatePrice={updatePrice}
        setUpdatePrice={setUpdatePrice}
        onUpdate={onUpdate}
      />
    </>
  );
};

export default MyProducts;
