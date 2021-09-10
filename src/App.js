import React, { useEffect } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Header/Header";
import InvoiceList from "./components/Invoice/InvoiceList";
import { useSelector, useDispatch } from "react-redux";
import New_invoice from "./components/New_Invoice/New_invoice";
import Overlay from "./components/Overlay";
import { showInvoice } from "./actions/headerAction";
import { LoadInvoice } from "./actions/invoiceAction";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import { useGlobalContext } from "./context";

function App() {
  const isBlack = useSelector((state) => state.theme.isDark);
  const { setisDraft } = useGlobalContext();

  //add the light class at default
  useEffect(() => {
    const body = document.body;
    if (isBlack === true) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }, [isBlack]);

  const showInvoiceFilter = useSelector((state) => state.header.showInvoice);
  const toggleInvoice = useSelector((state) => state.header.toggleInvoice);

  const invoiceList = useSelector((state) => state.invoice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadInvoice(invoiceList.filterInvoice));
  }, []);

  return (
    <main className="main">
      <section className="main-app-container">
        <Sidebar />
        <div className="info-wrapper-container">
          <div
            className={`${
              showInvoiceFilter
                ? "info-wrapper hide-info-wrapper"
                : "info-wrapper"
            }`}
          >
            <Overlay />
            <section
              className={`${
                showInvoiceFilter
                  ? "invoice-wrapper invoice-wrapper-show"
                  : "invoice-wrapper"
              }`}
            >
              <New_invoice />
              <section className="fixed">
                <button
                  onClick={() => dispatch(showInvoice())}
                  type="reset"
                  form="new-Invoice"
                  className="btn single-btn"
                >
                  Discard
                </button>
                <section className="btn-contain">
                  <button
                    onClick={() => setisDraft(false)}
                    type="submit"
                    form="new-Invoice"
                    className="btn-ash btn"
                  >
                    Save as Draft
                  </button>
                  <button
                    onClick={() => setisDraft(true)}
                    type="submit"
                    form="new-Invoice"
                    className="btn-purple btn"
                  >
                    Save &amp; Send
                  </button>
                </section>
              </section>
            </section>
            <section className="invoice-changer">
              <div
                className={`${
                  toggleInvoice
                    ? "invoice-info-container hide-invoice-info-container"
                    : "invoice-info-container"
                }`}
              >
                <div className="headerCon">
                  <Header />
                </div>
                <div className="invoiceListWrapper">
                  <InvoiceList />
                </div>
              </div>
              <div
                className={`${
                  toggleInvoice
                    ? "invoice-info-container-detail show-invoice-detail"
                    : "invoice-info-container-detail"
                }`}
              >
                <InvoiceDetail />
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
