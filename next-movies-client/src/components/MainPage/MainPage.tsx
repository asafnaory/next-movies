import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../Movies/Movies";
import Loader from "../UI/Loader";
import { fetchMovies } from "../../store/movies-actions";
import { RootState } from "../../store/store";
import ErrorModal from "../ErrorModal/ErrorModal";

const MainPage: React.FC  = () => {
  const dispatch = useDispatch();
  const [isData, setIsData] = useState(false);
  const { isLoading } = useSelector(
    (state: RootState) => state.isLoading
  );  
  useEffect(() => {
    const getMovies = async () => {
      try {
        await dispatch(fetchMovies());
        setIsData(true);
      } catch {
        setIsData(false);
      }
    };
    getMovies();
  }, [dispatch]);

  return (
    <>
      {!isLoading && isData && <Movies />}
      {!isLoading && !isData && <ErrorModal />}
      {isLoading && <Loader />}
    </>
  );
};

export default MainPage;
