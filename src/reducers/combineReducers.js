import { combineReducers } from "redux";

import { themeReducer } from "./themeReducers";
import { headerReducer } from "./headerReducers";
import { invoiceReducer } from "./invoiceReducers";

export const rootReducer = combineReducers({
  theme: themeReducer,
  header: headerReducer,
  invoice: invoiceReducer,
});
