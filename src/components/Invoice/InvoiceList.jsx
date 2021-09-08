import React from "react";
import ArrowRight from "../../assets/icon-arrow-right.svg";
import PersonHere from "../../assets/illustration-empty.svg";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { useSelector, useDispatch } from "react-redux";
import { ToggleInvoice } from "../../actions/headerAction";

function InvoiceList() {
  const invoiceList = useSelector((state) => state.invoice);
  const toggleState = useSelector((state) => state.header.toggleInvoice);
  const dispatch = useDispatch();

  return (
    <main className="invoiceList">
      <section className="invoiceList-wrapper">
        {invoiceList.filterInvoice.length < 1 ? (
          <section className="imageInvoice">
            <img src={PersonHere} alt="Person" />
            <div className="invoice-info">
              <h2>There is nothing here</h2>
              <p>
                Create an invoice by clicking the
                <span style={{ fontWeight: "700" }}>New Invoice</span> button
                and get started
              </p>
            </div>
          </section>
        ) : (
          <section className="invoice-item-wrapper">
            {invoiceList.filterInvoice.map((invoice) => {
              const { id, paymentDue, clientName, total, status } = invoice;
              return (
                <article
                  onClick={() => dispatch(ToggleInvoice(id))}
                  key={id}
                  className="invoiceItem"
                >
                  <div className="item id">
                    <h4>
                      <span>#</span>
                      {id}
                    </h4>
                  </div>
                  <div className="item paymentDue">
                    <p>Due {paymentDue}</p>
                  </div>
                  <div className="item clientName">
                    <p>{clientName}</p>
                  </div>
                  <div className="item total">
                    <h3>${total}</h3>
                  </div>
                  <div className={status}>
                    <FiberManualRecordIcon className="icon-invoice" />
                    <h4>{status}</h4>
                  </div>
                  <div className="item img">
                    <img src={ArrowRight} alt="Arrow-Right" />
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </section>
    </main>
  );
}

export default InvoiceList;
