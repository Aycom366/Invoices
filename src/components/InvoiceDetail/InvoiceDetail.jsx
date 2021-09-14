import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleInvoice } from "../../actions/headerAction";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowLeft from "../../assets/icon-arrow-left.svg";

import { useGlobalContext } from "../../context";
import { MarkAsPaid } from "../../actions/invoiceAction";

function InvoiceDetail() {
  const { getWidth, isDeleteModal, setIsDeleteModal, LoadEditValues } =
    useGlobalContext();
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoice.singleInvoice);

  const markAsPaid = (id) => {
    dispatch(MarkAsPaid(invoice.id));
  };

  const handleDelete = () => {
    setIsDeleteModal({ ...isDeleteModal, id: invoice.id, isVisible: true });
  };

  return (
    <div className="classDetails">
      {Object.keys(invoice).length > 0 && (
        <>
          <div className="singleback">
            <button
              aria-label="Go Back Button to Invoice List Page"
              onClick={() => dispatch(ToggleInvoice(invoice.id))}
            >
              <span style={{ marginRight: "24px" }}>
                <img
                  aria-label="go back arrow"
                  src={ArrowLeft}
                  alt="ArrowLeft"
                />
              </span>
              Go back
            </button>
          </div>
          <div className="single-header">
            <div className="single-status">
              <p>Status</p>
              <div className={invoice.status}>
                <FiberManualRecordIcon className="icon-invoice" />
                <h4>{invoice.status}</h4>
              </div>
            </div>
            <div className="single-btns">
              <button
                aria-label="Edit Current Invoice"
                onClick={LoadEditValues}
                className="btns btn-black"
              >
                Edit
              </button>
              <button
                aria-label="Delete Current Invoice"
                onClick={handleDelete}
                className="btns btn-red"
              >
                Delete
              </button>
              {invoice.status !== "paid" && (
                <button
                  aria-label="Mark as Paid"
                  onClick={() => markAsPaid(invoice.id)}
                  className="btns btn-purple"
                >
                  Mark as Paid
                </button>
              )}
            </div>
          </div>

          <div className="single-information">
            <div className="single-id-container">
              <div className="single-id-Info">
                <h4>
                  <span style={{ color: "#7E88C3" }}>#</span>
                  {invoice.id}
                </h4>
                <div>
                  <p>{invoice.description}</p>
                </div>
              </div>
              <div className="single-address">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>

            {/* address area */}
            <div className="more-information">
              <div className="single-date">
                <div className="single-invoice-date">
                  <p style={{ marginBottom: "12px" }}>Invoice Date</p>
                  <h3>{invoice.createdAt}</h3>
                </div>
                <div className="single-invoice-date">
                  <p style={{ marginBottom: "12px" }}>Payment Due</p>
                  <h3>{invoice.paymentDue}</h3>
                </div>
              </div>
              <div className="single-bill-to">
                <p style={{ marginBottom: "12px" }}>Bill To</p>
                <h3 style={{ marginBottom: "8px" }}>{invoice.clientName}</h3>
                <div className="single-address-bill">
                  <p>{invoice.clientAddress.street}</p>
                  <p>{invoice.clientAddress.city}</p>
                  <p>{invoice.clientAddress.postCode}</p>
                  <p>{invoice.clientAddress.country}</p>
                </div>
              </div>
              <div className="single-sent-to">
                <p style={{ marginBottom: "12px" }}>Sent to</p>
                <h3>{invoice.clientEmail}</h3>
              </div>
            </div>

            {/* items area */}
            <div className="single-item-info">
              <div className="more-items">
                {getWidth > 650 && (
                  <div className="single-item-label">
                    <div className="single-item-products-name">
                      <div className="products-itemName">
                        <p>Item Name</p>
                      </div>
                      <div className="product-qty-price">
                        <div className="productQty">
                          <p>QTY.</p>
                        </div>
                        <div className="productPrice">
                          <p>Price</p>
                        </div>
                      </div>
                    </div>
                    <div className="product-total-single">
                      <p>Total</p>
                    </div>
                  </div>
                )}
                {invoice.items.map((item, index) => {
                  const { name, price, quantity, total } = item;
                  return (
                    <div key={index} className="single-item-label">
                      <div className="single-item-products-name">
                        <div className="products-itemName">
                          <h4>{name}</h4>
                        </div>
                        <div className="product-qty-price">
                          <div className="productQty">
                            <h4>{quantity}</h4>
                          </div>
                          <div className="productPrice">
                            <h4>
                              {getWidth <= 400 && "x  "} $ {price}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="single-item-products-total">
                        <div className="product-total-single">
                          <h4>$ {total}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="single-item-info-total">
                <p>Amount Due</p>
                <h2>${invoice.total}</h2>
              </div>
            </div>
          </div>
          <div className="single-btnes">
            <button
              aria-label="Edit Current Invoice for Mobile Screen Media"
              className="btns btn-black"
            >
              Edit
            </button>
            <button
              aria-label="Delete Current Invoice for Mobile Screen Media"
              onClick={handleDelete}
              style={{ margin: "0px 10px" }}
              className="btns btn-red"
            >
              Delete
            </button>
            {invoice.status !== "paid" && (
              <button
                aria-label="Mar Invoice as paid for Mobile Screen Media"
                onClick={() => markAsPaid(invoice.id)}
                className="btns btn-purple"
              >
                Mark as Paid
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default InvoiceDetail;
