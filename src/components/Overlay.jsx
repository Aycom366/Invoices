import React from "react";
import { showInvoice } from "../actions/headerAction";
import { useSelector, useDispatch } from "react-redux";

function Overlay() {
  const dispatch = useDispatch();
  const showIn = useSelector((state) => state.header.showInvoice);
  return (
    <div
      onClick={() => dispatch(showInvoice())}
      className={showIn ? "overlay overlay-show" : "overlay"}
    ></div>
  );
}

export default Overlay;
