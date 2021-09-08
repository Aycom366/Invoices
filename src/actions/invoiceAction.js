import { ActionTypes } from "../constants/themeActionTypes";

export const LoadInvoice = (invoice) => {
  return { type: ActionTypes.loadInvoice, payload: invoice };
};

export const FilterInvoice = (invoice) => {
  return { type: ActionTypes.FilterInvoice, payload: invoice };
};

export const DynamicInput = (values) => {
  return { type: ActionTypes.DynamicInput, payload: values };
};
