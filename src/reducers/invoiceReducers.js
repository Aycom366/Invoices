import { ActionTypes } from "../constants/themeActionTypes";

const data = require("../data.json");

function getRandomAlphabet() {
  let text = "";
  let fourRandom;
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  fourRandom = Math.floor(Math.random() * 10000) + 1000;
  return text + fourRandom;
}

const initialState = {
  invoices: data,
  filterInvoice: data,
  toggleId: "",
  singleInvoice: [],
};

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

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
    let tempInvoice;

    //calculate totalValues
    const totalAmount = action.payload.items.reduce((acc, curr) => {
      const { itemTotal } = curr;
      acc += parseFloat(itemTotal);
      return acc;
    }, 0);

    if (action.payload.createdAt) {
      const newDate = new Date(action.payload.createdAt).toLocaleDateString();
      const paymentDue = addDays(
        newDate,
        action.payload.paymentTerms
      ).toLocaleDateString();

      if (action.isDraft === false) {
        tempInvoice = {
          ...action.payload,
          createdAt: newDate,
          paymentDue: paymentDue,
          id: getRandomAlphabet(),
          status: "draft",
          total: totalAmount,
        };
      } else {
        tempInvoice = {
          ...action.payload,
          createdAt: newDate,
          paymentDue: paymentDue,
          id: getRandomAlphabet(),
          status: "pending",
          total: totalAmount,
        };
      }
    } else {
      if (action.isDraft === false) {
        tempInvoice = {
          ...action.payload,
          status: "draft",
          id: getRandomAlphabet(),
          total: totalAmount,
        };
      } else {
        tempInvoice = {
          ...action.payload,
          status: "pending",
          id: getRandomAlphabet(),
          total: totalAmount,
        };
      }
    }

    // then initalizie the currentStates to add new action.payload objects coming from new invoice
    return {
      ...state,
      invoices: [...state.invoices, tempInvoice],
      filterInvoice: [...state.filterInvoice, tempInvoice],
    };
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

  return { ...state };
};
