import { ActionTypes } from "../constants/themeActionTypes";

//get last browser saved theme
const getLocalStorage = () => {
  const isDark = localStorage.getItem("Theme");
  if (JSON.parse(isDark) === true) {
    return true;
  } else {
    return false;
  }
};

const initialState = {
  isDark: getLocalStorage(),
};

export const themeReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.Change_Theme) {
    localStorage.setItem("Theme", !state.isDark);
    return { ...state, isDark: !state.isDark };
  }
  return { ...state };
};
