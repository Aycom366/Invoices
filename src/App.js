import React, { useEffect } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Header/Header";
import InvoiceList from "./components/Invoice/InvoiceList";
import { useSelector } from "react-redux";
import New_invoice from "./components/New_Invoice/New_invoice";
import Overlay from "./components/Overlay";

function App() {
  const isBlack = useSelector((state) => state.theme.isDark);

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

  const Invoice = useSelector((state) => state.header.showInvoice);

  return (
    <main className="main">
      <section className="main-app-container">
        <Sidebar />
        <div className="info-wrapper">
          <Overlay />
          <section
            className={`${
              Invoice
                ? "invoice-wrapper invoice-wrapper-show"
                : "invoice-wrapper"
            }`}
          >
            <New_invoice />
          </section>
          <section className="invoice-info-container">
            <Header />
            <InvoiceList />
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
