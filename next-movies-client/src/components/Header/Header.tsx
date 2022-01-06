import { useState } from "react";
import classes from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import { RootState } from "../../store/store";
import { moviesActions } from "../../store/movies-slice";
const Header: React.FC = () => {
  const allMovies = useSelector((state: RootState) => state.movies.allMovies);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = allMovies.filter((movie) => {
        return movie.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      dispatch(moviesActions.setfilteredMovies(results));
    } else {
      dispatch(moviesActions.setfilteredMovies(allMovies));
    }

    setName(keyword);
  };

  return (
    <header className={classes.header}>
      <img className={classes["logo-img"]} src={logo} alt="Logo" />
      <input
        className={classes["search-bar"]}
        type="search"
        value={name}
        onChange={filter}
        placeholder="Find your NEXT movie"
      />
    </header>
  );
};

export default Header;
