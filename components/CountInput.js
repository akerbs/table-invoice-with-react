import React, { useState } from "react";

const CountInput = props => {
  const updateValue = event => {
    const btn = event.currentTarget;
    let counter = props.count;
    if (btn.classList.contains("btn-minus")) {
      props.setCount(--counter);
    } else if (btn.classList.contains("btn-plus")) {
      props.setCount(++counter);
    }
  };

  return (
    <div className="m-input-count">
      <button
        className="btn btn-dark btn-sm btn-minus"
        onClick={updateValue}
        disabled={props.count <= 0}
      >
        <i className="fas fa-minus-circle"></i>
      </button>
      <span className="border text-center px-3 py-2 mx-2 rounded">
        {props.count} <i className="fas fa-times"></i>
      </span>
      <button
        className="btn btn-dark btn-sm btn-plus"
        onClick={updateValue}
        disabled={props.count >= 9}
      >
        <i className="fas fa-plus-circle"></i>
      </button>
    </div>
  );
};

export default CountInput;
