import React from "react";
import { MdOutlineClose } from "react-icons/md";

const EditModal = (props) => {
  let {
    productEditModal,
    closeEditModal,
    productItem,
    productIndex,
    updateName,
    setUpdateName,
    updateDescription,
    setUpdateDescription,
    updatePrice,
    setUpdatePrice,
    onUpdate,
  } = props;

  return (
    <>
      {productEditModal === true ? (
        <div className={productEditModal === true ? "modal open" : "modal"}>
          <div className="modal-content">
            <div className="modal-container">
              <div className="modal-header">
                <h1>Update Product</h1>
                <div className="closeIcon" onClick={closeEditModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <div className="modal-body">
                <div className="updateProduct form">
                  <div className="form-group">
                    <input
                      type={"text"}
                      className="input"
                      placeholder="Plaese enter your product name..."
                      value={updateName}
                      onChange={(e) => setUpdateName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type={"text"}
                      className="input"
                      placeholder="Plaese enter your product description... "
                      value={updateDescription}
                      onChange={(e) => setUpdateDescription(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type={"number"}
                      className="input"
                      placeholder="Plaese enter your product price..."
                      value={updatePrice}
                      onChange={(e) => setUpdatePrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flexBtn">
                <button
                  className="btn-modal btn-cancel"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
                <button
                  className="btn-modal btn-delete"
                  onClick={() => onUpdate(productItem, productIndex)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className={
          productEditModal === true ? "modal-backdrop show" : "modal-backdrop"
        }
      ></div>
    </>
  );
};

export default EditModal;
