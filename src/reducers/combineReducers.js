import { combineReducers } from "redux";

import { themeReducer } from "./themeReducers";
import { headerReducer } from "./headerReducers";

export const rootReducer = combineReducers({
  theme: themeReducer,
  header: headerReducer,
});
