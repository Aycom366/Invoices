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

export const MarkAsPaid = (id) => {
  return { type: ActionTypes.markaspaid, payload: id };
};

export const Delete = (id) => {
  return { type: ActionTypes.DeleteIinvoice, payload: id };
};

export const Edit = (values) => {
  return { type: ActionTypes.EditIinvoice, payload: values };
};
