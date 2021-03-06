import { ActionTypes } from "../constants/themeActionTypes";

export const changeFilterVisibility = () => {
  return { type: ActionTypes.showFilter };
};

export const showInvoice = () => {
  return { type: ActionTypes.ShowInvoice };
};

export const HideFilter = () => {
  return { type: ActionTypes.hideFilter };
};

export const ToggleInvoice = (id) => {
  return { type: ActionTypes.toggleInvoice, payload: id };
};
