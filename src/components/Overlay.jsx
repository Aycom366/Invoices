import React from "react";
import { showInvoice } from "../actions/headerAction";
import { useSelector, useDispatch } from "react-redux";
import { useGlobalContext } from "../context";

function Overlay() {
  const { setIsEdit } = useGlobalContext();
  const dispatch = useDispatch();
  const showIn = useSelector((state) => state.header.showInvoice);

  return (
    <div
      onClick={() => {
        dispatch(showInvoice());
        setIsEdit(false);
      }}
      className={showIn ? "overlay overlay-show" : "overlay"}
    ></div>
  );
}

export default Overlay;
