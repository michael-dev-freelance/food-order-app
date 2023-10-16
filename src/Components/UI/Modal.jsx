import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 h-full w-full z-20 bg-rgba(0, 0, 0, 0.75)"
      onClick={() => props.onShowCart(false)}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div
      className="fixed top-[20vh] left-[5%] w-90% bg-white p-4 rounded-14px shadow-modal z-30 animate-modal
    md:w-[40rem] md:left-calc"
    >
      <div className="">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onShowCart={props.onShowCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
