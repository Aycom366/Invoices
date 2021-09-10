import React, { useEffect } from "react";

const calculatedField = (props) => {
  useEffect(() => {
    var val = 0;
    if (props.values.price && props.values.quantity) {
      val = props.values.price * props.values.quantity;
    }
    props.setFieldValue("totalPrice", val);
  }, [props.values]);

  return (
    <input
      id="totalPrice"
      type="number"
      name="totalPrice"
      value={props.values.totalPrice}
    />
  );
};

export default calculatedField;
