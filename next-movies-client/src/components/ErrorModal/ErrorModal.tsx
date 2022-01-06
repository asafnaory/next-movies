import Modal from "../UI/Modal";
import classes from "./ErrorModal.module.scss";
import next from "../../images/next.png";

const ErrorModal = () => {
  return (
    <Modal styles={classes.error}>
      <div className={classes.text}>
        <p> Unfortunately there is a problem, pleast try again later. </p>
        <p>we will be happy to help you</p>
        <div className={classes['next-time']}>
        <img  className={classes.image} src={next} alt="Logo" />
        <p className={classes.time}>time</p>
        </div>
      </div>
    </Modal>
  );
};
export default ErrorModal;
