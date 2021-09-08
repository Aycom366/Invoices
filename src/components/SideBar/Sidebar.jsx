import React from "react";
import logoSvg from "../../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../actions/themeAction";
import ThemeIcon from "./ThemeIcon";
import personAvatar from "../../assets/image-avatar.jpg";

function Sidebar() {
  const isBlack = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  const changeThemes = () => {
    //this will trigger the useEffect in App.js File
    dispatch(changeTheme());
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <div className="logo-wrapper">
          <img src={logoSvg} alt="Invoice App" />
        </div>
      </div>
      <div className="side-img">
        <div className="btn-wrapper">
          <button onClick={changeThemes} className="theme">
            <ThemeIcon />
          </button>
        </div>
        <div className="person">
          <div className="person-wrapper">
            <img src={personAvatar} alt="Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
