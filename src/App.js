import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import AvImg from "../src/Assets/av.jpg";

function App() {
  const [modal, setModal] = useState(true);

  useState(() => {
    setTimeout(() => {
      setModal(false);
    }, 0);
  });

  const modalHandler = () => {
    setModal(true);
  };

  return !modal ? (
    <Modal modal={modalHandler} />
  ) : (
    <div className="App">
      <div className="container">
        <img src={AvImg} alt="describe img" />
      </div>
    </div>
  );
}

export default App;
