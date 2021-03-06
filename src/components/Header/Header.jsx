import React, { useState, useEffect } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  showInvoice,
  changeFilterVisibility,
} from "../../actions/headerAction";
import CheckBox from "./CheckBox";
import { AddCircle } from "@material-ui/icons";
import { useGlobalContext } from "../../context";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

function Header() {
  const [getWidth, setGetWidth] = useState(getWindowWidth);
  const { handleFil } = useGlobalContext();

  useEffect(() => {
    function handleResize() {
      setGetWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getWidth]);

  const dispatch = useDispatch();
  const headerReducer = useSelector((state) => state.header);

  //change filterby visibility
  const handleFilter = () => dispatch(changeFilterVisibility());

  //filter showing of sidebar components or not
  const handleInvoice = () => dispatch(showInvoice());

  //get the invoice list from the invoice reducer
  const invoiceList = useSelector((state) => state.invoice);

  return (
    <div className="header">
      <div onClick={handleFil} className="invoiceHeader">
        <h1 style={{ marginBottom: `${getWidth <= 600 ? "4px" : "8px"}` }}>
          Invoices
        </h1>
        {invoiceList.filterInvoice.length > 0 ? (
          <>
            {getWidth <= 600 ? (
              <p>
                <span>{invoiceList.filterInvoice.length}</span>invoices
              </p>
            ) : (
              <p>
                There are <span>{invoiceList.filterInvoice.length}</span> total
                invoices
              </p>
            )}
          </>
        ) : (
          <p>No Invoices</p>
        )}
      </div>
      <div className="invoice-events">
        <div className="filter">
          <button className="btn-color" onClick={handleFilter}>
            {getWidth <= 600 ? "Filter" : "Filter by status"}
            <span
              style={{ marginLeft: `${getWidth <= 600 ? "15px" : "25px"}` }}
            >
              <img src={arrowDown} alt="Arrow Down" />
            </span>
          </button>
          <div
            className={`${
              headerReducer.isFilter
                ? "filter-items show-filter"
                : "filter-items"
            }`}
          >
            <CheckBox />
          </div>
        </div>
        <div onClick={handleInvoice} className="new-invoice-wrapper">
          <div className="img-wrapper">
            <AddCircle style={{ width: "32px", height: "32px" }} />
          </div>
          <h4>{getWidth <= 600 ? "New" : "New Invoice"}</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
