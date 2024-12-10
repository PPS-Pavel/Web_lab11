import React, { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <>
      <div className="container1">
        <button class="button_modal_open" onClick={() => setShowModal(true)}>Открыть карточку</button>
        {showModal && (
          <Modal closeModal={() => setShowModal(false)} counter={counter} increment={increment} decrement={decrement}/>
        )}
      </div>
    </>
  );
}

export default App;
