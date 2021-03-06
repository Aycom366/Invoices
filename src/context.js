import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterInvoice } from "./actions/invoiceAction";
import { HideFilter, showInvoice } from "./actions/headerAction";
import { Delete } from "./actions/invoiceAction";
import { ToggleInvoice } from "./actions/headerAction";

const AppContext = React.createContext();

//abstract the current inner width from windows
const getWindowInnerWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export const AppProvider = ({ children }) => {
  const currentInvoice = useSelector((state) => state.invoice.invoices);
  const headerReducer = useSelector((state) => state.header);

  const [invoiceId, setInvoiceId] = useState({ id: "", isClicked: false });

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  //getWindowWidth
  const [getWidth, setGetWidth] = useState(getWindowInnerWidth);

  //saving as draft or not
  const [isDraft, setisDraft] = useState(false);

  //checkbox objects
  const [check, setCheck] = useState({});

  //Formik InitialValues for editing

  //showdeleModal
  const [isDeleteModal, setIsDeleteModal] = useState({
    id: "",
    isVisible: false,
  });

  //create LocalStorage
  useEffect(() => {
    localStorage.setItem("Invoices", JSON.stringify(currentInvoice));
  }, [currentInvoice]);

  const LoadEditValues = () => {
    setIsEdit(true);
    dispatch(showInvoice());
  };

  //function to hide back delete modal and overlay
  const closeDeleteModal_Delete = () => {
    setIsDeleteModal({ ...isDeleteModal, id: "", isVisible: false });
  };

  const DeleteInvoice = () => {
    dispatch(ToggleInvoice(isDeleteModal.id));
    dispatch(Delete(isDeleteModal.id));
    closeDeleteModal_Delete();
  };

  useEffect(() => {
    const handleResize = () => setGetWidth(getWindowInnerWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //closing Filter Modal
  const handleFil = () => {
    if (headerReducer.isFilter === true) {
      dispatch(HideFilter());
    }
  };

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

  return (
    <AppContext.Provider
      value={{
        isDeleteModal,
        setIsDeleteModal,
        onChange,
        handleCheckBoxChanges,
        getWidth,
        check,
        isDraft,
        setisDraft,
        handleFil,
        invoiceId,
        setInvoiceId,
        DeleteInvoice,
        closeDeleteModal_Delete,
        LoadEditValues,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
