import { ActionTypes } from "../constants/themeActionTypes";

export const LoadInvoice = (invoice) => {
  return { type: ActionTypes.loadInvoice, payload: invoice };
};
