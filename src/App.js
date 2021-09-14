import React, { useEffect } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Header/Header";
import InvoiceList from "./components/Invoice/InvoiceList";
import { useSelector, useDispatch } from "react-redux";
import New_invoice from "./components/New_Invoice/New_invoice";
import Overlay from "./components/Overlay";
import { showInvoice } from "./actions/headerAction";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import { useGlobalContext } from "./context";
import DeleteOverlay from "./components/DeleteOverlay";

function App() {
  const isBlack = useSelector((state) => state.theme.isDark);
  const { setisDraft, setIsEdit, isEdit } = useGlobalContext();

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

  const dispatch = useDispatch();

  return (
    <main className="main">
      <section className="main-app-container">
        <Sidebar />
        <DeleteOverlay />

        {/* Beginning of the main App */}
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
              <section className={`${isEdit ? "fixed fixedEdit" : "fixed"}`}>
                {!isEdit && (
                  <button
                    onClick={() => {
                      dispatch(showInvoice());
                      setIsEdit(false);
                    }}
                    aria-label="Close Invoice Side Slide"
                    type="reset"
                    form="new-Invoice"
                    className="btn single-btn"
                  >
                    Discard
                  </button>
                )}

                {isEdit ? (
                  <>
                    <section className="btn-contain">
                      <button
                        onClick={() => {
                          dispatch(showInvoice());
                          setIsEdit(false);
                        }}
                        type="button"
                        className="btn-ash btn"
                        aria-label="Cancel Invoice Side Slide for Edit"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        form="new-Invoice"
                        className="btn-purple btn"
                      >
                        Save Changes
                      </button>
                    </section>
                  </>
                ) : (
                  <>
                    <section className="btn-contain">
                      <button
                        onClick={() => setisDraft(false)}
                        type="submit"
                        form="new-Invoice"
                        className="btn-ash btn"
                        aria-label="Save as Draft Functionality Button for New Invoice"
                      >
                        Save as Draft
                      </button>
                      <button
                        onClick={() => setisDraft(true)}
                        type="submit"
                        form="new-Invoice"
                        className="btn-purple btn"
                        aria-label="Save  Functionality Button For New Invoice"
                      >
                        Save &amp; Send
                      </button>
                    </section>
                  </>
                )}
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
        {/* End of main */}
      </section>
    </main>
  );
}

export default App;
