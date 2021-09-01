import { ActionTypes } from "../constants/themeActionTypes";

export const changeFilterVisibility = () => {
  return { type: ActionTypes.showFilter };
};

export const showInvoice = () => {
  return { type: ActionTypes.ShowInvoice };
};
