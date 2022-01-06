import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MovieItem from "./MovieItem";
import classes from "./Movies.module.scss";

const Movies: React.FC = () => {
  const { filteredMovies: movies } = useSelector(
    (state: RootState) => state.movies
  );

  return (
    <div className={classes["movies-wrapper"]}>
      <h1 className={classes["main-text"]}>
        EXPLORE YOUR NEXT MOVIES AND TV SHOWES
      </h1>
      <ul className={classes.movies}>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </ul>
    </div>
  );
};

export default Movies;
