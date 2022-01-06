import { useState } from "react";
import { decode } from "html-entities";
import classes from "./MovieItem.module.scss";
import { Movie } from "../../Models/movies.types";
import MovieItemModal from "./MovieItemModal";

const MoviesItem: React.FC<Movie> = (props) => {
  const {
    title,
    image,
    synopsis,
    rating,
    released,
    runtime,
    largeimage,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const decodedTitle = decode(title);

  return (
    <>
      {showModal && (
        <MovieItemModal
          title={decodedTitle}
          summary={synopsis}
          runtime={runtime}
          rating={rating}
          largeimage={largeimage}
          toggleModal={toggleShowModal}
        ></MovieItemModal>
      )}
      <li>
        <div className={classes.card}>
          <div className={classes['movie-data']}>
            <img className={classes.img} src={image} />
            <div className={classes.name}>{`${decodedTitle} (${released})`}</div>
            {rating && (
              <div className={classes.rating}>
                <div className={classes.star}>&#9733;</div>
                <div className={classes["reating-text"]}>{rating}</div>
              </div>
            )}
          </div>
            <button className={classes["read-more"]} onClick={toggleShowModal}>
              Read more
              <div className={classes.arrow}>&rarr;</div>
            </button>
        </div>
      </li>
    </>
  );
};

export default MoviesItem;
