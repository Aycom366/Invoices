import React from "react";
import { useSelector } from "react-redux";

function Overlay() {
  const Invoice = useSelector((state) => state.header.showInvoice);

  return (
    <div className={`${Invoice ? "overlay overlay-show" : "overlay"}`}></div>
  );
}

export default Overlay;
