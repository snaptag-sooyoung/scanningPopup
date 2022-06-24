import YouTube from "react-youtube";
import "./modal.css";

const Modal = (props) => {
  const onCheckHandler = (event) => {
    if (event.target.checked) props.modal();
  };

  const opts = {
    height: "200px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="backdrop">
      <div className="modal">
        <header className="header">롯데칠성</header>
        <div className="content">
          <YouTube opts={opts} videoId="759tymJSwJU" />
        </div>
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
