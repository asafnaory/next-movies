import Modal from "../UI/Modal";
import classes from "./MovieItemModal.module.scss";

interface MovieItemModalProps {
  title: string;
  summary: string;
  largeimage: string;
  runtime: string;
  rating?: string;
  toggleModal: () => void;
}

const MovieItemModal: React.FC<MovieItemModalProps> = (props) => {
  const { title, summary, runtime, rating, largeimage, toggleModal } = props;

  const modifyMovieRunntime = (
    runtime: string
  ): { hours: string; minutes: string } => {
    const newRuntime = runtime.split("h");
    return {
      hours: `${newRuntime[0]}h`,
      minutes: newRuntime[1],
    };
  };
  const modifiedRunntime = modifyMovieRunntime(runtime);

  return (
    <Modal data-testid={'movie-modal'}>
      <img className={classes.img} src={largeimage} alt="" />
      <div className={classes.info}>
        <h2 className={classes.header}>{title}</h2>
        <div className={classes["runtime-wrapper"]}>
          <div className={classes.runtime}>{modifiedRunntime.hours}</div>
          <div className={classes.runtime}>{modifiedRunntime.minutes}</div>
        </div>
        {rating && (
          <div className={classes.rating}>
            <div>&#9733;</div>
            <div className={classes["rating-text"]}>{`${rating}/10`}</div>
          </div>
        )}
        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <div className={classes.btn}>
          <button data-testid={'back-to-list'} onClick={toggleModal}>
            <div className={classes.arrow}>&larr;</div>
            <div className={classes["btn-text"]}> Back to list </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MovieItemModal;
