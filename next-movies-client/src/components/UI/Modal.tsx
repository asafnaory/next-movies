import ReactDom from "react-dom";
import classes from "./Modal.module.scss";

const Modal: React.FC<{ styles?: string }> = (props) => {
  const Backdrop = () => <div className={classes.backdrop} />;

  const ModalOverlay: React.FC<{ styles?: string }> = (props) => (
    <div className={`${classes.modal} ${props.styles}`}>{props.children}</div>
  );
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDom.createPortal(
        <ModalOverlay styles={props.styles}> {props.children}</ModalOverlay>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
