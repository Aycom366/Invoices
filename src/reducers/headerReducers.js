import { ActionTypes } from "../constants/themeActionTypes";

const initialState = {
  isFilter: false,
  showInvoice: false,
  toggleInvoice: false,
};

export const headerReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.showFilter) {
    return { ...state, isFilter: !state.isFilter };
  }

  if (action.type === ActionTypes.ShowInvoice) {
    return { ...state, showInvoice: !state.showInvoice };
  }

  if (action.type === ActionTypes.toggleInvoice) {
    return {
      ...state,
      toggleInvoice: !state.toggleInvoice,
    };
  }
  return { ...state };
};
