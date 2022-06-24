import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };

  return !modal ? <Modal modal={modalHandler} /> : <div className="App">popup 시작하기</div>;
}

export default App;
