import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DeleteModal = (props) => {
  let {
    productDeleteModal,
    closeDeleteModal,
    productItem,
    productIndex,
    onDelete,
  } = props;

  return (
    <>
      {productDeleteModal === true ? (
        <div className={productDeleteModal === true ? "modal open" : "modal"}>
          <div className="modal-content">
            <div className="modal-container">
              <div className="modal-header">
                <h1>Delete Confirmation</h1>
                <div className="closeIcon" onClick={closeDeleteModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure! you want to delete the <b>{productItem.name}</b>{" "}
                  product?
                </p>
              </div>
              <div className="flexBtn">
                <button
                  className="btn-modal btn-cancel"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  className="btn-modal btn-delete"
                  onClick={() => onDelete(productItem, productIndex)}
                >
                  Delete
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
          productDeleteModal === true ? "modal-backdrop show" : "modal-backdrop"
        }
      ></div>
    </>
  );
};

export default DeleteModal;
