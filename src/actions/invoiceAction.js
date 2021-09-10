import { ActionTypes } from "../constants/themeActionTypes";

export const LoadInvoice = (invoice) => {
  return { type: ActionTypes.loadInvoice, payload: invoice };
};

export const FilterInvoice = (invoice) => {
  return { type: ActionTypes.FilterInvoice, payload: invoice };
};

export const DynamicInput = (values, Status) => {
  return { type: ActionTypes.DynamicInput, payload: values, isDraft: Status };
};
