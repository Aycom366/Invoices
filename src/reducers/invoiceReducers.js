import { ActionTypes } from "../constants/themeActionTypes";

const data = require("../data.json");

const initialState = {
  invoices: data,
  filterInvoice: data,
  FormsValue: [],
  toggleId: "",
  singleInvoice: [],
};

export const invoiceReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.loadInvoice) {
    return {
      ...state,
      invoices: action.payload,
      filterInvoice: action.payload,
    };
  }
  if (action.type === ActionTypes.FilterInvoice) {
    return { ...state, filterInvoice: action.payload };
  }

  if (action.type === ActionTypes.DynamicInput) {
    return { ...state, FormsValue: action.payload };
  }

  if (action.type === ActionTypes.toggleInvoice) {
    const tempInvoice = state.filterInvoice.filter(
      (inv) => inv.id === action.payload
    );
    return {
      ...state,
      toggleInvoice: !state.toggleInvoice,
      toggleId: action.payload,
      singleInvoice: tempInvoice,
    };
  }

  // if (action.type === ActionTypes.RemoveDynamicInput) {
  //   const inputVales = action.FormsObject;
  //   inputVales.splice(action.payload, 1);
  //   return { ...state, FormsValue: inputVales };
  // }
  return { ...state };
};
