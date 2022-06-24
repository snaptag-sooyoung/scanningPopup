import "./modal.css";

const Modal = (props) => {
  const onCheckHandler = (event) => {
    if (event.target.checked) props.modal();
  };
  return (
    <div className="backdrop">
      <div className="modal">
        <header className="header">광고창</header>
        <div className="content">광고</div>
        <footer className="footer">
          <label>
            <input type="checkbox" onChange={onCheckHandler} /> 더 이상 광고 보지 않기
          </label>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
