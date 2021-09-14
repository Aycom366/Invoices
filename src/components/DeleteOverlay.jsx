import React from "react";
import { useGlobalContext } from "../context";

function DeleteOverlay() {
  const { isDeleteModal, DeleteInvoice, closeDeleteModal_Delete } =
    useGlobalContext();
  return (
    <>
      <div
        onClick={closeDeleteModal_Delete}
        className={`${
          isDeleteModal.isVisible
            ? "deleteOverlay showdeleteOverlay"
            : "deleteOverlay"
        }`}
      ></div>
      {/* Delete modal from Invoice Detail  */}
      <div
        className={`${
          isDeleteModal.isVisible
            ? "modalDelete showModalDelete"
            : "modalDelete"
        }`}
      >
        <div className="modalWrapper">
          <h2>Confirm Deletion</h2>
          <p>
            Are you sure you want to delete invoice? This action cannot be
            undone.
          </p>
          <div className="btnCon">
            <div className="btnCon-wrapper">
              <button
                onClick={closeDeleteModal_Delete}
                className="btn btn-black"
                aria-label="closes the delete modal that pops out"
              >
                Cancel
              </button>
              <button
                aria-aria-label="Delete Invoice of the current Id been loaded"
                onClick={DeleteInvoice}
                className="btn btn-red"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Delete Modal  */}
    </>
  );
}

export default DeleteOverlay;
