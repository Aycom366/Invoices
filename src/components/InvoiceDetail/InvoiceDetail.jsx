import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleInvoice } from "../../actions/headerAction";
import ArrowLeft from "../../assets/icon-arrow-left.svg";

function InvoiceDetail() {
  const invoice = useSelector((state) => state.invoice.singleInvoice);
  const dispatch = useDispatch();
  return (
    <main className="classDetails">
      <div className="singleback">
        <button onClick={() => dispatch(ToggleInvoice(""))}>
          <span style={{ marginRight: "24px" }}>
            <img aria-label="go back arrow" src={ArrowLeft} alt="ArrowLeft" />
          </span>
          Go back
        </button>
      </div>
      <div className="single-header">
        <div className="single-status"></div>
        <div className="single-btn"></div>
      </div>
      <div className="single-information">
        <div className="single-id-container">
          <div className="single-id"></div>
          <div className="single-address"></div>
        </div>
        <div className="more-information">
          <div className="single-date"></div>
          <div className="single-bill-to"></div>
          <div className="single-sent-to"></div>
        </div>
      </div>
    </main>
  );
}

export default InvoiceDetail;
