import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterInvoice } from "./actions/invoiceAction";

const AppContext = React.createContext();

//abstract the current inner width from windows
const getWindowInnerWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export const AppProvider = ({ children }) => {
  const currentInvoice = useSelector((state) => state.invoice.invoices);
  const dispatch = useDispatch();

  //getWindowWidth
  const [getWidth, setGetWidth] = useState(getWindowInnerWidth);

  //saving as draft or not
  const [isDraft, setisDraft] = useState(false);

  useEffect(() => {
    const handleResize = () => setGetWidth(getWindowInnerWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //checkbox objects
  const [check, setCheck] = useState({});

  //Checkbox onchange functionalities
  const onChange = (e) => {
    const newCheck = { ...check, [e.target.name]: e.target.checked };
    setCheck(newCheck);
    handleCheckBoxChanges(newCheck);
  };

  //filtering invoices
  const handleCheckBoxChanges = (check) => {
    let tempInvoice = [...currentInvoice];

    tempInvoice = tempInvoice.filter((inv) => {
      return (
        (inv.status === "pending" && check.pend) ||
        (inv.status === "paid" && check.paid) ||
        (inv.status === "draft" && check.draft)
      );
    });

    if (
      !check.pend &&
      !check.paid &&
      !check.draft &&
      currentInvoice.length > 0
    ) {
      tempInvoice = [...currentInvoice];
    }
    dispatch(FilterInvoice(tempInvoice));
  };

  function getRandomAlphabet() {
    let text = "";
    let fourRandom;
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    fourRandom = Math.floor(Math.random() * 10000) + 1000;
    return text + fourRandom;
  }

  return (
    <AppContext.Provider
      value={{
        onChange,
        handleCheckBoxChanges,
        getWidth,
        getRandomAlphabet,
        check,
        isDraft,
        setisDraft,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
