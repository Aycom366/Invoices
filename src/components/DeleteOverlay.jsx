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
      <section
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
                className="btn btn-black "
              >
                Cancel
              </button>
              <button onClick={DeleteInvoice} className="btn btn-red">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End of Delete Modal  */}
    </>
  );
}

export default DeleteOverlay;
