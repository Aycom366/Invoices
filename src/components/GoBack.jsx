import React from "react";
import ArrowLeft from "../assets/icon-arrow-left.svg";
import { useDispatch } from "react-redux";

function GoBack({ showInvoice }) {
  const dispatch = useDispatch();

  return (
    <div className="singleback">
      <button
        aria-label="Goes Back to Invoice List Page"
        onClick={() => dispatch(showInvoice())}
      >
        <span style={{ marginRight: "24px" }}>
          <img aria-label="go back arrow" src={ArrowLeft} alt="ArrowLeft" />
        </span>
        Go back
      </button>
    </div>
  );
}

export default GoBack;
