import React, { useState, useEffect } from "react";
import arrowDown from "../../assets/icon-arrow-down.svg";
import arrowPlus from "../../assets/icon-plus.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterVisibility } from "../../actions/headerAction";
import { showInvoice } from "../../actions/headerAction";
import CheckBox from "./CheckBox";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

function Header() {
  const [getWidth, setGetWidth] = useState(getWindowWidth);

  useEffect(() => {
    function handleResize() {
      setGetWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getWidth]);

  const dispatch = useDispatch();
  const headerReducer = useSelector((state) => state.header);

  const handleFilter = () => dispatch(changeFilterVisibility());

  const handleInvoice = () => dispatch(showInvoice());

  return (
    <main className="header">
      <section className="invoiceHeader">
        <h1 style={{ marginBottom: `${getWidth <= 600 ? "4px" : "8px"}` }}>
          Invoices
        </h1>
        {getWidth <= 600 ? (
          <p>
            <span>0 </span>invoices
          </p>
        ) : (
          <p>
            There are <span>0</span> total invoices
          </p>
        )}
      </section>
      <section className="invoice-events">
        <section className="filter">
          <button className="btn-color" onClick={handleFilter}>
            {getWidth <= 600 ? "Filter" : "Filter by status"}
            <span
              style={{ marginLeft: `${getWidth <= 600 ? "15px" : "25px"}` }}
            >
              <img src={arrowDown} alt="Arrow Down" />
            </span>
          </button>
          <article
            className={`${
              headerReducer.isFilter
                ? "filter-items show-filter"
                : "filter-items"
            }`}
          >
            <CheckBox />
          </article>
        </section>
        <div onClick={handleInvoice} className="new-invoice-wrapper">
          <div className="img-wrapper">
            <img aria-label="New Invoice" src={arrowPlus} alt="New-Invoice" />
          </div>
          <h4>{getWidth <= 600 ? "New" : "New Invoice"}</h4>
        </div>
      </section>
    </main>
  );
}

export default Header;
