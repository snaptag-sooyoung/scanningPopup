import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";
import AvImg from "../src/Assets/av.jpg";

function App() {
  const [modal, setModal] = useState(false);

  // useState(() => {
  //   setTimeout(() => {
  //     setModal(false);
  //   }, 0);
  // });

  const modalHandler = () => {
    setModal(true);
  };

  return (
    <div className="App">
      {!modal && <Modal modal={modalHandler} />}
      <div className="container">
        <img src={AvImg} alt="describe img" />
      </div>
    </div>
  );
}

export default App;
