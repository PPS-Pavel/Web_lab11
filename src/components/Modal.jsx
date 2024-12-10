import React from "react";
import { Pizzacard } from "./Pizzacard.jsx";
import "./Modal_style.css";

export const Modal = ({ closeModal, counter, increment, decrement }) => {
  return (
    <div onClick={closeModal} className="modalBack">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContainer"
      >
        <Pizzacard counter={counter} increment={increment} decrement={decrement} />
      </div>
    </div>
  );
};
