import React, { useState } from "react";

const PriceInput = props => {
  const changeValue = event => {
    console.log("new Value: " + event.target.value);
    console.log(props);

    if (Number(event.target.value) >= 0) {
      props.onPriceChange(event.target.value);
    }
  };
  return (
    <span>
      $
      <input
        type="number"
        value={props.price}
        style={{ width: "50px", color: "cornflowerblue" }}
        onChange={changeValue}
      />
    </span>
  );
};

export default PriceInput;
