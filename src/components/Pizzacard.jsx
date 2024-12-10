import React, { useState } from "react";
import img1 from "../img/Pepperoni.jpg";
import img2 from "../img/basket.png";
import "./Pizza_card.css"


export const Pizzacard = ({ counter, increment, decrement }) => {
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");


  const handleSizeChange = (event) => {
  const selectedSize = event.target.value;
  setSize(selectedSize);

  if (selectedSize === "25 см") {
    setPrice(550);
  } else if (selectedSize === "30 см") {
    setPrice(700);
  } else if (selectedSize === "35 см") {
    setPrice(850);
  }
};

const totalPrice = price * counter;
  return (
    <>
      <img className="img1" src={img1} alt="Пепперони" />
      <div className="cart">
        <h4>Пепперони</h4>
        <p>Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>
        <select className="diameter" value={size} onChange={handleSizeChange}>
            <option value="" disabled>Диаметр</option>
            <option value="25 см">25 см</option>
            <option value="30 см">30 см</option>
            <option value="35 см">35 см</option>
          </select>
          <div className="price">Цена: {totalPrice}₽</div>
      
        <div className="counter_container1">
          <div className="counter_container2">
            <button className="counter_btn" onClick={decrement}>-</button>
            <span className="counter_value">{counter}</span>
            <button className="counter_btn" onClick={increment}>+</button>
          </div>

        <button className="cart_btn">
            <img className="img2" src={img2} alt="Корзина" />
          </button>
        </div>
      </div>
    </>
  );
};
